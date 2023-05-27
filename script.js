(function() {
    const form = document.querySelector('#formInput');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const message = document.querySelector("#inputtext");
      const messageContent = document.querySelector("#seeMsg");
      const feedback = document.querySelector("#feedback");
      const subbtn = document.querySelector("#subbtn");
  
      if (message.value ==="") {
        feedback.classList.add('show');
        setTimeout(function() {
          feedback.classList.add('feedback');
        }, 5000)
      } else {
        messageContent.textContent = message.value;
        message.value = '';
      };
    });
  })();


  
// variable declaration
const body = document.querySelector('body');
const color = ['AliceBlue', 'AntiqueWhite', 'Aqua',"red", "yellow", "green", 'Aquamarine', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue',"#9691C7", "#00B09B", "#68AEE0", "#008B87", "#99CCCC", "#005699", "#C2C4C6", "#998300", "#CCAE99", "#A76100", "#E0CB68", "#B03400"];

document.body.style.backgroundColor = "lightyellow";
// change color after click on submit button
subbtn.addEventListener('click', () => {
  let colorIndex = parseInt(Math.random() * color.length);
  body.style.backgroundColor = color[colorIndex];
}); 

