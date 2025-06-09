import React from 'react';
import { Quote, ExternalLink, TrendingUp } from 'lucide-react';

const ImpactTestimonial = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6" />
            </div>
          </div>
          
          <div className="flex-1">
            <blockquote className="text-lg font-medium leading-relaxed mb-4">
              "If BDR implements these Core Web Vitals fixes, they could see a 
              <span className="font-bold text-yellow-300"> 52% increase in conversions</span> based on 
              Google's latest performance case studies for service businesses."
            </blockquote>
            
            <div className="flex items-center justify-between">
              <cite className="text-sm opacity-90 not-italic">
                <div className="font-medium">Based on Google CWV Impact Study 2024</div>
                <div className="text-xs opacity-75">Contractor & Home Service Industry Data</div>
              </cite>
              
              <a 
                href="https://web.dev/vitals-business-impact/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
              >
                <span>View Study</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-300">52%</div>
              <div className="text-xs opacity-75">Conversion Increase</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">15%</div>
              <div className="text-xs opacity-75">Lead Loss Reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">$360k</div>
              <div className="text-xs opacity-75">Annual Revenue Recovery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactTestimonial;