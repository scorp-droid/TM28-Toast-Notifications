const button = document.getElementById('button')
const toasts =  document.getElementById('toasts')

const messages = [
  "I am confidently walking the path of my highest potential",
  "Each step I take leads me closer to my true purpose",
  "I trust that I am exactly where I need to be in this moment",
  "I am open to the lessons and opportunities that come my way",
  "I embrace challenges as opportunities for growth and learning",
  "I am aligned with my authentic self and true intentions",
  "Every day, I make progress towards my goals and dreams",
  "I have the power to shape my own destiny and create a meaningful life",
  "I am guided by my inner wisdom and intuition",
  "I am committed to my personal development and self-discovery",
  "I am grateful for the journey I am on and excited for what is to come",
];

button.addEventListener('click', () => createNotification())


function createNotification() {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  

  notif.innerText = getRandomMessage()

    notif.addEventListener("click", () => {
      notif.remove();
    });

  toasts.appendChild(notif)

  //  setTimeout(() => {
  //    notif.remove()
  //  }, 3000)
    
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}