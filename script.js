function toggleMode() {
  // acessa a tag html pelo documento
  const html = document.documentElement;

  // verifica se tem o light no html
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light");
  // } else {
  //   html.classList.add("light");
  // } 
  
  // faz a mesma coisa doq decima
  html.classList.toggle('light');
}
git