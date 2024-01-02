import state from "./state.js"
import * as timer from "./timer.js"
import * as elements from "./elements.js"
import * as sounds from "./sounds.js"


export const toggleRunning = () => {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countDown()
  sounds.buttonPressAudio.play()
}

export const reset = () => {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  sounds.buttonPressAudio.play()
  timer.updateDisplay()
}

export const set = () => {
  elements.minutes.setAttribute('contenteditable', true)
  elements.minutes.focus()
}

export const toggleMusic = () => {
  state.isMuted = document.documentElement.classList.toggle('music-on')

  if(state.isMuted) {
    sounds.bgAudio.play()
    return
  }

  sounds.bgAudio.pause()
}