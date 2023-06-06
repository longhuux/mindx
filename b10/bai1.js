// bài 1
// cho 1 mảng 
arrayData = [
   {
      id:1,
      name:'Nguyen Van A',
      age:15
   },
   {
      id:2,
      name:'Nguyen Van B',
      age:16
   },
   {
      id:3,
      name:'Nguyen Van C',
      age:17
   },
   {
      id:4,
      name:'Nguyen Van D',
      age:18
   },
]

for (let i = 0; i < arrayData.length; i++) {
    let member = arrayData[i];
    let stt = i + 1;
    let fullName = member.name;
    let age = member.age;
    
    console.log("STT: " + stt + " - Họ tên: " + fullName + " - " + age + " tuổi");
  }
  

// console.log ra dữ liệu mỗi member trên 1 dòng theo quy tắc 
// STT: 1 - Họ tên : Nguyen Van A - 15 tuoi
// STT: 2 - Họ tên : Nguyen Van B - 16 tuoi
// STT: 3 - Họ tên : Nguyen Van C - 17 tuoi
// STT: 4 - Họ tên : Nguyen Van D - 18 tuoi