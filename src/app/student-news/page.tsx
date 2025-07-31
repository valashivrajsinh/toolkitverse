"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  source: { name: string };
}

const demoArticles: NewsArticle[] = [
  {
    title: "How to Get Scholarships in 2024",
    description: "A guide to finding and applying for scholarships as a student in 2024.",
    url: "https://example.com/scholarships-2024",
    urlToImage: "https://yourdomain.com/demo-news-1.jpg",
    publishedAt: new Date().toISOString(),
    source: { name: "Student News" },
  },
  {
    title: "Top 5 AI Tools for Students",
    description: "Discover the best AI-powered tools to boost your productivity and learning.",
    url: "https://example.com/ai-tools-students",
    urlToImage: "https://yourdomain.com/demo-news-2.jpg",
    publishedAt: new Date().toISOString(),
    source: { name: "EdTech Today" },
  },
  {
    title: "Remote Internships: What You Need to Know",
    description: "Tips and resources for landing and succeeding in a remote internship.",
    url: "https://example.com/remote-internships",
    urlToImage: "https://yourdomain.com/demo-news-3.jpg",
    publishedAt: new Date().toISOString(),
    source: { name: "Career Weekly" },
  },
];

export default function StudentNewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const apiKey = process.env.NEXT_PUBLIC_NEWSAPI_KEY;
        if (!apiKey) {
          setArticles(demoArticles);
          setLoading(false);
          return;
        }
        
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&q=student%20OR%20education%20OR%20university%20OR%20scholarship&language=en&pageSize=10&apiKey=${apiKey}`
        );
        
        if (!res.ok) {
          setArticles(demoArticles);
          setLoading(false);
          return;
        }
        
        const data = await res.json();
        if (data.articles) {
          // Use stable sorting by publishedAt date
          const sortedArticles = data.articles.sort((a: NewsArticle, b: NewsArticle) => 
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
          );
          setArticles(sortedArticles);
        } else {
          setArticles(demoArticles);
        }
      } catch (error) {
        setArticles(demoArticles);
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-300">Student News</h1>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
          Stay updated with the latest, most important news for students. This page refreshes with new, relevant news every visit!
        </p>
        <div className="space-y-8">
          {loading && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <p className="text-gray-600 dark:text-gray-400">Loading news...</p>
            </div>
          )}
          {!loading && articles.length === 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <p className="text-gray-600 dark:text-gray-400">No news available.</p>
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
                <Image 
                  src={article.urlToImage} 
                  alt={article.title} 
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover rounded mb-4" 
                />
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