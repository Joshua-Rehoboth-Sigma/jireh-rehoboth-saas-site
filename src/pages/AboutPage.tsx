import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Cpu, TrendingUp, Activity, BarChart3, Database, Globe, Smartphone, Shield, ArrowRight, CheckCircle2, Factory, Landmark, Stethoscope, ShoppingCart, Truck } from 'lucide-react';

export function AboutPage() {
  const expertise = [
    { title: 'Statistical Modeling', description: 'Advanced mathematical frameworks for high-fidelity data analysis and prediction.', icon: <BarChart3 className="h-8 w-8 text-primary" /> },
    { title: 'Quality Management', description: 'Ensuring operational excellence through rigorous quality control and statistical metrics.', icon: <ShieldCheck className="h-8 w-8 text-primary" /> },
    { title: 'Artificial Intelligence', description: 'Integrating AI into analytical workflows for deeper insights and automation.', icon: <Cpu className="h-8 w-8 text-primary" /> },
    { title: 'Operational Excellence', description: 'Using Six Sigma methodologies to drive sustainable organizational performance.', icon: <TrendingUp className="h-8 w-8 text-primary" /> },
  ];

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Page Header */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-4xl md:text-7xl tracking-tight text-primary">
            Statistical Intelligence & Six Sigma Innovation
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Empowering organizations with high-fidelity statistical intelligence, advanced analytics, and Six Sigma innovation.
          </p>
        </div>

        {/* Mission Section */}
        <section className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 transform translate-x-1/2" />
            <div className="max-w-3xl space-y-8 relative z-10">
                <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight uppercase tracking-widest text-primary-foreground/60">Our Mission</h2>
                <p className="text-2xl md:text-4xl font-medium leading-relaxed">
                  "Empowering organizations with statistical intelligence, advanced analytics, and Six Sigma innovation."
                </p>
                <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
                  At Jireh Rehoboth Statistics, we believe that data is the ultimate driver of organizational excellence. Our team of expert statisticians, data scientists, and Six Sigma practitioners work tirelessly to build platforms that turn complex data into actionable operational strategies.
                </p>
            </div>
        </section>

        {/* Expertise Grid */}
        <div className="space-y-16">
            <div className="text-center space-y-4">
                <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight">Our Expertise</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We combine decades of statistical experience with cutting-edge technology.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {expertise.map((item) => (
                    <Card key={item.title} className="group hover:shadow-xl transition-all duration-300 border-none bg-muted/20 hover:bg-muted/30">
                        <CardContent className="p-8 space-y-6">
                            <div className="p-3 bg-background rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-display font-bold text-xl leading-snug tracking-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        {/* Company History / Expertise Content */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-muted/20 rounded-3xl p-10 md:p-20">
            <div className="space-y-8 animate-in slide-in-from-left duration-700">
                <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight leading-tight text-primary">
                    Driven by Precision & Operational Excellence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Jireh Rehoboth Statistics was founded with a clear vision: to bring high-fidelity statistical intelligence to every layer of organizational operations. We combine classical statistical modeling with modern AI and Six Sigma methodologies to create a unique approach to problem-solving.
                </p>
                <div className="space-y-4">
                    {[
                        'Decades of statistical experience across diverse sectors.',
                        'Pioneers in integrating AI with traditional Six Sigma workflows.',
                        'Committed to precision and sustainable organizational growth.',
                        'Expert team of data scientists and Six Sigma practitioners.',
                    ].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                            <span className="text-sm font-medium text-muted-foreground leading-relaxed">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl aspect-video border shadow-2xl animate-in fade-in duration-1000">
                 <img
                    src="https://v3b.fal.media/files/b/0a90f5ab/-4GAGe89-dzroD7Z0FsSZ_qZRzem9Y.png"
                    alt="Team Analytics View"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
        </section>

        {/* CTA Section */}
        <div className="bg-muted rounded-3xl p-10 md:p-20 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary" />
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight max-w-2xl mx-auto">
                Ready to transform your organizational intelligence?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Connect with our team to learn how our statistical tools and methodologies can drive excellence in your organization.
            </p>
            <Link to="/contact">
                <Button size="lg" className="rounded-full px-10 py-6 h-auto text-lg group">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
        </div>
      </div>
    </div>
  );
} 
