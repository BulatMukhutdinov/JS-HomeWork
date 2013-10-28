validInput = false;
while (!validInput){
	var choise = prompt("Choose which function you want to use : fibonacci, factorial or sort", "fibonacci");
	choise = choise.toLowerCase()
	switch (choise){
		case "fibonacci":
			var number = prompt("Enter the index", "10");
			while (){
			}
			alert("The answer is " + fib(number) + "!");
			validInput = true;
			break;
		case "factorial":
			var number = prompt("Enter the index", "10");
			alert("The answer is " + factorial(number) + "!");
			validInput = true;
			break;
		case "sort":
			var number = prompt("Enter numbers separated by a space", "1 3 2");
			array = number.split(" ");
			alert("The array is sorted! The result is: " + sort(array));
			validInput = true;
			break;
		default:
			alert("Check the input and try again!");
			break;
	}
}
function fib(num){
	if (num == 0 || num == 1){
		return num;
	}else{
		return fib(num - 1) + fib(num - 2);
	}
}

function factorial(num){
	if (num == 0){
		return 1;
	}else{
		return factorial(num - 1) * num;
	}
}

function sort(array){
	return array.sort();
}