import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Factory, Landmark, Stethoscope, ShoppingCart, Truck, CheckCircle2, ArrowRight } from 'lucide-react';

export function SolutionsPage() {
  const industries = [
    {
      title: 'Manufacturing',
      description: 'Streamline production lines with real-time monitoring, SPC controls, and predictive maintenance tools for maximum efficiency.',
      icon: <Factory className="h-10 w-10 text-primary" />,
      features: ['Operational Efficiency Metrics', 'Process Quality Control', 'Maintenance Scheduling'],
    },
    {
      title: 'Financial Services',
      description: 'Quantify risk, detect fraud, and optimize investment strategies using high-fidelity statistical modeling and AI.',
      icon: <Landmark className="h-10 w-10 text-primary" />,
      features: ['Predictive Risk Modeling', 'Fraud Detection Algorithms', 'Investment Performance Analytics'],
    },
    {
      title: 'Healthcare',
      description: 'Improve patient outcomes and clinical workflows with data-driven insights and Six Sigma operational excellence.',
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
      features: ['Clinical Outcome Predictions', 'Resource Optimization', 'Regulatory Compliance Monitoring'],
    },
    {
      title: 'Retail',
      description: 'Optimize supply chains and inventory management with demand forecasting and customer sentiment analysis.',
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      features: ['Demand Forecasting Models', 'Inventory Optimization', 'Customer Behavior Insights'],
    },
    {
      title: 'Supply Chain',
      description: 'Optimize logistics and route planning with predictive analytics and real-time shipment monitoring.',
      icon: <Truck className="h-10 w-10 text-primary" />,
      features: ['Logistics Route Optimization', 'Real-time Supply Visibility', 'Shipment Risk Management'],
    },
  ];

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Page Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="font-display font-bold text-4xl md:text-6xl tracking-tight text-primary">
            Industry Solutions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tailored statistical intelligence for the world's most demanding industries.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Card key={industry.title} className="group hover:shadow-xl transition-all duration-300 border-none bg-muted/20 hover:bg-muted/30">
              <CardContent className="p-10 space-y-8">
                <div className="p-4 bg-background rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-2xl tracking-tight group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>
                <div className="space-y-3 pt-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/60">Key Capabilities</p>
                    <ul className="space-y-2">
                        {industry.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <Button variant="ghost" className="p-0 text-primary hover:text-primary/80 hover:bg-transparent group/btn">
                  Explore solution <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <section className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-16 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 transform translate-x-1/2" />
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight max-w-2xl mx-auto relative z-10">
              Need a bespoke analytical solution for your unique challenge?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto relative z-10">
              Our team of data scientists and experts can build custom models and platforms tailored exactly to your organizational needs.
            </p>
            <div className="flex justify-center relative z-10">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 py-6 h-auto text-lg">
                    Consult with our Experts
                </Button>
            </div>
        </section>
      </div>
    </div>
  );
} 
