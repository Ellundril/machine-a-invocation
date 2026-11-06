const formulaire = document.getElementById("invocation");
const btnInvoquer = document.querySelector(".invoquer");
const message = document.getElementById("message");
const resultat = document.getElementById("resultat");
const machineInvocation = document.querySelector(".invocation");
const btnRecommencer = document.querySelector(".recommencer");
const creatureEmoji = document.querySelector(".creature-emoji");
const prenom = document.getElementById("prenom");
const creature = document.getElementById("creature");

function invocation() {
  const prenomChoisi = prenom.value;
  if (prenomChoisi === "") {
    alert("Il faut entrer ton prénom pour que la magie opère");
  } else {
    const creatureChoisie = creature.value;
    let creatureAffiche = "";
    switch (creatureChoisie) {
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
    message.textContent = `${prenomChoisi},\n${creatureChoisie} a entendu ton appel et te suivra tout le Bloc 1 !`;
    machineInvocation.classList.add("cache");
    resultat.classList.remove("cache");
    creatureEmoji.classList.add("invoquee");
  }
}

btnInvoquer.addEventListener("click", (event) => {
  event.preventDefault();
  invocation();
});

btnRecommencer.addEventListener("click", () => {
  resultat.classList.add("cache");
  machineInvocation.classList.remove("cache");
  prenom.value = "";
  creatureEmoji.classList.remove("invoquee");
});
