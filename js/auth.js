// Sistema di autenticazione per accessi privati
class AuthManager {
    constructor() {
        this.currentUser = null;
        this.init();
    }
    
    init() {
        // Controlla se siamo su una pagina privata
        this.checkPrivateAccess();
    }
    
    checkPrivateAccess() {
        const path = window.location.pathname;
        const pathParts = path.split('/').filter(part => part !== '');
        
        // Controlla se il path corrisponde a: /archetipi/[archetipo]/[token]
        if (pathParts.length === 3 && pathParts[0] === 'archetipi') {
            const archetipo = pathParts[1];
            const token = pathParts[2];
            
            this.validatePrivateAccess(archetipo, token);
        }
    }
    
    validatePrivateAccess(archetipo, token) {
        // Verifica se il token è valido
        const userInfo = window.TokenManager.getUserInfo(token, archetipo);
        
        if (userInfo) {
            // Token valido - carica contenuto privato
            this.currentUser = userInfo;
            this.loadPrivateContent(archetipo, token);
            this.trackAccess(userInfo);
        } else {
            // Token non valido - redirect a pagina errore
            this.redirectToError();
        }
    }
    
    loadPrivateContent(archetipo, token) {
        // Redirect alla pagina private.html dell'archetipo
        const privateUrl = `/archetipi/${archetipo}/private.html?token=${token}`;
        
        // Se non siamo già sulla pagina private, fai redirect
        if (!window.location.pathname.includes('private.html')) {
            window.location.href = privateUrl;
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
}

// Inizializza il sistema di autenticazione
window.AuthManager = new AuthManager();
