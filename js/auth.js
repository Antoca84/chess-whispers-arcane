// Sistema di autenticazione per accessi privati
class AuthManager {
    constructor() {
        this.currentUser = null;
        this.init();
    }
    
    init() {
        // Controlla se siamo su una pagina con token
        this.checkTokenAccess();
    }
    
    checkTokenAccess() {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const pathParts = window.location.pathname.split('/').filter(part => part !== '');
        
        // Controlla se siamo su una pagina archetipo
        if (pathParts.length >= 2 && pathParts[0] === 'archetipi') {
            const archetipo = pathParts[1];
            
            if (token) {
                // C'è un token - verifica validità
                this.validateTokenAccess(archetipo, token);
            } else {
                // Nessun token - mostra contenuto pubblico limitato
                this.showPublicContent();
            }
        }
    }
    
    validateTokenAccess(archetipo, token) {
        // Verifica se il token è valido
        const userInfo = window.TokenManager.getUserInfo(token, archetipo);
        
        if (userInfo) {
            // Token valido
            this.currentUser = userInfo;
            this.trackAccess(userInfo);
            this.showPrivateContent();
            return true;
        } else {
            // Token non valido - redirect a pagina errore
            this.redirectToError();
            return false;
        }
    }
    
    showPrivateContent() {
        // Mostra il contenuto completo e aggiunge il badge di accesso privato
        const messageCard = document.querySelector('.message-card');
        if (messageCard) {
            // Aggiunge badge accesso privato
            const badge = document.createElement('div');
            badge.className = 'access-badge private';
            badge.innerHTML = '🔓 Accesso Privato - Contenuto Completo';
            messageCard.insertBefore(badge, messageCard.firstChild);
        }
    }
    
    showPublicContent() {
        // Mostra contenuto limitato per utenti pubblici
        const messageElement = document.getElementById('daily-message');
        const messageCard = document.querySelector('.message-card');
        
        if (messageElement) {
            messageElement.textContent = 'Per accedere al tuo messaggio personalizzato, scansiona il QR code ricevuto via email dopo aver completato il quiz.';
            messageElement.classList.add('limited-content');
        }
        
        if (messageCard) {
            // Aggiunge badge accesso pubblico
            const badge = document.createElement('div');
            badge.className = 'access-badge public';
            badge.innerHTML = '🔒 Accesso Pubblico - Contenuto Limitato';
            messageCard.insertBefore(badge, messageCard.firstChild);
            
            // Aggiunge CTA per il quiz
            const ctaSection = document.createElement('div');
            ctaSection.className = 'public-cta';
            ctaSection.innerHTML = `
                <div class="cta-content">
                    <h3>Vuoi accedere al messaggio completo?</h3>
                    <p>Completa il quiz per ricevere il tuo QR code personalizzato</p>
                    <a href="../index.html#quiz" class="cta-button">📋 Completa il Quiz</a>
                </div>
            `;
            messageCard.appendChild(ctaSection);
        }
        
        // Nasconde i pulsanti di condivisione per contenuto limitato
        const actionButtons = document.querySelector('.message-actions');
        if (actionButtons) {
            actionButtons.style.display = 'none';
        }
    }
    
    redirectToError() {
        // Redirect a pagina di accesso negato
        window.location.href = '/accesso-negato.html';
    }
    
    trackAccess(userInfo) {
        // Tracking accesso per analytics
        console.log('Accesso privato:', userInfo);
        
        // Google Analytics tracking (se configurato)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'private_access', {
                'event_category': 'authentication',
                'event_label': userInfo.archetipo,
                'user_token': userInfo.token
            });
        }
        
        // Salva info utente per uso nella pagina
        sessionStorage.setItem('currentUser', JSON.stringify(userInfo));
    }
    
    getCurrentUser() {
        if (this.currentUser) {
            return this.currentUser;
        }
        
        // Prova a recuperare da sessionStorage
        const stored = sessionStorage.getItem('currentUser');
        if (stored) {
            this.currentUser = JSON.parse(stored);
            return this.currentUser;
        }
        
        return null;
    }
    
    isPrivateAccess() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.has('token');
    }
}

// Inizializza il sistema di autenticazione
window.AuthManager = new AuthManager();
