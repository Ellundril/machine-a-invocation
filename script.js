const formulaire = document.getElementById("invocation");
const btnInvoquer = document.querySelector(".invoquer");
const message = document.getElementById("message");
const resultat = document.getElementById("resultat");
const machineInvocation = document.querySelector(".invocation");
const btnRecommencer = document.querySelector(".recommencer");

btnInvoquer.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click");
  const prenom = document.getElementById("prenom").value;
  if (prenom === "") {
    alert("Il faut entrer ton prénom pour que la magie opère");
  } else {
    const creature = document.getElementById("creature").value;
    message.textContent = `${prenom}, ${creature} a entendu ton appel et te suivra tout le Bloc 1 !`;
    machineInvocation.classList.add("cache");
    resultat.classList.remove("cache");
  }
});
