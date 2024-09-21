let menuVisible = false;
// Funcion para mostrar y ocultar el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.querySelector("nav").classList ="";
    menuVisible = false;
    }
    else {
      document.querySelector("nav").classList ="responsive";
      menuVisible = true;
    }
}

function seleccionar(){
    //ocultar menu cuando se selecciona una opcion
    document.querySelector("nav").classList ="";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("git");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("mysql");
        habilidades[6].classList.add("liderazgo");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("responsabilidad");
        habilidades[9].classList.add("gestion");
        habilidades[10].classList.add("equipo");
    }
}

//funcio para aplicar animaciones de las habilidades
//detectar el scroll
window.onscroll = function(){
    efectoHabilidades();
}

