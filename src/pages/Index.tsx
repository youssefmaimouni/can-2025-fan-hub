import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import StatsSection from '@/components/StatsSection';
import ChatbotSection from '@/components/ChatbotSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <StatsSection />
        <ChatbotSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
