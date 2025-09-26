# Projects related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/stackblitz-starters-zfct5ikh?file=index.html)

# Solution code(JavaScript)

## Project 1

```javascript
console.log("Navneet")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    switch(e.target.id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;

      case 'maroon':
        body.style.backgroundColor = 'maroon';
        break;

      case 'blue':
        body.style.backgroundColor = 'blue';
        break;

      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;

      default:
        console.log("Unknown color button clicked");
    }
  });
});
// using if 

//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'maroon') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
    
//   });
// });




```