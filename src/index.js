function showPoem(response) {
  new Typewriter("#poem-format", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function searchPoem(event) {
  event.preventDefault();

  let stipulationElement = document.querySelector("#user-stipulations");
  let apiKey = "410o3ft86210d5f3d73f24a4d34d2bab";
  let prompt = `Generate a french poem about ${stipulationElement.value}`;
  let context =
    "You are a French poet. Write exactly 4 lines. Make sure the output is formatted in a poem structure with each line separated by <br>. Do not add extra text or explanations, only the poem itself.Add a <strong>Shecodes AI</strong> signature at the end of the poem";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showPoem);
}

let poemGenerator = document.querySelector("#poem-form");
poemGenerator.addEventListener("submit", searchPoem);
