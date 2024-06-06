<!-- ------------------------ SPIEGAZIONE PROGETTO ---------------------------- -->

Replica del sito garantiwebtasarim.com/wordpress/autocar/

<!--  -->

Sviluppatori: Dihep, Francesco, Luca, Davide

<!--  -->

Framework e librerie utilizzate: Vue.js, Vite, Bootstrap, FontAwesome

<!--  -->

Struttura dati:
-Data: Store.js (contiene tutti i dati necessari per il funzionamento dei componenti (array, oggetti, variabili) visibili a tutti i componenti)
-Immagini: contenute tutte in /assets/img o icone

<!--  -->

Struttura componenti:
-PageHeader
.....AutocarNavbar ( Developed by: Dihep)

<!--  -->

-PageMain
.....Carosello ( Developed by: Luca)
.....SearchCar ( Developed by: Luca)
.....CardAuto ( Developed by: Francesco)
.....InfoCar ( Developed by: Francesco)
.....Customer ( Developed by: Davide)
.....Recent ( Developed by: Davide)

<!--  -->

-PageFooter
.....AutocarFooter ( Developed by: Dihep)

<!--  -->

Spiegazione funzionalità dei componenti:
AutocarNavbar:
Carosello:
SearchCar:
CardAuto:
InfoCar:
Customer:

<!-- Sezione che contiene le card dei customer con le loro immagini e i loro commenti oltre che al titolo ed al sottotitolo
Ho creato una struttura dati nello store.js che contiene all'interno di un array di oggetti tutti i titoli, i sottotitoli, i testi e le immagini che vengono inserite nelle card
Le card vengono create tramite ciclo v-for e viene aggiunta la funzionalità di slide per visualizzare le card seguenti (cardvisibili sempre 4) -->

Recent:

<!-- Sezione che contiene 4 card con all'interno l'estratto di un articolo su dei nuovi modelli di auto, ogni card contiene testo,   immagine e titolo. Come per customer creo in store.js un array di oggetti che contiene tutti i dati necessari a comporre i contenuti  delle card. Anche per queste card uso un ciclo v-for per la loro creazione dinamica. Alle card viene aggiunta l'animazione di    rotazione in base alla posizione del mouse -->

AutocarFooter:
