const Alphabet = /[a-zA-Z]/g;
const int = /[0-9]/g;
const sc = /[!@#%&$^*()_+=|]/g;
const input = $('input[type="password"]');
const RegisterFormW = $('.register-form').width();
const RegisterFormH = $('.register-form').height();
let percent = 1;
let timer = '';

$(document).ready(function () {
    $('input[data-type="password"]').on('keyup keypress blur', function () {
        const VAL = $(this).val();
        if (sc.test(VAL) === true) {
            $('.sc').addClass('action');
        } else if (sc.test(VAL) === false) {
            $('.sc').removeClass('action');
        }
        if (Alphabet.test(VAL) === true) {
            $('.alpha').addClass('action');
        } else if (Alphabet.test(VAL) === false) {
            $('.alpha').removeClass('action');
        }
        if (int.test(VAL) === true) {
            $('.int').addClass('action');
        } else if (int.test(VAL) === false) {
            $('.int').removeClass('action');
        }
        if (VAL.length >= 8) {
            $('.long-length').addClass('action');
        } else {
            $('.long-length').removeClass('action');
        }
    });
    let status = false;
    $('i[data-action="show-password"]').on('click', function () {
        if ($(input).val.length !== 0) {
            const inputType = $(input).attr('type');
            $(input).attr('type', $(input).attr('type') === 'password' ? 'text' : 'password');
            if (inputType === 'text') {
                console.log(inputType);
                $('i[data-action="show-password"]').addClass('fadeOutRight');
                setTimeout(function () {
                    $('i[data-action="show-password"]').addClass('fa-eye fadeInRight').removeClass('fa-eye-slash fadeOutRight');
                }, 500);
            } else {
                console.log(inputType);
                $('i[data-action="show-password"]').addClass('fadeOutRight').removeClass('fadeInRight');
                setTimeout(function () {
                    $('i[data-action="show-password"]').addClass('fa-eye-slash fadeInRight').removeClass('fa-eye fadeOutRight');
                }, 500);
            }
        }
    });
});

const Register = () => {
    $('.btn-next').html('<i class="fa fa-ellipsis-h animated flash infinite"></i>');
    setTimeout(function () {
        $('.btn-next').html('').addClass('animated fadeOut');
        $('.login-icon img').addClass('fadeOut');
        $('.back-link a').addClass('fadeOut');
    }, 1000);

    setTimeout(function () {
        $('.form-container').slideUp('slow').removeClass('fadeOut');
        $('.login-icon').remove();
    }, 2000);

    setTimeout(function () {
        $('.form-container').empty().append(
            '<div class="text-center success-box mt-5">' +
            '<i class="fa fa-check fa-4x animated heartBeat text-purple mb-3"></i><br>' +
            '<h4 class="text-center mt-3">Your registration has been successfully!</h4>' +
            '<span>Note: For use all features confirm your email address</span><br>' +
            '<i class="fa fa-redo-alt fa-spin fa-2x mt-3"></i>' +
            '<div class="process-bar"></div>' +
            '</div>'
        ).slideDown('slow');
        timer = setInterval(function () {
            $('.process-bar').width(percent++);
            if ($('.process-bar').width() === RegisterFormW + 30) {
                clearInterval(timer);
            }
        }, 10);
    }, 3000);

};