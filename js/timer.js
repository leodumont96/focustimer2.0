import { elements } from "./elements.js"

const {
  minutesDisplay,
  secondsDisplay
} = elements

export default function() {

  let newMinutes = Number(minutesDisplay.textContent)
  let timerTimeout

  function countdown() {
    timerTimeout = setTimeout(function() {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
  
      uptadeDisplay(minutes, 0)
  
      if(minutes <= 0) {
        return
      }
  
      if(seconds <= 0) {
        seconds = 60
        // minutesDisplay.textContent = String(--minutes).padStart(2, '0')
        --minutes
      }
  
      uptadeDisplay(minutes, --seconds)
  
      countdown()
    }, 1000)
  }
  
  function uptadeDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  
  function resetDisplay() {
    clearTimeout(timerTimeout)
    uptadeDisplay(newMinutes, 0)
  }
  
  function addTime() {
    newMinutes = Number(minutesDisplay.textContent) + 5
    uptadeDisplay(newMinutes, 0)
  }
  
  function removeTime() {
    newMinutes = Number(minutesDisplay.textContent) - 5
    uptadeDisplay(newMinutes, 0)
  }

  return {
    countdown,
    resetDisplay,
    addTime,
    removeTime
  }
}