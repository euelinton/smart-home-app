const icons = document.querySelectorAll('.list-icons li')
const turn = document.querySelector('.sha_switch')

icons
  .forEach(icon => {
    icon.addEventListener('click', () => {
      if (icon.classList[0] === 'on') {
        icon.classList.add('off')
        icon.classList.remove('on')  
      } else {
        icon.classList.add('on')
        icon.classList.remove('off')
      }
    })
  })

turn
  .addEventListener('click', () => {
    turn
      .classList.toggle('hide')
  })
