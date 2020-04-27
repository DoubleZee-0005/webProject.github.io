$(document).ready(function () {
    $('#signIn-btn').on('click', function () {
        $('.sign-overlay').css('transform', 'translateX(400px)')
        $('.overlay-text-h1, .overlay-text-p').animate({ marginLeft: "-100px" }, 'slow')
        $('.overlay-text-h1, .overlay-text-p').animate({ marginLeft: "0px" }, 'slow')
        $('.overlay-text-h1').text("Hi! Guys.")
        $('.overlay-text-p').text('Sign up with us and start the jounery')
        $('#signIn-btn').css('display', 'none')
        $('#signUp-btn').css('display', 'flex')
        $('.signIn').animate({
            opacity: 1
        }, 1500)
        $('.signUp').animate({
            opacity: 0
        }, 500)
    })
    $('#signUp-btn').on('click', function () {
        $('.sign-overlay').css('transform', 'translateX(0px)')
        $('.overlay-text-h1, .overlay-text-p').animate({ marginRight: "-80px" }, 'slow')
        $('.overlay-text-h1, .overlay-text-p').animate({ marginRight: "0px" }, 'slow')
        $('.overlay-text-h1').text("Welcome Back!")
        $('.overlay-text-p').text('Already have an account click me and sign in')
        $('#signUp-btn').css('display', 'none')
        $('#signIn-btn').css('display', 'flex')
        $('.signIn').animate({
            opacity: 0
        }, 500)
        $('.signUp').animate({
            opacity: 1
        }, 400)

    })

})
