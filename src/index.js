function searchPoem(event) {
  event.preventDefault();

  new Typewriter("#poem-format", {
    strings: "Les oiseaux chantent joyeusement",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemGenerator = document.querySelector("#poem-form");
poemGenerator.addEventListener("submit", searchPoem);
