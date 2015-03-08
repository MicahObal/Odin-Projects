/*
http://www.theodinproject.com/web-development-101/javascript-basics
https://projecteuler.net/problem=2
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

This is a very simple solution. I preload the first two Fibonacci numbers into the variables for fewer complications.
The program checks if the leading Fibonacci number is even and adds it to 'sum' if it is.
It saves the leading Fibonacci number in 'placeholder', adds 'fib1' and 'fib2' together to find the next leading Fibonacci number, and 'fib2' grabs the value from 'placeholder'.
*/

var sum = 0;
var limit = 4000000;
var fib1 = 2;
var fib2 = 1;
while (fib1 < limit){
	if(fib1 % 2 === 0){
		sum += fib1;
	}
	fib1 += fib2;
	fib2 = fib1 - fib2;
}

console.log(sum); /* 4613732 */