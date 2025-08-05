// =================== SISTEMA AUTENTICAZIONE SCACCHI MENTALI ===================
// Versione: Web App Integration
// Questo file gestisce l'autenticazione tramite Google Apps Script Web App

// URL della tua Web App Google Apps Script
// IMPORTANTE: Verifica che questo URL sia corretto dalla tua implementazione Google Apps Script
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbz6VbEhxx8j2Tw0PQ_Iwv7e2Kr8ua7iIjnIS3YbKVEq578z6AxlOdt3zgeVJN88cGqnmQ/exec';

// Cache per evitare chiamate ripetute
const tokenCache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minuti

// Funzione principale per verificare token
async function verifyToken(token, archetipo) {
    try {
        // Controlla cache prima
        const cacheKey = `${token}_${archetipo}`;
        const cached = tokenCache.get(cacheKey);
        
        if (cached && (Date.now() - cached.timestamp) < CACHE_DURATION) {
            console.log('Token verificato da cache:', cached.data);
            return cached.data;
        }
        
        // Chiamata alla Web App
        const url = `${WEB_APP_URL}?action=verify&token=${encodeURIComponent(token)}&archetipo=${encodeURIComponent(archetipo)}`;
        
        console.log('Verificando token con Web App:', url);
        
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Cache-Control': 'no-cache'
            },
            mode: 'cors'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Risposta Web App:', data);
        
        // Salva in cache
        tokenCache.set(cacheKey, {
            data: data,
            timestamp: Date.now()
        });
        
        return data;
        
    } catch (error) {
        console.error('Errore nella verifica token:', error);
        return {
            valid: false,
            error: 'Errore di connessione al server'
        };
    }
}

// Funzione per ottenere statistiche (per debug)
async function getTokenStats() {
    try {
        const url = `${WEB_APP_URL}?action=stats`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Cache-Control': 'no-cache'
            },
            mode: 'cors'
        });
        const data = await response.json();
        console.log('Statistiche token:', data);
        return data;
    } catch (error) {
        console.error('Errore nel recupero statistiche:', error);
        return null;
    }
}

// Funzione principale di controllo accesso
async function checkAccess() {
    try {
        // Estrai parametri dall'URL
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const archetipo = extractArchetypeFromUrl();
        
        console.log('Controllo accesso:', { token, archetipo });
        
        if (!token) {
            // Nessun token = accesso pubblico
            showPublicContent();
            return;
        }
        
        if (!archetipo) {
            console.error('Impossibile determinare archetipo dall\'URL');
            redirectToError('URL non valido');
            return;
        }
        
        // Mostra loading
        showLoadingState();
        
        // Verifica token
        const verification = await verifyToken(token, archetipo);
        
        if (verification.valid) {
            // Token valido = accesso privato
            showPrivateContent(verification.userInfo);
        } else {
            // Token non valido = redirect errore
            console.log('Token non valido:', verification.error);
            redirectToError(verification.error || 'Token non valido');
        }
        
    } catch (error) {
        console.error('Errore nel controllo accesso:', error);
        redirectToError('Errore interno');
    }
}

