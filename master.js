let qurl = new QRCode("qrcode");

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
  qurl.makeCode($("#url").val());
  $("#qhref").attr("href", $("#url").val());
  $("#qshow").removeClass("d-none");
  $("#qrcode > img").css({ margin: "auto" });
}

$("#btnDownload").click(function () {
  let dataUrl = document.querySelector("#qrcode").querySelector("img").src;
  downloadURI(dataUrl, $("#url").val() + ".png");
});

$("#btnGenerate").click(function () {
  $("#qshow").addClass("d-none");
  $("#loading").toggleClass("d-none");
  setTimeout(function () {
    makeCode();
    $("#loading").toggleClass("d-none");
  }, 500);
});
