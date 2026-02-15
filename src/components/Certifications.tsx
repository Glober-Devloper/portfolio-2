import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Star, Trophy } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 1,
      title: 'Python Programming Certification',
      issuer: 'Great Learning',
      date: '23-03-2024',
      validUntil: 'Lifetime',
      credentialId: 'WQOHSAGR',
      description: 'Comprehensive certification in Python programming covering data structures, OOP, and advanced programming concepts. Demonstrates proficiency in one of the most in-demand programming languages.',
      skills: ['Python', 'Data Structures', 'Object-Oriented Programming', 'Scripting', 'Automation'],
      color: 'from-yellow-500 to-blue-500',
      logo: '🐍',
      level: 'Professional',
      status: 'Active',
      verifyUrl: 'https://drive.google.com/open?id=1k_N_Am-lJb7S2bZ1wQ2eG4xc-ePLA467&usp=drive_fs'
    },
    {
      id: 2,
      title: 'Data Science Python Certification',
      issuer: 'Great Learning',
      date: '09-08-2024',
      validUntil: 'Lifetime',
      credentialId: 'RFWFGEPL',
      description: 'Advanced certification in Data Science using Python. Covers data analysis, visualization, machine learning basics, and statistical analysis. High demand in tech industry.',
      skills: ['Python', 'Data Analysis', 'Machine Learning', 'Pandas', 'NumPy', 'Matplotlib'],
      color: 'from-green-500 to-emerald-500',
      logo: '📊',
      level: 'Professional',
      status: 'Active',
      verifyUrl: 'https://drive.google.com/open?id=11V8epqKf2_yJDWcsF3wwaPiXxXOxXNWA&usp=drive_fs'
    },
    {
      id: 3,
      title: 'Web Development Certification',
      issuer: 'Great Learning',
      date: '09-08-2024',
      validUntil: 'Lifetime',
      credentialId: 'WRRWOIIZ',
      description: 'Full-stack web development certification covering front-end and back-end technologies. Includes HTML, CSS, JavaScript, responsive design, and backend frameworks.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Backend Development', 'Databases'],
      color: 'from-orange-500 to-red-500',
      logo: '🌐',
      level: 'Professional',
      status: 'Active',
      verifyUrl: 'https://drive.google.com/open?id=1a_T0EpTbinNCU5zueMqoraASzwzcv45G&usp=drive_fs'
    },
    {
      id: 4,
      title: 'Java Programming Certification',
      issuer: 'Great Learning',
      date: '09-08-2023',
      validUntil: 'Lifetime',
      credentialId: 'QKWJSKEP',
      description: 'Enterprise-level Java programming certification. Covers OOP principles, collections, exception handling, and advanced Java concepts. Core skill for enterprise development.',
      skills: ['Java', 'Object-Oriented Programming', 'Collections', 'Exception Handling', 'Multithreading', 'Enterprise Development'],
      color: 'from-red-500 to-orange-500',
      logo: '☕',
      level: 'Professional',
      status: 'Active',
      verifyUrl: 'https://drive.google.com/open?id=1-G5ECbNBjdXUsdU5br7oXJpBnGDXfEv1&usp=drive_fs'
    },
    {
      id: 5,
      title: 'Artificial Intelligence with Python Certification',
      issuer: 'Great Learning',
      date: '18-06-2024',
      validUntil: 'Lifetime',
      credentialId: 'KNARWUIN',
      description: 'Advanced certification in Artificial Intelligence and Machine Learning using Python. Covers neural networks, deep learning, and practical AI applications. Critical for emerging tech roles.',
      skills: ['Python', 'Artificial Intelligence', 'Machine Learning', 'Neural Networks', 'TensorFlow', 'Deep Learning'],
      color: 'from-purple-500 to-pink-500',
      logo: '🤖',
      level: 'Professional',
      status: 'Active',
      verifyUrl: 'https://drive.google.com/open?id=1khqV00975ZxwcEYlNN6lOKJgd2UjwL_U&usp=drive_fs'
    },
    {
      id: 6,
      title: 'Cyber Security (Intro) Certification',
      issuer: 'learntube ai',
      date: '4-02-2026',
      validUntil: 'Lifetime',
      credentialId: 'INT-M-2-2577-1111364',
      description: 'Foundational certification in Cybersecurity covering security fundamentals, threat analysis, and protection strategies. Increasingly important across all tech roles.',
      skills: ['Cybersecurity', 'Network Security', 'Threat Analysis', 'Security Protocols', 'Data Protection', 'Ethical Hacking Basics'],
      color: 'from-red-600 to-pink-600',
      logo: '🔒',
      level: 'Beginner',
      status: 'Active',
      verifyUrl: 'https://drive.google.com/open?id=1YR7mJRnlEeEl7whTVd0TtY05dUDjgl7y&usp=drive_fs'
    }
  ];

  const stats = [
    { label: 'Total Certifications', value: '15+', icon: Award },
    { label: 'Active Certifications', value: '12', icon: CheckCircle },
    { label: 'Professional Level', value: '8', icon: Star },
    { label: 'Years of Learning', value: '5+', icon: Trophy }
  ];

  return (
    <section id="certifications" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Professional certifications that validate my expertise and commitment to staying 
              current with industry standards and best practices.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 md:p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 scroll-animate-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 scroll-animate-rotate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center text-2xl group-hover:animate-pulse`}>
                      {cert.logo}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${cert.color} text-white`}>
                          {cert.level}
                        </span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                          {cert.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title and Issuer */}
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-purple-400 font-medium mb-3">{cert.issuer}</p>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Date Info */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>Issued: {cert.date}</span>
                  </div>
                  <span>Valid until: {cert.validUntil}</span>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-white font-medium text-sm mb-2">Skills Validated:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="text-xs text-slate-500 mb-4">
                  Credential ID: {cert.credentialId}
                </div>

                {/* Action Button */}
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 text-sm text-purple-400 hover:text-purple-300 transition-colors border border-slate-600 hover:border-purple-500 rounded-lg py-2"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* View All Certificates Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10 scroll-animate">
            <a
              href="https://drive.google.com/drive/folders/1k-kMeZ_xPmxmo8A5EyqTIIjFurRHtO5Z?usp=sharing"
              className="group flex items-center justify-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>📄 Download All Certificates</span>
            </a>
            
            <a
              href="https://drive.google.com/drive/folders/1k-kMeZ_xPmxmo8A5EyqTIIjFurRHtO5Z?usp=sharing"
              className="group flex items-center justify-center space-x-2 px-6 md:px-8 py-3 md:py-4 border-2 border-purple-500 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>📋 View Full Certificate List</span>
            </a>

            <a
              href="https://drive.google.com/drive/folders/1k-kMeZ_xPmxmo8A5EyqTIIjFurRHtO5Z?usp=sharing"
              className="group flex items-center justify-center space-x-2 px-6 md:px-8 py-3 md:py-4 border-2 border-cyan-500 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>🔗 Share Credentials</span>
            </a>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-6 md:mt-8 scroll-animate">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Continuous Learning Journey
              </h3>
              <p className="text-slate-300 mb-6">
                I believe in lifelong learning and staying ahead of technology trends. 
                Currently pursuing additional certifications in AI/ML and advanced cloud architectures.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['AI/ML Certification', 'Advanced DevOps', 'Cybersecurity', 'Blockchain'].map((upcoming) => (
                  <span
                    key={upcoming}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer"
                  >
                    {upcoming} (In Progress)
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;