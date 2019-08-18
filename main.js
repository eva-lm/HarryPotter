"use strict";
const sombrero = document.querySelector(".js-button_hat");
const imagen = document.querySelector(".image_space");

function generateYourHouse(eve) {
  const house = document.querySelector(".js-house");
  const numeroAleatorio = Math.random() * 10;
  const numeroSinDecimales = numeroAleatorio.toFixed(0);

  if (numeroSinDecimales <= 2) {
    house.innerHTML = "Gryffindor!";
    imagen.classList.add("casa-uno");
    imagen.classList.remove("casa-dos");
    imagen.classList.remove("casa-tres");
    imagen.classList.remove("casa-cuatro");
    imagen.classList.remove("muggle");
  } else if (numeroSinDecimales > 1 && numeroSinDecimales < 5) {
    house.innerHTML = "Ravenclaw!";
    imagen.classList.add("casa-dos");
    imagen.classList.remove("casa-uno");
    imagen.classList.remove("casa-tres");
    imagen.classList.remove("casa-cuatro");
    imagen.classList.remove("muggle");
  } else if (numeroSinDecimales > 3 && numeroSinDecimales < 7) {
    house.innerHTML = "Hufflepuff!";
    imagen.classList.add("casa-tres");
    imagen.classList.remove("casa-uno");
    imagen.classList.remove("casa-dos");
    imagen.classList.remove("casa-cuatro");
    imagen.classList.remove("muggle");
  } else if (numeroSinDecimales > 5 && numeroSinDecimales < 9) {
    house.innerHTML = "Slytherin!";
    imagen.classList.add("casa-cuatro");
    imagen.classList.remove("casa-uno");
    imagen.classList.remove("casa-dos");
    imagen.classList.remove("casa-tres");
    imagen.classList.remove("muggle");
  } else if (numeroSinDecimales > 7 && numeroSinDecimales < 11) {
    house.innerHTML = "Eres un puto muggle.";
    imagen.classList.add("muggle");
    imagen.classList.remove("casa-uno");
    imagen.classList.remove("casa-dos");
    imagen.classList.remove("casa-tres");
    imagen.classList.remove("casa-cuatro");
  }
}
sombrero.addEventListener("click", generateYourHouse);

/*   const randomNumber = Math.random() * 100;
  const number = randomNumber.toFixed(0);
  console.log(number); */
