'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
// styling CSS
let myElement1 = document.querySelector('button');
myElement1.style.backgroundColor = '#D93600';
myElement1.style.padding = '10px 50px';
myElement1.style.border = 'none';
myElement1.style.borderRadius = '5px';
myElement1.textContent = 'Process';
myElement1.style.color = '#ffffff';
// styling CSS
let myElement2 = document.querySelector('textarea');
myElement2.style.width = '200px';
myElement2.style.height = '100px';

const textEl = document.querySelector('textarea');
const btnEl = document.querySelector('button');

// This simple script allows you to convert text ,you pasted into input window,
// to lowerCase first letter, get rid of tabs, spaces and underscores.
// The main goal of this script was to normalize text in a certain way.

// Solution #1

btnEl.addEventListener('click', function () {
  const initialStr = document.querySelector('textarea').value;
  const strArrInit = initialStr.split('\n');
  console.log(initialStr);
  // spaces trim array
  const strArrTrim = [];
  for (const n of strArrInit) {
    strArrTrim.push(n.trim());
  }
  console.log(strArrTrim);

  // array for placing first letter lowercase
  const strArrTrLowerF = [];
  for (const n of strArrTrim) {
    strArrTrLowerF.push(n[0].toLowerCase() + n.slice(1));
  }
  console.log(strArrTrLowerF);

  const strArrF = [];
  for (const n of strArrTrLowerF) {
    strArrF.push(n.split('_'));
  }
  console.log(strArrF);

  const arrayA = [];
  for (const n of strArrF) {
    arrayA.push(n[0]);
    arrayA.push(n[1][0].toUpperCase() + n[1].toLowerCase().slice(1) + '\n');
  }
  const b = arrayA[arrayA.length - 1].slice(
    0,
    arrayA[arrayA.length - 1].lastIndexOf('\n')
  );
  arrayA.pop();
  arrayA.push(b);

  const postFinStr = arrayA.join('');
  console.log(postFinStr);
  document.querySelector('textarea').value = postFinStr;
});

/* 
Text for pasting

undescore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure 
*/
