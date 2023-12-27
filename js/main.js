const numberArray = [];
function displayNumber(id,array) {
  const arrElement = document.getElementById(id);
  arrElement.innerHTML = "";
  for (const number of array) {
    const liElement = document.createElement("span");
    liElement.textContent = " " + number;
    arrElement.appendChild(liElement);
  }
}
function addNumberToArr() {
  let inputNumber = document.getElementById("number").value;
  if (!isNaN(inputNumber) && inputNumber !== "") {
    numberArray.push(Number(inputNumber));
    displayNumber("arrayList",numberArray);
  } else {
    alert("Vui lòng nhập vào 1 số");
  }
  //   clear input value
  document.getElementById("number").value = "";
}
// BÀI 1: Tính tổng các số dương trong mảng
function getSum() {
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      sum += numberArray[i];
    }
  }
  document.getElementById("result1").innerHTML = "Tổng các số dương là: " + sum;
}
// BÀI 2: Đếm xem có bao nhiêu số dương trong mảng
function countNumber() {
  let count = 0;
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      count += 1;
    }
  }
  document.getElementById("result2").innerHTML = "Có " + count + " số dương";
}
// BÀI 3: Tìm số nhỏ nhất trong mảng
function findMinNumber() {
  let min = numberArray[0];
  for (let i = 1; i < numberArray.length; i++) {
    if (numberArray[i] < min) {
      min = numberArray[i];
    }
  }
  document.getElementById("result3").innerHTML = "Số nhỏ nhất là: " + min;
}
// BÀI 4: Tìm số dương nhỏ nhất trong mảng
function findMinPos() {
  const posNumber = numberArray.filter((num) => num > 0);
  if (posNumber == "") {
    document.getElementById("result4").innerHTML =
      "Không có số dương nào trong mảng";
  } else {
    const minPos = Math.min(...posNumber);

    document.getElementById("result4").innerHTML =
      "Số dương nhỏ nhất là: " + minPos;
  }
}
// BÀI 5: Tìm số chẵn cuối cùng trong mảng
function findEvenNumber() {
  const evenArr = numberArray.filter((num) => num % 2 === 0);
  if (evenArr.length > 0) {
    // document.getElementById("result5").innerHTML="Số chẵn cuối cùng là: "+ evenArr.pop();
    document.getElementById("result5").innerHTML =
      "Số chẵn cuối cùng là: " + evenArr.slice(-1)[0];
  } else {
    document.getElementById("result5").innerHTML = "Mảng không có số chẵn";
  }
}
// BÀI 6: Đổi chỗ 2 giá trị trong mảng theo vị trí
function changePos() {
  let pos1 = document.getElementById("pos1input").value;
  let pos2 = document.getElementById("pos2input").value;
  if (
    pos1 < 0 ||
    pos1 >= numberArray.length ||
    pos2 < 0 ||
    pos2 >= numberArray.length
  ) {
    document.getElementById("result6").innerHTML = "Vị trí không hợp lệ";
  } else {
    const posN = numberArray[pos1];
    numberArray[pos1] = numberArray[pos2];
    numberArray[pos2] = posN;
    document.getElementById("result6").innerHTML =
      "Mảng sau khi đổi: " + numberArray;
  }
}
// BÀI 7: Sắp xếp mảng theo thứ tự tăng dần
function arrangeArr() {
  const copyNumberArray = [...numberArray].sort((a, b) => a - b);
  document.getElementById("result7").innerHTML =
    "Mảng sau khi sắp xếp là: " + copyNumberArray;
}
// BÀI 8: Tìm số nguyên tố đầu tiên trong mảng
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function findPrimeNumber() {
  let primeFirst;

  for (const num of numberArray) {
    if (isPrime(num)) {
      primeFirst = num;
      break;
    }
  }

  if (primeFirst !== undefined) {
    document.getElementById("result8").innerHTML =
      "Số nguyên tố đầu tiên trong mảng là: " + primeFirst;
  } else {
    document.getElementById("result8").innerHTML = "Không có số nguyên tố nào";
  }
}
// BÀI 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên
const realArr = [];

function addRealToArr() {
  let inputReal = document.getElementById("realNumber").value;
  if (!isNaN(inputReal) && inputReal !== "") {
    realArr.push(Number(inputReal));
    displayNumber("realList",realArr);
  } else {
    alert("Vui lòng nhập vào 1 số");
  }
  //   clear input value
  document.getElementById("realNumber").value = "";
}
function countInt(){
  const intArr = realArr.filter((number) => Number.isInteger(number));
  const intAmount = intArr.length;
  document.getElementById("result9").innerHTML =
    "Số lượng số nguyên trong mảng là: " + intAmount;
}
// BÀI 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn
function getId(id,output){
  document.getElementById(id).innerHTML=output;
}
function compNumber() {
  const positive = numberArray.filter((num) => num > 0).length;
  const negative = numberArray.filter((num) => num < 0).length;
  if (positive< negative) {
    // document.getElementById("result10").innerHTML="Số dương < Số âm";
    getId("result10","Số dương < Số âm");
  } else if (positive==negative){
    getId("result10", "Số dương = Số âm");
  } else {
    getId("result10", "Số dương > Số âm");
  }
}
