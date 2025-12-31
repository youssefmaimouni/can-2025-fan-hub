import React from 'react';
import { Github, Twitter, Mail, Heart, Trophy } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-8 h-8 text-secondary" />
              <span className="font-display text-2xl text-foreground">CAN 2025</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Your comprehensive source for Africa Cup of Nations 2025 information, 
              statistics, and AI-powered insights. Experience the passion of African football.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#overview" className="text-muted-foreground hover:text-primary transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#stats" className="text-muted-foreground hover:text-primary transition-colors">
                  Statistics
                </a>
              </li>
              <li>
                <a href="#chatbot" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Assistant
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">CONTACT</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:info@can2025project.com" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  info@can2025project.com
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Twitter className="w-4 h-4" />
                  @CAN2025Project
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 CAN 2025 Project. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent" /> for African Football
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
