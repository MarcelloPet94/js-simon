/*
1 - Visualizzare in pagina 5 numeri casuali.

2 - Da lì parte un timer di 30 secondi. che rimuove i numeri

3 - Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
tramite il prompt(). Dopo che sono stati inseriti i 5 numeri,

4 - il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// genero 5 numeri random
let contieneRand = [];
let verificaRand = [];

function stampaNumeri()
{
    let count = 0;
    while(count < 5)
    {
        let randomN = Math.floor(Math.random() * 100 + 1);
        contieneRand.push(randomN);
        count++;
    }
    document.write(contieneRand);
    return contieneRand;
}

// stampa a video i numeri
stampaNumeri();
console.log(contieneRand);

setTimeout(chiediSeRicorda() , 3000);

// chiede 5 numeri e poi verifica se corrispondono ai precedenti generati
function chiediSeRicorda()
{
    let ask = 0;

    while(ask < 5)
    {
        let utenteRicorda = parseInt(prompt("Ricordi?"));
        verificaRand.push(utenteRicorda);
        console.log(verificaRand);
        ask++;
    }
    return verificaRand;
}

function verificaNumeri(rand , user)
{
    if(rand === user)
    {
        console.log("Buona memoria");
    }
    else
    {
        console.log("Hai dimenticato qualcosa");
    }   

}

verificaNumeri(contieneRand , verificaRand);
