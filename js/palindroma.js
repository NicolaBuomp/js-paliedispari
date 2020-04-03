alert('ATTENZIONE! Ora ti farò alcune domande, appartengono a due argomenti differenti ma non spaventarti!');

var richiestaNome = document.getElementById('richiesta-nome');
var nomeRovescio = document.getElementById('nome-rovescio');
var outputNome = document.getElementById('output-nome');


var nome = prompt('Inserisci un nome').trim();
nome = nome.toLowerCase();
console.log(nome);
richiestaNome.innerHTML = nome;


var nomeInverito = rovescia(nome);
console.log(nomeInverito);
nomeRovescio.innerHTML = nomeInverito;


if (nome == nomeInverito) {
    console.log('La parola inserita è palindroma');
    outputNome.innerHTML = 'La parola inserita è palindroma';

} else {
    console.log('La parola da te inserita al rovescio diventerà ' + nomeInverito);
    outputNome.innerHTML = 'La parola da te inserita non è palindroma ';
}


//FUNCTION
function rovescia(word) {
    var reverse = '';

    for (var i = word.length - 1; i >= 0; i--) {
        reverse += word[i]
    }
    return reverse;
}