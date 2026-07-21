import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML, estadoBotones } from "./usecases"
let deck = [],
  puntosJugador = 0,
  puntosComputadora = 0

// Referencias del HTML
const btnPedir = document.querySelector("#btnPedir"),
  btnDetener = document.querySelector("#btnDetener"),
  btnNuevo = document.querySelector("#btnNuevo")
const divCartasJugador = document.querySelector("#jugador-cartas"),
  divCartasComputadora = document.querySelector("#computadora-cartas")
const puntosHTML = document.querySelectorAll("small")

// Esta función crea un nuevo deck
deck = crearDeck()

// Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta(deck)

  puntosJugador = puntosJugador + valorCarta(carta)
  puntosHTML[0].innerText = puntosJugador

  const imgCarta = crearCartaHTML(carta)
  divCartasJugador.append(imgCarta)

  if (puntosJugador > 21) {
    estadoBotones(btnPedir, btnDetener, true)
    turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck)
  } else if (puntosJugador === 21) {
    estadoBotones(btnPedir, btnDetener, true)
    turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck)
  }
})

btnDetener.addEventListener("click", () => {
  estadoBotones(btnPedir, btnDetener, true)
  turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck)
})

btnNuevo.addEventListener("click", () => {
  deck = crearDeck()

  puntosJugador = 0
  puntosComputadora = 0
  puntosHTML[0].innerText = 0
  puntosHTML[1].innerText = 0
  divCartasComputadora.innerHTML = ""
  divCartasJugador.innerHTML = ""

  estadoBotones(btnPedir, btnDetener, false)
})
