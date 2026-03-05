import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin, CheckCircle2, Globe, Linkedin, Twitter, Github, ArrowRight, MessageSquare, Handshake, Briefcase } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { blink } from '@/blink/client';

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use the correct SDK v2.3.7 method: blink.db.<table-name>.create
      const result = await (blink.db as any).contactRequests.create({
        ...formValues,
        userId: 'anonymous', // For non-auth lead gen
      });

      if (!result) throw new Error('No result returned');

      toast.success('Thank you! Your message has been received.');
      setFormValues({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactOptions = [
    { title: 'Business Inquiries', icon: <Briefcase className="h-6 w-6 text-primary" />, description: 'Learn how our platforms can solve your organizational challenges.' },
    { title: 'Partnership Opportunities', icon: <Handshake className="h-6 w-6 text-primary" />, description: 'Explore collaborative opportunities and strategic alliances.' },
    { title: 'Consulting Services', icon: <MessageSquare className="h-6 w-6 text-primary" />, description: 'Engage our expert statisticians and Six Sigma practitioners.' },
  ];

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Page Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="font-display font-bold text-4xl md:text-6xl tracking-tight text-primary">
            Connect with Our Experts
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to drive operational excellence with statistical intelligence? We're here to help.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-12 order-2 lg:order-1 animate-in slide-in-from-left duration-700">
            <div className="space-y-8">
              <h2 className="font-display font-bold text-3xl tracking-tight text-primary">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-xl shadow-sm text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-sm tracking-widest uppercase text-primary/60">Email</p>
                    <p className="text-lg font-medium">joshuaezekiel334@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-xl shadow-sm text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-sm tracking-widest uppercase text-primary/60">Phone</p>
                    <p className="text-lg font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-xl shadow-sm text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-sm tracking-widest uppercase text-primary/60">Office</p>
                    <p className="text-lg font-medium leading-relaxed">
                      Rehoboth House, Nelamangala<br />
                      Bangalore, Karnataka- 562132
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 pt-8 border-t">
              <h2 className="font-display font-bold text-3xl tracking-tight text-primary">How can we help?</h2>
              <div className="grid grid-cols-1 gap-6">
                {contactOptions.map((option) => (
                  <div key={option.title} className="flex items-start gap-4 bg-muted/20 p-6 rounded-2xl border border-muted-foreground/10 group hover:bg-muted/30 transition-all">
                    <div className="p-2 bg-background rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                      {option.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-lg text-primary">{option.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="order-1 lg:order-2 border-none shadow-2xl bg-muted/20 backdrop-blur-sm rounded-3xl animate-in slide-in-from-right duration-700">
            <CardHeader className="p-8 md:p-12 space-y-4">
              <CardTitle className="font-display font-bold text-3xl tracking-tight text-primary">Send a Message</CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Tell us about your organizational challenge and our team will get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 md:p-12 pt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold tracking-widest uppercase text-primary/60">Full Name</label>
                    <Input
                      id="name"
                      placeholder="Jane Doe"
                      required
                      className="rounded-xl px-6 py-6 h-auto bg-background border-muted-foreground/10 focus:ring-primary/20 transition-all"
                      value={formValues.name}
                      onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold tracking-widest uppercase text-primary/60">Email Address</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                      className="rounded-xl px-6 py-6 h-auto bg-background border-muted-foreground/10 focus:ring-primary/20 transition-all"
                      value={formValues.email}
                      onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold tracking-widest uppercase text-primary/60">Company Name</label>
                    <Input
                      id="company"
                      placeholder="Enterprise Corp"
                      className="rounded-xl px-6 py-6 h-auto bg-background border-muted-foreground/10 focus:ring-primary/20 transition-all"
                      value={formValues.company}
                      onChange={(e) => setFormValues({ ...formValues, company: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold tracking-widest uppercase text-primary/60">Message</label>
                    <Textarea
                      id="message"
                      placeholder="How can Jireh Rehoboth Statistics help your organization?"
                      required
                      className="rounded-xl px-6 py-4 h-40 bg-background border-muted-foreground/10 focus:ring-primary/20 transition-all resize-none"
                      value={formValues.message}
                      onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                    />
                  </div>
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-full py-6 h-auto text-lg group">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to our <a href="#" className="underline hover:text-primary transition-colors">Privacy Policy</a>.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 
