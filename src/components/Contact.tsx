import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formRef.current) {
      emailjs.sendForm(
        'service_rzq5ukq',
        'template_phar57z',
        formRef.current,
        'IvvqNIQ0Y1RToDgC7'
      ).then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          // Reset form
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('Error sending email:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'roshanjsr5555@gmail.com',
      link: 'mailto:roshanjsr5555@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 70611-26213',
      link: 'tel:+917061126213'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Jamshedpur, Jharkhand',
      link: 'https://maps.google.com/?q=Jamshedpur,Jharkhand'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://in.linkedin.com/in/roshan07', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Github, href: 'https://github.com/The-Roshan', label: 'GitHub', color: 'hover:text-purple-400' },
    { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter', color: 'hover:text-cyan-400' },
    { icon: Mail, href: 'mailto:roshanjsr5555@gmail.com', label: 'Email', color: 'hover:text-pink-400' }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to start your next project? I'd love to hear about your ideas and 
              discuss how we can bring them to life together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 scroll-animate-left">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Whether you're looking to build a new application, improve an existing one, 
                  or just want to chat about technology, I'm always excited to connect with 
                  fellow creators and innovators.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <p className="text-slate-300">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 scroll-animate-right">
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-slate-400"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-slate-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-slate-400"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-slate-400 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;