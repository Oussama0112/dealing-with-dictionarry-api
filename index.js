//-------declaring my variabels
var Word = document.querySelector(".word"),
  container = document.querySelector(".container");
let mydiv = document.createElement("div");
mydiv.className = "wraper";

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && Word.value !== "") {
    mydiv.innerHTML = "";
    let searchedWord = Word.value;
    getdata(searchedWord);
  }
});
async function getdata(w) {
  try {
    mydiv.innerHTML = "uploadding...";
    container.appendChild(mydiv);
    myurl = "https://api.dictionaryapi.dev/api/v2/entries/en/" + w;
    let response = await fetch(myurl);
    let data = await response.json();
    mydiv.innerHTML = `<div class="wordtitle">word title: <span>${w} </span></div>
                    <div class="meaning">meaning : <span> ${data[0]["meanings"][0]["definitions"][0]["definition"]} </span></div>
                    <audio src= '${data[0]["phonetics"][0]["audio"]}' controls ></audio>`;
    container.appendChild(mydiv);
    Word.value = "";
    Word.focus();
  } catch (error) {
    mydiv.innerHTML = "word doesn't exist at the moment sorry!!";
    Word.value = "";
    Word.focus();
  }
}
