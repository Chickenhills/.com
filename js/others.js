

function sendwhatsapp() {
  event.preventDefault();
  var phonenumber = "2349074097626";
  var name = document.querySelector("#name").value;
  var pnumber = document.querySelector("#pnumber").value;
  var dAddress = document.querySelector("#dAddress").value;
  var oDetails = document.querySelector("#oDetails").value;
  var sDeliv = document.querySelector("#sDeliv").value;

  var url = "https://wa.me/" + phonenumber + "?text=" +
    "*Name:* " + name + "%0a" +
    "*Phone Number:* " + pnumber + "%0a" +
    "*Delivery Address:* " + dAddress + "%0a" +
    "*Order Details:* " + oDetails + "%0a" +
    "*Special Delivery Instructions?* " + sDeliv + "%0a" +
    "Good day, This are my details, I want to place an order";

  window.open(url, "_blank").focus();
}