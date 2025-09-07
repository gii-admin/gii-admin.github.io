'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { Calendar, ExternalLink, Trophy, Code, Globe, Users, Mail } from 'lucide-react';

const NewsPage = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsItems = [
    {
      id: '1',
      title: 'MIT Global AI Hackathon 2025',
      category: 'competition',
      date: '2025-01-15',
      summary: 'Join the world\'s most prestigious AI hackathon focused on UN Sustainable Development Goals.',
      content: 'The MIT Global AI Hackathon 2025 brings together brilliant minds from around the world to develop AI solutions using MIT App Inventor. This year\'s theme focuses on the United Nations Sustainable Development Goals (SDGs) - a universal call to action to end poverty, protect the planet, and ensure peace and prosperity. Participants will build AI apps that demonstrate creativity, social impact, and technical skill.',
      link: 'https://raise.mit.edu/events/global-ai-hackathon-2025/',
      icon: <Trophy className="w-6 h-6" />
    },
    {
      id: '2',
      title: 'NASA International Space Apps Challenge 2025',
      category: 'competition',
      date: '2025-10-04',
      summary: 'The world\'s largest hackathon returns October 4-5 with the theme "Learn, Launch, Lead".',
      content: 'NASA\'s Space Apps Challenge 2025 is a 48-hour global hackathon where innovators tackle challenges using open data from NASA and 14 space agency partners. This year\'s theme "Learn, Launch, Lead" focuses on Earth observation, space exploration, and solutions that benefit life on Earth and in space. Join 450+ events worldwide or participate virtually.',
      link: 'https://www.spaceappschallenge.org/',
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: '3',
      title: 'Creative Computing with Scratch 2025',
      category: 'opportunity',
      date: '2025-03-01',
      summary: 'Harvard\'s Creative Computing curriculum inspires young programmers with MIT Scratch.',
      content: 'The Creative Computing curriculum, developed by Harvard\'s Graduate School of Education, offers an introductory creative computing experience using MIT Scratch. This program provides ideas, strategies, and activities for educators and students to explore programming through creativity. Scratch, developed by MIT Media Lab, is used worldwide in 70+ languages to teach computational thinking.',
      link: 'https://creativecomputing.gse.harvard.edu/guide/',
      icon: <Code className="w-6 h-6" />
    },
    {
      id: '4',
      title: 'International Kids Coding Competition (IKCC)',
      category: 'competition',
      date: '2025-02-28',
      summary: 'Free international coding contests for kids worldwide, including Scratch competitions.',
      content: 'IKCC organizes several international programming contests for children, including Scratch Olympiads and Digital Olympiads. Open to kids from around the world for free, these competitions celebrate young programmers\' creativity and technical skills. With participants from 44+ countries, IKCC provides a global platform for coding education.',
      link: 'https://www.ikcc.info/',
      icon: <Users className="w-6 h-6" />
    },
    {
      id: '5',
      title: 'International Computing Olympiad 2025',
      category: 'competition',
      date: '2025-04-15',
      summary: 'Compete for a share of $30,000 USD prize pool in this global computing competition.',
      content: 'The International Computing Olympiad 2025 features multiple tracks based on age and expertise, with competitions open to all ages. Participants showcase their best work competing for substantial prizes totaling $30,000 USD. The competition emphasizes algorithmic thinking, problem-solving, and programming excellence across various difficulty levels.',
      link: 'https://www.computingolympiad.org/',
      icon: <Trophy className="w-6 h-6" />
    },
    {
      id: '6',
      title: 'Devpost Global Hackathons 2025',
      category: 'opportunity',
      date: '2025-01-20',
      summary: 'Discover upcoming hackathons and AI competitions on the world\'s largest hackathon platform.',
      content: 'Devpost hosts thousands of hackathons worldwide, connecting developers with opportunities to build innovative solutions. From AI and climate hackathons to student competitions, Devpost provides a platform for participants to showcase their projects, win prizes, and connect with the global developer community. Find virtual and in-person events throughout 2025.',
      link: 'https://devpost.com/hackathons',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const categories = [
    { id: 'all', label: t('news.allNews'), icon: <Globe className="w-4 h-4" /> },
    { id: 'competition', label: t('news.competitions'), icon: <Trophy className="w-4 h-4" /> },
    { id: 'opportunity', label: t('news.opportunities'), icon: <Code className="w-4 h-4" /> }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-teal-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t('news.title')}
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg ${
                      item.category === 'competition' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                    }`}>
                      {item.icon}
                    </div>
                    <div className="ml-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                      <div className="text-xs text-gray-400 uppercase font-semibold tracking-wide">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.summary}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => {
                        const modal = document.getElementById(`modal-${item.id}`);
                        if (modal) (modal as HTMLDialogElement).showModal();
                      }}
                      className="text-green-600 hover:text-green-800 font-semibold text-sm"
                    >
                      {t('common.readMore')}
                    </button>
                    
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center"
                      >
                        {t('news.visit')}
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* News Detail Modals */}
      {newsItems.map((item) => (
        <dialog key={`modal-${item.id}`} id={`modal-${item.id}`} className="modal rounded-2xl p-0 max-w-2xl w-full">
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${
                    item.category === 'competition' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                  }`}>
                    {item.icon}
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const modal = document.getElementById(`modal-${item.id}`);
                    if (modal) (modal as HTMLDialogElement).close();
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-6">{item.content}</p>
              
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 inline-flex items-center"
                >
                  {t('news.visitOfficial')}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              )}
            </div>
          </div>
        </dialog>
      ))}

      {/* Upcoming Events Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('news.upcomingHighlights')}</h2>
            <p className="text-lg text-gray-700">{t('news.upcomingDesc')}</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('news.competitionSeason')}</h3>
                <p className="text-blue-100 mb-6">
                  {t('news.competitionSeasonDesc')}
                </p>
                <div className="flex items-center text-blue-100">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Spring 2025</span>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">{t('news.getNotified')}</h4>
                <p className="text-blue-100 text-sm mb-4">
                  {t('news.stayUpdated')}
                </p>
                <a
                  href="mailto:info@globalimpactinnovators.org?subject=News Updates Subscription"
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center text-sm"
                >
                  {t('news.subscribe')}
                  <Mail className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white mb-6">
            <Mail className="w-12 h-12 mx-auto mb-4" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">{t('news.stayConnected')}</h2>
          <p className="text-xl text-green-100 mb-8">
            {t('common.contact')}
          </p>
          <a 
            href="mailto:info@globalimpactinnovators.org"
            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
          >
            <Mail className="w-5 h-5 mr-2" />
            info@globalimpactinnovators.org
          </a>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;