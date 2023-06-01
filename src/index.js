// const { escape } = require("querystring")

const { type } = require("os");

// let i = 2;
// for(;i<11;i++){
//     if(i % 2 == 0) {
//         alert(i)
//     }
// }
// let i = 0;

// while(i < 3) {
//     alert( `number ${i}!` );
//     i++
//   }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }
// let browser = prompt('Введите ваш браузер', '')
// if (browser === 'Edge') {
//     alert( "You've got the Edge!" )
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// }


// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//   case 0:
//   alert('Вы ввели число 0');
//   break;
  
//   case 1:
//   alert('Вы ввели число 1');
//   break;

//   case 2:
//   case 3:
//   alert('Вы ввели число 2, а может и 3');
//   break
// }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
//     }

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
//     }

// function getMin(a, b) {
//     if (a < b) {
//         return a
//     } 
//     return b
// }

// function getMin(a, b) {
//     return (a < b) ? a : b
// }

// function getMin(a, b) {
//     return (a < b) ? a : b
// }


// function pow(x, n) {
//     let result = x;
//     for (i = 1; i < n; i++) {
//         result *= x;
//     } 
//     return result;
// }

// let x = prompt('Введите число, которое будем возводить в степень', '')
// let n = prompt('Введите в какую степень будем возводить число', '')

// if (n < 1) {
//     alert(`Степень ${n} не поддерживается`)
// } else {
//     alert( pow(x, n) )
// }

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => ("Вы согласились."),
//     () => ("Вы отменили выполнение.") 
//   );

// const elem = document.body.childNodes;
// const div = document.body.firstChild;
// const lastElem = elem.childNodes[elem.childNodesle - 1];
// // lastElem = body.lastChild
// // // for (let node of elem) {
// // //   alert(node);
// // }
// const next = firstDiv.nextSibling
// alert(next.nodeValue)
// // alert(Array.from(elem).filter);
// const divElem = document.body.firstElementChild;
// const ul = divElem.nextElementSibling;
// const secondLi = ul.children[1]
// let






// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }

//     return true;
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }

// alert (sum);


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof(obj[key]) === 'number') {
//             obj[key] *= 2;

//         }
//     }
// }

// multiplyNumeric(menu)

// console.log(menu)

// function Calculator() {
//     this.read = function(a, b) {
//         a = +prompt('a?', '');
//         b = +prompt('b?', '');
//         this.a = a;
//         this.b = b;
//     };
//     this.sum = function() {
//         return this.a + this.b;
//     }
//     this.mul = function() {
//         return this.a * this.b;
//     }
// }
  
// let calculator = new Calculator();

// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//       return this;
//     }
//   };

// ladder.up().up().showStep()


// function Accumulator(startingValue) {
//     this.value = startingValue
//     this.read = function() {
//         let num = +prompt('Введите число', '');
//         this.value += num;
//     }
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// alert(accumulator.value);

// function pow(x, n) {
//     let result = 1
//     if (n > 1) {
//         for (let i = 0; i < n; i++) {
//             result *= x;
//         }

//         return result;
//     }
// }

// function pow (x, n) {
//     return (n == 1) ? x : x * pow(x, n - 1);
//     }



// alert( pow(2, 3) )



// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

// function sumSalaries(salaries) {
//     let result = 0;
//     for (let value of Object.values(salaries)) {
//         result += value;
//     }
//     return result;
// }

// alert( sumSalaries(salaries) );

// function count(obj) {
//     return Object.keys(obj).length;
// }

// let user = {
//     name: 'John',
//     age: 30
//   };
  
//   alert( count(user) );

// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += is;
//     }
//     return sum;

//     // if (n == 1) {
//     //     return n;
//     // } else {
//     //     return n + sumTo(n - 1);
//     // }
// }

// alert( sumTo(100) )




// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b
//     // return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// alert(fib(777))



// function printList(list){
//     let arr = [];
//     let tmp = list;
//     while (tmp) {
//         arr.push(tmp.value);
//         tmp = tmp.next;
//     }
    
//     for (let i = arr.length - 1; i >= 0 ; i--) {
//         alert(arr[i]);
//     }

    // if (tmp.next) {
    //     printList(tmp.next);
    // }         
    
    // alert(tmp.value);

// }

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };

//  printList(list)
// alert(Object.values(list))


// let data = {
//     "Рыбы": {
//       "форель": {},
//       "лосось": {}
//     },
  
