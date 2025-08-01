/* ===========================================
   SCACCHI MENTALI - JAVASCRIPT FUNCTIONS
   Gestione date, share, localStorage
   =========================================== */

// Inizializzazione al caricamento della pagina
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/* ===========================================
   FUNZIONI PRINCIPALI
   =========================================== */

function initializeApp() {
    console.log('🔮 Scacchi Mentali - App inizializzata');
    
    // Imposta la data corrente nelle pagine archetipi
    setCurrentDate();
    
    // Inizializza i pulsanti di share e save
    initializeButtons();
    
    // Aggiunge animazioni di ingresso
    addScrollAnimations();
}

/* ===========================================
   GESTIONE DATE
   =========================================== */

function setCurrentDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const today = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        const formattedDate = today.toLocaleDateString('it-IT', options);
        dateElement.textContent = formattedDate;
    }
}

/* ===========================================
   CONDIVISIONE E SALVATAGGIO
   =========================================== */

function shareMessage(archetipo, message) {
    const shareData = {
        title: `Scacchi Mentali - ${archetipo}`,
        text: `${message}\n\n#ScacchiMentali #${archetipo}`,
        url: window.location.href
    };

    // Verifica se il browser supporta la Web Share API
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        navigator.share(shareData)
            .then(() => {
                console.log('✅ Condivisione completata');
                showNotification('Messaggio condiviso con successo!', 'success');
            })
            .catch((error) => {
                console.log('❌ Errore nella condivisione:', error);
                fallbackShare(shareData);
            });
    } else {
        // Fallback per browser che non supportano Web Share API
        fallbackShare(shareData);
    }
}

function fallbackShare(shareData) {
    const textToShare = `${shareData.text}\n${shareData.url}`;
    
    // Copia il testo negli appunti
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToShare)
            .then(() => {
                showNotification('Messaggio copiato negli appunti!', 'success');
            })
            .catch(() => {
                // Fallback per browser più vecchi
                legacyCopyToClipboard(textToShare);
            });
    } else {
        legacyCopyToClipboard(textToShare);
    }
}

function legacyCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification('Messaggio copiato negli appunti!', 'success');
    } catch (err) {
        console.error('❌ Impossibile copiare il testo:', err);
        showNotification('Impossibile copiare il messaggio', 'error');
    }
    
    document.body.removeChild(textArea);
}

function saveMessage(archetipo, message) {
    try {
        const savedMessages = getSavedMessages();
        const messageData = {
            id: Date.now(),
            archetipo: archetipo,
            message: message,
            date: new Date().toISOString(),
            formattedDate: new Date().toLocaleDateString('it-IT')
        };
        
        savedMessages.push(messageData);
        localStorage.setItem('scacchi_mentali_messages', JSON.stringify(savedMessages));
        
        console.log('💾 Messaggio salvato:', messageData);
        showNotification('Messaggio salvato con successo!', 'success');
        
        // Aggiorna il contatore se presente
        updateSavedMessagesCounter();
        
    } catch (error) {
        console.error('❌ Errore nel salvataggio:', error);
        showNotification('Errore nel salvataggio del messaggio', 'error');
    }
}

function getSavedMessages() {
    try {
        const messages = localStorage.getItem('scacchi_mentali_messages');
        return messages ? JSON.parse(messages) : [];
    } catch (error) {
        console.error('❌ Errore nel recupero messaggi salvati:', error);
        return [];
    }
}

function updateSavedMessagesCounter() {
    const counter = document.getElementById('saved-messages-counter');
    if (counter) {
        const savedMessages = getSavedMessages();
        counter.textContent = savedMessages.length;
    }
}

/* ===========================================
   NOTIFICHE
   =========================================== */

function showNotification(message, type = 'info') {
    // Rimuove notifiche esistenti
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Crea nuova notifica
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // Aggiunge gli stili
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Rimuove la notifica dopo 3 secondi
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return '✅';
        case 'error': return '❌';
        default: return 'ℹ️';
    }
}

/* ===========================================
   INIZIALIZZAZIONE PULSANTI
   =========================================== */

function initializeButtons() {
    // Pulsante condividi
    const shareButton = document.getElementById('share-button');
    if (shareButton) {
        shareButton.addEventListener('click', function() {
            const archetipo = this.dataset.archetipo;
            const messageElement = document.getElementById('daily-message');
            const message = messageElement ? messageElement.textContent : '';
            shareMessage(archetipo, message);
        });
    }
    
    // Pulsante salva
    const saveButton = document.getElementById('save-button');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            const archetipo = this.dataset.archetipo;
            const messageElement = document.getElementById('daily-message');
            const message = messageElement ? messageElement.textContent : '';
            saveMessage(archetipo, message);
        });
    }
    
    // Aggiorna contatore messaggi salvati
    updateSavedMessagesCounter();
}

/* ===========================================
   ANIMAZIONI
   =========================================== */

function addScrollAnimations() {
    // Aggiunge animazioni di scroll per elementi con delay
    const animatedElements = document.querySelectorAll('.archetipo-card, .step');
    
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Intersection Observer per animazioni al scroll
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        const elementsToAnimate = document.querySelectorAll('.archetipo-card, .step');
        elementsToAnimate.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
}

/* ===========================================
   UTILITÀ
   =========================================== */

// Aggiunge stili CSS per le animazioni delle notifiche
function addNotificationStyles() {
    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
        `;
        document.head.appendChild(styles);
    }
}

// Inizializza gli stili delle notifiche
addNotificationStyles();

/* ===========================================
   FUNZIONI PUBBLICHE (USATE NELLE PAGINE HTML)
   =========================================== */

// Esporta le funzioni per l'uso globale
window.ScacchiMentali = {
    shareMessage,
    saveMessage,
    getSavedMessages,
    showNotification
};