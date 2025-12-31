import React from 'react';
import { Trophy, Calendar, MapPin, Users } from 'lucide-react';
import heroImage from '@/assets/hero-can2025.jpg';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const scrollToChat = () => {
    const chatSection = document.getElementById('chatbot');
    chatSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <Trophy className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-foreground">35th Edition</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 tracking-wider">
            AFRICA CUP OF
            <span className="block text-gradient">NATIONS 2025</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the passion, pride, and glory of African football. 
            Get insights, stats, and interact with our AI assistant.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" onClick={scrollToChat}>
              Chat with AI Assistant
            </Button>
            <Button variant="outline" size="xl">
              View Teams
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <QuickStat icon={<Calendar />} label="Dec 21 - Jan 18" value="Tournament" />
            <QuickStat icon={<MapPin />} label="Morocco" value="Host Nation" />
            <QuickStat icon={<Users />} label="24 Teams" value="Competing" />
            <QuickStat icon={<Trophy />} label="52 Matches" value="Total Games" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
};

interface QuickStatProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const QuickStat: React.FC<QuickStatProps> = ({ icon, label, value }) => (
  <div className="glass-effect rounded-xl p-4 card-hover">
    <div className="text-primary mb-2">{icon}</div>
    <div className="text-sm text-muted-foreground">{value}</div>
    <div className="text-foreground font-semibold">{label}</div>
  </div>
);

export default HeroSection;
