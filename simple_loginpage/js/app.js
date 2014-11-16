var $username = $("#username");
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $submitButton = $("#submit_button");

$("form span").hide()

var isUsernameValid = function() {
  return $username.val().length > 0;
}

var isPasswordValid = function() {
  return $password.val().length > 8;
}

var arePasswordsMatching = function() {
  return $password.val() === $confirmPassword.val();
}

var canSubmit = function() {
  return isPasswordValid() && arePasswordsMatching() && isUsernameValid()
}

var isUserNamePresent = function() {
  
  if(isUsernameValid()) { 
    $username.next().hide();
  } else {
    $username.next().show();
  }
}

var passwordEvent = function() {
  
  if(isPasswordValid()) {
    $password.next().hide();
  } else {
    $password.next().show();
  }
}

var confirmPasswordEvent = function() {
  
  if(arePasswordsMatching()) {
    $confirmPassword.next().hide();
  } else {
    $confirmPassword.next().show();
  }
}

var enableSubmitButton = function() {
  $submitButton.prop('disabled', !canSubmit());
}

var buttonColor = function() {
	if(canSubmit()) {
		$submitButton.removeClass('submitInvalid')
		$submitButton.addClass('submitValid')
	} else {
		$submitButton.removeClass('submitValid')
		$submitButton.addClass('submitInvalid')
	}
}
											
$username.focus(isUserNamePresent).keyup(isUserNamePresent).keyup(enableSubmitButton).keyup(buttonColor);
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitButton).keyup(buttonColor);
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitButton).keyup(buttonColor);

buttonColor();
enableSubmitButton();

