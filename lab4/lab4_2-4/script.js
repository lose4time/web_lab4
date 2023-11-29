function z1(){
    if(document.getElementById("in1").value>0)
        alert("Положительное")
    else if (document.getElementById("in1").value<0)alert ("Отрицательное")
    else alert ("Вы ввели 0") 
}
function z2(){
    if((document.getElementById("in2").value)%2 == 0)
        alert("Четное")
    else alert ("Нечетное") 
}

function searchZero() {
  var inputString = document.getElementById("inputString").value;
  var index = inputString.indexOf("0");

  if (index !== -1) {
    document.getElementById("result").innerHTML = "Первый ноль находится на позиции " + (index + 1);
  } else {
    document.getElementById("result").innerHTML = "В строке нет нулей";
  }
}

function removeElements() {
  var inputArray = document.getElementById("inputArray").value;
  var valueToRemove = document.getElementById("remove1").value;
  var newArray = inputArray.replace(new RegExp(valueToRemove, "g"), "");

  document.getElementById("result1").innerHTML = "Исходный массив: " + inputArray + "<br>Массив после удаления: " + newArray;
}

function zadanie3() { 
            let number = document.getElementById('numberInput').value;
            let digits = number.toString().split("");
            let isAscending = true;

            for (let i = 0; i < digits.length - 1; i++) 
                if (parseInt(digits[i]) > parseInt(digits[i + 1])) 
                    isAscending = false;
										
            if (isAscending) 
                alert("По возрастанию");
             else 
                alert("Не по возрастанию");
}

function z3_2() {
	let array = [1, '', 2, 3, '', 5];
	let newArray=array.filter(item=>item!=='');
	alert(newArray);
}

function z4_1() {
	const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятиница', 'Суббота'];
	alert(daysOfWeek[new Date().getDay()]);
}

function z4_2(){
	let number = document.getElementById('sum_del').value;
	let sum = 0;
            for (let i = 1; i <= number; i++) {
                if (number % i === 0) {
                    sum += i;
                }
            }
           alert(sum);
}

function squareNumber() {
	const number = document.getElementById('num5_1').innerHTML;
	const squaredNumber = Math.pow(number, 2);
	document.getElementById('num5_1').innerHTML = squaredNumber;
}

function squareNumber2(input) {
	const number = input.value;
	const squaredNumber = Math.pow(number, 2);
	input.value = squaredNumber;
}

function z6_1() {
	const numberList = document.getElementById('list6.1');
	for (let i = 1; i <= 10; i++) {
			const listItem = document.createElement('li');
			listItem.textContent = i;
			numberList.appendChild(listItem);
	}
}

function z6_2() {
	const numberList = document.getElementById('list6.1');
	const listItems = numberList.getElementsByTagName('li');
	if (listItems.length > 0) {
			const randomIndex = Math.floor(Math.random() * listItems.length);
			numberList.removeChild(listItems[randomIndex]);
	}
}

function z7_1() {
	const numberList = document.getElementById('list6.1');
	const listItems = numberList.getElementsByTagName('li');
	let maxNumber = 0;
	let maxIndex = -1;
	for (let i = 0; i < listItems.length; i++) {
			if (parseInt(listItems[i].textContent) > maxNumber) {
					maxNumber = parseInt(listItems[i].textContent);
					maxIndex = i;
			}
	}
	if (maxIndex !== -1) {
			numberList.removeChild(listItems[maxIndex]);
	}
}

function z7_2() {
	const dobInput = document.getElementById('in7_2').value;
	const date = new Date(dobInput);
	const dayOfWeek = getDayOfWeek(date.getDay());

	const dateTable = document.getElementById('dateTable');
	const newRow = dateTable.insertRow(-1);
	const cell1 = newRow.insertCell(0);
	const cell2 = newRow.insertCell(1);
	cell1.innerHTML = dobInput;
	cell2.innerHTML = dayOfWeek;
}

function getDayOfWeek(day) {
	const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятиница', 'Суббота'];
	return daysOfWeek[day];
}