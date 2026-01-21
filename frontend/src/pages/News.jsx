import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getNews } from '../services/api';
import Card from '../components/ui/Card';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await getNews();
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading news...</div>;
  }

  const categories = ['all', ...new Set(news.map(item => item.category))];
  const filteredNews = selectedCategory === 'all' 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      'Market News': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Economic Policy': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Crypto': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Energy': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      'Global Markets': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
  };

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const publishedDate = new Date(timestamp);
    const diffInMs = now - publishedDate;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    } else if (diffInHours > 0) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Market News</h1>
        <p className="text-gray-600 dark:text-gray-400">Stay updated with the latest financial news</p>
      </div>

      {/* Category Filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category === 'all' ? 'All News' : category}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredNews.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col h-full">
              {/* Category Badge */}
              <div className="mb-3">
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(item.category)}`}>
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                {item.title}
              </h3>

              {/* Summary */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">
                {item.summary}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.source}
                  </span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {getTimeAgo(item.publishedAt)}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="text-center py-12 text-gray-600 dark:text-gray-400">
          No news articles found in this category.
        </div>
      )}
    </motion.div>
  );
};

export default News;
