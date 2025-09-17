# Progetto finale - "Leaf Love"

"Leaf Love" è un'applicazione creata per il progetto finale per la specializzazione frontend di Boolean, dove era richiesto di creare una SPA che simula l'esperienza di un utente non autenticato che può: 
- sfogliare i record disponibili, 
- cercare e filtrare record, 
- confrontare più elementi tra loro,
- salvare i preferiti.

L’idea alla base del progetto è stata quella di creare un’app dedicata alle piante verdi più comuni, dove un utente può scoprire informazioni utili per scegliere la pianta più adatta ai propri gusti. Attraverso l’app è possibile esplorare i dettagli di ogni pianta, confrontarne più di una e salvarle tra i preferiti per averle sempre a portata di mano.

## Tecnologie utilizzate:

- Frontend: React, React-Router, Context API
- Linguaggio: Javascript
- Stile: CSS

## Funzionalità principali

- Ricerca di una pianta per nome
- Filtro per categoria
- Ordinamento in ordine alfabetico per titolo o categoria
- Salvataggio/Rimozione di elementi preferiti
- Dettaglio di una pianta
- Pagina comparatore di due o più piante
- Pagina "Not Found" 

## Pre-requisiti

Il progetto frontend si collega ad un backend JSON Server già fornito dall'insegnante. Per far funzionare bene l'app:
- bisogna avere il backend avviato sulla porta 3001,
- il frontend utilizza endpoint come:
```
http://localhost:3001/plants
```

## Installazione e utilizzo
1. Clona la repo
```
git clone https://github.com/AngelaFerraro18/progetto-finale-spec-frontend-front.git
cd progetto-finale-spec-frontend-front
```

2. Installa le dipendenze
```
npm install
```

3. Avvia il frontend
```
npm run dev
```


## Anteprima del progetto (visualizzazione desktop)

![Anteprima desktop di Leaf Love](assets/anteprima-progetto-finale.gif)

### Visualizzazione tablet

![Anteprima tablet di Leaf Love](assets/responsive-tablet-progetto-finale.gif)

### Visualizzazione smartphone

![Anteprima smartphone di Leaf Love](assets/responsive-smartphone-progetto-finale.gif)

### Pagina Not Found

![Pagina Not Found di Leaf Love](assets/pagina-not-found-progetto-finale.jpg)

## Autore

Angela Ferraro - https://github.com/AngelaFerraro18