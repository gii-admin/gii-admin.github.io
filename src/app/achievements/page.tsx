'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Trophy, Users, Play, Shield, Smartphone, Code, Mail, Youtube } from 'lucide-react';

const AchievementsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Achievements
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
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
                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 inline-flex items-center justify-center"
                  >
                    <Youtube className="w-5 h-5 mr-2" />
                    Watch on YouTube
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=appinventor.ai_anticodingcodingteam.hackathon2025_v3_trafficlight" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 inline-flex items-center justify-center" 
                    style={{background: 'linear-gradient(45deg, #000000 0%, #434343 100%)'}}
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Get it on Google Play
                  </a>
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
                </ul>
              </div>
            </div>
          </div>

          {/* EcoTrace Project */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{t('achievements.nextInnovation')}</h3>
                    <p className="text-green-600 font-semibold">{t('achievements.comingSoon')}</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-6">
                  {t('achievements.upcomingProjects')}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Trophy className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{t('achievements.ecoTraceCrossPlatform')}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{t('achievements.ecoTracePersonalized')}</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{t('achievements.ecoTraceCommunity')}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://youtu.be/q0JhWTD5HXA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 inline-flex items-center justify-center"
                  >
                    <Youtube className="w-5 h-5 mr-2" />
                    Watch on YouTube
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('achievements.ecoTraceKeyFeatures')}</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('achievements.ecoTraceAICalculator')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('achievements.ecoTraceRealTime')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('achievements.ecoTraceGameified')}</span>
                  </li>
                </ul>
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
            href="mailto:anticodingcodingteam@gmail.com"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
          >
            <Mail className="w-5 h-5 mr-2" />
            {t('common.contactUs')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;