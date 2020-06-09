function openPanel(evt, panelName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Recupera todos los paneles y los oculta
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // recupera todos los botones y elimina la clase activo
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Suma la clase active al elemento Html que fue afectado por el evento 
  //y pasa display block al panel pasado como parametro 
  document.getElementById(panelName).style.display = "block";
  evt.currentTarget.className += " active";
}