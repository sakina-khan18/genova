import React, { useState } from 'react';
import { TrendingUp, Building2, Users, DollarSign, Target, Briefcase, Globe, BarChart3, Lightbulb, AlertCircle } from 'lucide-react';

const IndustrialInsights = () => {
  const [targetPosition, setTargetPosition] = useState('');
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateInsights = () => {
    if (!targetPosition.trim()) return;
    
    setLoading(true);
    
    // Simulate API call with realistic data
    setTimeout(() => {
      const mockInsights = {
        position: targetPosition,
        industry: getIndustryFromPosition(targetPosition),
        marketOverview: {
          marketSize: '$45.2B',
          growthRate: '12.5%',
          keyTrend: 'Digital transformation acceleration'
        },
        salaryInsights: {
          averageSalary: '$85,000 - $120,000',
          topPayingCompanies: ['Google', 'Microsoft', 'Amazon', 'Meta'],
          salaryGrowth: '8.2%'
        },
        skillsInDemand: [
          'Cloud Computing (AWS, Azure)',
          'Data Analytics & Visualization',
          'Machine Learning & AI',
          'Agile Project Management',
          'Cybersecurity Fundamentals'
        ],
        topCompanies: [
          { name: 'Tech Innovators Inc.', size: '10,000+', growth: 'High' },
          { name: 'Future Solutions Ltd.', size: '5,000-10,000', growth: 'Medium' },
          { name: 'Digital Pioneers Corp.', size: '1,000-5,000', growth: 'High' },
          { name: 'NextGen Systems', size: '500-1,000', growth: 'Very High' }
        ],
        opportunities: [
          'Remote work adoption creating new collaboration tools demand',
          'AI integration in traditional industries opening hybrid roles',
          'Sustainability initiatives driving green technology positions',
          'Startup ecosystem expansion in emerging markets'
        ],
        challenges: [
          'Rapid skill obsolescence requiring continuous learning',
          'Increased competition from global talent pool',
          'Economic uncertainty affecting hiring freezes'
        ]
      };
      
      setInsights(mockInsights);
      setLoading(false);
    }, 2000);
  };

  const getIndustryFromPosition = (position) => {
    const pos = position.toLowerCase();
    if (pos.includes('software') || pos.includes('developer') || pos.includes('engineer')) return 'Technology';
    if (pos.includes('marketing') || pos.includes('brand')) return 'Marketing & Advertising';
    if (pos.includes('finance') || pos.includes('accounting')) return 'Financial Services';
    if (pos.includes('sales') || pos.includes('business development')) return 'Sales & Business Development';
    if (pos.includes('design') || pos.includes('creative')) return 'Design & Creative';
    return 'Technology & Innovation';
  };

  const InsightCard = ({ icon: Icon, title, children, className = '' }) => (
    <div className={`bg-slate-700/40 backdrop-filter backdrop-blur-10 border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300 ${className}`}>
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-indigo-400 mr-3" />
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
      {children}
    </div>
  );

  return (
    <div 
      className="min-h-screen font-inter"
      style={{
        background: 'linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #0f1419 100%)'
      }}
    >
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-5xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Industrial Insights
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            Get comprehensive industry analysis and market insights for your target position
          </p>
        </div>

        {/* Input Section */}
        <div className="mb-12">
          <div className="bg-slate-700/40 backdrop-filter backdrop-blur-10 border border-indigo-500/20 rounded-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-indigo-400 mr-3" />
              <h2 className="text-white font-semibold text-xl">Target Position</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-slate-200 text-sm font-medium mb-2">
                  Enter your desired job position or role
                </label>
                <input
                  type="text"
                  value={targetPosition}
                  onChange={(e) => setTargetPosition(e.target.value)}
                  placeholder="e.g., Senior Software Engineer, Marketing Manager, Data Scientist"
                  className="w-full px-4 py-3 bg-slate-900/60 border border-indigo-500/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                />
              </div>
              
              <button
                onClick={generateInsights}
                disabled={!targetPosition.trim() || loading}
                className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-600 hover:to-violet-600 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Analyzing Market Data...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Generate Industry Insights
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Insights Results */}
        {insights && (
          <div className="space-y-8 animate-fadeIn">
            {/* Overview Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Insights for {insights.position}
              </h2>
              <p className="text-indigo-300 text-lg">Industry: {insights.industry}</p>
            </div>

            {/* Market Overview */}
            <InsightCard icon={TrendingUp} title="Market Overview">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-400">{insights.marketOverview.marketSize}</div>
                  <div className="text-slate-300 text-sm">Market Size</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">{insights.marketOverview.growthRate}</div>
                  <div className="text-slate-300 text-sm">Annual Growth</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-sm font-medium text-violet-400">{insights.marketOverview.keyTrend}</div>
                  <div className="text-slate-300 text-sm">Key Trend</div>
                </div>
              </div>
            </InsightCard>

            {/* Salary Insights */}
            <InsightCard icon={DollarSign} title="Salary & Compensation">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-800/30 rounded-lg">
                  <span className="text-slate-300">Average Salary Range</span>
                  <span className="text-green-400 font-semibold">{insights.salaryInsights.averageSalary}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-800/30 rounded-lg">
                  <span className="text-slate-300">Year-over-Year Growth</span>
                  <span className="text-green-400 font-semibold">{insights.salaryInsights.salaryGrowth}</span>
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium mb-2">Top Paying Companies</h4>
                  <div className="flex flex-wrap gap-2">
                    {insights.salaryInsights.topPayingCompanies.map((company, index) => (
                      <span key={index} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </InsightCard>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Skills in Demand */}
              <InsightCard icon={Lightbulb} title="Skills in High Demand">
                <ul className="space-y-2">
                  {insights.skillsInDemand.map((skill, index) => (
                    <li key={index} className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </InsightCard>

              {/* Top Companies */}
              <InsightCard icon={Building2} title="Leading Companies">
                <div className="space-y-3">
                  {insights.topCompanies.map((company, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                      <div>
                        <div className="text-white font-medium">{company.name}</div>
                        <div className="text-slate-400 text-sm">{company.size} employees</div>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        company.growth === 'Very High' ? 'bg-green-500/20 text-green-400' :
                        company.growth === 'High' ? 'bg-indigo-500/20 text-indigo-400' :
                        'bg-violet-500/20 text-violet-400'
                      }`}>
                        {company.growth} Growth
                      </span>
                    </div>
                  ))}
                </div>
              </InsightCard>
            </div>

            {/* Opportunities & Challenges */}
            <div className="grid lg:grid-cols-2 gap-8">
              <InsightCard icon={Globe} title="Market Opportunities">
                <ul className="space-y-3">
                  {insights.opportunities.map((opportunity, index) => (
                    <li key={index} className="flex items-start text-slate-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{opportunity}</span>
                    </li>
                  ))}
                </ul>
              </InsightCard>

              <InsightCard icon={AlertCircle} title="Industry Challenges">
                <ul className="space-y-3">
                  {insights.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start text-slate-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </InsightCard>
            </div>

            {/* Action Recommendations */}
            <InsightCard icon={Briefcase} title="Recommended Actions" className="border-indigo-500/30">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
                  <h4 className="text-indigo-300 font-semibold mb-2">Skill Development</h4>
                  <p className="text-slate-300 text-sm">Focus on cloud computing and AI/ML skills to stay competitive in the evolving market.</p>
                </div>
                <div className="p-4 bg-violet-500/10 border border-violet-500/20 rounded-lg">
                  <h4 className="text-violet-300 font-semibold mb-2">Networking Strategy</h4>
                  <p className="text-slate-300 text-sm">Connect with professionals at high-growth companies and attend industry events.</p>
                </div>
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <h4 className="text-green-300 font-semibold mb-2">Market Entry</h4>
                  <p className="text-slate-300 text-sm">Consider remote opportunities and emerging market positions for better growth prospects.</p>
                </div>
                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                  <h4 className="text-amber-300 font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-slate-300 text-sm">Invest in certifications and stay updated with industry trends to remain relevant.</p>
                </div>
              </div>
            </InsightCard>
          </div>
        )}
      </div>

      <style jsx>{`
        .font-inter {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .backdrop-filter {
          backdrop-filter: blur(10px);
        }
        
        .backdrop-blur-10 {
          backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  );
};

export default IndustrialInsights;