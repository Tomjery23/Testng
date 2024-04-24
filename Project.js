function Ktr() {
  var a = parseFloat(document.getElementById('a').value);
  var b = parseFloat(document.getElementById('b').value);
  var c = parseFloat(document.getElementById('c').value);

  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
      document.getElementById('result').textContent = "Tam giác đều";
    } else if (a === b || a === c || b === c) {
      if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
        Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
        Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)) {
        document.getElementById('result').textContent = "Tam giác vuông cân";
      } else {
        document.getElementById('result').textContent = "Tam giác cân";
      }
    } else if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
      Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
      Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)) {
      document.getElementById('result').textContent = "Tam giác vuông";
    } else if (a > b && a > c) {
      if (Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2)) {
        document.getElementById('result').textContent = "Tam giác tù";
      } else {
        document.getElementById('result').textContent = "Tam giác nhọn";
      }
    } else if (b > a && b > c) {
      if (Math.pow(b, 2) > Math.pow(a, 2) + Math.pow(c, 2)) {
        document.getElementById('result').textContent = "Tam giác tù";
      } else {
        document.getElementById('result').textContent = "Tam giác nhọn";
      }
    } else {
      if (Math.pow(c, 2) > Math.pow(a, 2) + Math.pow(b, 2)) {
        document.getElementById('result').textContent = "Tam giác tù";
      } else {
        document.getElementById('result').textContent = "Tam giác nhọn";
      }
    }
  } else {
    document.getElementById('result').textContent = "Không phải tam giác";
  }
}
//hàm xóa
function clearInput(inputId) {
  document.getElementById(inputId).value = '';
}
// thực hiện sự kiện khi ấn xóa thì result sẽ trở lại giá trị ban đầu
function clearInput(inputId) {
  document.getElementById(inputId).value = '';
}

function clearResult() {
  document.getElementById('result').innerText = '';
}