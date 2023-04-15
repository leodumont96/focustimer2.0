import { elements } from "./elements.js"
import Sounds from "./sounds.js"

const sounds = Sounds()

const {
  buttonPlay,
  buttonStop,
  buttonForest,
  buttonRain,
  buttonCoffeeshop,
  buttonFireplace,
  buttonAddTime,
  buttonRemoveTime,
  imgForest,
  imgRain,
  imgCoffeeshop,
  imgFireplace
} = elements

export default function({
  countdown,
  resetDisplay,
  addTime,
  removeTime
}) {

  function openButtonForest() {
    buttonForest.classList.add('active')
    buttonRain.classList.remove('active')
    buttonCoffeeshop.classList.remove('active')
    buttonFireplace.classList.remove('active')
  
    imgForest.setAttribute('fill', '#FFFFFF')
    imgRain.setAttribute('fill', '#323238')
    imgCoffeeshop.setAttribute('fill', '#323238')
    imgFireplace.setAttribute('fill', '#323238')
  
    sounds.forestSound.play()
    sounds.rainSound.pause()
    sounds.coffeeshopSound.pause()
    sounds.fireplaceSound.pause()
  }
  
  function openButtonRain() {
    buttonForest.classList.remove('active')
    buttonRain.classList.add('active')
    buttonCoffeeshop.classList.remove('active')
    buttonFireplace.classList.remove('active')
  
    imgForest.setAttribute('fill', '#323238')
    imgRain.setAttribute('fill', '#FFFFFF')
    imgCoffeeshop.setAttribute('fill', '#323238')
    imgFireplace.setAttribute('fill', '#323238')
  
    sounds.forestSound.pause()
    sounds.rainSound.play()
    sounds.coffeeshopSound.pause()
    sounds.fireplaceSound.pause()
  }
  
  function openButtonCoffeeshop() {
    buttonForest.classList.remove('active')
    buttonRain.classList.remove('active')
    buttonCoffeeshop.classList.add('active')
    buttonFireplace.classList.remove('active')
  
    imgForest.setAttribute('fill', '#323238')
    imgRain.setAttribute('fill', '#323238')
    imgCoffeeshop.setAttribute('fill', '#FFFFFF')
    imgFireplace.setAttribute('fill', '#323238')
  
    sounds.forestSound.pause()
    sounds.rainSound.pause()
    sounds.coffeeshopSound.play()
    sounds.fireplaceSound.pause()
  }
  
  function openButtonFireplace() {
    buttonForest.classList.remove('active')
    buttonRain.classList.remove('active')
    buttonCoffeeshop.classList.remove('active')
    buttonFireplace.classList.add('active')
  
    imgForest.setAttribute('fill', '#323238')
    imgRain.setAttribute('fill', '#323238')
    imgCoffeeshop.setAttribute('fill', '#323238')
    imgFireplace.setAttribute('fill', '#FFFFFF')
  
    sounds.forestSound.pause()
    sounds.rainSound.pause()
    sounds.coffeeshopSound.pause()
    sounds.fireplaceSound.play()
  }

  buttonPlay.addEventListener('click', function(){
    countdown()
    sounds.buttonPress()
  })
  buttonStop.addEventListener('click', function() {
    resetDisplay()
    sounds.buttonPress()
  })

  buttonForest.addEventListener('click', function() {
    openButtonForest()
  })
  buttonRain.addEventListener('click', function() {
    openButtonRain()
  })
  buttonCoffeeshop.addEventListener('click', function() {
    openButtonCoffeeshop()
  })
  buttonFireplace.addEventListener('click', function() {
    openButtonFireplace()
  })

  buttonAddTime.addEventListener('click', function() {
    addTime()
    sounds.buttonPress()
  })
  buttonRemoveTime.addEventListener('click', function(){
    removeTime()
    sounds.buttonPress()
  })
}