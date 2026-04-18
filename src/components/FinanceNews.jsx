import { useEffect, useState } from "react";

const FINANCE_NEWS_URL =
  "https://newsapi.org/v2/everything?q=finance OR stocks OR commodities OR gold&language=en&pageSize=6&sortBy=publishedAt";

export default function FinanceNews({ darkMode }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    async function loadNews() {
      const apiKey = import.meta.env.VITE_FINANCE_NEWS_API_KEY;

      if (!apiKey) {
        setError("Finance news API key is missing. Add VITE_FINANCE_NEWS_API_KEY to your .env file.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${FINANCE_NEWS_URL}&apiKey=${apiKey}`);
        const data = await response.json();

        if (!response.ok || data.status !== "ok") {
          throw new Error(data.message || "Unable to load finance news.");
        }

        setArticles(data.articles || []);
      } catch (err) {
        setError(err.message || "Failed to fetch finance news.");
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);
  const displayedOtherArticles = isExpanded ? otherArticles : otherArticles.slice(0, 2);

  return (
    <section className={darkMode ? "bg-slate-900/80 rounded-3xl p-6 shadow-xl shadow-slate-950/20" : "bg-white rounded-3xl p-6 shadow-xl shadow-slate-300/40"}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5">
        <div>
          <h2 className={darkMode ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-900"}>
            Finance News & Market Alerts
          </h2>
          <p className={darkMode ? "text-sm text-slate-400" : "text-sm text-slate-600"}>
            Headline market updates for stocks, commodities, gold, and fund planning.
          </p>
        </div>
        <span className={darkMode ? "rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-300" : "rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700"}>
          Market pulse
        </span>
      </div>

      {/* TradingView Chart Widget */}
      <div className="w-full h-[350px] mb-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 relative shadow-inner">
        <iframe 
          src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_widget&symbol=NASDAQ:AAPL&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=${darkMode ? 'dark' : 'light'}&style=1`}
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Stock Market Chart"
        />
      </div>

      {loading ? (
        <p className={darkMode ? "text-slate-300 flex items-center gap-2" : "text-slate-600 flex items-center gap-2"}>
          <span className="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></span>
          Loading finance news...
        </p>
      ) : error ? (
        <p className={darkMode ? "text-rose-300" : "text-rose-600"}>{error}</p>
      ) : articles.length === 0 ? (
        <p className={darkMode ? "text-slate-300" : "text-slate-600"}>
          No finance news available right now.
        </p>
      ) : (
        <>
          {featuredArticle && (
            <article
              className={
                darkMode
                  ? "mb-6 rounded-[32px] border border-white/10 bg-slate-950/80 p-6 transition hover:border-emerald-500/30"
                  : "mb-6 rounded-[32px] border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-500/30 hover:shadow-md"
              }
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-2xl text-left">
                  <span className={darkMode ? "text-sm uppercase tracking-[0.2em] text-emerald-300" : "text-sm uppercase tracking-[0.2em] text-emerald-700"}>
                    Top headline
                  </span>
                  <a
                    href={featuredArticle.url}
                    target="_blank"
                    rel="noreferrer"
                    className={darkMode ? "mt-3 block text-2xl font-semibold text-white hover:text-emerald-300" : "mt-3 block text-2xl font-semibold text-slate-900 hover:text-emerald-700"}
                  >
                    {featuredArticle.title}
                  </a>
                  <p className={darkMode ? "mt-4 text-sm text-slate-400" : "mt-4 text-sm text-slate-600"}>
                    {featuredArticle.description || featuredArticle.source.name}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 text-left sm:text-right text-xs text-slate-500 shrink-0">
                  <p className="font-medium text-slate-700 dark:text-slate-300">{featuredArticle.source.name}</p>
                  <p>{new Date(featuredArticle.publishedAt).toLocaleDateString()}</p>
                </div>
              </div>
            </article>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            {displayedOtherArticles.map((article, index) => (
              <article
                key={index}
                className={
                  darkMode
                    ? "rounded-3xl border border-white/10 bg-slate-950/80 p-5 transition hover:border-emerald-500/30"
                    : "rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-emerald-500/30 hover:shadow-md"
                }
              >
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  className={darkMode ? "text-lg font-semibold text-white hover:text-emerald-300 line-clamp-3" : "text-lg font-semibold text-slate-900 hover:text-emerald-700 line-clamp-3"}
                >
                  {article.title}
                </a>
                <p className={darkMode ? "mt-3 text-sm text-slate-400 line-clamp-3" : "mt-3 text-sm text-slate-600 line-clamp-3"}>
                  {article.description || article.source.name}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{article.source.name}</span>
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
              </article>
            ))}
          </div>

          {otherArticles.length > 2 && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={
                  darkMode 
                    ? "px-6 py-2.5 rounded-xl border border-emerald-500/30 text-emerald-400 font-medium hover:bg-emerald-500/10 transition-colors"
                    : "px-6 py-2.5 rounded-xl border border-emerald-200 text-emerald-700 font-medium hover:bg-emerald-50 transition-colors"
                }
              >
                {isExpanded ? "Show Less" : "Explore More Updates"}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
