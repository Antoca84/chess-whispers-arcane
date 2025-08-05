// Sistema di autenticazione per accessi privati (versione corretta)
// Questa versione corregge la rilevazione dell’archetipo su GitHub Pages
// cercando dinamicamente l’indice della cartella "archetipi" nel percorso URL.

class AuthManager {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    init() {
        // controlla se siamo su una pagina con token e gestisce il tipo di accesso
        this.checkTokenAccess();
    }

    checkTokenAccess() {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const pathParts = window.location.pathname.split('/').filter(part => part !== '');

        // Individua la sottocartella "archetipi" e determina l'archetipo.
        const archetipiIndex = pathParts.indexOf('archetipi');
        if (archetipiIndex !== -1 && pathParts.length > archetipiIndex + 1) {
            const archetipo = pathParts[archetipiIndex + 1];
            if (token) {
                // C'è un token: verifica se valido
                this.validateTokenAccess(archetipo, token);
            } else {
                // Nessun token: mostra contenuto limitato
                this.showPublicContent();
            }
        }
    }

    validateTokenAccess(archetipo, token) {
        const userInfo = window.TokenManager.getUserInfo(token, archetipo);
        if (userInfo) {
            // token valido
            this.currentUser = userInfo;
            this.trackAccess(userInfo);
            this.showPrivateContent();
            return true;
        }
        // token non valido → redirect a pagina di accesso negato
        this.redirectToError();
        return false;
    }

    showPrivateContent() {
        const messageCard = document.querySelector('.message-card');
        if (messageCard) {
            const badge = document.createElement('div');
            badge.className = 'access-badge private';
            badge.innerHTML = '🔓 Accesso Privato - Contenuto Completo';
            messageCard.insertBefore(badge, messageCard.firstChild);
        }
        // eventuali altre personalizzazioni per gli utenti privati
    }

    showPublicContent() {
        // sostituisce il messaggio con avviso e CTA, nascondendo i pulsanti di azione
        const messageElement = document.getElementById('daily-message');
        const messageCard   = document.querySelector('.message-card');
        if (messageElement) {
            messageElement.textContent = 'Per accedere al tuo messaggio personalizzato, scansiona il QR code ricevuto via email dopo aver completato il quiz.';
            messageElement.classList.add('limited-content');
        }
        if (messageCard) {
            // badge pubblico
            const badge = document.createElement('div');
            badge.className = 'access-badge public';
            badge.innerHTML = '🔒 Accesso Pubblico - Contenuto Limitato';
            messageCard.insertBefore(badge, messageCard.firstChild);
            // sezione CTA
            const ctaSection = document.createElement('div');
            ctaSection.className = 'public-cta';
            ctaSection.innerHTML = `
                <p style="margin-top:10px;">Vuoi accedere al messaggio completo?<br>Completa il quiz per ricevere il tuo QR code personalizzato.</p>
                <a href="../../index.html#quiz" class="cta-button">📋 Completa il Quiz</a>
            `;
            messageCard.appendChild(ctaSection);
        }
        // nasconde i pulsanti di condivisione e salvataggio
        const actionButtons = document.querySelector('.message-actions');
        if (actionButtons) {
            actionButtons.style.display = 'none';
        }
    }

    redirectToError() {
        // determina il percorso base del progetto su GitHub Pages e redireziona alla pagina di errore
        const base = window.location.pathname.split('/').slice(0, -3).join('/');
        // es. /chess-whispers-arcane -> page /accesso-negato.html
        window.location.href = `${base}/accesso-negato.html`;
    }

    trackAccess(userInfo) {
        console.log('Accesso privato:', userInfo);
        if (typeof gtag !== 'undefined') {
            gtag('event', 'private_access', {
                'event_category': 'authentication',
                'event_label': userInfo.archetipo,
                'user_token': userInfo.token
            });
        }
        sessionStorage.setItem('currentUser', JSON.stringify(userInfo));
    }

    getCurrentUser() {
        if (this.currentUser) return this.currentUser;
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

// inizializza l’AuthManager
window.AuthManager = new AuthManager();
