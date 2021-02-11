var alphabet = /[a-zA-Z]/g;
var integer = /[0-9]/g;
var specialCharacter = /[!@#%&$^*()_+=|]/g;
var input = $('input[type="password"]');
var registerFormWidth = $(".register-form").width();
var registerFormHeight = $(".register-form").height();
var percent = 1;
var timer = "";

$(document).ready(function () {
  $('input[data-type="password"]').on("keyup keypress blur", function () {
    var value = $(this).val();
    if (specialCharacter.test(value) === true) $(".sc").addClass("action");
    else if (specialCharacter.test(value) === false)
      $(".sc").removeClass("action");

    if (alphabet.test(value) === true) $(".alpha").addClass("action");
    else if (alphabet.test(value) === false) $(".alpha").removeClass("action");

    if (integer.test(value) === true) $(".int").addClass("action");
    else if (integer.test(value) === false) $(".int").removeClass("action");
    if (value.length >= 8) $(".long-length").addClass("action");
    else $(".long-length").removeClass("action");
  });

  $('i[data-action="show-password"]').on("click", function () {
    if ($(input).val.length) {
      var inputType = $(input).attr("type");
      $(input).attr(
        "type",
        $(input).attr("type") === "password" ? "text" : "password"
      );
      if (inputType === "text") {
        $('i[data-action="show-password"]').addClass("fadeOutRight");
        setTimeout(function () {
          $('i[data-action="show-password"]')
            .addClass("fa-eye fadeInRight")
            .removeClass("fa-eye-slash fadeOutRight");
        }, 500);
      } else {
        $('i[data-action="show-password"]')
          .addClass("fadeOutRight")
          .removeClass("fadeInRight");
        setTimeout(function () {
          $('i[data-action="show-password"]')
            .addClass("fa-eye-slash fadeInRight")
            .removeClass("fa-eye fadeOutRight");
        }, 500);
      }
    }
  });
});

var Register = () => {
  $(".btn-next").html(
    '<i class="fa fa-ellipsis-h animated flash infinite"></i>'
  );
  setTimeout(function () {
    $(".btn-next").html("").addClass("animated fadeOut");
    $(".login-icon img").addClass("fadeOut");
    $(".back-link a").addClass("fadeOut");
  }, 1000);

  setTimeout(function () {
    $(".form-container").slideUp("slow").removeClass("fadeOut");
    $(".login-icon").remove();
  }, 2000);

  setTimeout(function () {
    $(".form-container")
      .empty()
      .append(
        '<div class="text-center success-box mt-5">' +
          '<i class="fa fa-check fa-4x animated heartBeat text-purple mb-3"></i><br>' +
          '<h4 class="text-center mt-3">Your registration has been successfully!</h4>' +
          "<span>Note: For use all features confirm your email address</span><br>" +
          '<i class="fa fa-redo-alt fa-spin fa-2x mt-3"></i>' +
          '<div class="process-bar"></div>' +
          "</div>"
      )
      .slideDown("slow");
    timer = setInterval(function () {
      $(".process-bar").width(percent++);
      if ($(".process-bar").width() === registerFormWidth + 30) {
        clearInterval(timer);
        window.location.reload();
      }
    }, 10);
  }, 3000);
};
