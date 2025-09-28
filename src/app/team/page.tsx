'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Users, MapPin, Crown, Star, UserCheck, Mail } from 'lucide-react';

const TeamPage = () => {
  const { t } = useLanguage();

  const studentLeaders = [
    // Team A (ordered by last name: Jung, Kim, Yang)
    {
      name: "Ethan Jung",
      team: "Team A",
      role: "Organizer", 
      initials: "EJ",
      color: "blue"
    },
    {
      name: "Jane Kim",
      team: "Team A", 
      role: "Designer",
      initials: "JK",
      color: "purple"
    },
    {
      name: "Yujin Yang",
      team: "Team A",
      role: "Programmer",
      initials: "YY", 
      color: "green"
    },
    // Team B (ordered by last name: Crowe, Park, Song)
    {
      name: "Alex Crowe",
      team: "Team B",
      role: "Programmer",
      initials: "AC",
      color: "orange"
    },
    {
      name: "Amy Park",
      team: "Team B",
      role: "Designer",
      initials: "AP",
      color: "pink"
    },
    {
      name: "Natalie Song", 
      team: "Team B",
      role: "Organizer",
      initials: "NS",
      color: "red"
    }
  ];

  const studentMembers = [
    { key: "team.studentMember1" },
    { key: "team.studentMember2" },
    { key: "team.studentMember3" }
  ];

  const operators = [
    {
      name: 'Myung Kyung Chung',
      role: 'Lead Mentor & Program Director',
      location: 'Bay Area, California, USA',
      description: 'Dedicated to empowering young minds through technology education and mentorship. Brings years of experience in guiding students toward innovative solutions for global challenges.',
      initials: 'MC',
      color: 'purple'
    },
    {
      name: 'Youngran Chae',
      role: 'Financial Officer',
      location: 'Bay Area, California, USA',
      description: 'Ensures the financial sustainability and transparency of our organization. Manages budgets, grants, and funding initiatives to support our educational programs.',
      initials: 'YC',
      color: 'blue'
    },
    {
      name: 'YoungMi Park',
      role: 'Chief Operating Officer',
      location: 'Chicago, Illinois, USA',
      description: 'Oversees day-to-day operations and strategic planning. Coordinates between different program components and ensures smooth execution of our mission.',
      initials: 'YP',
      color: 'green'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t('team.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            {t('team.meetTeam')}
          </p>
        </div>
      </section>

      {/* Student Leaders */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
              <Crown className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('team.studentLeaders')}
            </h2>
            <p className="text-lg text-gray-700">
              {t('team.studentLeadersDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentLeaders.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    leader.color === 'blue' ? 'bg-blue-100' :
                    leader.color === 'purple' ? 'bg-purple-100' :
                    leader.color === 'green' ? 'bg-green-100' :
                    leader.color === 'orange' ? 'bg-orange-100' :
                    leader.color === 'pink' ? 'bg-pink-100' :
                    leader.color === 'red' ? 'bg-red-100' :
                    'bg-gray-100'
                  }`}>
                    <span className={`font-bold text-lg ${
                      leader.color === 'blue' ? 'text-blue-600' :
                      leader.color === 'purple' ? 'text-purple-600' :
                      leader.color === 'green' ? 'text-green-600' :
                      leader.color === 'orange' ? 'text-orange-600' :
                      leader.color === 'pink' ? 'text-pink-600' :
                      leader.color === 'red' ? 'text-red-600' :
                      'text-gray-600'
                    }`}>
                      {leader.initials}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className={`font-medium mb-2 ${
                    leader.color === 'blue' ? 'text-blue-600' :
                    leader.color === 'purple' ? 'text-purple-600' :
                    leader.color === 'green' ? 'text-green-600' :
                    leader.color === 'orange' ? 'text-orange-600' :
                    leader.color === 'pink' ? 'text-pink-600' :
                    leader.color === 'red' ? 'text-red-600' :
                    'text-gray-600'
                  }`}>{leader.team}</p>
                  <p className="text-gray-700 text-sm">{leader.role}</p>
                  <div className="mt-3">
                    <Crown className="w-4 h-4 text-yellow-500 mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Members */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('team.studentMembers')}
            </h2>
            <p className="text-lg text-gray-700">
              {t('team.studentMembersDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {studentMembers.map((student, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-300">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">{t(student.key)}</p>
                <p className="text-gray-400 text-sm mt-2">{t('team.positionAvailable')}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white max-w-md mx-auto">
              <h4 className="text-xl font-bold mb-2">{t('team.joinCommunity')}</h4>
              <p className="mb-4">
                {t('team.joinCommunityDesc')}
              </p>
              <a 
                href="mailto:anticodingcodingteam@gmail.com"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
              >
                {t('team.applyToJoin')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Program Operators */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <UserCheck className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('team.programOperators')}
            </h2>
            <p className="text-lg text-gray-700">
              {t('team.programOperatorsDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {operators.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border">
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    member.color === 'purple' ? 'bg-purple-100' :
                    member.color === 'blue' ? 'bg-blue-100' :
                    member.color === 'green' ? 'bg-green-100' :
                    'bg-gray-100'
                  }`}>
                    <span className={`text-2xl font-bold ${
                      member.color === 'purple' ? 'text-purple-600' :
                      member.color === 'blue' ? 'text-blue-600' :
                      member.color === 'green' ? 'text-green-600' :
                      'text-gray-600'
                    }`}>
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className={`font-semibold mb-2 ${
                    member.color === 'purple' ? 'text-purple-600' :
                    member.color === 'blue' ? 'text-blue-600' :
                    member.color === 'green' ? 'text-green-600' :
                    'text-gray-600'
                  }`}>{member.role}</p>
                  <div className="flex items-center justify-center text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{member.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-center leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white mb-6">
            <Mail className="w-12 h-12 mx-auto mb-4" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">{t('team.joinTeam')}</h2>
          <p className="text-xl text-purple-100 mb-8">
            {t('team.joinTeamDesc')}
          </p>
          <a 
            href="mailto:anticodingcodingteam@gmail.com"
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

export default TeamPage;