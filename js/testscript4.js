//Operator ตัวดำเนินการ
// + , - , * , / , % **

console.log( 8 ** 3)
console.log( 2 ** 4)

console.log(15 % 9)
console.log(50 % 999)

// > , < >= , <= , == ,!= ได้ผลลัพธ์เป็น True/false

console.log( '5' == 5 ) //true
console.log( '5' === 5) //false เปลี่ยนเทียบทั้งข้อมูล และชนิดข้อมูล

console.log( '5' !== 5 ) //false
console.log( '5' !== 5) //true เปลี่ยนเทียบทั้งข้อมูล และชนิดข้อมูล

// ++ , --

// += ,-= , *= , / = , %=
let x = 20
 x = x + 10
 console.log(x) //30
x += 100        // ---> x = x +100
console.log(x) //130

//Ternery Operator____? ____ : ___
// เงือนไข ? สิ่งที่ทำเมื่อเงื่อนไขเป็นจริง : สิ่งที่ทำเมื่อเงื่อนไขเป็นเท็จ

let z = 25 % 3 > 100 ? 9 + 10 : 9 * 10

console.log( z ) //90
