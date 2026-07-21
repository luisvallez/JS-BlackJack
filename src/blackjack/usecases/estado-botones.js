/**
 *
 * @param {HTMLButtonElement} btnPedir
 * @param {HTMLButtonElement} btnDetener
 * @param {Boolean} estado
 */
export const estadoBotones = (btnPedir, btnDetener, estado) => {
  btnPedir.disabled = estado
  btnDetener.disabled = estado
}
