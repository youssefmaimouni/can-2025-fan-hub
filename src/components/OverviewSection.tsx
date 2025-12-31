import React from 'react';
import { Globe, Flag, Target, Star } from 'lucide-react';

const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            TOURNAMENT <span className="text-gradient">OVERVIEW</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The 35th edition of Africa's premier football competition brings together 
            the continent's best teams in Morocco.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <OverviewCard 
            icon={<Globe className="w-8 h-8" />}
            title="Host Country"
            description="Morocco welcomes Africa with world-class stadiums and infrastructure"
            accent="primary"
          />
          <OverviewCard 
            icon={<Flag className="w-8 h-8" />}
            title="24 Nations"
            description="The best teams from across Africa compete for continental glory"
            accent="secondary"
          />
          <OverviewCard 
            icon={<Target className="w-8 h-8" />}
            title="6 Groups"
            description="Teams battle through group stages before knockout rounds"
            accent="accent"
          />
          <OverviewCard 
            icon={<Star className="w-8 h-8" />}
            title="Defending Champs"
            description="Ivory Coast looks to defend their 2023 title on home soil"
            accent="primary"
          />
        </div>

        {/* Additional Info */}
        <div className="mt-16 glass-effect rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl text-foreground mb-4">
                A CELEBRATION OF <span className="text-gradient">AFRICAN FOOTBALL</span>
              </h3>
              <p className="text-muted-foreground mb-4">
                The Africa Cup of Nations is more than a tournament—it's a celebration of 
                African culture, unity, and the beautiful game. From Cairo to Cape Town, 
                millions will unite to support their nations.
              </p>
              <p className="text-muted-foreground">
                This edition promises exciting matches, rising stars, and unforgettable 
                moments as teams compete for the prestigious trophy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatBox value="6" label="Host Cities" />
              <StatBox value="9" label="Venues" />
              <StatBox value="52" label="Matches" />
              <StatBox value="1M+" label="Expected Fans" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface OverviewCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: 'primary' | 'secondary' | 'accent';
}

const OverviewCard: React.FC<OverviewCardProps> = ({ icon, title, description, accent }) => {
  const accentColors = {
    primary: 'text-primary border-primary/30',
    secondary: 'text-secondary border-secondary/30',
    accent: 'text-accent border-accent/30',
  };

  return (
    <div className={`glass-effect rounded-xl p-6 border-l-4 card-hover ${accentColors[accent]}`}>
      <div className={accentColors[accent].split(' ')[0]}>{icon}</div>
      <h3 className="font-display text-xl text-foreground mt-4 mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

interface StatBoxProps {
  value: string;
  label: string;
}

const StatBox: React.FC<StatBoxProps> = ({ value, label }) => (
  <div className="bg-muted/50 rounded-xl p-6 text-center">
    <div className="font-display text-4xl text-gradient mb-1">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

export default OverviewSection;
