/*Copyright © 2013
    Varsamidis A., Kechribari E., Karabasi M.
    Βαρσαμίδης Α., Κεχριμπάρη Ε., Καραμπάση Μ.
    
    All content licensed under CC-BY-NC-ND 3.0 GR unless otherwise specified.
    Το περιεχόμενο διατίθεται υπό την άδεια CC-BY-NC-ND 3.0 GR εκτός αν αναφέρεται διαφορετικά.
*/

$(document).ready(function(){
    $('p').fadeIn(2000);
});

$(document).on('mouseenter', '.oneoftwo p', function(){
    $($(this).children('img')).slideDown(1000);
    if($(this).is('#leftp')){
        $("html, body").animate({scrollTop: 88}, 1000);
    } else {
        $("html, body").animate({scrollTop: 16}, 1000);
    }
});

$(document).on('mouseleave', '.oneoftwo p', function(){
    $($(this).children('img')).slideUp(1000);
});

$(document).on('click', '.oneoftwo p', function(){
    $($(this).children('img')).slideToggle(1000);
    if($(this).is('#leftp')){
        $("html, body").animate({scrollTop: 88}, 1000);
    } else {
        $("html, body").animate({scrollTop: 16}, 1000);
    }
});