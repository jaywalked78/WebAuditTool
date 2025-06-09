import React, { useEffect, useRef } from 'react';
import ScoreCircle from './ScoreCircle';
import CoreWebVitals from './CoreWebVitals';
import IssuesList from './IssuesList';
import SummaryDashboard from './SummaryDashboard';
import CLSDemo from './CLSDemo';
import PerformanceTrend from './PerformanceTrend';
import QuickFixPreview from './QuickFixPreview';
import ImpactTestimonial from './ImpactTestimonial';
import AnimatedNumber from './AnimatedNumber';
import { bdrData } from '../../data/bdrData';
import gsap from 'gsap';

const OnPageAnalysis = () => {
  const { onpage_score, meta, page_timing, criticalIssues } = bdrData;

  // Refs for progress bars
  const wordCountBarRef = useRef(null);
  const ttiBarRef = useRef(null);
  const linksBarRef = useRef(null);
  const cssBarRef = useRef(null);

  const webVitalsData = {
    largest_contentful_paint: page_timing.largest_contentful_paint,
    first_input_delay: page_timing.first_input_delay,
    cumulative_layout_shift: meta.cumulative_layout_shift
  };

  // Animate progress bars on mount
  useEffect(() => {
    gsap.fromTo(wordCountBarRef.current,
      { width: '0%' },
      { width: '76%', duration: 1.5, ease: 'power2.out', delay: 1.2 }
    );
    
    gsap.fromTo(ttiBarRef.current,
      { width: '0%' },
      { width: '68%', duration: 1.5, ease: 'power2.out', delay: 1.4 }
    );
    
    gsap.fromTo(linksBarRef.current,
      { width: '0%' },
      { width: '84%', duration: 1.5, ease: 'power2.out', delay: 1.6 }
    );
    
    gsap.fromTo(cssBarRef.current,
      { width: '0%' },
      { width: '90%', duration: 1.5, ease: 'power2.out', delay: 1.8 }
    );
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            On-Page Analysis
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Comprehensive analysis of {bdrData.url}
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500 dark:text-gray-400">Last analyzed</div>
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Summary Dashboard */}
      <SummaryDashboard data={bdrData} />

      {/* Hero Score and Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Score Circle */}
        <div className="lg:col-span-1">
          <ScoreCircle score={onpage_score} />
        </div>
        
        {/* Quick Stats */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg hover:shadow-xl p-4 border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-all duration-300">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              <AnimatedNumber value={meta.content.plain_text_word_count} delay={1200} duration={1500} />
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Word Count</div>
            <div className="text-xs text-gray-400 mt-1">
              <AnimatedNumber value={meta.content.plain_text_rate * 100} decimals={1} delay={1400} duration={1300} suffix="%" /> content ratio
            </div>
            {/* Mini progress bar */}
            <div className="mt-2">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>vs. Industry Avg</span>
                <span className="text-green-600">+12%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div ref={wordCountBarRef} className="bg-green-500 h-2 rounded-full" style={{width: '0%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg hover:shadow-xl p-4 border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-all duration-300">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              <AnimatedNumber value={page_timing.time_to_interactive} delay={1400} duration={1500} />ms
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Time to Interactive</div>
            <div className="text-xs text-gray-400 mt-1">
              Time until page is fully interactive
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>vs. Industry Avg</span>
                <span className="text-yellow-600">+8%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div ref={ttiBarRef} className="bg-yellow-500 h-2 rounded-full" style={{width: '0%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg hover:shadow-xl p-4 border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-all duration-300">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              <AnimatedNumber value={meta.internal_links_count} delay={1600} duration={1500} />
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Internal Links</div>
            <div className="text-xs text-gray-400 mt-1">
              <AnimatedNumber value={meta.external_links_count} delay={1800} duration={1300} /> external links
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>vs. Industry Avg</span>
                <span className="text-green-600">+24%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div ref={linksBarRef} className="bg-green-500 h-2 rounded-full" style={{width: '0%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg hover:shadow-xl p-4 border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-all duration-300">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              <AnimatedNumber value={meta.render_blocking_stylesheets_count} delay={1800} duration={1500} />
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Blocking CSS</div>
            <div className="text-xs text-gray-400 mt-1">
              Render-blocking stylesheets
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>vs. Industry Avg</span>
                <span className="text-red-600">+180%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div ref={cssBarRef} className="bg-red-500 h-2 rounded-full" style={{width: '0%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Web Vitals */}
      <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <CoreWebVitals data={webVitalsData} />
      </div>

      {/* CLS Visualization Demo */}
      <CLSDemo clsScore={meta.cumulative_layout_shift} />

      {/* Performance Trend Chart */}
      <PerformanceTrend />

      {/* Critical Issues */}
      <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <IssuesList issues={criticalIssues} />
      </div>

      {/* SEO Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 p-6 hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            SEO Health
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Title Length</span>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                {meta.title.length} chars ✓
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Meta Description</span>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                {meta.description.length} chars ✓
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Images Count</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {meta.images_count}
              </span>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 p-6 hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Technical Health
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">HTTPS</span>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                Enabled ✓
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Canonical URL</span>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                Present ✓
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Broken Links</span>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                None ✓
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Fix Preview */}
      <QuickFixPreview />

      {/* Impact Testimonial */}
      <ImpactTestimonial />
    </div>
  );
};

export default OnPageAnalysis;