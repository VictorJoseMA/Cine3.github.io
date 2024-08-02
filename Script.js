function Drama() {
    let restriccion = document.getElementById("Danger");
    let peliculas = document.getElementById("recomendaciones");
    let verificacion = parseInt(restriccion.value);

    switch (true) {
        case isNaN(verificacion):
            peliculas.textContent = 'Por favor ingrese una edad válida.';
            break;
        case (verificacion < 13):
            peliculas.textContent = 'Casablanca';
            break;
        case (verificacion >= 13 && verificacion <= 15):
            peliculas.textContent = 'The Shawshank Redemption';
            break;
            case(verificacion>=16):
            peliculas.textContent='Taxi Driver'
            break;
        default:
            peliculas.textContent = 'No hay recomendaciones para esta edad';
            break;
    }
}
function Comedia() {
    let restriccion = document.getElementById("Danger");
    let peliculas = document.getElementById("recomendaciones");
    let verificacion = parseInt(restriccion.value);
    
    switch (true) {
        case isNaN(verificacion):
            peliculas.textContent = 'Por favor ingrese una edad válida.';
            break;
        case (verificacion < 13):
            peliculas.textContent = 'Back to the Future';
            break;
        case (verificacion >= 13 && verificacion <= 15):
            peliculas.textContent = 'The Truman Show';
            break;
            case(verificacion>=16):
            peliculas.textContent='The Wolf of Wall Street'
            break;
        default:
            peliculas.textContent = 'No hay recomendaciones para esta edad';
            break;
    }
}
function Musical(){
    let restriccion = document.getElementById("Danger");
    let peliculas = document.getElementById("recomendaciones");
    let verificacion = parseInt(restriccion.value);
    
    switch (true) {
        case isNaN(verificacion):
            peliculas.textContent = 'Por favor ingrese una edad válida.';
            break;
        case (verificacion < 13):
            peliculas.textContent = 'La La Land';
            break;
        case (verificacion >= 13 && verificacion <= 15):
            peliculas.textContent = 'Les Miserables';
            break;
            case(verificacion>=16):
            peliculas.textContent='The Rocky Horror Picture Show'
            break;
        default:
            peliculas.textContent = 'No hay recomendaciones para esta edad';
            break;
    }
}
function Crimen() {
    let restriccion = document.getElementById("Danger");
    let peliculas = document.getElementById("recomendaciones");
    let verificacion = parseInt(restriccion.value);
    
    switch (true) {
        case isNaN(verificacion):
            peliculas.textContent = 'Por favor ingrese una edad válida.';
            break;
        case (verificacion < 13):
            peliculas.textContent = 'No hay opciones para esta edad';
            break;
        case (verificacion >= 15 && verificacion <= 17):
            peliculas.textContent = 'El Silencio de los inocentes';
            break;
            case(verificacion>=18):
            peliculas.textContent=' Misterio a la vista '
            break;
        default:
            peliculas.textContent = 'No hay recomendaciones para esta edad';
            break;
    }
}