document.addEventListener('DOMContentLoaded', function() {
  var header1 = document.getElementsByTagName('h1');
  console.log(header1);

  var header2=document.getElementById('headerID');
  console.log(header2);

header1[0].style.color= 'blue';
header2.style.color = 'orange';
header2.style.fontSize = '40px';
header2.style.background = 'purple';
header2.style.padding = '10px';
header2.style.border = '2px dashed red';

var newParagraph = document.createElement('p');
newParagraph.innerText = 'I have just been created with Javascript!';
document.body.appendChild(newParagraph);

header2.addEventListener('click', function(event) {
  console.log(event);
  console.log(event.target);
  event.target.style.color='pink';
});
});
