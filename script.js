let scriptURL = "https://script.google.com/macros/s/AKfycbz5yiohaRJrgCVGMcOrlbLy4h57v7U6AQsiGFNFCHU5OPytWRDsIHGzQCTmVrCr_cQ/exec";
let form = document.forms["Kotak Masuk"];

let btnKirim = document.querySelector(".btn-kirim");
let btnLoading = document.querySelector(".btn-loading");
let Alert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  btnKirim.classList.toggle("d-none");
  btnLoading.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnKirim.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
      Alert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
