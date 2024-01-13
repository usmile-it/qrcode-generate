// var qrcode = new QRCode("qrcode", "https://www.example.net");

var qrcode = new QRCode("qrcode");

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
  var elText = document.getElementById("url");

  if (!elText.value) {
    alert("Input a text");
    elText.focus();
    return;
  }

  qrcode.makeCode(elText.value);
  setTimeout(function () {
    $("#btnDownload").removeClass("d-none");
  }, 500);
}

$("#btnDownload").click(function () {
  let dataUrl = document.querySelector("#qrcode").querySelector("img").src;
  downloadURI(dataUrl, "qrcode.png");
});

makeCode();

$("#url")
  .on("blur", function () {
    makeCode();
  })
  .on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });
$("#qrcode > img").css({ margin: "auto" });
