const users = [
  { name: "Thành", age: 20 },
  { name: "Mai", age: 19 },
  { name: "Độ", age: 23 },
  { name: "Bách", age: 21 }
];
const sortedAdultNames = users
  .filter(user => user.age >= 18)       
  .sort((a, b) => a.age - b.age)      
  .map(user => user.name);             

console.log("Danh sách tên người dùng (>=18t) theo tuổi tăng dần:", sortedAdultNames);