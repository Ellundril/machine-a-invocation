const formulaire = document.getElementById("invocation");
const btnInvoquer = document.querySelector(".invoquer");
const message = document.getElementById("message");
const resultat = document.getElementById("resultat");
const machineInvocation = document.querySelector(".invocation");
const btnRecommencer = document.querySelector(".recommencer");
const creatureEmoji = document.querySelector(".creature-emoji");

btnInvoquer.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click");
  const prenom = document.getElementById("prenom").value;
  if (prenom === "") {
    alert("Il faut entrer ton prénom pour que la magie opère");
  } else {
    const creature = document.getElementById("creature").value;
    let creatureAffiche = "";
    switch (creature) {
      case "le Chat-Octo":
        creatureAffiche = "🐙";
        break;
      case "le Dragon-Debug":
        creatureAffiche = "🐉";
        break;
      case "la Licorne-CSS":
        creatureAffiche = "🦄";
        break;
      case "le Renard-Refacto":
        creatureAffiche = "🦊";
        break;
    }
    creatureEmoji.textContent = creatureAffiche;
    message.textContent = `${prenom}, ${creature} a entendu ton appel et te suivra tout le Bloc 1 !`;
    machineInvocation.classList.add("cache");
    resultat.classList.remove("cache");
  }
});
