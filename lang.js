// Создание объекта с переводами для разных языков
const translations = {
    uk: {
        nav_home: "Головна",
        nav_booking: "Зал та квитки",
        nav_repertoire: "Репертуар",
        nav_account: "Мій кабінет",
        hero_title: "Магія сцени у кожному подиху",
        hero_subtitle: "Ласкаво просимо до найвишуканішого театру міста. Відчуйте класику крізь призму сучасності.",
        hero_btn: "Обрати виставу",
        about_title: "Про наш театр",
        about_text_1: "\"Aura Dramatica\" — це місце, де час зупиняється, а емоції набувають справжньої глибини. Ми створили цей простір для поціновувачів високого мистецтва, які шукають не просто виставу, а щире переживання та естетичну насолоду. Наша сцена поєднує велич опери, драматизм мюзиклу та витонченість класичного балету.",
        about_text_2: "Кожен сезон ми готуємо для вас особливу програму, де світові шедеври отримують нове дихання завдяки таланту наших акторів та інноваціям у театральному дизайні.",
        contacts_title: "Наші контакти",
        address: "м. Київ, вул. Театральна, 12",
        phone: "Телефон: +38 (044) 123-45-67",
        nav_repertoire: "Репертуар",
        repertoire_title: "Репертуар театру",
        chicago_title: "Чикаго",
        chicago_desc: "Легендарний мюзикл про джаз, пристрасть та правосуддя. Історія Роксі Гарт, яка мріє про славу будь-якою ціною.",
        phantom_title: "Привид Опери",
        phantom_desc: "Містична історія кохання, що розгортається в підземеллях Паризької опери. Геній музики та його прекрасна учениця Крістін.",
        swan_title: "Лебедине Озеро",
        swan_desc: "Вічна класика світового балету. Історія про кохання принца Зігфріда та прекрасної Одетти, завороженої злим магом.",
        about_show: "Про виставу",
        book_tickets: "Замовити квитки"
    },
    en: {
        nav_home: "Home",
        nav_booking: "Hall & Tickets",
        nav_repertoire: "Repertoire",
        nav_account: "My Account",
        hero_title: "The magic of the stage in every breath",
        hero_subtitle: "Welcome to the city's most exquisite theater. Experience classics through a modern lens.",
        hero_btn: "Choose performance",
        about_title: "About our theater",
        about_text_1: "\"Aura Dramatica\" is a place where time stops and emotions acquire true depth. We created this space for connoisseurs of high art who are looking not just for a performance, but for a sincere experience and aesthetic pleasure. Our stage combines the grandeur of opera, the drama of musicals, and the refinement of classical ballet.",
        about_text_2: "Every season we prepare a special program for you, where world masterpieces get a new breath thanks to the talent of our actors and innovations in theatrical design.",
        contacts_title: "Our contacts",
        address: "Kyiv, Teatralna st., 12",
        phone: "Phone: +38 (044) 123-45-67",
        nav_repertoire: "Repertoire",
        repertoire_title: "Theater Repertoire",
        chicago_title: "Chicago",
        chicago_desc: "The legendary musical about jazz, passion, and justice. The story of Roxie Hart, who dreams of fame at any cost.",
        phantom_title: "The Phantom of the Opera",
        phantom_desc: "A mystical love story set in the dungeons of the Paris Opera. The musical genius and his beautiful pupil Christine.",
        swan_title: "Swan Lake",
        swan_desc: "The eternal classic of world ballet. The story of Prince Siegfried's love for the beautiful Odette, enchanted by an evil sorcerer.",
        about_show: "About the show",
        book_tickets: "Book tickets"
    }
};

// Функция для установки языка и обновления текста на странице
function setLanguage(lang) {
    localStorage.setItem('app_lang', lang);
    
    // Переводим все элементы с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Меняем активный класс на кнопках переключения языка, если они есть
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active-lang', btn.dataset.lang === lang);
    });
}

// Автоматически применяем язык при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('app_lang') || 'uk';
    setLanguage(currentLang);
});