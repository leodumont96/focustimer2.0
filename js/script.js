import Events from "./events.js"
import Timer from "./timer.js"

const {
  countdown,
  resetDisplay,
  addTime,
  removeTime
}= Timer()

Events({
  countdown,
  resetDisplay,
  addTime,
  removeTime
})