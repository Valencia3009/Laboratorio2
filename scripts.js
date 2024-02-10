function mostrarMas() {
    const articulo = document.querySelector("#contenido");
    const btnMostrar = document.getElementById("btnMostrar");

    if (articulo.classList.contains("abierto")) {
        articulo.classList.remove("abierto");
        btnMostrar.textContent = "Mostrar más";
    } else {
        articulo.classList.add("abierto");
        btnMostrar.textContent = "Mostrar menos";
    }
}

function noche() {
    document.getElementById('img').src = "img/dia.jpg";
}
  
function dia() {
    document.getElementById('img').src = "img/noche.jpg"; 
}

document.addEventListener('DOMContentLoaded', function() {
    const img2 = document.getElementById('img2');
    const btnCambiar = document.getElementById('btnCambiar');

    let isImage1 = true;

    btnCambiar.addEventListener('click', function() {
        if (isImage1) {
            img2.src = "img/dia.jpg";
            img2.alt = "Image 2";
        } else {
            img2.src = "img/noche.jpg";
            img2.alt = "Image 1";
        }

        isImage1 = !isImage1;
    });
});
//=====================================
// Script para el primer ejemplo mouseover
// Función para cambiar el color del cuadrado
function pintar(col) {
    document.getElementById("Cuadrado").style.backgroundColor = col;
}

// Eventos mouseover y mouseout
document.addEventListener("DOMContentLoaded", function() {
    // Evento ROJO
    document.getElementById("rojo").addEventListener("mouseover", function() {
        pintar('#f00');
    });
    document.getElementById("rojo").addEventListener("mouseout", function() {
        pintar('#FFD1DC');
    });

      // Evento VERDE
      document.getElementById("verde").addEventListener("mouseover", function() {
        pintar('#0f0');
    });
    document.getElementById("verde").addEventListener("mouseout", function() {
        pintar('#FFD1DC');
    });

});

//Script para el segundo ejemplo mouseover
document.addEventListener("DOMContentLoaded", function() {
    var img1 = document.getElementById("img1");
    
    img1.addEventListener("mouseover", function() {
        Cambiar('img1');
    });

    img1.addEventListener("mouseout", function() {
        Restaurar('img1');
    });
});

function Cambiar(imagen) {
    document.getElementById(imagen).src = 'img/img2.png';
}

function Restaurar(imagen) {
    document.getElementById(imagen).src = 'img/img1.png';
}

// Script para el tercer ejercicio mouseover
document.addEventListener("DOMContentLoaded", function() {
  
    function cambiarImagen(imagen) {
        var rutaImagen = 'img/' + imagen + '.png';
        document.getElementById('imagenMostrada').src = rutaImagen;
    }


    document.getElementById('sirena').addEventListener('mouseover', function() {
        cambiarImagen('sirena');
    });

    document.getElementById('caballito').addEventListener('mouseover', function() {
        cambiarImagen('caballito');
    });

    document.getElementById('estrella').addEventListener('mouseover', function() {
        cambiarImagen('estrella');
    });
});


// EVENTO FOCUS
// Scrip para el primer ejercicio focus
document.getElementById('text1').addEventListener('focus', tomarfoco1);
document.getElementById('text1').addEventListener('blur', perderfoco1);

function tomarfoco1() {
    document.getElementById('text1').style.color = '#ff0000';
}



function perderfoco1() {
    document.getElementById('text1').style.color = '#000000';
}



// Scrip para el segundo ejercicio focus
const imagen = document.getElementById('imagen');

imagen.addEventListener('click', function() {
    imagen.focus();
});

// Scrip para el tercer ejercicio focus
const texto = document.getElementById('texto');

texto.addEventListener('focus', function() {
    texto.style.backgroundColor = 'lightblue';
});

texto.addEventListener('blur', function() {
    texto.style.backgroundColor = '';
});
