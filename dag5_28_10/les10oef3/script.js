(function(){
  'use strict';
  let sender = prompt('Who am I?', 'Your name');
  let receiver = prompt('Who is the receiver?', 'Receivers name');
  let message = prompt('What is the message?', 'Message');
  document.getElementById('sender').innerHTML = sender;
  document.getElementById('receiver').innerHTML = receiver;
  document.getElementById('message').innerHTML = message;
  let backgrounds = [
      "url('https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
      "url('https://www.stockvault.net/data/2008/09/02/106231/thumb16.jpg')",
      "url('https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"
  ]
  let i = Math.floor(Math.random() * 3);
  document.getElementById('background').style.background = backgrounds[i];
})();

