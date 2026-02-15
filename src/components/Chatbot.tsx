import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Filter, ChevronUp, ChevronDown } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Roshan's AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickFilters = [
    { label: 'Skills', query: 'What are Roshan\'s technical skills?' },
    { label: 'Experience', query: 'Tell me about Roshan\'s work experience' },
    { label: 'Projects', query: 'What projects has Roshan worked on?' },
    { label: 'Education', query: 'What is Roshan\'s educational background?' },
    { label: 'Contact', query: 'How can I contact Roshan?' },
    { label: 'Certifications', query: 'What certifications does Roshan have?' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return "Roshan is proficient in React, TypeScript, JavaScript, Python, HTML5, CSS3, Bootstrap, Tailwind CSS, PHP, MySQL, Node.js, Three.js for 3D graphics, and AI/ML technologies. He has hands-on experience with modern web development frameworks and currently working on expanding his expertise in full-stack development. Would you like to know about any specific technology?";
    }
    
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return "Roshan is currently an intern Web Developer at Edigital Indian working on responsive web applications. He's also completed an internship at Universal Tribes as a Designer and AI Developer in digital marketing. Additionally, he contributed to an academic project at Kolan University developing a comprehensive management system for students, faculty, and attendance tracking. He's passionate about building projects that solve real problems!";
    }
    
    if (message.includes('project') || message.includes('portfolio') || message.includes('work')) {
      return "Roshan has worked on diverse projects including 3D village visualization with Three.js, college attendance management systems, e-commerce platforms, voice assistants, and AI-powered tools. His portfolio showcases expertise in full-stack development, 3D graphics, AI integration, and modern web design. Check out the Projects section for detailed case studies of his work!";
    }
    
    if (message.includes('education') || message.includes('study') || message.includes('degree')) {
      return "Roshan is currently advancing his technical education through internships and hands-on projects. He has strong fundamentals in computer science and is passionate about continuous learning. He's working on building practical expertise in web development, AI/ML, and 3D graphics through real-world project experience.";
    }
    
    if (message.includes('contact') || message.includes('hire') || message.includes('reach')) {
      return "You can contact Roshan through the contact form on this website, email him at roshanjsr5555@gmail.com, connect on LinkedIn at linkedin.com/in/roshan07, or check out his GitHub at github.com/The-Roshan. He's always open to discussing new opportunities, collaborations, and interesting projects!";
    }
    
    if (message.includes('certification') || message.includes('certificate')) {
      return "Roshan is actively pursuing various technical certifications and skills development. He stays updated with the latest technologies and best practices in web development, AI/ML, and 3D graphics. He believes in continuous learning and regularly takes courses to expand his technical expertise.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Great to meet you! I'm here to help you learn more about Roshan's background, skills, and experience. Feel free to ask me anything about his work, projects, or how to get in touch with him.";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Is there anything else you'd like to know about Roshan's background, skills, or experience? I'm here to help!";
    }
    
return "That's an interesting question! While I can provide information about Roshan's skills, experience, projects, education, and contact details, I might not have specific details about that topic. Could you try asking about his technical skills, work experience, or recent projects?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickFilter = (query: string) => {
    setInputValue(query);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button - Adjusted for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-20 md:bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
          isOpen ? 'rotate-180' : ''
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-36 md:bottom-24 right-6 z-50 w-80 md:w-96 h-96 bg-slate-800/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-4 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Portfolio Assistant</h3>
                <p className="text-xs opacity-90">Ask me about Roshan's background</p>
              </div>
            </div>
          </div>

          {/* Quick Filters - Now Hideable */}
          <div className="border-b border-slate-700">
            <div className="p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-slate-400" />
                  <span className="text-xs text-slate-400">Quick topics:</span>
                </div>
                <button
                  onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                  className="p-1 hover:bg-slate-700/50 rounded transition-colors"
                >
                  {isFiltersVisible ? (
                    <ChevronUp className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </button>
              </div>
              
              {isFiltersVisible && (
                <div className="flex flex-wrap gap-1 transition-all duration-300">
                  {quickFilters.map((filter) => (
                    <button
                      key={filter.label}
                      onClick={() => handleQuickFilter(filter.query)}
                      className="px-2 py-1 bg-slate-700/50 hover:bg-slate-600/50 text-xs text-slate-300 rounded transition-colors"
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500' 
                      : 'bg-slate-700'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="w-3 h-3 text-white" />
                    ) : (
                      <Bot className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <div className={`rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                      : 'bg-slate-700 text-slate-200'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-slate-700 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Roshan..."
                className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-2 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;