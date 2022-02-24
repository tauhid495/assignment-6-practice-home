// let Tauhid = { mobile: 12000, honda: 10000, bari: 2000000 };

// let text = `Welcome Mr ${Tauhid.honda} ${Tauhid.bari}`;
// console.log(text);

3.1
// let gun = a => {
//     let result = a / 5;
//     return result;
// }
// let result2 = gun(1);
// console.log(result2);
// // 3.2 3.4
// let sum = (a, b) => {

//     let a1 = (a + 2);
//     let b1 = (b + 2);
//     let result = a1 * b1;
//     return result;
// }

// let result1 = sum(1, 2);
// console.log(result1);

3.3
// let goon = (a, b, c) => {
//     let result = a * b * c;
//     return result;
// }

// let result1 = goon(2, 2, 2);
// console.log(result1);

// 5
// const map1 = [2, 3, 4, 5].map(x => x * 5);
// console.log(map1);

// 6
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const odd = array.filter(number => {
//     return (number % 2 != 0);
// })
// console.log(odd);
// 6
// var obj = {
//   'Students': [{
//     "name": "Raj",
//     "Age": "15",
//     "RollNumber": "123",
//     "Marks": "99",

//   }, {
//     "name": "Aman",
//     "Age": "14",
//     "RollNumber": "223",
//     "Marks": "69",
//   },
//   {
//     "name": "Vivek",
//     "price": "5000",
//     "RollNumber": "253",
//     "Marks": "89",
//   },
//   ]
// };

// var newArray = obj.Students.filter(price => {
//   return price.price == 5000;
// }
// );
// console.log(newArray);

// 8
// const food = [12, 30, 25, 28];
// const [vat, ruti, chal] = food;
// const chal = three;
// console.log(vat);
// console.log(chal);
// console.log(ruti);

let food = {
    vat: '12kg',
    gom: '30kg',
    dal: '15kg',
};
let { rice, wheet, dal: three } = food;
console.log(three);