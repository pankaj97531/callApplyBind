function test(j,k){
	var x =10;
	return x+j+k
}

var memo = function(arg){
	//var innerArges = 
	var bindfunc = arg.bind(arguments)
	return bindfunc
}

var memoCall = function(arg){
	return arg;
}

var call1 = memo(test)
var mcall1 = memoCall(test)

console.log(call1(2,3));
console.log(mcall1(2,3));