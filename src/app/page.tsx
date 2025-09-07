'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { ChevronDown, Code, Users, Trophy, Newspaper, Mail } from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative hero-gradient">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
              {t('home.hero.subtitle')}
            </p>
            <div className="max-w-3xl mx-auto mb-8">
              <blockquote className="text-lg md:text-xl text-white/90 italic border-l-4 border-white/50 pl-6 animate-slide-up">
                &ldquo;{t('mission.statement')}&rdquo;
              </blockquote>
            </div>
            <div className="flex justify-center">
              <a href="mailto:info@globalimpactinnovators.org" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                {t('common.contactUs')}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToNext} className="text-white hover:text-gray-200 transition-colors">
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>


      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('team.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Student Leaders Preview */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold">6</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('team.studentLeaders')}</h3>
              <p className="text-gray-700 text-sm">{t('team.studentLeadersDesc')}</p>
            </div>
            
            {/* Student Members Preview */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('team.studentMembers')}</h3>
              <p className="text-gray-700 text-sm">{t('team.studentMembersDesc')}</p>
            </div>
            
            {/* Program Operators Preview */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('team.programOperators')}</h3>
              <p className="text-gray-700 text-sm">{t('team.programOperatorsDesc')}</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/team" className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300">
              View All Team Members
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('achievements.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="text-blue-500 mb-4 flex justify-center">
                <Trophy className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">SafeMate Project</h3>
              <p className="text-gray-700 mb-6">
                {t('achievements.safeMateDesc')}
              </p>
              <a 
                href="https://youtu.be/6PAem_bVcd8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                {t('common.watchDemo')}
              </a>
            </div>
            <div className="text-center">
              <div className="text-green-500 mb-4 flex justify-center">
                <Code className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('achievements.nextInnovation')}
              </h3>
              <p className="text-gray-700">
                {t('achievements.upcomingProjects')}
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/achievements" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
              View All Achievements
            </Link>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('activities.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg">
              <div className="text-orange-500 mb-4">
                <Code className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('activities.fall.title')}
              </h3>
              <p className="text-gray-700">
                {t('activities.fall.description')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg">
              <div className="text-green-500 mb-4">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('activities.spring.title')}
              </h3>
              <p className="text-gray-700">
                {t('activities.spring.description')}
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/activities" className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors duration-300">
              View All Activities
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('news.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-red-500 mb-4">
                <Newspaper className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('news.mitHackathon')}</h3>
              <p className="text-gray-600 text-sm">{t('news.mitHackathonDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-500 mb-4">
                <Newspaper className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('news.nasaChallenge')}</h3>
              <p className="text-gray-600 text-sm">{t('news.nasaChallengeDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-500 mb-4">
                <Newspaper className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('news.scratchOlympiad')}</h3>
              <p className="text-gray-600 text-sm">{t('news.scratchOlympiadDesc')}</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/news" className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300">
              View All News
            </Link>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white mb-6">
            <Mail className="w-12 h-12 mx-auto mb-4" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">{t('common.getInvolved')}</h2>
          <p className="text-xl text-purple-100 mb-8">
            {t('common.contact')}
          </p>
          <a 
            href="mailto:info@globalimpactinnovators.org"
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
          >
            <Mail className="w-5 h-5 mr-2" />
            info@globalimpactinnovators.org
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;