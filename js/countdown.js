/**
 * Countdown Manager - Sistema centralizzato per la gestione del countdown dell'offerta
 * Modifica solo la data di scadenza qui sotto per aggiornare tutte le pagine
 */

// CONFIGURAZIONE COUNTDOWN - MODIFICA SOLO QUESTA DATA
const OFFER_END_DATE = new Date(2025, 7, 18, 23, 59, 59); // 18 Agosto 2025, 23:59:59

/**
 * Inizializza il countdown su una pagina
 * @param {string} elementId - ID dell'elemento dove mostrare il countdown
 * @param {string} format - Formato del countdown ('detailed' per giorni/ore/minuti/secondi, 'simple' per formato compatto)
 */
function initCountdown(elementId = 'countdown-timer', format = 'simple') {
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = OFFER_END_DATE.getTime() - now;

        const element = document.getElementById(elementId);
        if (!element) return;

        if (distance < 0) {
            element.innerHTML = 'Offerta scaduta!';
            element.style.color = '#ff6b35';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (format === 'detailed') {
            // Formato dettagliato per pagine private
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else if (format === 'simple') {
            // Formato semplice per homepage e subscribe
            element.textContent = `${days}g ${hours}h ${minutes}m`;
        } else if (format === 'days-only') {
            // Solo giorni per homepage
            element.textContent = days.toString();
        }
    }

    updateCountdown();
    return setInterval(updateCountdown, 1000);
}

/**
 * Inizializza il countdown per le pagine private (formato dettagliato)
 */
function initDetailedCountdown() {
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = OFFER_END_DATE.getTime() - now;

        if (distance < 0) {
            const countdownContainer = document.getElementById('countdown');
            if (countdownContainer) {
                countdownContainer.innerHTML = '<div style="color: #ff6b35; font-size: 1.2rem;">Offerta scaduta!</div>';
            }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    return setInterval(updateCountdown, 1000);
}

/**
 * Funzione di utilità per ottenere i giorni rimanenti
 */
function getDaysRemaining() {
    const now = new Date().getTime();
    const distance = OFFER_END_DATE.getTime() - now;
    
    if (distance < 0) return 0;
    
    return Math.floor(distance / (1000 * 60 * 60 * 24));
}

// Auto-inizializzazione se il DOM è già caricato
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        // Auto-detect formato in base agli elementi presenti
        if (document.getElementById('days') && document.getElementById('hours')) {
            initDetailedCountdown();
        } else if (document.getElementById('countdown-timer')) {
            initCountdown('countdown-timer', 'simple');
        } else if (document.getElementById('countdown-days')) {
            initCountdown('countdown-days', 'days-only');
        }
    });
} else {
    // DOM già caricato, inizializza immediatamente
    if (document.getElementById('days') && document.getElementById('hours')) {
        initDetailedCountdown();
    } else if (document.getElementById('countdown-timer')) {
        initCountdown('countdown-timer', 'simple');
    } else if (document.getElementById('countdown-days')) {
        initCountdown('countdown-days', 'days-only');
    }
}