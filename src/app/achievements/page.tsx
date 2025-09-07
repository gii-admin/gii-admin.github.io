'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Trophy, Users, Play, Shield, Smartphone, Code, Mail } from 'lucide-react';

const AchievementsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Achievements
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            {t('achievements.heroDesc')}
          </p>
        </div>
      </section>


      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('achievements.projects')}
            </h2>
            <p className="text-lg text-gray-700">
              {t('achievements.innovativeSolutions')}
            </p>
          </div>
          
          {/* SafeMate Project */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">SafeMate</h3>
                    <p className="text-blue-600 font-semibold">{t('achievements.safetyProtection')}</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-6">
                  {t('achievements.safeMateDetails')}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Smartphone className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{t('achievements.crossPlatform')}</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{t('achievements.realTimeMonitoring')}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{t('achievements.communityNetwork')}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://youtu.be/6PAem_bVcd8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    {t('common.watchDemo')}
                  </a>
                  <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center">
                    <Code className="w-5 h-5 mr-2" />
                    View Project Details
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('achievements.keyFeatures')}</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('achievements.emergencySOS')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('achievements.gpsSharing')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('achievements.safeZoneNotifications')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('achievements.communityReporting')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('achievements.emergencyServices')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project 2 Placeholder */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('achievements.nextInnovation')}</h3>
              <p className="text-lg text-gray-700 mb-6">
                {t('achievements.upcomingProjects')}
              </p>
              <div className="inline-flex items-center text-green-600 font-semibold">
                <Trophy className="w-5 h-5 mr-2" />
                {t('achievements.comingSoon')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('achievements.ourImpact')}</h2>
            <p className="text-lg text-gray-700">{t('achievements.showcaseInfluence')}</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">1+</div>
              <p className="text-gray-700 font-semibold">{t('achievements.majorProjects')}</p>
              <p className="text-gray-500 text-sm">{t('achievements.solutionsDeveloped')}</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">10+</div>
              <p className="text-gray-700 font-semibold">{t('achievements.studentMembers')}</p>
              <p className="text-gray-500 text-sm">{t('achievements.multipleGenerations')}</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">5+</div>
              <p className="text-gray-700 font-semibold">{t('achievements.competitions')}</p>
              <p className="text-gray-500 text-sm">{t('achievements.participatedPlanned')}</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">100%</div>
              <p className="text-gray-700 font-semibold">{t('achievements.socialImpact')}</p>
              <p className="text-gray-500 text-sm">{t('achievements.globalBetterment')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white mb-6">
            <Mail className="w-12 h-12 mx-auto mb-4" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">{t('common.readyToAchieve')}</h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('common.contact')}
          </p>
          <a 
            href="mailto:info@globalimpactinnovators.org"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
          >
            <Mail className="w-5 h-5 mr-2" />
            info@globalimpactinnovators.org
          </a>
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;