// Estrai archetipo dall'URL
function extractArchetypeFromUrl() {
    const path = window.location.pathname;
    const matches = path.match(/\/archetipi\/([^\/]+)\//);
    return matches ? matches[1] : null;
}

// Mostra contenuto pubblico (senza token)
function showPublicContent() {
    console.log('Modalità: Accesso Pubblico');
    
    // Aggiungi notice di accesso pubblico
    addAccessNotice('public', '👁️ Accesso Pubblico - Contenuto Limitato');
    
    // Nascondi messaggio completo e mostra CTA
    hidePrivateContent();
    showQuizCTA();
}

// Mostra contenuto privato (con token valido)
function showPrivateContent(userInfo) {
    console.log('Modalità: Accesso Privato', userInfo);
    
    // Aggiungi notice di accesso privato
    addAccessNotice('private', `🔒 Accesso Privato Autorizzato - ${userInfo.archetipo}`);
    
    // Mostra contenuto completo
    showFullContent();
    
    // Aggiungi informazioni utente (opzionale)
    if (userInfo) {
        addUserInfo(userInfo);
    }
}

// Mostra stato di caricamento
function showLoadingState() {
    const notice = document.createElement('div');
    notice.id = 'loading-notice';
    notice.className = 'access-notice loading';
    notice.innerHTML = '⏳ Verifica accesso in corso...';
    
    document.body.insertBefore(notice, document.body.firstChild);
}

// Aggiungi notice di accesso
function addAccessNotice(type, message) {
    // Rimuovi loading notice se presente
    const loadingNotice = document.getElementById('loading-notice');
    if (loadingNotice) {
        loadingNotice.remove();
    }
    
    // Rimuovi notice precedenti
    const existingNotice = document.querySelector('.access-notice');
    if (existingNotice) {
        existingNotice.remove();
    }
    
    const notice = document.createElement('div');
    notice.className = `access-notice ${type}`;
    notice.innerHTML = message;
    
    // Stili CSS inline per garantire funzionamento
    notice.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10000;
        padding: 15px;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        ${type === 'private' ? 
            'background: linear-gradient(45deg, #FFD700, #FFA500); color: #000; border-bottom: 3px solid #FFD700;' : 
            'background: linear-gradient(45deg, #666, #888); color: #fff; border-bottom: 3px solid #666;'
        }
    `;
    
    document.body.insertBefore(notice, document.body.firstChild);
    
    // Aggiungi margine al body per compensare notice fisso
    document.body.style.paddingTop = '60px';
}

// Nascondi contenuto privato
function hidePrivateContent() {
    const messageElements = document.querySelectorAll('.daily-message, .message-content, .private-content');
    messageElements.forEach(el => {
        el.style.display = 'none';
    });
}

// Mostra contenuto completo
function showFullContent() {
    const messageElements = document.querySelectorAll('.daily-message, .message-content, .private-content');
    messageElements.forEach(el => {
        el.style.display = 'block';
    });
    
    // Nascondi CTA quiz se presente
    const ctaElements = document.querySelectorAll('.quiz-cta, .public-cta');
    ctaElements.forEach(el => {
        el.style.display = 'none';
    });
}

// Mostra CTA per completare quiz
function showQuizCTA() {
    const cta = document.createElement('div');
    cta.className = 'quiz-cta';
    cta.innerHTML = `
        <div style="background: linear-gradient(135deg, #1a1a1a, #2a2a2a); border: 2px solid #FFD700; border-radius: 15px; padding: 30px; margin: 30px 0; text-align: center;">
            <h3 style="color: #FFD700; margin: 0 0 15px 0;">🧠 Vuoi accedere ai messaggi completi?</h3>
            <p style="color: #ccc; margin: 0 0 20px 0; line-height: 1.6;">
                Completa il quiz gratuito per scoprire il tuo archetipo e ricevere messaggi personalizzati ogni giorno.
            </p>
            <a href="/" style="background: linear-gradient(45deg, #FFD700, #FFA500); color: #000; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 16px; display: inline-block;">
                🎯 Inizia il Quiz Gratuito
            </a>
        </div>
    `;
    
    // Inserisci dopo il primo elemento della pagina
    const firstElement = document.querySelector('main, .container, .content, body > div');
    if (firstElement) {
        firstElement.appendChild(cta);
    }
}

// Aggiungi informazioni utente (per debug)
function addUserInfo(userInfo) {
    if (!userInfo || window.location.hostname === 'localhost') return; // Solo in produzione
    
    const info = document.createElement('div');
    info.className = 'user-info';
    info.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(0,0,0,0.8);
        color: #fff;
        padding: 10px;
        border-radius: 8px;
        font-size: 12px;
        z-index: 9999;
    `;
    info.innerHTML = `
        <div>Archetipo: ${userInfo.archetipo}</div>
        <div>Data: ${userInfo.createdAt}</div>
        <div>Status: ${userInfo.mailchimpStatus}</div>
    `;
    
    document.body.appendChild(info);
}

// Redirect a pagina errore
function redirectToError(message = 'Accesso negato') {
    console.log('Redirect errore:', message);
    
    // Prova redirect a pagina errore dedicata
    const errorPageUrl = '/accesso-negato.html';
    
    // Controlla se la pagina errore esiste
    fetch(errorPageUrl, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                window.location.href = `${errorPageUrl}?error=${encodeURIComponent(message)}`;
            } else {
                // Fallback: mostra errore inline
                showInlineError(message);
            }
        })
        .catch(() => {
            // Fallback: mostra errore inline
            showInlineError(message);
        });
}

// Mostra errore inline se pagina errore non esiste
function showInlineError(message) {
    document.body.innerHTML = `
        <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #1a1a1a; color: white; font-family: Arial, sans-serif;">
            <div style="text-align: center; max-width: 500px; padding: 40px;">
                <h1 style="color: #ff4444; font-size: 48px; margin: 0 0 20px 0;">❌</h1>
                <h2 style="color: #fff; margin: 0 0 20px 0;">Accesso Negato</h2>
                <p style="color: #ccc; margin: 0 0 30px 0; line-height: 1.6;">${message}</p>
                <a href="/" style="background: linear-gradient(45deg, #FFD700, #FFA500); color: #000; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold;">
                    🏠 Torna alla Home
                </a>
            </div>
        </div>
    `;
}

// Inizializza sistema autenticazione
function initAuth() {
    console.log('Inizializzazione sistema autenticazione...');
    console.log('🌐 Web App URL:', WEB_APP_URL);
    
    // Test connettività Web App
    getTokenStats().then(stats => {
        if (stats) {
            console.log('✅ Connessione Web App OK - Statistiche:', stats);
        } else {
            console.error('❌ Connessione Web App fallita');
        }
    });
    
    // Avvia controllo accesso
    checkAccess();
}

// Avvia quando DOM è pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
} else {
    initAuth();
}

// Esporta funzioni per uso globale
window.AuthSystem = {
    verifyToken,
    getTokenStats,
    checkAccess
};

console.log('🔐 Sistema Autenticazione Scacchi Mentali caricato');
