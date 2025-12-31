import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, MessageCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const ChatbotSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      content: 'Hello! I\'m your CAN 2025 AI assistant. Ask me anything about the Africa Cup of Nations 2025 - teams, players, schedules, or tournament history!',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: input.trim() }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: data.answer || data.response || 'I apologize, but I couldn\'t process your request. Please try again.',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: 'I\'m having trouble connecting to the server. Please make sure the API is running at http://127.0.0.1:5000 and try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    'Who are the favorites to win?',
    'When does the tournament start?',
    'Which players should I watch?',
    'Tell me about Morocco\'s squad',
  ];

  return (
    <section id="chatbot" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            AI <span className="text-gradient">ASSISTANT</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about CAN 2025? Chat with our AI assistant for instant answers
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Chat Container */}
          <div className="glass-effect rounded-2xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">CAN 2025 Bot</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Online
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-4">
                <div className="text-xs text-muted-foreground mb-2">Try asking:</div>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => setInput(question)}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about CAN 2025..."
                  className="flex-1 bg-muted rounded-full px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  variant="chat" 
                  size="icon" 
                  className="w-12 h-12"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </div>

          {/* API Notice */}
          <p className="text-center text-xs text-muted-foreground mt-4">
            <MessageCircle className="w-3 h-3 inline mr-1" />
            Connected to API at http://127.0.0.1:5000/api/ask
          </p>
        </div>
      </div>
    </section>
  );
};

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.role === 'bot';

  return (
    <div className={`flex gap-3 animate-slide-in ${isBot ? '' : 'flex-row-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isBot ? 'bg-primary/30' : 'bg-secondary/30'
      }`}>
        {isBot ? (
          <Bot className="w-4 h-4 text-primary" />
        ) : (
          <User className="w-4 h-4 text-secondary" />
        )}
      </div>
      <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
        isBot 
          ? 'bg-muted rounded-tl-sm' 
          : 'bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-tr-sm'
      }`}>
        <p className={`text-sm ${isBot ? 'text-foreground' : 'text-primary-foreground'}`}>
          {message.content}
        </p>
        <p className={`text-xs mt-1 ${isBot ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

export default ChatbotSection;
