// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const heartStates = {
  '♡': '♥',
  '♥': '♡'
};

const classStates = {
  "activated-heart": "",
  "": "activated-heart"
};

const colorStates = {
  "red": "",
  "": "red"
};

// Your JavaScript code goes here!
const articleHearts = document.querySelectorAll(".like-glyph");
for (const heart of articleHearts) {
  addEventListener('click', fakeCallback)
};

function fakeCallback(e) {
  const heart = e.target;
  mimicServerCall('fakeUrl')
    .then(resp => {
      heart.innerText = heartStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
      heart.className = classStates[heart.className];
    })
    .catch(error => {
      const modal = document.getElementById('modal');
      modal.className = "";
      modal.innerText = error;
      setTimeout(() => modal.className = "hidden", 3000);
    });
};


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
