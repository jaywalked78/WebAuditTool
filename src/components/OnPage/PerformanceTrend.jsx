import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

const PerformanceTrend = () => {
  // Sample data showing performance over time
  const performanceData = [
    { date: 'Jan 1', score: 85, cls: 0.15, lcp: 1200, loadTime: 2100 },
    { date: 'Jan 8', score: 87, cls: 0.18, lcp: 1150, loadTime: 2050 },
    { date: 'Jan 15', score: 89, cls: 0.22, lcp: 1100, loadTime: 2000 },
    { date: 'Jan 22', score: 91, cls: 0.28, lcp: 1080, loadTime: 1950 },
    { date: 'Jan 29', score: 94, cls: 0.35, lcp: 1050, loadTime: 1900 },
    { date: 'Feb 5', score: 96, cls: 0.38, lcp: 1020, loadTime: 1850 },
    { date: 'Today', score: 98.17, cls: 0.404, lcp: 1004, loadTime: 1810 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-medium text-gray-900 dark:text-gray-100">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value.toFixed(entry.name === 'CLS' ? 3 : 0)}
              {entry.name === 'LCP' ? 'ms' : entry.name === 'CLS' ? '' : ''}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const latestScore = performanceData[performanceData.length - 1].score;
  const previousScore = performanceData[performanceData.length - 2].score;
  const scoreTrend = latestScore - previousScore;

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Performance Trend (Last 30 Days)
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Track your website's performance improvements over time
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {scoreTrend > 0 ? (
            <TrendingUp className="w-5 h-5 text-green-500" />
          ) : (
            <TrendingDown className="w-5 h-5 text-red-500" />
          )}
          <span className={`text-sm font-medium ${scoreTrend > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {scoreTrend > 0 ? '+' : ''}{scoreTrend.toFixed(1)} points
          </span>
        </div>
      </div>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={performanceData}>
            <defs>
              <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="clsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="date" 
              stroke="#6b7280"
              fontSize={12}
            />
            <YAxis 
              stroke="#6b7280"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="score"
              stroke="#10b981"
              strokeWidth={3}
              fill="url(#scoreGradient)"
              name="On-Page Score"
            />
            <Line 
              type="monotone" 
              dataKey="cls" 
              stroke="#ef4444" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
              name="CLS"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <div className="text-lg font-bold text-green-600 dark:text-green-400">
            {latestScore.toFixed(1)}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Current Score</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
            {performanceData[performanceData.length - 1].lcp}ms
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Latest LCP</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-red-600 dark:text-red-400">
            {performanceData[performanceData.length - 1].cls.toFixed(3)}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Current CLS</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTrend;