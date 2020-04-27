$(document).ready(function () {
    $('.img-fsd-container > a > img').hover(function () {
        $('.overlay-alphabet-fsd').css('opacity', '.9');
        $('.overlay-button-fsd').css('opacity', '.9')
        $('.overlay-city-name-fsd').css('visibility', 'hidden')
    },
        function () {
            $('.overlay-alphabet-fsd').css('opacity', '0');
            $('.overlay-button-fsd').css('opacity', '0');
            $('.overlay-city-name-fsd').css('visibility', 'visible')
        }
    );

    $('.img-lhr-container > a > img').hover(function () {
        $('.overlay-alphabet-lhr').css('opacity', '.9');
        $('.overlay-button-lhr').css('opacity', '.9')
        $('.overlay-city-name-lhr').css('visibility', 'hidden')

    },
        function () {
            $('.overlay-alphabet-lhr').css('opacity', '0');
            $('.overlay-button-lhr').css('opacity', '0')
            $('.overlay-city-name-lhr').css('visibility', 'visible')

        }
    );
})

