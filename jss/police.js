/*Copyright © 2013
    Varsamidis A., Kechribari E., Karabasi M.
    Βαρσαμίδης Α., Κεχριμπάρη Ε., Καραμπάση Μ.
    
    All content licensed under CC-BY-NC-ND 3.0 GR unless otherwise specified.
    Το περιεχόμενο διατίθεται υπό την άδεια CC-BY-NC-ND 3.0 GR εκτός αν αναφέρεται διαφορετικά.
*/

$(document).ready(function(){
    $('*').fadeIn(2000);
    $('.diduknow').hide();
});

$(document).on('click', '#more', function(){
    $('.diduknow').slideToggle(1000);
});

$(document).on('click', '#diatagma', function() {
    window.open('./diatagma.png',"Διάταγμα","width=520,height=585");
});