/*Copyright © 2013
    Varsamidis A., Kechribari E., Karabasi M.
    Βαρσαμίδης Α., Κεχριμπάρη Ε., Καραμπάση Μ.
    
    All content licensed under CC-BY-NC-ND 3.0 GR unless otherwise specified.
    Το περιεχόμενο διατίθεται υπό την άδεια CC-BY-NC-ND 3.0 GR εκτός αν αναφέρεται διαφορετικά.
*/

$(document).ready(function(){
    $('*').fadeIn(2000);
    $('ul').hide();
});

$(document).on('mouseenter', '#bigdiv', function(){
    $('ul').slideDown(1000);
});
$(document).on('mouseleave', '#bigdiv', function(){
    $('ul').slideUp(1000);
});
$(document).on('click', '#seemore', function(){
    $('ul').slideToggle(1000);
});