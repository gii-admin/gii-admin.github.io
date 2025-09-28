'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '@/types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.mission': 'Mission',
    'nav.team': 'Team',
    'nav.activities': 'Activities',
    'nav.achievements': 'Achievements',
    'nav.news': 'News',
    'nav.about': 'About Us',
    
    // Common
    'common.contact': 'If you are interested, please contact us at anticodingcodingteam@gmail.com for more information.',
    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
    'common.contactUs': 'Contact Us',
    'common.watchDemo': 'Watch Demo Video',
    'common.viewAll': 'View All News',
    'common.getInvolved': 'Get Involved',
    'common.connectWithUs': 'Connect With Us',
    'common.joinOurMission': 'Join Our Mission',
    'common.readyToAchieve': 'Ready to Achieve More?',
    'common.readyToJoin': 'Ready to Join Our Program?',
    'common.stayConnected': 'Stay Connected',
    
    // Home
    'home.hero.title': 'Global Impact Innovators',
    'home.hero.subtitle': 'Empowering young learners through technology and innovation',
    
    // Mission
    'mission.title': 'Our Mission',
    'mission.name': 'Global Impact Innovators',
    'mission.statement': 'As technology and AI rapidly evolve, we are at a pivotal moment in history—shaping a new paradigm for humanity. Global Impact Innovators empowers young learners through volunteer-led coding education and discussions on social issues, enabling them to develop technological solutions that address real-world challenges and support vulnerable communities.',
    
    // Activities
    'activities.title': 'Our Activities',
    'activities.fall.title': 'Fall Semester',
    'activities.fall.description': 'New students receive essential coding education while existing members serve as coaches and mentors.',
    'activities.spring.title': 'Spring Semester',
    'activities.spring.description': 'New and existing members form teams to participate in various US and international competitions and challenges.',
    'activities.heroDesc': 'Our year-round program designed to educate, inspire, and empower young innovators',
    'activities.annualProgram': 'Our Annual Program',
    'activities.programDesc': 'We follow a structured two-semester approach that combines education, mentorship, and real-world application',
    'activities.foundationLearning': 'Foundation & Learning',
    'activities.applicationCompetition': 'Application & Competition',
    'activities.codingFundamentals': 'Coding Fundamentals',
    'activities.codingFundamentalsDesc': 'New students learn programming basics, web development, and mobile app creation',
    'activities.peerMentorship': 'Peer Mentorship',
    'activities.peerMentorshipDesc': 'Experienced members provide one-on-one coaching and guidance',
    'activities.socialIssuesDiscussions': 'Social Issues Discussions',
    'activities.socialIssuesDiscussionsDesc': 'Weekly sessions exploring how technology can address global challenges',
    'activities.teamFormation': 'Team Formation',
    'activities.teamFormationDesc': 'Mixed teams of new and experienced members collaborate on projects',
    'activities.competitionParticipation': 'Competition Participation',
    'activities.competitionParticipationDesc': 'Teams compete in hackathons and coding challenges across the US and internationally',
    'activities.realWorldProjects': 'Real-World Projects',
    'activities.realWorldProjectsDesc': 'Develop applications that address genuine social and environmental challenges',
    'activities.whatYouGain': 'What You\'ll Gain',
    'activities.skillsExperiences': 'The skills and experiences that will shape your future',
    'activities.technicalSkills': 'Technical Skills',
    'activities.technicalSkillsDesc': 'Master programming languages, frameworks, and development tools',
    'activities.leadership': 'Leadership',
    'activities.leadershipDesc': 'Develop mentoring and team leadership capabilities',
    'activities.problemSolving': 'Problem Solving',
    'activities.problemSolvingDesc': 'Learn to identify and solve real-world challenges through technology',
    'activities.recognition': 'Recognition',
    'activities.recognitionDesc': 'Gain recognition through competition participation and project showcases',
    'activities.programTimeline': 'Program Timeline',
    'activities.timelineDesc': 'A year-round journey of learning and growth',
    'activities.fallBegins': 'Fall Semester Begins',
    'activities.fallBeginsDesc': 'New student recruitment and initial coding workshops start',
    'activities.midProgram': 'Mid-Program Assessment',
    'activities.midProgramDesc': 'Skills evaluation and preparation for spring competitions',
    'activities.springLaunch': 'Spring Semester Launch',
    'activities.springLaunchDesc': 'Team formation and competition project development begins',
    'activities.competitionSeason': 'Competition Season',
    'activities.competitionSeasonDesc': 'Participation in major hackathons and coding competitions',
    
    // Achievements
    'achievements.title': 'Our Achievements',
    'achievements.students': 'Student Members',
    'achievements.projects': 'Featured Projects',
    'achievements.safeMateDesc': 'An innovative safety application designed to protect vulnerable communities through technology.',
    'achievements.growingCommunity': 'Our growing community of passionate young innovators from around the world.',
    'achievements.heroDesc': 'Celebrating the innovative projects and remarkable students who make our mission possible',
    'achievements.innovativeSolutions': 'Innovative solutions developed by our student teams',
    'achievements.safetyProtection': 'Safety & Protection App',
    'achievements.safeMateDetails': 'SafeMate is an innovative mobile application designed to enhance personal safety and security. The app provides real-time location sharing, emergency alerts, and community-based safety features to protect vulnerable individuals and communities.',
    'achievements.crossPlatform': 'Cross-platform mobile application',
    'achievements.realTimeMonitoring': 'Real-time safety monitoring and alerts',
    'achievements.communityNetwork': 'Community-driven safety network',
    'achievements.keyFeatures': 'Key Features',
    'achievements.emergencySOS': 'Emergency SOS with one-touch activation',
    'achievements.gpsSharing': 'GPS location sharing with trusted contacts',
    'achievements.safeZoneNotifications': 'Safe zone notifications and alerts',
    'achievements.communityReporting': 'Community reporting and support system',
    'achievements.emergencyServices': 'Integration with local emergency services',
    'achievements.nextInnovation': 'Next Innovation',
    'achievements.upcomingProjects': 'Our teams are currently developing new innovative solutions to address global challenges. Stay tuned for updates on our upcoming projects that will make a positive impact on communities worldwide.',
    'achievements.comingSoon': 'Coming Soon',
    'achievements.growingCommunityTitle': 'Our Growing Community',
    'achievements.talentedIndividuals': 'Meet the talented individuals who drive our mission forward',
    'achievements.joinCommunity': 'Join Our Community',
    'achievements.joinDesc': 'We\'re always looking for passionate young innovators to join our growing community. Be part of the next generation of global impact makers.',
    'achievements.applyToJoin': 'Apply to Join',
    'achievements.ourImpact': 'Our Impact',
    'achievements.showcaseInfluence': 'Numbers that showcase our growing influence',
    'achievements.majorProjects': 'Major Projects',
    'achievements.solutionsDeveloped': 'Innovative solutions developed',
    'achievements.studentMembers': 'Student Members',
    'achievements.multipleGenerations': 'Across multiple generations',
    'achievements.competitions': 'Competitions',
    'achievements.participatedPlanned': 'Participated and planned',
    'achievements.socialImpact': 'Social Impact',
    'achievements.globalBetterment': 'Focus on global betterment',
    
    // News
    'news.title': 'Latest News',
    'news.subtitle': 'Stay updated with the latest competitions, opportunities, and insights in coding for global betterment',
    'news.competitions': 'Competitions & Opportunities',
    'news.mitHackathon': 'MIT Global AI Hackathon 2025',
    'news.mitHackathonDesc': 'Build AI apps for UN Sustainable Development Goals using MIT App Inventor...',
    'news.nasaChallenge': 'NASA Space Apps Challenge 2025',
    'news.nasaChallengeDesc': 'October 4-5: Join 450+ global events with theme "Learn, Launch, Lead"...',
    'news.scratchOlympiad': 'Creative Computing with Scratch 2025',
    'news.scratchOlympiadDesc': 'Harvard\'s Creative Computing curriculum using MIT Scratch for young programmers...',
    'news.allNews': 'All News',
    'news.opportunities': 'Opportunities',
    'news.upcomingHighlights': 'Upcoming Highlights',
    'news.upcomingDesc': 'Don\'t miss these exciting opportunities',
    'news.competitionSeason': 'Competition Season Approaching',
    'news.competitionSeasonDesc': 'Our spring semester teams are preparing for major competitions including hackathons, coding challenges, and innovation contests. Stay tuned for updates on their progress and achievements.',
    'news.getNotified': 'Get Notified',
    'news.stayUpdated': 'Want to stay updated on the latest opportunities and our team\'s progress?',
    'news.subscribe': 'Subscribe to Updates',
    'news.stayConnected': 'Stay Connected',
    'news.visit': 'Visit',
    'news.visitOfficial': 'Visit Official Website',
    
    // About
    'about.title': 'About Us',
    'about.description': 'Global Impact Innovators is a 501(c)(3) non-profit organization dedicated to empowering young minds through technology education.',
    'about.leadership': 'Leadership Team',
    'about.meetTeam': 'Meet the dedicated team behind Global Impact Innovators',
    'about.whoWeAre': 'Who We Are',
    'about.orgDesc1': 'Founded with the vision of empowering young minds through technology, Global Impact Innovators operates as a 501(c)(3) non-profit organization dedicated to fostering innovation for global good.',
    'about.orgDesc2': 'Our unique approach combines hands-on coding education with meaningful discussions about social issues, preparing students to become not just skilled programmers, but thoughtful leaders who use technology to make a positive difference in the world.',
    'about.nonProfitStatus': 'Non-profit Status',
    'about.globalImpact': 'Global Impact Focus',
    'about.ourValues': 'Our Values',
    'about.innovation': 'Innovation Through Education',
    'about.innovationDesc': 'Fostering creativity and technical skills through peer-to-peer learning',
    'about.socialResponsibility': 'Social Responsibility',
    'about.socialResponsibilityDesc': 'Every project aims to address real-world challenges and help communities',
    'about.globalPerspective': 'Global Perspective',
    'about.globalPerspectiveDesc': 'Preparing students to think globally and act responsibly',
    'about.collaborativeGrowth': 'Collaborative Growth',
    'about.collaborativeGrowthDesc': 'Building a supportive community where everyone learns from each other',
    'about.ourReach': 'Our Reach',
    'about.buildingCommunity': 'Building a global community of young innovators',
    'about.leadershipMembers': 'Leadership Members',
    'about.experiencedMentors': 'Experienced mentors and organizers',
    'about.usLocations': 'US Locations',
    'about.bayAreaChicago': 'Bay Area and Chicago coverage',
    'about.impactFocus': 'Impact Focus',
    'about.worldwideChallenges': 'Solutions for worldwide challenges',
    'about.nonProfit': 'Non-profit',
    'about.registeredCharity': 'Registered charitable organization',
    'about.ourCommitment': 'Our Commitment',
    'about.commitmentText': 'We are committed to nurturing the next generation of technology leaders who will use their skills not just for personal success, but for the betterment of humanity. Through education, mentorship, and real-world application, we prepare students to tackle the challenges of tomorrow with innovation, empathy, and responsibility.',
    
    // Team
    'team.title': 'Our Team',
    'team.meetTeam': 'Meet the dedicated individuals who make Global Impact Innovators possible',
    'team.studentLeaders': 'Student Leaders',
    'team.studentLeadersDesc': 'Outstanding students who help guide and mentor their peers',
    'team.studentMembers': 'Student Members',
    'team.studentMembersDesc': 'Talented young individuals participating in our programs',
    'team.programOperators': 'Program Operators',
    'team.programOperatorsDesc': 'Experienced mentors and leaders who guide our organization',
    'team.positionAvailable': 'Position Available',
    'team.joinTeam': 'Join Our Team',
    'team.joinTeamDesc': 'Interested in becoming part of our community?',
    'team.joinCommunity': 'Join Our Community',
    'team.joinCommunityDesc': 'Ready to be part of our growing family of innovators?',
    'team.applyToJoin': 'Apply to Join',
    'team.studentMember1': 'Student Member 1',
    'team.studentMember2': 'Student Member 2',
    'team.studentMember3': 'Student Member 3',
  },
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.mission': '미션',
    'nav.team': '우리 팀',
    'nav.activities': '활동',
    'nav.achievements': '성과',
    'nav.news': '뉴스',
    'nav.about': '운영진',
    
    // Common
    'common.contact': '관심이 있다면 anticodingcodingteam@gmail.com로 이메일을 보내어 정보를 얻어보세요.',
    'common.readMore': '더 읽기',
    'common.learnMore': '더 알아보기',
    'common.contactUs': '연락하기',
    'common.watchDemo': '데모 영상 보기',
    'common.viewAll': '모든 뉴스 보기',
    'common.getInvolved': '참여하기',
    'common.connectWithUs': '함께해요',
    'common.joinOurMission': '미션에 동참하기',
    'common.readyToAchieve': '더 많은 성과를 이루고 싶나요?',
    'common.readyToJoin': '프로그램에 참여할 준비가 되셨나요?',
    'common.stayConnected': '연락을 유지해요',
    
    // Home
    'home.hero.title': 'Global Impact Innovators',
    'home.hero.subtitle': '기술과 혁신을 통해 젊은 학습자들에게 힘을 실어주다',
    
    // Mission
    'mission.title': '우리의 미션',
    'mission.name': 'Global Impact Innovators',
    'mission.statement': '기술과 AI가 급속히 발전하는 가운데, 우리는 인류의 새로운 패러다임을 형성하는 중요한 시점에 있습니다. Global Impact Innovators는 자원봉사 주도의 코딩 교육과 사회 문제에 대한 토론을 통해 젊은 학습자들이 실제 문제를 해결하고 취약한 지역사회를 지원하는 기술 솔루션을 개발할 수 있도록 지원합니다.',
    
    // Activities
    'activities.title': '우리의 활동',
    'activities.fall.title': '가을 학기',
    'activities.fall.description': '새로 입단하는 학생들은 필요한 코딩 교육을 받고, 기존의 멤버는 그 학생들을 코치합니다.',
    'activities.spring.title': '봄 학기',
    'activities.spring.description': '새로 입단하여 코딩 교육을 받은 학생들과 기존의 멤버가 팀을 이루어 미국과 해외 여러 대회와 챌린지에 출품합니다.',
    'activities.heroDesc': '젊은 혁신가들을 교육, 영감, 역량 강화하기 위해 설계된 연중 프로그램',
    'activities.annualProgram': '우리의 연간 프로그램',
    'activities.programDesc': '교육, 멘토링, 실제 적용을 결합한 구조화된 2학기 접근 방식을 따릅니다',
    'activities.foundationLearning': '기초 및 학습',
    'activities.applicationCompetition': '적용 및 경쟁',
    'activities.codingFundamentals': '코딩 기초',
    'activities.codingFundamentalsDesc': '새 학생들은 프로그래밍 기초, 웹 개발, 모바일 앱 제작을 배웁니다',
    'activities.peerMentorship': '동료 멘토링',
    'activities.peerMentorshipDesc': '경험이 있는 멤버들이 일대일 코칭과 지도를 제공합니다',
    'activities.socialIssuesDiscussions': '사회 문제 토론',
    'activities.socialIssuesDiscussionsDesc': '기술이 글로벌 과제를 해결하는 방법을 탐구하는 주간 세션',
    'activities.teamFormation': '팀 구성',
    'activities.teamFormationDesc': '신규 및 기존 멤버의 혼합 팀이 프로젝트에서 협업합니다',
    'activities.competitionParticipation': '경쟁 참여',
    'activities.competitionParticipationDesc': '팀들이 미국과 국제적으로 해커톤과 코딩 챌린지에서 경쟁합니다',
    'activities.realWorldProjects': '실제 프로젝트',
    'activities.realWorldProjectsDesc': '진정한 사회적, 환경적 과제를 해결하는 애플리케이션 개발',
    'activities.whatYouGain': '얻게 될 것',
    'activities.skillsExperiences': '당신의 미래를 형성할 기술과 경험',
    'activities.technicalSkills': '기술적 능력',
    'activities.technicalSkillsDesc': '프로그래밍 언어, 프레임워크, 개발 도구 숙달',
    'activities.leadership': '리더십',
    'activities.leadershipDesc': '멘토링 및 팀 리더십 능력 개발',
    'activities.problemSolving': '문제 해결',
    'activities.problemSolvingDesc': '기술을 통해 실제 문제를 식별하고 해결하는 방법을 학습',
    'activities.recognition': '인정',
    'activities.recognitionDesc': '경쟁 참여 및 프로젝트 쇼케이스를 통한 인정 획득',
    'activities.programTimeline': '프로그램 일정',
    'activities.timelineDesc': '연중 학습 및 성장의 여정',
    'activities.fallBegins': '가을 학기 시작',
    'activities.fallBeginsDesc': '새 학생 모집 및 초기 코딩 워크숍 시작',
    'activities.midProgram': '중간 평가',
    'activities.midProgramDesc': '기술 평가 및 봄 대회 준비',
    'activities.springLaunch': '봄 학기 시작',
    'activities.springLaunchDesc': '팀 구성 및 경쟁 프로젝트 개발 시작',
    'activities.competitionSeason': '경쟁 시즌',
    'activities.competitionSeasonDesc': '주요 해커톤 및 코딩 경쟁 참여',
    
    // Achievements
    'achievements.title': '우리의 성과',
    'achievements.students': '학생 멤버',
    'achievements.projects': '주요 프로젝트',
    'achievements.safeMateDesc': '기술을 통해 취약한 커뮤니티를 보호하도록 설계된 혁신적인 안전 애플리케이션입니다.',
    'achievements.growingCommunity': '전 세계의 열정적인 젊은 혁신가들로 이루어진 우리의 성장하는 커뮤니티.',
    'achievements.heroDesc': '우리의 미션을 가능하게 하는 혁신적인 프로젝트와 뛰어난 학생들을 축하합니다',
    'achievements.innovativeSolutions': '학생 팀이 개발한 혁신적인 솔루션',
    'achievements.safetyProtection': '안전 및 보호 앱',
    'achievements.safeMateDetails': 'SafeMate는 개인의 안전과 보안을 강화하도록 설계된 혁신적인 모바일 애플리케이션입니다. 이 앱은 실시간 위치 공유, 비상 경보, 커뮤니티 기반 안전 기능을 제공하여 취약한 개인과 커뮤니티를 보호합니다.',
    'achievements.crossPlatform': '크로스 플랫폼 모바일 애플리케이션',
    'achievements.realTimeMonitoring': '실시간 안전 모니터링 및 경보',
    'achievements.communityNetwork': '커뮤니티 기반 안전 네트워크',
    'achievements.keyFeatures': '주요 기능',
    'achievements.emergencySOS': '원터치 활성화 응급 SOS',
    'achievements.gpsSharing': '신뢰할 수 있는 연락처와 GPS 위치 공유',
    'achievements.safeZoneNotifications': '안전 구역 알림 및 경보',
    'achievements.communityReporting': '커뮤니티 신고 및 지원 시스템',
    'achievements.emergencyServices': '지역 응급 서비스와 통합',
    'achievements.nextInnovation': '다음 혁신',
    'achievements.upcomingProjects': '우리 팀은 현재 글로벌 도전 과제를 해결하기 위한 새로운 혁신적인 솔루션을 개발하고 있습니다. 전 세계 커뮤니티에 긍정적인 영향을 미칠 우리의 향후 프로젝트 업데이트를 기대해 주세요.',
    'achievements.comingSoon': '곧 출시 예정',
    'achievements.growingCommunityTitle': '우리의 성장하는 커뮤니티',
    'achievements.talentedIndividuals': '우리의 미션을 이끌어가는 재능 있는 개인들을 만나보세요',
    'achievements.joinCommunity': '커뮤니티에 참여하기',
    'achievements.joinDesc': '우리는 항상 성장하는 커뮤니티에 합류할 열정적인 젊은 혁신가들을 찾고 있습니다. 차세대 글로벌 임팩트 메이커의 일원이 되어 보세요.',
    'achievements.applyToJoin': '참여 신청하기',
    'achievements.ourImpact': '우리의 영향력',
    'achievements.showcaseInfluence': '우리의 성장하는 영향력을 보여주는 수치',
    'achievements.majorProjects': '주요 프로젝트',
    'achievements.solutionsDeveloped': '개발된 혁신적인 솔루션',
    'achievements.studentMembers': '학생 멤버',
    'achievements.multipleGenerations': '여러 세대에 걸쳐',
    'achievements.competitions': '대회',
    'achievements.participatedPlanned': '참가 및 계획',
    'achievements.socialImpact': '사회적 임팩트',
    'achievements.globalBetterment': '글로벌 개선에 중점',
    
    // News
    'news.title': '최신 뉴스',
    'news.subtitle': '글로벌 개선을 위한 코딩 분야의 최신 대회, 기회 및 인사이트로 업데이트를 유지하세요',
    'news.competitions': '대회 및 기회',
    'news.mitHackathon': 'MIT 글로벌 AI 해커톤 2025',
    'news.mitHackathonDesc': 'MIT 앱 인벤터로 UN 지속가능발전목표를 위한 AI 앱 개발...',
    'news.nasaChallenge': 'NASA 스페이스 앱스 챌린지 2025',
    'news.nasaChallengeDesc': '10월 4-5일: "Learn, Launch, Lead" 테마로 전 세계 450+ 이벤트 참여...',
    'news.scratchOlympiad': '스크래치 창의적 컴퓨팅 2025',
    'news.scratchOlympiadDesc': '하버드 창의적 컴퓨팅 교육과정으로 MIT 스크래치를 활용한 젊은 프로그래머 교육...',
    'news.allNews': '모든 뉴스',
    'news.opportunities': '기회',
    'news.upcomingHighlights': '다가오는 하이라이트',
    'news.upcomingDesc': '이런 흥미진진한 기회들을 놓치지 마세요',
    'news.competitionSeason': '대회 시즌 접근 중',
    'news.competitionSeasonDesc': '우리 봄 학기 팀들이 해커톤, 코딩 챌린지, 혁신 대회를 포함한 주요 경쟁을 준비하고 있습니다. 그들의 진행 상황과 성과에 대한 업데이트를 기대해 주세요.',
    'news.getNotified': '알림 받기',
    'news.stayUpdated': '최신 기회와 우리 팀의 진행 상황에 대한 업데이트를 받고 싶으신가요?',
    'news.subscribe': '업데이트 구독하기',
    'news.stayConnected': '연락 유지하기',
    'news.visit': '방문',
    'news.visitOfficial': '공식 웹사이트 방문',
    
    // About
    'about.title': '운영진',
    'about.description': 'Global Impact Innovators는 기술 교육을 통해 젊은 인재들에게 힘을 실어주는 501(c)(3) 비영리 단체입니다.',
    'about.leadership': '리더십 팀',
    'about.meetTeam': 'Global Impact Innovators의 헌신적인 팀을 만나보세요',
    'about.whoWeAre': '우리는 누구인가',
    'about.orgDesc1': '젊은 인재들을 기술을 통해 역량 강화한다는 비전으로 설립된 Global Impact Innovators는 글로벌 선량을 위한 혁신을 촉진하는 501(c)(3) 비영리 단체로 운영됩니다.',
    'about.orgDesc2': '우리만의 독특한 접근법은 실무 중심의 코딩 교육과 사회 문제에 대한 의미 있는 토론을 결합하여 학생들이 단순히 숙련된 프로그래머가 되는 것이 아니라 기술을 사용해 세상에 긍정적인 변화를 만드는 사려 깊은 리더가 되도록 준비시킵니다.',
    'about.nonProfitStatus': '비영리 지위',
    'about.globalImpact': '글로벌 임팩트 중심',
    'about.ourValues': '우리의 가치',
    'about.innovation': '교육을 통한 혁신',
    'about.innovationDesc': '동료 간 학습을 통해 창의성과 기술력 증진',
    'about.socialResponsibility': '사회적 책임',
    'about.socialResponsibilityDesc': '모든 프로젝트는 실제 문제를 해결하고 지역사회를 돕는 것을 목표로 합니다',
    'about.globalPerspective': '글로벌 관점',
    'about.globalPerspectiveDesc': '학생들이 글로벌하게 생각하고 책임감 있게 행동하도록 준비',
    'about.collaborativeGrowth': '협력적 성장',
    'about.collaborativeGrowthDesc': '모든 구성원이 서로 배우는 지원적인 커뮤니티 구축',
    'about.ourReach': '우리의 영향력',
    'about.buildingCommunity': '젊은 혁신가들의 글로벌 커뮤니티 구축',
    'about.leadershipMembers': '리더십 멤버',
    'about.experiencedMentors': '경험이 풍부한 멘토와 조직자들',
    'about.usLocations': '미국 지역',
    'about.bayAreaChicago': '베이 에리어와 시카고 지역 커버',
    'about.impactFocus': '임팩트 중심',
    'about.worldwideChallenges': '전 세계 문제에 대한 솔루션',
    'about.nonProfit': '비영리',
    'about.registeredCharity': '등록된 자선 단체',
    'about.ourCommitment': '우리의 약속',
    'about.commitmentText': '우리는 개인적 성공뿐만 아니라 인류의 발전을 위해 기술을 사용할 차세대 기술 리더를 양성하는 데 전념하고 있습니다. 교육, 멘토링, 실제 적용을 통해 학생들이 혁신, 공감, 책임감을 가지고 내일의 도전에 맞설 수 있도록 준비시킵니다.',
    
    // Team
    'team.title': '우리 팀',
    'team.meetTeam': 'Global Impact Innovators를 가능하게 하는 헌신적인 개인들을 만나보세요',
    'team.studentLeaders': '학생 리더',
    'team.studentLeadersDesc': '동료들을 안내하고 멘토링하는 뛰어난 학생들',
    'team.studentMembers': '학생 멤버',
    'team.studentMembersDesc': '우리 프로그램에 참여하는 재능 있는 젊은 개인들',
    'team.programOperators': '프로그램 운영진',
    'team.programOperatorsDesc': '우리 조직을 이끄는 경험이 풍부한 멘토와 리더들',
    'team.positionAvailable': '채용 가능',
    'team.joinTeam': '팀에 합류하기',
    'team.joinTeamDesc': '우리 커뮤니티의 일원이 되는데 관심이 있으신가요?',
    'team.joinCommunity': '커뮤니티에 참여하기',
    'team.joinCommunityDesc': '성장하는 혁신가 가족의 일원이 될 준비가 되셨나요?',
    'team.applyToJoin': '참여 신청하기',
    'team.studentMember1': '학생 멤버 1',
    'team.studentMember2': '학생 멤버 2',
    'team.studentMember3': '학생 멤버 3',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Load language preference from localStorage on mount
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ko')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  const handleSetLanguage = React.useCallback((newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage);
  }, []);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}