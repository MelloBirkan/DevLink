function toggleMode() {
  const html = document.documentElement;
  const img = document.querySelector("#profile img");
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light");
  } else {
    html.classList.add("light");
  }*/
  html.classList.toggle("light");

  // pegar a tag img subs a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Mello ultilizando um oculos de sol sentado");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute(
      "alt",
      "Foto de Mello Birkan sorrindo usando costume azul, barba e fundo azul"
    );
  }
}
