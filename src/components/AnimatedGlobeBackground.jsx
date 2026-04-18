import React, { useRef, useEffect } from 'react';

const AnimatedGlobeBackground = ({ darkMode = true }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width, height;

    // Constants for globe
    const numPoints = 800;
    const fov = 800;
    
    let points = [];
    
    const initGlobe = () => {
      points = [];
      const phi = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < numPoints; i++) {
        const y = 1 - (i / (numPoints - 1)) * 2;
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = phi * i;
        
        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;
        
        points.push({ x, y, z, neighbors: [] });
      }
      
      // Precompute 3 closest neighbors for the wireframe mesh
      for (let i = 0; i < numPoints; i++) {
        const p1 = points[i];
        let distances = [];
        for (let j = 0; j < numPoints; j++) {
          if (i === j) continue;
          const p2 = points[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          distances.push({ id: j, dist: dx*dx + dy*dy + dz*dz });
        }
        distances.sort((a, b) => a.dist - b.dist);
        p1.neighbors = distances.slice(0, 3).map(d => d.id);
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    initGlobe();

    let rotationAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Increase rotation slowly
      rotationAngle += 0.002;

      // Color adjustments
      const isDark = darkMode;
      const pointColorRaw = isDark ? '255, 255, 255' : '15, 23, 42';
      const lineColorRaw = isDark ? '255, 255, 255' : '15, 23, 42';

      const cx = width / 2;
      const cy = height / 2;
      const renderRadius = Math.min(width, height) * 0.45;

      const projected = points.map((p) => {
        // Rotate around Y
        const cosY = Math.cos(rotationAngle);
        const sinY = Math.sin(rotationAngle);
        
        let rotX = p.x * cosY - p.z * sinY;
        let rotZ = p.z * cosY + p.x * sinY;
        
        // Tilt slightly around X for a neat 3D angle
        const tiltX = 0.3; // roughly 17 degrees
        const cosX = Math.cos(tiltX);
        const sinX = Math.sin(tiltX);
        
        let finalY = p.y * cosX - rotZ * sinX;
        let finalZ = rotZ * cosX + p.y * sinX;
        
        // Projection
        const scale = fov / (fov + finalZ * renderRadius);
        const px = cx + rotX * renderRadius * scale;
        const py = cy + finalY * renderRadius * scale;
        
        return { px, py, pz: finalZ, scale };
      });

      // Draw lines
      ctx.lineWidth = isDark ? 0.4 : 0.6;
      for (let i = 0; i < points.length; i++) {
        const p1 = projected[i];
        
        // Don't draw points too far in the back to create clear depth effect
        if (p1.pz > 0.8) continue;
        
        const opacity = Math.max(0, Math.min(1, 1 - (p1.pz + 1) / 2));
        if (opacity <= 0.05) continue;

        ctx.strokeStyle = `rgba(${lineColorRaw}, ${opacity * (isDark ? 0.3 : 0.2)})`;
        
        for (let j = 0; j < points[i].neighbors.length; j++) {
          const nId = points[i].neighbors[j];
          // Only draw lines one way to avoid drawing twice
          if (nId > i) {
            const p2 = projected[nId];
            if (p2.pz > 0.8) continue;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw points
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        if (p.pz > 0.8) continue; // back culling

        const opacity = Math.max(0, Math.min(1, 1 - (p.pz + 1) / 2));
        if (opacity <= 0.05) continue;

        ctx.fillStyle = `rgba(${pointColorRaw}, ${opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.scale * 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Super shiny core for front-most points
        if (p.pz < -0.8 && isDark) {
             ctx.fillStyle = `rgba(16, 185, 129, 0.8)`; // Emerald glow
             ctx.beginPath();
             ctx.arc(p.px, p.py, p.scale * 2.5, 0, Math.PI * 2);
             ctx.fill();
        }
      }

      // Overlay slight radial gradient
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, renderRadius * 1.5);
      if (isDark) {
          gradient.addColorStop(0, "rgba(2, 6, 23, 0)"); // slate-950 transparent
          gradient.addColorStop(1, "rgba(2, 6, 23, 0.95)"); // blend into background
      } else {
          gradient.addColorStop(0, "rgba(241, 245, 249, 0)"); 
          gradient.addColorStop(1, "rgba(241, 245, 249, 0.95)"); 
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 z-0 pointer-events-none w-full h-full ${
        darkMode ? 'bg-slate-950' : 'bg-slate-100'
      }`}
    />
  );
};

export default AnimatedGlobeBackground;
