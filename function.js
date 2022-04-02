var password=document.getElementById("password");

 function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()?{}[]<>,.ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = document.getElementById("length").value - 1;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}

function settingsButton(){
  var settingBox = document.getElementById("a");
  if(settingBox.classList.contains("hiddenfirst")){
    settingBox.classList.remove("hiddenfirst");
  } else{
    settingBox.classList.add("hiddenfirst");
  }
}