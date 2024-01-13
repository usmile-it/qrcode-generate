var qrcode = new QRCode("qrcode");
var elText = document.getElementById("url");

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}

function makeCode() {
  qrcode.makeCode(elText.value);
  $("#qhref").attr("href", elText.value);
  $("#qshow").removeClass("d-none");
}

$("#btnDownload").click(function () {
  let dataUrl = document.querySelector("#qrcode").querySelector("img").src;
  downloadURI(dataUrl, elText.value + ".png");
});

$("#btnGenerate").click(function () {
  $("#qshow").addClass("d-none");
  $("#loading").toggleClass("d-none");
  setTimeout(function () {
    makeCode();
    $("#loading").toggleClass("d-none");
  }, 500);
});
$("#qrcode > img").css({ margin: "auto" });
