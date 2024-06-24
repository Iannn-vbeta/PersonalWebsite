const scriptURL = "https://script.google.com/macros/s/AKfycbz5yiohaRJrgCVGMcOrlbLy4h57v7U6AQsiGFNFCHU5OPytWRDsIHGzQCTmVrCr_cQ/exec";
const form = document.forms["Kotak Masuk"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
