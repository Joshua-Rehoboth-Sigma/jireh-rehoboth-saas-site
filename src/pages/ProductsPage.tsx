import { Button } from '@/components/ui/card';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, ShieldCheck, Cpu, TrendingUp, Activity, BarChart3, Database, Globe, Smartphone, Shield, ArrowRight } from 'lucide-react';

export function ProductsPage() {
  const corePlatforms = [
    {
      id: 'six-sigma',
      title: 'Six Sigma Analytics Suite',
      subtitle: 'Achieve DMAIC Excellence',
      description: 'A platform for managing DMAIC projects, statistical analysis, and process improvement initiatives. Our suite provides deep insights into project lifecycle and quality metrics.',
      features: ['DMAIC Workflow Management', 'Statistical Control Charts', 'Hypothesis Testing Tools', 'Project Performance Dashboard'],
      icon: <ShieldCheck className="h-12 w-12 text-primary" />,
    },
    {
      id: 'process-intelligence',
      title: 'Process Intelligence Engine',
      subtitle: 'Real-time Monitoring & Control',
      description: 'Real-time monitoring and statistical process control for manufacturing and operational environments. Detect anomalies before they impact quality.',
      features: ['Real-time SPC Monitoring', 'Predictive Anomaly Detection', 'Manufacturing Execution System (MES) Integration', 'Root Cause Analysis Tools'],
      icon: <Cpu className="h-12 w-12 text-primary" />,
    },
    {
      id: 'predictive-risk',
      title: 'Predictive Risk Analytics',
      subtitle: 'Anticipate Uncertainties',
      description: 'AI-powered forecasting, anomaly detection, and predictive modeling tools. Quantify risk and anticipate market shifts with advanced statistical models.',
      features: ['AI-Driven Forecasting', 'Quantitative Risk Assessment', 'Scenario Modeling & Simulation', 'Predictive Alerting System'],
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
    },
    {
      id: 'market-intelligence',
      title: 'Market Intelligence Copilot',
      subtitle: 'AI-Driven Business Insights',
      description: 'AI-driven analytics assistant for business insights and data-driven decisions. Leverage the power of large language models for complex data queries.',
      features: ['Natural Language Data Queries', 'Automated Insight Generation', 'Market Trend Sentiment Analysis', 'Personalized BI Dashboards'],
      icon: <Activity className="h-12 w-12 text-primary" />,
    },
  ];

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Page Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="font-display font-bold text-4xl md:text-6xl tracking-tight text-primary">
            Statistical Platforms
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover our core software solutions built for precision, performance, and operational excellence.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="space-y-32">
          {corePlatforms.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-8 animate-in slide-in-from-bottom duration-700">
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-2xl w-fit shadow-inner">
                    {product.icon}
                  </div>
                  <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight">
                    {product.title}
                  </h2>
                  <p className="text-lg font-medium text-secondary">{product.subtitle}</p>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 bg-muted/20 p-3 rounded-lg border border-muted-foreground/10">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 relative aspect-[4/3] w-full bg-muted/10 rounded-3xl overflow-hidden border border-muted shadow-2xl animate-in fade-in duration-1000">
                {/* Mockup Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-primary/10 to-primary/20 p-12">
                   <BarChart3 className="w-1/2 h-1/2 text-primary opacity-20" />
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/60">Live Analytics View</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
