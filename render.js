function renderGame() {
    $('.game-container').empty()
    updateFrogCount()
    for (let i = 0; i < frogCount; i++) {
        const randomX = Math.floor(Math.random() * WIDTH)
        const randomY = Math.floor(Math.random() * HEIGHT)
        const randomColor = '#' + Math.floor(Math.random() * MAX_RGB_VALUE).toString(HEX_BASE)
        const verticalPositionFactor = randomY / HEIGHT

        const sizeFactor = INITIAL_SIZE - verticalPositionFactor * REDUCTION_FACTOR

        const icon = $('<i class="fas fa-frog game-box"></i>').css({
          top: randomY + 'px',
          left: randomX + 'px',
          color: randomColor,
          fontSize: `${sizeFactor * FONT_SIZE_MULTIPLIER}px`
        })
        $('.game-container').append(icon)
    }
}

function updateFrogCount() {
    $('#frogCount').text(frogCount)
  }

function displayMessage(message) {
    const messageElement = $('<div class="message"></div>').text(message)
    $('.game-container').append(messageElement)
}