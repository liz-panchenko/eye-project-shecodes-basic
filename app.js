function getFact() {
  let name = prompt("What is your name?");
  let knowledge = prompt("Did you know all these facts?");
  knowledge = knowledge.toLowerCase().trim();
  if (knowledge === "yes") {
    alert(
      `You are incredible! Below you'll find one visual illusion for you. Thanks for your time, ${name}.
          See 👀 you!`
    );
  } else {
    alert(
      `I hope it was interesting! Below you'll find one visual illusion for you. Thanks for your time, ${name}.
          See 👀 you!`
    );
  }
  let illusionImage = document.querySelector(".visualIllusion");
  illusionImage.classList.remove("hidden");
}

let applyButton = document.querySelector("button");
applyButton.addEventListener("click", getFact);
