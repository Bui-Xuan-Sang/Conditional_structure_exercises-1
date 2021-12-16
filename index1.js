function checkDiv() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    if (a % b === 0) {
        document.getElementById('result1').innerHTML = "<b>a chia hết cho b.</b>";
    } else {
        document.getElementById('result1').innerHTML = "<b>a không chia hết cho b.</b>";
    }
}

function checkAge() {
    let ageStudent = parseInt(document.getElementById('ageStudent').value);
    if (ageStudent <= 14) {
        document.getElementById('result2').innerHTML = "<b>không đủ điểu kiện vào lớp 10</b>";
    } else {
        document.getElementById('result2').innerHTML = "<b>đủ điểu kiện vào lớp 10</b>";
    }
}

function checkNum() {
    let num = parseInt(document.getElementById('num').value);
    if (num === 0) {
        alert(0);
    }
    if (num < 0) {
        document.getElementById('result3').innerHTML = "<b>nhỏ hơn 0</b>";
    } else {
        document.getElementById('result3').innerHTML = "<b>lớn hơn 0</b>";
    }
}

function checkNumber() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let num3 = parseInt(document.getElementById('num3').value);
    if (num1 > num2) {
        if (num1 > num3) {
            document.getElementById('result4').innerHTML = +num1 + +"" + "<b>là số lớn nhất</b>";
        } else {
            document.getElementById('result4').innerHTML = +num3 + +"" + "<b>là số lớn nhất</b>";
        }
    } else {
        if (num2 > num3) {
            document.getElementById('result4').innerHTML = +num2 + +"" + "<b>là số lớn nhất</b>";
        } else {
            document.getElementById('result4').innerHTML = +num3 + +"" + "<b>là số lớn nhất</b>";
        }
    }
}

function checkScore() {
    let testScore = parseInt(document.getElementById('testScore').value);
    let midTermScore = parseInt(document.getElementById('midTermScore').value);
    let finalScore = parseInt(document.getElementById('finalScore').value);
    let mediumScore = (testScore + midTermScore + finalScore) / 3;
    if (mediumScore >= 8) {
        if (mediumScore >= 9) {
            document.getElementById('result5').innerHTML = "<b>Xuất sắc</b>";
        } else {
            document.getElementById('result5').innerHTML = "<b>Giỏi</b>";
        }
    } else {
        if (mediumScore >= 7) {
            document.getElementById('result5').innerHTML = "<b>khá</b>";
        } else {
            if (mediumScore >= 5) {
                document.getElementById('result5').innerHTML = "<b>Trung bình</b>";
            } else {
                document.getElementById('result5').innerHTML = "<b>yếu</b>";
            }
        }
    }
}

function checkRose() {
    let sale = parseInt(document.getElementById('sale').value);
    let amount = parseInt(document.getElementById('amount').value);
    if (sale > amount) {
        document.getElementById('result6').innerHTML = "<b>Tiền hoa hồng</b>" + sale * 0.3 + "000" + "<b>VND</b>";
    } else {
        document.getElementById('result6').innerHTML = "<b>Tiền hoa hồng</b>" + sale * 0.1 + "000" + "<b>VND</b>";
    }
}
function checkPhone() {
    let tax = parseInt(document.getElementById('tax').value);
    let amountNum = parseInt(document.getElementById('amountNum').value);
    let pay = tax*amountNum;
    document.getElementById('result7').innerHTML = "cước điện thoại phải thanh toán =" + pay + "000VND";
}


