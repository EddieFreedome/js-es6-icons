//dispongo di tutte le icone di piu' tipi
//questi tipi sono 3: Animali, Vegetali ed Utenti
//Ciascuna icona va inserita in una card html
//In che struttura devo conservare i miei dati?


//array di oggetti: ogni elemento icona e' un oggetto

const arrIcone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const iconsContainer = document.querySelector('.icons-container')


//Assegnare colori: 
for (let i = 0; i < arrIcone.length; i++) {
    let icona = arrIcone[i]
    let tipo = arrIcone[i].type
    console.log(tipo)

    if (tipo === 'animal') {
        icona['color'] = '#ef6e1e'
    } else if (tipo === 'vegetable'){
        icona['color'] = '#07c584'
    } else {
        icona['color'] = '#b5308d'
    }

    console.log(icona);
}


generaCard(arrIcone);

//select.onchange
//icons-container.innerHTML = ""; pulisco board dalle cards
//stampo le cards del genere corrispondente
//se option.value = 1,
    //stampo tutti gli animali
//se option.value = 2,
    //stampo tutti i vegetali
//else
    //stampo tutti gli user

//quando assegno valore al select, assegna il valore .value al selettore
//quando selezione un valore, cicla tutti gli elementi dell'array di oggetti e confrontali con array -animali -vegetali -user

//assegnare colori a ciascun tipo
//ciclo for. if type user color blue... ecc

//1.creare una funzione che accetta un array e stampa tutte le icon card

//come faccio a far partire tutto lo script quando cambio flag del select? ----
//il type lo posso usare per distinguere e separare gli oggetti in array diversi
//al click, cicla l'array principale
//per ogni i, prendi il valore type, se non esiste crea un nuovo array . Se esiste, pushalo nell'array corrispondente
    //questo mi permette di suddividere per tipo gli oggetti in array diversi




//function generacard:
function generaCard(array){
    iconsContainer.innerHTML = ""
    //creo card per ogni...
    for (i = 0; i < array.length; i++){
		let {family, prefix, type, color, name} = array[i];
        const content = ` 
            <div class="icon-card d-flex">
                <i class="${family} ${prefix}${name}" style= "color:${color}"></i>
                <h4>${name}</h4>
            </div>
        `;

        iconsContainer.innerHTML += content;
    }
}


// const iconFilter = document.getElementById("select").value
// console.log(iconFilter);
// iconFilter.addEventListener("change", function(){
//     return iconFilter
// });
