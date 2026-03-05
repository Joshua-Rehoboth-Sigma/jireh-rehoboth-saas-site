import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, User, Calendar } from 'lucide-react';

export function InsightsPage() {
  const articles = [
    {
      title: 'Statistical Modeling: A Guide to Predictive Accuracy',
      category: 'Statistical Modeling',
      author: 'Dr. Jane Smith',
      date: 'March 15, 2026',
      readTime: '8 min read',
      description: 'Explore the foundations of high-fidelity predictive models and how to avoid common pitfalls in large-scale data analysis.',
      image: 'https://v3b.fal.media/files/b/0a90f5ab/-4GAGe89-dzroD7Z0FsSZ_qZRzem9Y.png',
    },
    {
      title: 'Six Sigma Best Practices for Modern Manufacturing',
      category: 'Six Sigma',
      author: 'John Doe',
      date: 'February 28, 2026',
      readTime: '12 min read',
      description: 'How to adapt traditional Six Sigma methodologies to the digital-first manufacturing environments of today.',
      image: 'https://v3b.fal.media/files/b/0a90f5ab/ocrFFdcvMKOhoTEHlHuuZ_4bhceDmw.png',
    },
    {
      title: 'AI for Process Optimization: Beyond the Hype',
      category: 'Artificial Intelligence',
      author: 'Dr. Michael Chen',
      date: 'February 10, 2026',
      readTime: '10 min read',
      description: 'Understanding the intersection of artificial intelligence and operational excellence through real-world case studies.',
      image: 'https://v3b.fal.media/files/b/0a90f5ab/-4GAGe89-dzroD7Z0FsSZ_qZRzem9Y.png',
    },
    {
        title: 'Operational Excellence: The Data-Driven Strategy',
        category: 'Operational Excellence',
        author: 'Sarah Johnson',
        date: 'January 25, 2026',
        readTime: '6 min read',
        description: 'Building a culture of data-driven decision making to achieve sustainable operational growth and excellence.',
        image: 'https://v3b.fal.media/files/b/0a90f5ab/ocrFFdcvMKOhoTEHlHuuZ_4bhceDmw.png',
      },
  ];

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Page Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="font-display font-bold text-4xl md:text-6xl tracking-tight text-primary">
            Expert Insights
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Leading-edge research and articles from our statistical experts and analysts.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-4 py-8 border-y">
            {['All Insights', 'Statistical Modeling', 'Six Sigma', 'Artificial Intelligence', 'Operational Excellence'].map((cat, i) => (
                <Button key={cat} variant={i === 0 ? 'default' : 'outline'} className="rounded-full px-6">
                    {cat}
                </Button>
            ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {articles.map((article) => (
            <Card key={article.title} className="group border-none shadow-none bg-transparent hover:bg-muted/10 p-4 rounded-3xl transition-all duration-300">
              <CardHeader className="p-0 space-y-6 overflow-hidden rounded-2xl border aspect-video">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
              </CardHeader>
              <CardContent className="px-0 py-8 space-y-4">
                <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-primary/60 uppercase">
                    <Badge variant="secondary" className="rounded-full px-3">{article.category}</Badge>
                    <div className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {article.date}</div>
                    <div className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {article.readTime}</div>
                </div>
                <h2 className="font-display font-bold text-2xl tracking-tight group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {article.description}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-muted-foreground/10 mt-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                        {article.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">By {article.author}</span>
                    <Button variant="ghost" className="ml-auto p-0 text-primary hover:text-primary/80 hover:bg-transparent group/btn text-xs font-bold uppercase tracking-widest">
                        Read Article <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-muted/50 rounded-3xl p-10 md:p-20 text-center space-y-8">
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight max-w-2xl mx-auto">
                Stay informed on the latest statistical innovations.
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Subscribe to our newsletter to receive our latest research and updates directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input type="email" placeholder="Enter your email" className="flex-1 bg-background border rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                <Button className="rounded-full px-8 py-3">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">We value your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </div>
  );
} 
