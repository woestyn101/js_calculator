document.getElementById("add").onclick = function () {
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;

    //var answer = Number(num1) + Number(num2);
    // var answer = Math.floor(num1) + Math.floor(num2);
    //var answer = Math.round(num1) + Math.round(num2);
    var answer = parseInt(num1, 10) + parseInt(num2, 10);
    document.getElementById("theAnswer").value = answer;
    //alert(answer)
  };

  document.getElementById("subtract").onclick = function () {
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;
    //var answer = Number(num1) + Number(num2);
    // var answer = Math.floor(num1) + Math.floor(num2);
    //var answer = Math.round(num1) + Math.round(num2);
    var answer = parseInt(num1, 10) - parseInt(num2, 10);
    document.getElementById("theAnswer").value = answer;
    // alert(answer)
  };

  document.getElementById("multiply").onclick = function () {
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;
    //var answer = Number(num1) + Number(num2);
    // var answer = Math.floor(num1) + Math.floor(num2);
    //var answer = Math.round(num1) + Math.round(num2);
    var answer = parseInt(num1, 10) * parseInt(num2, 10);
    document.getElementById("theAnswer").value = answer;
    //  alert(answer)
  };

  document.getElementById("divide").onclick = function () {
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;
    //var answer = Number(num1) + Number(num2);
    // var answer = Math.floor(num1) + Math.floor(num2);
    //var answer = Math.round(num1) / Math.round(num2);
    var answer = parseInt(num1, 10) / parseInt(num2, 10);
    document.getElementById("theAnswer").value = answer;
    // alert(answer)
  };