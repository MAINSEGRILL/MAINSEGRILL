let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(1000)
  .typeString('<span style="color: #a744c5;"> Asadores de calidad </span>')
  .pauseFor(1000)
  .deleteChars(10)
  .start();
