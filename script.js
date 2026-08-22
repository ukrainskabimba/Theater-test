const selectedSeatText = document.getElementById('selected-seat');
const priceText = document.getElementById('seat-price');
const selectEl = document.getElementById('performance-select');
const titleEl = document.getElementById('performance-title');
const hallEl = document.getElementById('hall-wrapper');
const dateBlock = document.getElementById('date-selection');
const dateContainer = document.getElementById('date-buttons-container');
const timeBlock = document.getElementById('time-selection');
const timeContainer = document.getElementById('time-buttons-container');

// Використовуємо sessionStorage для стабільності залу в межах однієї вкладки
let occupiedData = JSON.parse(sessionStorage.getItem('theaterSessionArchive')) || {};

let selectedDate = null;
let selectedTime = null;

const performanceNames = {
    'chicago': "Мюзикл 'Чикаго'",
    'phantom': 'Привид Опери',
    'swan': 'Лебедине Озеро'
};

const availableDates = ["20 Травня", "21 Травня", "22 Травня"];
const availableTimes = ["15:00", "19:00"];

function updateUI(perfValue) {
    selectedDate = null;
    selectedTime = null;
    if (timeContainer) timeContainer.innerHTML = '';
    if (timeBlock) timeBlock.style.display = 'none';

    if (perfValue && performanceNames[perfValue]) {
        if (titleEl) titleEl.innerText = "Квитки на виставу: " + performanceNames[perfValue];
        if (dateBlock) dateBlock.style.display = 'block';
        renderDateButtons(perfValue);
        lockHall();
    } else {
        if (titleEl) titleEl.innerText = "Будь ласка, оберіть виставу";
        if (dateBlock) dateBlock.style.display = 'none';
        if (selectEl) selectEl.value = "";
        lockHall();
    }
}

function renderDateButtons(perfValue) {
    if (!dateContainer) return;
    dateContainer.innerHTML = '';
    
    availableDates.forEach(date => {
        const btn = document.createElement('button');
        btn.innerText = date;
        // Задаємо базовий стиль: прозоре тло, золотий текст і рамка
        btn.style.cssText = "padding: 8px 16px; background: transparent; border: 1px solid var(--gold); color: var(--gold); cursor: pointer; font-family: 'Montserrat', sans-serif; border-radius: 4px; transition: 0.3s;";
        
        btn.addEventListener('click', () => {
            selectedDate = date;
            selectedTime = null; 
            lockHall();
            
            // Скидаємо стилі для ВСІХ кнопок дат (повертаємо їм текст і прозорість)
            Array.from(dateContainer.children).forEach(b => {
                b.style.background = 'transparent';
                b.style.color = 'var(--gold)';
            });
            
            // Фарбуємо тільки ТЕКУЩУ натиснуту кнопку
            btn.style.background = 'var(--gold)';
            btn.style.color = 'var(--velvet)';
            
            if (timeBlock) timeBlock.style.display = 'none'; 
            renderTimeButtons(perfValue);
        });
        dateContainer.appendChild(btn);
    });
}

function renderTimeButtons(perfValue) {
    if (!timeContainer || !timeBlock) return;
    timeContainer.innerHTML = '';
    timeBlock.style.display = 'block';

    availableTimes.forEach(time => {
        const btn = document.createElement('button');
        btn.innerText = time;
        btn.style.cssText = "padding: 8px 16px; background: transparent; border: 1px solid var(--gold); color: var(--gold); cursor: pointer; font-family: 'Montserrat', sans-serif; border-radius: 4px; transition: 0.3s;";

        btn.addEventListener('click', () => {
            selectedTime = time;
            
            // Скидаємо стилі для всіх кнопок часу
            Array.from(timeContainer.children).forEach(b => {
                b.style.background = 'transparent';
                b.style.color = 'var(--gold)';
            });
            
            // Фарбуємо активний час
            btn.style.background = 'var(--gold)';
            btn.style.color = 'var(--velvet)';
            
            unlockHall(perfValue);
        });
        timeContainer.appendChild(btn);
    });
}

function lockHall() {
    if (hallEl) {
        hallEl.style.opacity = "0.2";
        hallEl.style.pointerEvents = "none";
    }
    if (typeof renderHall === "function") renderHall(false, null);
}

function unlockHall(perfValue) {
    if (hallEl) {
        hallEl.style.opacity = "1";
        hallEl.style.pointerEvents = "all";
    }
    if (typeof renderHall === "function") renderHall(true, perfValue);
}

