//Bài 1: Nhập số đầu tiên và số thứ 2 bằng prompt sau đó in ra bằng console.log theo cú pháp số lớn hơn lớn hơn số bé hơn

// let firstNum = prompt("Nhap so thu nhat: ")
// let secondNum = prompt("Nhap so thu hai: ")

// if(firstNum>secondNum){
//     console.log("So lon hon: ",firstNum)
//     console.log("So be hon: ",secondNum)

// } else if(secondNum>firstNum){
//     console.log("So lon hon: ",secondNum)
//     console.log("So be hon: ",firstNum)

// } else{
//     console.log("Hai so bang nhau!")
// }


//Bài 2 :Nhập vào một số a từ promt và in ra là đây là một số chia hết hết cho 3.
// Giá trị của phép chia là a/3 nếu a chia hết cho 3. In ra số này không chia hết cho 3 nếu a không chia hết cho 3

// let numberA = prompt("Nhap mot so: ")
// if(numberA%3===0){
//     console.log("So", numberA, "chia het cho 3")
// } else{
//     console.log("So", numberA, "khong chia het cho 3")
// }

// bài 3 : Nhập vào một số a và in ra tháng a theo ttháng bằng tiếng anh nếu a > 12 in ra số bạn nhập vượt quá số tháng 

// let month = prompt("Nhap:")

// switch (Number(month)) {
//     case 1:
//         console.log("January")
//         break;
//     case 2:
//         console.log("February")
//         break;
//     case 3:
//         console.log("March")
//         break;
//     case 4:
//         console.log("April")
//         break;
//     case 5:
//         console.log("May")
//         break;
//     case 6:
//         console.log("June")
//         break;
//     case 7:
//         console.log("July")
//         break;
//     case 8:
//         console.log("Agust")
//         break;
//     case 9:
//         console.log("September")
//         break;
//     case 10:
//         console.log("October")
//         break;
//     case 11:
//         console.log("November")
//         break;
//     case 12:
//         console.log("December")
//         break;
//     default:
//         console.log("Ban da nhap sai so thang!")
//         break;
// }



// bài 4 :  Tạo máy tính cơ bản với các chức năng: +, -, * và /.
// - Sử dụng prompt để nhập phép tính
// - Sử dụng prompt để nhập 2 số cần tính.
// - Tạo biến result để lưu lại kết quả mỗi phép tính
// - Sử dụng 2 cách khác nhau (if...else và switch)


// Nhập phép tính từ người dùng
// let operator = prompt("Nhập phép tính (+, -, *, /):");

// let number1 = parseFloat(prompt("Nhập số thứ nhất:"));
// let number2 = parseFloat(prompt("Nhập số thứ hai:"));

// let result;

// if (operator === "+") {
//   result = number1 + number2;
// } else if (operator === "-") {
//   result = number1 - number2;
// } else if (operator === "*") {
//   result = number1 * number2;
// } else if (operator === "/") {
//   result = number1 / number2;
// } else {
//   result = "Phép tính không hợp lệ";
// }

// console.log("Kết quả: " , result);


// let operator = prompt("Nhập phép tính (+, -, *, /):");

// let number1 = parseFloat(prompt("Nhập số thứ nhất:"));
// let number2 = parseFloat(prompt("Nhập số thứ hai:"));

// let result;

// switch (operator) {
//   case "+":
//     result = number1 + number2;
//     break;
//   case "-":
//     result = number1 - number2;
//     break;
//   case "*":
//     result = number1 * number2;
//     break;
//   case "/":
//     result = number1 / number2;
//     break;
//   default:
//     result = "Phép tính không hợp lệ";
// }

// console.log("Kết quả: " , result);


// bài 5 : Nhập số a từ prompt sau đó in ra các số nguyên tố từ 1-> a bằng console.log


// let a = prompt("Nhập số a:");
// a = parseInt(a); 

// console.log("Các số nguyên tố từ 1 đến " + a + " là:");
// for (let i = 2; i <= a; i++) {
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//   }
// }

// Bài 6 : Viết trương trình nhập vào 3 số a,b,c là 3 biến trong phương trình bậc 2 
//         Tìm ra các nghiệm của phương trình 

// let a = prompt("Nhap so a:")
// let b = prompt("Nhap so b:")
// let c = prompt("Nhap so c:")

// let delta = b * b - 4 * a * c;

// if (delta > 0) {
//   let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//   let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//   console.log("Phương trình có hai nghiệm phân biệt:");
//   console.log("x1 =", x1);
//   console.log("x2 =", x2);
// } else if (delta === 0) {
//   let x = -b / (2 * a);
//   console.log("Phương trình có nghiệm kép:");
//   console.log("x =", x);
// } else {
//   console.log("Phương trình không có nghiệm thực.");
// }


// bài 7 Nhập vào 1 số và in ra mùa theo mùa ở việt nam nếu số đó từ 1-3 là xuân ,4-6 :hạ ......

let month = prompt("Nhap: ")

if(month>=1&&month<=3){
    console.log("Mua xuan")
} else if(month>=4&&month<=6){
    console.log("Mua ha")
} else if(month>=7&&month<=9){
    console.log("Mua thu")
} else if(month>=10&&month<=12){
    console.log("Mua dong")
} else{
    console.log("Khong hop le!")
}

