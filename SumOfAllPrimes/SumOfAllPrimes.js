const SumOfAllPrimes = (input) => {
  let sum = 0;
  for (let i = 2; i < input + 1; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sum += i;
    }
  }
  return sum;
};

console.log(SumOfAllPrimes(10));
console.log(SumOfAllPrimes(59));

// Thinking Process
// เริ่มจากการสร้าง function SumOfAllPromes โดยรับ input ที่เรากำหนดลงไป
// ทำการ loop ตั้งเเต่จำนวน 2 ไปถึงจำนวน n เพราะจำนวนเฉพาะจะต้องไม่มีตัวหารที่น้อยกว่า 2
// ตั้ง isPrime = true เพื่อตั้งว่าเป็นเลขจำนวนเฉพาะ
// ตั้ง loop เพื่อหา เลขที่เป็น รากที่สองของ input
// ถ้าตัวเลขหาร มีที่หาร ไม่ใช้ 1 เเละเลขของมันเอง จำนวนนั้นไม่ใช้จำนวนเฉพาะ
// ถ้า isPrime เป็น true เพิ่มเก็บเข้าไป sum
// return sum

// Note
// loop 1 I=2 > J=4 <= 2 NO
// loop 2 I=3 > J=4 <= 3 NO
// loop 3 I=4 > J=4 <= 4 YES, 4 % 2 === 0
// loop 4 I=5 > J=9 <= 5 NO
// loop 5 I=5 >
