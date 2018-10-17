$( window ).on( "load", function() {
    $('#splash-title-rocket').animate({
        left: "+=5000",
    }, 3000)
    setTimeout(function() {
        $('#splash-title').fadeIn(50)
    }, 800)
})

document.querySelector('#splash-open-game').addEventListener('click', function() {
    document.querySelector('#splash-screen').style.display = 'none'
    document.querySelector('main').style.display = 'block'
    listenCityClick()
    listenKeypress()
})

document.querySelector('#instructions-tab').addEventListener('click', function() {
    document.querySelector('#attribution').style.display = 'none'
    document.querySelector('#splash-instructions').style.display = 'block'
})

document.querySelector('#attribution-tab').addEventListener('click', function() {
    document.querySelector('#attribution').style.display = 'block'
    document.querySelector('#splash-instructions').style.display = 'none'
})
