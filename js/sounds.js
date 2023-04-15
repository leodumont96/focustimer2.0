export default function() {
  const buttonPressAudio = new Audio('../assets/button-press.wav')
  const endTimer = new Audio('../assets/kichen-timer.mp3')
  const forestSound = new Audio('..//assets/Floresta.wav')
  const rainSound = new Audio('..//assets/Chuva.wav')
  const coffeeshopSound = new Audio('..//assets/Cafeteria.wav')
  const fireplaceSound = new Audio('..//assets/Lareira.wav')

  function buttonPress() {
    buttonPressAudio.play()
  }
  function timeEnd() {
    endTimer.play()
  }

  forestSound.loop == true
  rainSound.loop == true
  coffeeshopSound.loop == true
  fireplaceSound.loop == true

  return {
    buttonPress,
    timeEnd,
    forestSound,
    rainSound,
    coffeeshopSound,
    fireplaceSound
  }
}