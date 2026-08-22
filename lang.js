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
        book_tickets: "Замовити квитки",
        choose_performance_title: "Оберіть виставу",
        select_event_default: "Оберіть подію зі списку",
        choose_date: "Оберіть дату:",
        choose_time: "Оберіть час:",
        stage_label: "СЦЕНА",
        left_side: "ЛІВА СТОРОНА",
        right_side: "ПРАВА СТОРОНА",
        your_seat: "Ваше місце:",
        not_selected: "не обрано",
        to_pay: "До сплати:",
        currency: "грн",
        book_ticket_btn: "Забронювати квиток",
        login_title: "Вхід до системи",
        tab_login: "Увійти",
        tab_signup: "Реєстрація",
        placeholder_name: "Ваше ім'я",
        placeholder_email: "Електронна пошта",
        logout_btn: "Вийти з аккаунту",
        profile_title: "Ваш Профіль",
        profile_name_label: "Ім'я користувача",
        profile_email_label: "Електронна пошта",
        my_orders_title: "Мої замовлення",
        welcome_user: "Вітаємо",
        auth_err_exists: "Ця пошта вже зареєстрована!",
        auth_err_notfound: "Упс, ви не зареєстровані або дані невірні!",
        empty_tickets: "У вас поки немає придбаних квитків.",
        cancel_all_btn: "Скасувати всі",
        ticket_success: "Місце успішно заброньовано",
        ticket_number: "Квиток №",
        cancel_btn: "Скасувати",
        modal_cancel_title: "Скасування бронювання",
        modal_cancel_text: "Ви впевнені, що хочете скасувати цей квиток? Це місце знову стане доступним для вибору.",
        modal_cancel_all_title: "Скасування ВСІХ бронювань",
        modal_cancel_all_text: "Ви впевнені, що хочете скасувати ВСІ ваші квитки? Усі обрані місця в залі знову стануть вільними.",
        modal_yes: "Так, скасувати",
        modal_no: "Залишити"

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
        book_tickets: "Book tickets",
        choose_performance_title: "Choose a performance",
        select_event_default: "Select an event from the list",
        choose_date: "Choose date:",
        choose_time: "Choose time:",
        stage_label: "STAGE",
        left_side: "LEFT SIDE",
        right_side: "RIGHT SIDE",
        your_seat: "Your seat:",
        not_selected: "not selected",
        to_pay: "Total:",
        currency: "UAH",
        book_ticket_btn: "Book ticket",
        login_title: "System Login",
        tab_login: "Login",
        tab_signup: "Sign Up",
        placeholder_name: "Your name",
        placeholder_email: "Email address",
        logout_btn: "Logout",
        profile_title: "Your Profile",
        profile_name_label: "Username",
        profile_email_label: "Email",
        my_orders_title: "My Orders",
        welcome_user: "Welcome",
        auth_err_exists: "This email is already registered!",
        auth_err_notfound: "Oops, you are not registered or the data is incorrect!",
        empty_tickets: "You have no purchased tickets yet.",
        cancel_all_btn: "Cancel all",
        ticket_success: "Seat successfully booked",
        ticket_number: "Ticket #",
        cancel_btn: "Cancel",
        modal_cancel_title: "Cancel Booking",
        modal_cancel_text: "Are you sure you want to cancel this ticket? The seat will become available again.",
        modal_cancel_all_title: "Cancel ALL Bookings",
        modal_cancel_all_text: "Are you sure you want to cancel ALL your tickets? All selected seats will become available again.",
        modal_yes: "Yes, cancel",
        modal_no: "Keep it"
    }
};

// Функция для установки языка и обновления текста на странице
function setLanguage(lang) {
    localStorage.setItem('app_lang', lang);
    
    // Перевод обычного текста с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
    
    // Перевод обычного текста с атрибутом data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
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