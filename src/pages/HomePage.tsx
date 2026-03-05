import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { ArrowRight, BarChart3, ShieldCheck, Zap, Cpu, CheckCircle2, Factory, TrendingUp, Activity, Smartphone, Globe, Shield } from 'lucide-react';

const HERO_IMG = 'https://v3b.fal.media/files/b/0a90f5ab/-4GAGe89-dzroD7Z0FsSZ_qZRzem9Y.png';

export function HomePage() {
  const products = [
    {
      title: 'Six Sigma Analytics Suite',
      description: 'A platform for managing DMAIC projects, statistical analysis, and process improvement initiatives.',
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Process Intelligence Engine',
      description: 'Real-time monitoring and statistical process control for manufacturing and operational environments.',
      icon: <Cpu className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Predictive Risk Analytics',
      description: 'AI-powered forecasting, anomaly detection, and predictive modeling tools.',
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Market Intelligence Copilot',
      description: 'AI-driven analytics assistant for business insights and data-driven decisions.',
      icon: <Activity className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={HERO_IMG}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-5 dark:opacity-10 scale-105 animate-in fade-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="flex justify-center mb-8 animate-in zoom-in duration-700">
            <img src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FpGjIB0vftgVpK9UXK5kyP1jyF992%2FJirehRehobothStatistics__f01ddd83.png?alt=media&token=a13239c9-91c6-4947-8047-0b56c55c38bc" alt="Logo" className="h-24 md:h-32 w-auto drop-shadow-2xl" />
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-primary leading-[1.1]">
              Jireh Rehoboth Statistics
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-primary/80">
              Statistical Intelligence and Six Sigma Software Solutions
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We build advanced statistical software platforms and analytics tools that help organizations achieve operational excellence using data science, artificial intelligence, and Six Sigma methodologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/products">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg group h-auto">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg h-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges / Clients Section Placeholder */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            Trusted by Industry Leaders Worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-40">
            {/* Logos Placeholder */}
            {[Globe, Shield, Factory, ShieldCheck, Zap].map((Icon, i) => (
              <Icon key={i} className="h-10 w-10" />
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight">
              Powerful Analytics Platforms
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our software suite is built for organizations that demand precision and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.title} className="group hover:shadow-xl transition-all duration-300 border-none bg-muted/20 hover:bg-muted/30">
                <CardContent className="p-8 space-y-6">
                  <div className="p-4 bg-background rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl leading-snug tracking-tight group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <Link to="/products" className="inline-flex items-center text-sm font-semibold text-primary hover:underline gap-1 pt-4">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Preview Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight leading-tight">
              Tailored Solutions for Every Industry
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-lg">
              We understand that every industry has unique challenges. Our statistical tools are customized to solve complex operational problems in diverse sectors.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {['Manufacturing', 'Financial Services', 'Healthcare', 'Supply Chain'].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/solutions" className="inline-block pt-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 h-auto">
                Explore All Solutions
              </Button>
            </Link>
          </div>
          <div className="relative z-10 hidden lg:block scale-110">
            <img
              src="https://v3b.fal.media/files/b/0a90f5ab/ocrFFdcvMKOhoTEHlHuuZ_4bhceDmw.png"
              alt="Analytics Dashboard Preview"
              className="rounded-2xl shadow-2xl border border-white/20 transform -rotate-3 hover:rotate-0 transition-transform duration-700"
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 skew-x-12 transform translate-x-1/2" />
      </section>

      {/* Expertise Stats Section Placeholder */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Statistical Models', value: '500+' },
            { label: 'Operational Accuracy', value: '99.9%' },
            { label: 'Industry Expertise', value: '15+ Years' },
            { label: 'Happy Enterprises', value: '100+' },
          ].map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p className="text-4xl md:text-5xl font-display font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-muted rounded-3xl p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary" />
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight max-w-2xl mx-auto">
              Ready to transform your operations with statistical intelligence?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Connect with our experts to learn how Jireh Rehoboth can help you achieve operational excellence.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-10 py-6 h-auto text-lg">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
