let nArr = prompt("Enter the number of data you are going to provide: ")

let arr = []


for(let i = 0; i < nArr; i++){
   let inp = prompt(`Enter number ${i} : `)
   arr.push(inp);
   
}
console.log(arr);

for (let i = 0; i < nArr; i++) {
    for (let j = i + 1; j < nArr; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log(arr);




//// //18.Ascending and Descending order of 3 numbers

// let a = 100,
//   b = 122,
//   c = 78;

// if (a > b && a > c) {
//   if (b > c) {
//     console.log(`${a}, ${b}, ${c}`);
//   } else{
//     console.log(`${a}, ${c}, ${b}`);
//   }
// }
// else if(b > a && b > c){
//     if(a > c){
//         console.log(`${b}, ${a}, ${c}`)
//     }
//     else{
//         console.log(`${b}, ${c}, ${a}`)
//     }
// }
// else if(c > a && c > b){
//     if(a > b){
//         console.log(`${c}, ${a}, ${b}`)
//     }
//     else{
//         console.log(`${c}, ${b}, ${a}`)
//     }
// }