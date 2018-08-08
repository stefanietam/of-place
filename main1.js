$(document).ready(function() {

    //arrays of text and images
    
    var cityHome = ["baghdad.gif", "bangkok.gif", "berlin.gif", "busan.gif", "capetown.gif", "istanbul.gif", "london.gif", "losAngeles.gif", "madrid.gif", "mexicoCity.gif", "mumbai.gif", "nairobi.gif", "newYork.gif", "pyongyang.gif", "saintPetersburg.gif", "saopaulo.gif", "shenzhen.gif", "singapore.gif", "tianjin.gif", "yokohama.gif"];


    var randomCity = Math.floor(Math.random() * 20);

    function randomWholeNum() {
        return Math.random();
    }
    var imageStringBeginning = "images/gifs/"
    var img1 = imageStringBeginning + cityHome[randomCity];
    
    $("#homeIMG").attr("src", img1);
    
                  
});

