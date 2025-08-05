// Database dei token validi
// IMPORTANTE: Questo file deve essere aggiornato quando nuovi utenti completano il quiz

const validTokens = [
    // Esempi di token - sostituisci con quelli reali dal tuo Google Sheets
    {
        token: 'abc123xyz',
        email: 'test@email.com',
        archetipo: 're',
        createdAt: '2024-08-01',
        active: true
    },
    {
        token: 'def456uvw', 
        email: 'test2@email.com',
        archetipo: 'regina',
        createdAt: '2024-08-01',
        active: true
    },
    {
        token: 'ghi789rst',
        email: 'test3@email.com', 
        archetipo: 'torre',
        createdAt: '2024-08-01',
        active: true
    }
    // Altri token verranno aggiunti automaticamente
];

// Funzione per verificare se un token è valido
function isValidToken(token, archetipo) {
    const tokenData = validTokens.find(t => 
        t.token === token && 
        t.archetipo === archetipo && 
        t.active === true
    );
    return tokenData || null;
}

// Funzione per ottenere info utente da token
function getUserInfo(token, archetipo) {
    return isValidToken(token, archetipo);
}

// Esporta funzioni per uso globale
window.TokenManager = {
    isValidToken,
    getUserInfo,
    validTokens
};
