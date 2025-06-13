import { content } from './content_data.js';
import { initializeAnimations } from './animations.js';

let currentLang = localStorage.getItem('lang') || 'en';

function updateContent(lang) {
    const contentData = content[lang];
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (contentData[key]) {
            if (element.tagName === 'UL') {
                element.innerHTML = contentData[key];
            } else {
                element.textContent = contentData[key];
            }
        }
    });

    document.documentElement.lang = lang;
    document.getElementById('lang-text').textContent = contentData.lang_switcher;

    updateTables(lang);
    updateNews(lang);
    updateActiveNav();
}

function updateTables(lang) {
    const { students, mentors } = content[lang];
    const { table_header_name, table_header_role, table_header_grade } = content[lang];

    const achievementsStudentTable = document.getElementById('achievements-student-table');
    if (achievementsStudentTable) {
        achievementsStudentTable.innerHTML = students.map(s => `
            <tr class="table-row-item">
                <td class="p-4">${s.name}</td>
                <td class="p-4">${s.role}</td>
                <td class="p-4">${s.grade}</td>
            </tr>
        `).join('');
    }

    const aboutStudentTable = document.getElementById('about-student-table');
    if (aboutStudentTable) {
        aboutStudentTable.innerHTML = students.map(s => `
            <tr class="table-row-item">
                <td class="p-4">${s.name}</td>
                <td class="p-4">${s.role}</td>
                <td class="p-4">${s.grade}</td>
            </tr>
        `).join('');
    }

    const aboutMentorTable = document.getElementById('about-mentor-table');
    if (aboutMentorTable) {
        aboutMentorTable.innerHTML = mentors.map(m => `
            <tr class="table-row-item">
                <td class="p-4">${m.name}</td>
                <td class="p-4">${m.role}</td>
            </tr>
        `).join('');
    }
}

function updateNews(lang) {
    const newsGrid = document.getElementById('news-grid');
    if (!newsGrid) return;

    const { news_sample_title, news_sample_date, news_sample_body, news_placeholder_title_1, news_placeholder_date_1, news_placeholder_body_1, news_placeholder_title_2, news_placeholder_date_2, news_placeholder_body_2 } = content[lang];
    
    const newsItems = [
        { title: news_sample_title, date: news_sample_date, body: news_sample_body },
        { title: news_placeholder_title_1, date: news_placeholder_date_1, body: news_placeholder_body_1 },
        { title: news_placeholder_title_2, date: news_placeholder_date_2, body: news_placeholder_body_2 },
    ];

    newsGrid.innerHTML = newsItems.map(item => `
        <div class="bg-white dark:bg-gray-950/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animated-section">
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">${item.date}</p>
            <h3 class="text-xl font-bold mb-3">${item.title}</h3>
            <p class="text-gray-600 dark:text-gray-300">${item.body}</p>
        </div>
    `).join('');
}


function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ko' : 'en';
    localStorage.setItem('lang', currentLang);
    const container = document.getElementById('app-container');
    container.style.opacity = 0;
    setTimeout(() => {
        updateContent(currentLang);
        container.style.opacity = 1;
        initializeAnimations();
    }, 300);
}

function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(link => {
        const linkPage = new URL(link.href).pathname.split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    
    const appContainer = document.getElementById('app-container');
    
    document.getElementById('lang-switcher').addEventListener('click', toggleLanguage);
    document.getElementById('mobile-menu-button').addEventListener('click', toggleMobileMenu);

    document.querySelectorAll('.nav-link-mobile').forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    updateContent(currentLang);
    appContainer.style.opacity = 1;

    initializeAnimations();
});
