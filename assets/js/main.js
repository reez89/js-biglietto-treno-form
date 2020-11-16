
var btnGenera = document.getElementById('btn-genera');
var btnAnnulla = document.getElementById('btn-annulla');

btnGenera.addEventListener('click', function(){
    console.log("genera tickets");


    var myNameInput = document.getElementById('my-name');
    var myName = myNameInput.value;

    var kmInput = document.getElementById('km-totali');
    var kmTotali = kmInput.value;

    var ageInput = document.getElementById('age');
    var age = ageInput.value;

    console.log(myName, kmTotali, age);

    var prezzoChilometri = 0.21;
    var prezzoBiglietto = kmTotali * prezzoChilometri;
    var newTicket;

    if(age == "minorenne"){
        offerta = "Sconto Minorenni" ;
        newTicket = prezzoBiglietto  - (prezzoBiglietto * 0.2);
    } else if(age == "over65"){
        offerta = "Sconto Over 65";
        newTicket = prezzoBiglietto  - (prezzoBiglietto * 0.4);
    }

    else if (age == "maggiorenne"){
    offerta = "Nessuno Sconto";
    newTicket = prezzoBiglietto ;
}


    var itemNameuser = document.getElementById('passennger_name');
    var itemOfferta = document.getElementById('offerta');
    var itemCarrozza = document.getElementById('carrozza');
    var itemCodiceCp = document.getElementById('codice-Cp')
    var itemCostoBiglietto = document.getElementById('costo-Biglietto');

    itemNameuser.innerHTML = myName;
    itemOfferta.innerHTML = offerta;
    itemCarrozza.innerHTML = Math.floor(Math.random() * 9) + 1;
    itemCodiceCp.innerHTML = Math.floor(Math.random() * (100000 - 90000)) +90000;
    itemCostoBiglietto.innerHTML = newTicket.toFixed(2);

    document.getElementById('ticket-bottom').style.display = "block";
    document.getElementById('txt-bottom-card').style.display = "block";
});


btnAnnulla.addEventListener('click', function(){

    document.getElementById('ticket-bottom').style.display = "none";
    document.getElementById('txt-bottom-card').style.display = "none";

    var myNameInput = document.getElementById('my-name');
    var kmInput = document.getElementById('km-totali');
    var ageInput = document.getElementById('age');

     myNameInput.value = " ";
     kmInput.value = " ";
     ageInput.value = " ";  


});