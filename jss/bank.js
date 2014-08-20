/*Copyright © 2013
    Varsamidis A., Kechribari E., Karabasi M.
    Βαρσαμίδης Α., Κεχριμπάρη Ε., Καραμπάση Μ.
    
    All content licensed under CC-BY-NC-ND 3.0 GR unless otherwise specified.
    Το περιεχόμενο διατίθεται υπό την άδεια CC-BY-NC-ND 3.0 GR εκτός αν αναφέρεται διαφορετικά.
*/

$(document).ready(function(){
    $('p').fadeIn(1900);
    $("#result").hide();
});

$(document).on('click', '#buttonn', calcCost);

$(document).on('click', '.small', function() {
    $('#calculator').slideToggle(1000);
});

function calcCost(){
    var yearcost = $('#packets').val() * $('#cost').val() * 365;
    yearcost = Math.round(yearcost * 100) / 100;
    
    if(isNaN(yearcost)){
        alert('Στους δεκαδικούς αριθμούς χρησιμοποιήστε τελεία (.) αντί για υποδιαστολή (,)');
    } else {
        if ($("#packets").val() < 0 || $("#cost").val() <0)
            alert("Εισάγετε θετικούς αριθμούς");
        else {
            $('#result').html('Αποτέλεσμα: ' + yearcost + "€ τον χρόνο");
            $("#result").slideDown(500);
            
            if($('#packets').val() == 0)
                alert("Μπράβο! Καλά κάνετε που δεν καπνίζετε!");
            else if($('#packets').val() > 3)
                alert("Με τόσα πακέτα, δεν σκέφτηκες να γίνεις μέτοχος στην Παπαστράτος;");
            
        }
    }
    
}