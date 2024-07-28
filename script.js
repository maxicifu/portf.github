let menuVisible = false;

//Funcion que oculta y muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Oculto el manu una vez que se selecciono la opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("plc");
        habilidades[1].classList.add("autocad");
        habilidades[2].classList.add("fusion");
        habilidades[3].classList.add("cplusplus");
        habilidades[4].classList.add("htmlcss");
        habilidades[5].classList.add("javascript");
        habilidades[6].classList.add("python");

        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("aprendizaje");
        habilidades[9].classList.add("analitico");
        habilidades[10].classList.add("proactivo");
        habilidades[11].classList.add("autodidacta"); 
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}