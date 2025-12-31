import React from 'react';
import { TrendingUp, Goal, Shield, Award } from 'lucide-react';

const StatsSection: React.FC = () => {
  const groups = [
    { name: 'Group A', teams: ['Morocco', 'Mali', 'Zambia', 'Comoros'] },
    { name: 'Group B', teams: ['Egypt', 'South Africa', 'Angola', 'Zimbabwe'] },
    { name: 'Group C', teams: ['Nigeria', 'Tunisia', 'Uganda', 'Tanzania'] },
    { name: 'Group D', teams: ['Senegal', 'DR Congo', 'Benin', 'Botswana'] },
    { name: 'Group E', teams: ['Algeria', 'Burkina Faso', 'Equatorial Guinea', 'Sudan'] },
    { name: 'Group F', teams: ['Ivory Coast', 'Cameroon', 'Gabon', 'Mozambique'] },
  ];

  const topPlayers = [
    { name: 'Mohamed Salah', country: 'Egypt', stat: '8 Goals', icon: <Goal className="w-5 h-5" /> },
    { name: 'Sadio Mané', country: 'Senegal', stat: '7 Goals', icon: <Goal className="w-5 h-5" /> },
    { name: 'Achraf Hakimi', country: 'Morocco', stat: '6 Assists', icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Édouard Mendy', country: 'Senegal', stat: '4 Clean Sheets', icon: <Shield className="w-5 h-5" /> },
  ];

  return (
    <section id="stats" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            STATISTICS & <span className="text-gradient">PERFORMANCE</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track team progress, top scorers, and key tournament statistics
          </p>
        </div>

        {/* Groups Grid */}
        <div className="mb-16">
          <h3 className="font-display text-2xl text-foreground mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-secondary" />
            GROUP STAGE
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groups.map((group) => (
              <GroupCard key={group.name} {...group} />
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div>
          <h3 className="font-display text-2xl text-foreground mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            TOP PERFORMERS
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topPlayers.map((player) => (
              <PlayerCard key={player.name} {...player} />
            ))}
          </div>
        </div>

        {/* Tournament Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-4">
          <TournamentStat value="78" label="Goals Scored" color="primary" />
          <TournamentStat value="12" label="Clean Sheets" color="secondary" />
          <TournamentStat value="156" label="Yellow Cards" color="accent" />
          <TournamentStat value="2.4" label="Avg Goals/Match" color="primary" />
        </div>
      </div>
    </section>
  );
};

interface GroupCardProps {
  name: string;
  teams: string[];
}

const GroupCard: React.FC<GroupCardProps> = ({ name, teams }) => (
  <div className="glass-effect rounded-xl p-5 card-hover">
    <div className="font-display text-lg text-secondary mb-3">{name}</div>
    <div className="space-y-2">
      {teams.map((team, index) => (
        <div 
          key={team} 
          className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
        >
          <span className="text-foreground">{team}</span>
          <span className="text-xs text-muted-foreground">Pts: {9 - index * 2}</span>
        </div>
      ))}
    </div>
  </div>
);

interface PlayerCardProps {
  name: string;
  country: string;
  stat: string;
  icon: React.ReactNode;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ name, country, stat, icon }) => (
  <div className="glass-effect rounded-xl p-5 card-hover">
    <div className="flex items-start justify-between mb-3">
      <div>
        <div className="font-semibold text-foreground">{name}</div>
        <div className="text-sm text-muted-foreground">{country}</div>
      </div>
      <div className="text-primary">{icon}</div>
    </div>
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
      {stat}
    </div>
  </div>
);

interface TournamentStatProps {
  value: string;
  label: string;
  color: 'primary' | 'secondary' | 'accent';
}

const TournamentStat: React.FC<TournamentStatProps> = ({ value, label, color }) => {
  const colors = {
    primary: 'from-primary/20 to-primary/5 border-primary/30',
    secondary: 'from-secondary/20 to-secondary/5 border-secondary/30',
    accent: 'from-accent/20 to-accent/5 border-accent/30',
  };

  return (
    <div className={`rounded-xl p-6 text-center bg-gradient-to-b border ${colors[color]}`}>
      <div className="font-display text-5xl text-foreground mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export default StatsSection;
