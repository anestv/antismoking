/*Copyright © 2013
    Varsamidis A., Kechribari E., Karabasi M.
    Βαρσαμίδης Α., Κεχριμπάρη Ε., Καραμπάση Μ.
    
    All content licensed under CC-BY-NC-ND 3.0 GR unless otherwise specified.
    Το περιεχόμενο διατίθεται υπό την άδεια CC-BY-NC-ND 3.0 GR εκτός αν αναφέρεται διαφορετικά.
*/

var visited = {faq:true};
var placeVisit = 0;
var placeNum = 7;
var isIE = navigator.userAgent.indexOf("MSIE")!=-1 || navigator.userAgent.indexOf("rv:11.0")!=-1;
    
function clicked(target){
    window.open("./" + target + ".html", "AntiSmoke", "scrollbars=1,left=40,resizeable=1,height=600,width=820");
    if(! visited.hasOwnProperty(target)){
        visited[target] = true;
        $('#progress').html('Επισκεφτήκατε ' + (++placeVisit) + " από τα " + placeNum + ' μέρη');
    }
    if(placeVisit === placeNum){
        placeVisit++; //gia na mhn ksanatreksei - den tha fanei auto
        $('#tutorial').html('<span>x</span>Συγχαρητήρια!</br>Επισκεφτήκατε όλα τα μέρη! Ελπίζουμε να σας άρεσε η εφαρμογή μας!');
        $('#tutorial').fadeIn(1000);
    }
}

$(document).ready(function(){
    console.log("Code is a creation of Anestis Varsamidis . . .");
    console.log("READY PLAYER ONE");
    
    if (isIE) {
        alert("Φαίνεται ότι χρησιμοποιείτε Internet Explorer. Συνιστούμε να ανοίξετε την εφαρμογή με διαφορετικό περιηγητή ώστε να επιτύχετε καλύτερη απόδοση. Πιθανόν ο δείκτης να μην αλλάζει σε χεράκι όταν περνάτε πάνω από τα κτίρια.");
    }
    $('#tutorial').fadeIn(2000);
    $('#tutorial').click(function(){
        $('#tutorial').fadeOut(800);
    });
});

var secret = "65786983847383";
var input = "";
var timer;

$(document).keyup(function(e) {
    input += e.which;    
    clearTimeout(timer);
    timer = setTimeout(function(){ input = ""; }, 1000);
    
    if(input === secret)
        window.open('http://about.me/anestis');
});
