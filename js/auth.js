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
        
        if (token) {
            const pathParts = window.location.pathname.split('/').filter(part => part !== '');
            
            // Controlla se siamo su una pagina archetipo
            if (pathParts.length >= 2 && pathParts[0] === 'archetipi') {
                const archetipo = pathParts[1];
                this.validateTokenAccess(archetipo, token);
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
            return true;
        } else {
            // Token non valido - redirect a pagina errore
            this.redirectToError();
            return false;
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
