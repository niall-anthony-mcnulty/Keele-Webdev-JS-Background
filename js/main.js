$(document).ready(function(){

    
    
    var images_portrait = ['./images/smartphone-portrait/smartphone1.jpg',
        './images/smartphone-portrait/smartphone2.jpg',
        './images/smartphone-portrait/smartphone3.jpg',
        './images/smartphone-portrait/smartphone4.jpg',
        './images/smartphone-portrait/smartphone5.jpg'];

    

        selectPortraitImages = images_portrait[Math.floor(Math.random() * images_portrait.length)];
        $('.bg-image-smartphone').css({'background-image':'url(' + selectPortraitImages + ')'});
        


    var images_landscape = ['./images/smartphone-landscape/landscape1.jpg',
        './images/smartphone-landscape/landscape2.jpg',
        './images/smartphone-landscape/landscape3.jpg',
        './images/smartphone-landscape/landscape4.jpg',
        './images/smartphone-landscape/landscape5.jpg' ];

        selectLandscapeImages = images_landscape[Math.floor(Math.random() * images_landscape.length)];
        $('.bg-image-landscape').css({'background-image':'url(' + selectLandscapeImages + ')'});


    var images_tablet = ['./images/tablet/tablet1.jpg',
        './images/tablet/tablet2.jpg',
        './images/tablet/tablet3.jpg',
        './images/tablet/tablet4.jpg',
        './images/tablet/tablet5.jpg'];

        selectTabletImages = images_tablet[Math.floor(Math.random() * images_tablet.length)];
        $('.bg-image-tablet').css({'background-image':'url(' + selectTabletImages + ')'});


    var images_desktop = [
        './images/desktop/desktop1.jpg',
        './images/desktop/desktop2.jpg',
        './images/desktop/desktop3.jpg',
        './images/desktop/desktop4.jpg',
        './images/desktop/desktop5.jpg'];

    var quotes = [
        'To be or not to be? That is the question - William Shakespeare',
        'Fortune favours the bold - Terence ',
        'I came, I saw, I conquered - Julius Caesar',
        'Knowledge is power - Sir Francie Bacon',
        "Have no fear of perfection, you'll never reach it - Salvador Dali"]
   

    selectDesktopImages = images_desktop[Math.floor(Math.random() * images_desktop.length)];
    $('.bg-image-desktop').css({'background-image':'url(' + selectDesktopImages + ')'});

    var selectQuotes = quotes[Math.floor(Math.random() * quotes.length )];
    var splitString = selectQuotes.split('-');

    $('p').text(splitString[0]);
    
    
    /*setTimeout(function(){
        $('p').text(selectQuotes);
    
    }, 4000); */


    $('.author').text('-' + splitString[1]);
    $('.author').fadeOut(5000);




    
});


