/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let nombreIngresado = prompt("Ingresa tu nombre")
  let edadIngresada = prompt("Ingresa el año que naciste")
  let ciudadIngresada = prompt("Ingresa la ciudad donde vives")
  let interesPorJsIngresado = confirm("Te interesa JavaScript?")

  edadIngresada = 2023 - edadIngresada

  if (interesPorJsIngresado) {
    interesPorJsIngresado = 'Si'
  } else {
    interesPorJsIngresado = 'No'
  }

  datosPersona = {
    nombre: nombreIngresado,
    edad: edadIngresada,
    ciudad: ciudadIngresada,
    interesPorJs: interesPorJsIngresado,
  };
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  const spanNombre = document.querySelector("#nombre");
  const spanEdad = document.querySelector("#edad");
  const spanCiudad = document.querySelector("#ciudad");
  const spanInteresPorJs = document.querySelector("#javascript");
  
  spanNombre.innerHTML = datosPersona['nombre']
  spanEdad.innerHTML = datosPersona['edad']
  spanCiudad.innerHTML = datosPersona['ciudad']
  spanInteresPorJs.innerHTML = datosPersona['interesPorJs']
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  const FilaMaterias = document.querySelector("#fila");
  if (!FilaMaterias.lastChild){
    listado.forEach(elemento => {

      const contenedor = document.createElement("div")
      contenedor.classList.add("caja")

      const imgMateria = document.createElement("img")
      imgMateria.setAttribute("src", elemento.imgUrl)
      imgMateria.setAttribute("alt", elemento.lenguajes)

      const parrafo = document.createElement("p")
      const textoParrafo = document.createTextNode('Lenguajes: ' + elemento.lenguajes)
      parrafo.classList.add("lenguajes")
      parrafo.appendChild(textoParrafo)

      const parrafoDos = document.createElement("p")
      const textoParrafoDos = document.createTextNode('Bimestres: ' + elemento.bimestre)
      parrafoDos.classList.add("bimestre")
      parrafoDos.appendChild(textoParrafoDos)

      contenedor.appendChild(imgMateria)
      contenedor.appendChild(parrafo)
      contenedor.appendChild(parrafoDos)

      FilaMaterias.appendChild(contenedor)
      
    });
  }

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.querySelector("#sitio");
  sitio.classList.toggle("dark")
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

document.addEventListener("keydown", mostrarParrafoConTeclaF);

function mostrarParrafoConTeclaF(e) {
  const parrafoSobreMi = document.querySelector("#sobre-mi");
  if (e.key == 'f' || e.key == 'F') {
    parrafoSobreMi.classList.remove("oculto")
  }
}