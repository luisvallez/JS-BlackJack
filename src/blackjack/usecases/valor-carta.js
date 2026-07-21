/**
 *
 * @param {String} carta
 * @returns {Number}
 */
export const valorCarta = (carta) => {
  if (!carta || carta.length < 0)
    throw new Error("No existe o no se generó una carta de la manera adecuada")
  const valor = carta.substring(0, carta.length - 1)
  return (
    isNaN(valor) ?
      valor === "A" ?
        11
      : 10
    : valor * 1
  )
}
