'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Code, Users, Trophy, BookOpen, Lightbulb, Mail } from 'lucide-react';

const ActivitiesPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t('activities.title')}
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
            {t('activities.heroDesc')}
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('activities.annualProgram')}</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('activities.programDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Fall Semester */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 md:p-12 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {t('activities.fall.title')}
                  </h3>
                  <p className="text-orange-600 font-semibold">{t('activities.foundationLearning')}</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                {t('activities.fall.description')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <BookOpen className="w-6 h-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('activities.codingFundamentals')}</h4>
                    <p className="text-gray-700">{t('activities.codingFundamentalsDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('activities.peerMentorship')}</h4>
                    <p className="text-gray-700">{t('activities.peerMentorshipDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Lightbulb className="w-6 h-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('activities.socialIssuesDiscussions')}</h4>
                    <p className="text-gray-700">{t('activities.socialIssuesDiscussionsDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Spring Semester */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 md:p-12 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {t('activities.spring.title')}
                  </h3>
                  <p className="text-green-600 font-semibold">{t('activities.applicationCompetition')}</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                {t('activities.spring.description')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('activities.teamFormation')}</h4>
                    <p className="text-gray-700">{t('activities.teamFormationDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Trophy className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('activities.competitionParticipation')}</h4>
                    <p className="text-gray-700">{t('activities.competitionParticipationDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Code className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('activities.realWorldProjects')}</h4>
                    <p className="text-gray-700">{t('activities.realWorldProjectsDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('activities.programTimeline')}</h2>
            <p className="text-lg text-gray-700">{t('activities.timelineDesc')}</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-start">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white font-bold">Sep</span>
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('activities.fallBegins')}</h3>
                  <p className="text-gray-700">{t('activities.fallBeginsDesc')}</p>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white font-bold">Dec</span>
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('activities.midProgram')}</h3>
                  <p className="text-gray-700">{t('activities.midProgramDesc')}</p>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white font-bold">Jan</span>
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('activities.springLaunch')}</h3>
                  <p className="text-gray-700">{t('activities.springLaunchDesc')}</p>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white font-bold">May</span>
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('activities.competitionSeason')}</h3>
                  <p className="text-gray-700">{t('activities.competitionSeasonDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white mb-6">
            <Mail className="w-12 h-12 mx-auto mb-4" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">{t('common.readyToJoin')}</h2>
          <p className="text-xl text-orange-100 mb-8">
            {t('common.contact')}
          </p>
          <a 
            href="mailto:info@globalimpactinnovators.org"
            className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
          >
            <Mail className="w-5 h-5 mr-2" />
            info@globalimpactinnovators.org
          </a>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;