const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Redirect to the static HTML site */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-primary">🔮 Scacchi Mentali</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Il sito statico è stato creato con successo!
          </p>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Il sito "Scacchi Mentali" è ora disponibile come sito statico completo con:
            </p>
            <ul className="text-left max-w-md mx-auto space-y-2 text-muted-foreground">
              <li>✅ Landing page con hero e griglia archetipi</li>
              <li>✅ 6 pagine archetipi con messaggi quotidiani</li>
              <li>✅ Pagina subscription con pricing</li>
              <li>✅ JavaScript per share e localStorage</li>
              <li>✅ Design ispirato a Queen's Gambit</li>
              <li>✅ Responsive e ottimizzato</li>
            </ul>
            <div className="mt-8 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                💡 Per utilizzare il sito statico, puoi copiare i file dal progetto 
                e deployarli su qualsiasi hosting statico (Netlify, Vercel, GitHub Pages, ecc.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
