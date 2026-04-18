import React, { useRef, useEffect } from 'react';

const AnimatedMoneyBackground = ({ darkMode = true }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width, height;

    // Configuration
    const symbols = ['$', '€', '£', '¥', '₿', '%'];
    const numParticles = 60;
    let particles = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 40 + 10, // size between 10 and 50
          speedY: (Math.random() * 0.5 + 0.2) * (Math.random() > 0.5 ? 1 : -1), // drift up or down
          speedX: (Math.random() * 0.4 - 0.2), // slight horizontal drift
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() * 0.02 - 0.01),
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          opacity: Math.random() * 0.5 + 0.1, // opacity between 0.1 and 0.6
        });
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    // Initialize with current window dimensions
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initParticles();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = darkMode;
      // Use emerald green or white ish colors depending on theme
      const baseColor = isDark ? '52, 211, 153' : '16, 185, 129'; // Emerald colors

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;

        // Wrap around
        if (p.y < -p.size) p.y = height + p.size;
        if (p.y > height + p.size) p.y = -p.size;
        if (p.x < -p.size) p.x = width + p.size;
        if (p.x > width + p.size) p.x = -p.size;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        
        ctx.font = `bold ${p.size}px "Inter", "Segoe UI", sans-serif`;
        ctx.fillStyle = `rgba(${baseColor}, ${p.opacity * (isDark ? 0.7 : 0.4)})`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.symbol, 0, 0);
        
        ctx.restore();
      }

      // Add a very subtle radial gradient just like the globe had
      const cx = width / 2;
      const cy = height / 2;
      const renderRadius = Math.min(width, height) * 1.0;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, renderRadius);
      
      if (isDark) {
          gradient.addColorStop(0, "rgba(2, 6, 23, 0)"); 
          gradient.addColorStop(1, "rgba(2, 6, 23, 0.9)"); 
      } else {
          gradient.addColorStop(0, "rgba(241, 245, 249, 0)"); 
          gradient.addColorStop(1, "rgba(241, 245, 249, 0.8)"); 
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
      } transition-colors duration-500`}
    />
  );
};

export default AnimatedMoneyBackground;
