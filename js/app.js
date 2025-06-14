import { content } from './content_data.js';
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

    const articles = content[lang].news_articles || [];
    const readMoreText = content[lang].read_more || 'Read More';
    const readLessText = content[lang].read_less || 'Read Less';

    newsGrid.innerHTML = articles.map((article) => `
        <div class="bg-white dark:bg-gray-950/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animated-section">
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">${article.date}</p>
            <h3 class="text-xl font-bold mb-3">${article.title}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">${article.summary}</p>
            <div class="news-details-content max-h-0 overflow-hidden transition-all duration-700 ease-in-out">
                <div class="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                    <p class="text-gray-600 dark:text-gray-300">${article.details}</p>
                    ${article.link ? `<a href="${article.link}" target="_blank" rel="noopener noreferrer" class="inline-block mt-4 text-blue-500 dark:text-blue-400 font-semibold hover:underline">${article.link_text} &rarr;</a>` : ''}
                </div>
            </div>
            <button class="news-toggle-button text-blue-500 dark:text-blue-400 font-semibold mt-2 flex items-center space-x-1 group">
                <span class="button-text">${readMoreText}</span>
                <i data-lucide="chevron-down" class="h-4 w-4 transition-transform duration-300"></i>
            </button>
        </div>
    `).join('');
    
    document.querySelectorAll('.news-toggle-button').forEach(button => {
        button.addEventListener('click', () => {
            const detailsWrapper = button.previousElementSibling;
            const icon = button.querySelector('i');
            const buttonText = button.querySelector('.button-text');

            const isCollapsed = detailsWrapper.classList.contains('max-h-0');

            if (isCollapsed) {
                detailsWrapper.classList.remove('max-h-0');
                detailsWrapper.style.maxHeight = detailsWrapper.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
                buttonText.textContent = readLessText;
            } else {
                detailsWrapper.style.maxHeight = null;
                detailsWrapper.classList.add('max-h-0');
                icon.style.transform = 'rotate(0deg)';
                buttonText.textContent = readMoreText;
            }
        });
    });

    lucide.createIcons();
}



function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ko' : 'en';
    localStorage.setItem('lang', currentLang);
    const container = document.getElementById('app-container');
    container.style.opacity = 0;
    setTimeout(() => {
        updateContent(currentLang);
        container.style.opacity = 1;
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

    });



document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app-container');
  if (appContainer) {
    appContainer.classList.remove('opacity-0');
    appContainer.classList.add('opacity-100');
  }
});
