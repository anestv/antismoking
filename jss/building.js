/*Copyright © 2013
    Varsamidis A., Kechribari E., Karabasi M.
    Βαρσαμίδης Α., Κεχριμπάρη Ε., Καραμπάση Μ.
    
    All content licensed under CC-BY-NC-ND 3.0 GR unless otherwise specified.
    Το περιεχόμενο διατίθεται υπό την άδεια CC-BY-NC-ND 3.0 GR εκτός αν αναφέρεται διαφορετικά.
*/

$(document).ready(function(){
    $("h2").fadeIn(2000);
    $('.main').fadeIn(1900);
    $('#seemore').fadeIn(1900);
    $("li").fadeIn(1900);
});

$(document).on('click', '#seemore', function(){
    if($("#sterhsh:hidden").is(':hidden') ){
        $("html, body").animate({scrollTop: 1000}, 1200);
    }
    $('#sterhsh').slideToggle(1000);
});

