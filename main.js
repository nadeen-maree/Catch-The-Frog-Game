const controller = (function() {
    let countdownInterval
    let timeRemaining = gameInfo.timer
  
    function startCountdown() {
      const countdownElement = $('#timerValue')
      const levelElement = $('#levelValue')
      
      countdownElement.text(timeRemaining)
      levelElement.text(gameInfo.level)
      
      countdownInterval = setInterval(() => {
        timeRemaining--
        countdownElement.text(timeRemaining)
  
        if (timeRemaining <= 0) {
          clearInterval(countdownInterval)
          if ($('.game-box').length > 0) {
            displayMessage("Game Over! You lost.")
          } else {
            clearInterval(countdownInterval)
            startGame()
          }
        } else if (timeRemaining <= 3) {
            flashTimer($('#timerContainer'), 'red')
        }
      }, 1000)
    }
  
    function startGame() {
      renderGame();
      timeRemaining = gameInfo.timer + gameInfo.level - 1
      clearInterval(countdownInterval)
      $('#startButton').text('Catch The Frogs!')
      flashTimer($('#timerContainer'), 'yellow')
      startCountdown()
    }
  
    function flashTimer(element, color) {
        element.css('color', color)
        setTimeout(() => {
          element.css('color', '')
        }, 500);
    }

    function getCountdownInterval() {
      return countdownInterval
    }
  
    return {
      startGame,
      getCountdownInterval
    }
})()
  
$('.game-container').on('click', '.game-box', function() {
    $(this).remove()
    frogCount--
    updateFrogCount()
    if (frogCount === 0) {
        gameInfo.level++
        frogCount = gameInfo.level
        controller.startGame()
    }
})

  $('#startButton').on('click', () => {
    controller.startGame()
    $('#startButton').prop('disabled', true)
})