//     "Деревья": {
//       "Огромные": {
//         "секвойя": {},
//         "дуб": {}
//       },
//       "Цветковые": {
//         "яблоня": {},
//         "магнолия": {}
//       }
//     }
//   };


// let container = document.querySelector('.container');
// function createTree(container, obj) {
    
//     for (let key in obj) {
//         let li = document.createElement('li')
//         li.textContent = key;
//         if (key.value) {
//             li.textContent = key;
//             let ul = document.createElement('ul');
//             ul.append(li);
//             createTree(key.value)
//         }
//     }
// }

// let firstLi = document.getElementById('one');
// for (i = 2; i <= 3; i++) {
//     let li = document.createElement('li');
//     li.textContent = i;
//     firstLi.after(li)
// }

// firstLi.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');
// let elem;
// let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
// let scrollWidth = elem.offsetWidth - elem.clientWidth - clientLeft

const signInButton = document.querySelector('.sign-in-button-js');
const footer = document.querySelector('.footer')

signInButton.addEventListener('click', () => {
    
    footer.scrollIntoView(false);
})

// function positionAt(anchor, position, elem) {
//     anchor.style.position = 'relative';
//     elem.style.position = 'absolute';

//     let elemPos = elem.getBoundingClientRect(); 
//     let elemHeight = elemPos.height;
//     let elemWidth = elemPos.height;
    
//     if (position === 'top') {
//         elem.style.left = '0px';
//         elem.style.top = `${-elemHeight}px`;
//     }

//     if (position === 'right') {
//         elem.style.right = `${-elemWidth}px`
//         elem.style.top = '0px';
//     }

//     if (position === 'bottom') {
//         elem.style.left = '0px'
//         elem.style.bottom = `${-elemHeight}px`;
//     }
// }

// function getCoords(elem) {
//     let box = elem.getBoundingClientRect();

//     return {
//         top: box.top + window.scrollY,
//         left: box.left + window.scrollX,
//     }
// }
// function positionAt(anchor, position, elem) {
//     let anchorCoords = getCoords(anchor);

//     switch (position) {
//         case 'top-out':
//             elem.style.left = `${anchorCoords.left}px`;
//             elem.style.top = `${anchorCoords.top - elem.offsetHeight}px`
//             break;

//         case 'right-out':
//             elem.style.left = `${anchorCoords.left + anchor.offsetWidth}px`;
//             elem.style.top = `${anchorCoords.top}px`
//             break;

//         case 'bottom-out':
//             elem.style.left = `${anchorCoords.left}px`;
//             elem.style.top = `${anchorCoords.top +  anchor.offsetHeight}px`
//             break;

//         case 'top-in':
//             elem.style.left = `${anchorCoords.left}px`;
//             elem.style.top = `${anchorCoords.top}px`
//             break;

//         case 'right-in':
//             elem.style.left = `${anchorCoords.left + anchor.offsetWidth - elem.offsetWidth}px`;
//             elem.style.top = `${anchorCoords.top}px`
//             break;

//         case 'bottom-in':
//             elem.style.left = `${anchorCoords.left}px`;
//             elem.style.top = `${anchorCoords.top +  anchor.offsetHeight - elem.offsetHeight}px`
//             break;
//     }
// }



// let button = document.querySelector('#hider');
// let text = document.querySelector('#text');

// button.addEventListener('click', function() {
//     text.remove();
// })

// const button = document.body.insertAdjacentHTML('beforeend', `<button class"buttonDelete">Нажми на меня</button>`);
// button.addEventListener('click', function() {
//     this.remove()
// })

// document.body.insertAdjacentHTML('beforeend', `<button class"buttonDelete">Нажми на меня</button>`);
// const button = document.querySelector('.buttonDelete')
// button.onclick = function() {
//     this.remove()
// }

// const button = document.body.insertAdjacentHTML('beforeend', `<button onclick="this.remove()">Нажми на меня</button>`);


let field = document.querySelector('#field');
field.style.position = 'relative';
let ball = document.querySelector('#ball');
ball.style.position = 'absolute';
fieldCoord = field.getBoundingClientRect();

field.addEventListener('click', function moveBall(event) {
    let x = event.clientX - fieldCoord.left - field.offsetLeft;
    let y = event.clientY - fieldCoord.top - field.offsetTop;
    ball.style.top = `${y - ball.offsetHeight/2}px`;
    ball.style.left = `${x - ball.offsetWidth/2}px`;
})


