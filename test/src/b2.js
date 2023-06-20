function printTriangle() {
    var num = parseInt(document.getElementById('number').value);
    var triangle = '';

    if (num < 1 || num > 10) {
      document.getElementById('result').innerText = "Số nguyên không hợp lệ. Vui lòng nhập số trong khoảng từ 1 đến 10.";
      return;
    }

    for (var i = 1; i <= num; i++) {
      var row = '';

      for (var j = 1; j <= i; j++) {
        row += '*';
      }

      triangle += row + '\n';
    }

    document.getElementById('result').innerText = triangle;
  }