//ตัวแปร varable
var a = 10
let b = 20
const c = 30

{
    var d = 40
    let e = 59
    const f = 60

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
    console.log(f)

    a = 111
    b = 222
    //c = 333 ERROR เพราะเป็นค่าคงที่ห้ามเปลี่ยน
    d = 444
    e = 555
    //f = 666 ERROR เพราะเป็นค่าคงที่ห้ามเปลี่ยน
}

console.log(a)
console.log(b)
console.log(c)
console.log(d)
//console.log(e) ไม่รู้จัก
//console.log(f) ไม่รู้จัก