function createSeats(containerId, rows, cols, sectorName, isActive, currentPerf) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = ''; 
    
    if (isActive && currentPerf && selectedDate && selectedTime) {
        const sessionKey = `${currentPerf}-${selectedDate}-${selectedTime}`;
        
        if (!occupiedData[sessionKey]) occupiedData[sessionKey] = {};
        if (!occupiedData[sessionKey][containerId]) occupiedData[sessionKey][containerId] = [];
        
        const userTickets = JSON.parse(localStorage.getItem('userTickets')) || [];
        let seatIndex = 0;
        
        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= cols; j++) {
                const seat = document.createElement('div');
                seat.classList.add('seat');
                
                const uniqueSeatId = `${sessionKey}-${containerId}-${seatIndex}`;
                seat.id = uniqueSeatId;
                
                if (occupiedData[sessionKey][containerId].length <= seatIndex) {
                    const isRandomOccupied = Math.random() < 0.15;
                    occupiedData[sessionKey][containerId].push(isRandomOccupied);
                }
                
                const isBoughtByAnyone = userTickets.some(t => t.seatId === uniqueSeatId);
                const isRandomlyOccupied = occupiedData[sessionKey][containerId][seatIndex];
                
                if (isRandomlyOccupied || isBoughtByAnyone) {
                    seat.classList.add('occupied');
                }
                
                seat.dataset.sector = sectorName;
                seat.dataset.row = i;
                seat.dataset.seatNum = j;
                let currentPrice = (containerId === 'parter') ? (i <= 3 ? 1000 : (i <= 6 ? 750 : 500)) : 300;
                seat.dataset.price = currentPrice;
                
                seat.addEventListener('click', () => {
                    if (!isActive || seat.classList.contains('occupied')) return;
                    if (seat.classList.contains('selected')) {
                        seat.classList.remove('selected');
                    } else {
                        const currentlySelected = document.querySelectorAll('.seat.selected');
                        if (currentlySelected.length >= 5) {
                            showLimitModal();
                            return;
                        }
                        seat.classList.add('selected');   
                    }
                    const allSelected = document.querySelectorAll('.seat.selected');
                    if (allSelected.length === 0) {
                        if (selectedSeatText) selectedSeatText.innerText = "не обрано";
                        if (priceText) priceText.innerText = "0";
                    } else {
                        let totalPrice = 0;
                        let infoStrings = [];
                        allSelected.forEach(s => {
                            totalPrice += parseInt(s.dataset.price);
                            infoStrings.push(`${s.dataset.sector}: ряд ${s.dataset.row}, місце ${s.dataset.num || s.dataset.seatNum}`);
                        });
                        if (selectedSeatText) {
                            if (infoStrings.length <= 2) {
                                selectedSeatText.innerText = infoStrings.join(' | ');
                            } else {
                                selectedSeatText.innerText = `Обрано місць: ${infoStrings.length}`;
                            }
                        }
                        if (priceText) priceText.innerText = totalPrice;
                    }
                });
                container.appendChild(seat);
                seatIndex++;
            }
        }
        sessionStorage.setItem('theaterSessionArchive', JSON.stringify(occupiedData));
    } else {
        for (let k = 0; k < rows * cols; k++) {
            const emptySeat = document.createElement('div');
            emptySeat.classList.add('seat');
            emptySeat.style.opacity = "0.1";
            container.appendChild(emptySeat);
        }
    }
}

function renderHall(isActive = false, currentPerf = null) {
    if (selectedSeatText) selectedSeatText.innerText = "не обрано";
    if (priceText) priceText.innerText = "0";
    createSeats('left-side', 10, 4, 'Ліва сторона', isActive, currentPerf); 
    createSeats('parter', 10, 12, 'Партер', isActive, currentPerf);
    createSeats('right-side', 10, 4, 'Права сторона', isActive, currentPerf);
}

function showAuthModal() {
    const modalHtml = `
        <div class="modal-overlay" id="auth-modal">
            <div class="modal-content">
                <h3>Потрібна авторизація</h3>
                <p>Щоб забронювати квиток, вам необхідно увійти у свій особистий кабінет.</p>
                <div class="modal-buttons">
                    <button class="modal-btn btn-secondary" onclick="document.getElementById('auth-modal').remove()">Назад</button>
                    <button class="modal-btn btn-danger" style="background: var(--gold); color: var(--velvet);" onclick="window.location.href='account.html'">Зареєструватися</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

const bookBtn = document.getElementById('book-btn');
if (bookBtn) {
    bookBtn.addEventListener('click', () => {
        const allSelected = document.querySelectorAll('.seat.selected');
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (allSelected.length === 0) {
            alert("Будь ласка, спочатку оберіть виставу та місце!");
            return;
        }
        if (!currentUser) {
            showAuthModal();
            return;
        }
        let seatTexts = [];
        let seatIds = [];
        allSelected.forEach(s => {
            seatIds.push(s.id);
            seatTexts.push(`${s.dataset.sector}: ряд ${s.dataset.row}, місце ${s.dataset.seatNum} на ${selectedDate} о ${selectedTime} (${s.dataset.price} грн)`);
        });
        const select = document.getElementById('performance-select');
        localStorage.setItem('lastBoughtPerformance', select.value);
        localStorage.setItem('lastBoughtText', JSON.stringify(seatTexts));
        localStorage.setItem('lastBoughtSeatId', JSON.stringify(seatIds));
        localStorage.setItem('lastBoughtPrice', priceText.innerText);
        
        window.location.href = 'payment.html';
    });
}

window.onload = function() {
    const select = document.getElementById('performance-select');
    if (select && select.value) {
        updateUI(select.value);
    } else {
        lockHall();
    }
};

function showLimitModal() {
    const modalHtml = `
        <div class="modal-overlay" id="limit-modal">
            <div class="modal-content limit-box">
                <h3>Обмеження бронювання</h3>
                <p>За один раз можна забронювати не більше 5 місць!</p>
                <div class="modal-buttons">
                    <button class="modal-btn btn-danger" style="background: var(--gold); color: var(--velvet);" onclick="document.getElementById('limit-modal').remove()">Добре</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}