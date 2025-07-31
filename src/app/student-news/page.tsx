import React from 'react';

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  source: { name: string };
}

async function fetchNews(): Promise<NewsArticle[]> {
  const apiKey = process.env.NEWSAPI_KEY;
  if (!apiKey) return [];
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=technology&q=student%20OR%20education%20OR%20university%20OR%20scholarship&language=en&pageSize=10&apiKey=${apiKey}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];
  const data = await res.json();
  if (!data.articles) return [];
  // Shuffle for randomness
  return data.articles.sort(() => 0.5 - Math.random());
}

export default async function StudentNewsPage() {
  const articles = await fetchNews();
  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-300">Student News</h1>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
          Stay updated with the latest, most important news for students. This page refreshes with new, relevant news every visit!
        </p>
        <div className="space-y-8">
          {articles.length === 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <p className="text-gray-600 dark:text-gray-400">No news available. Please set your NEWSAPI_KEY in the environment variables.</p>
            </div>
          )}
          {articles.map((article, idx) => (
            <a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-6"
            >
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded mb-4" />
              )}
              <h2 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-300">{article.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{article.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{article.source.name}</span>
                <span>{new Date(article.publishedAt).toLocaleString()}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 