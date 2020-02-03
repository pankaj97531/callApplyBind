function test(x,y){
	console.log(x+y) ;
}

var callBind = test.bind(null,10,20)
callBind()
test.call(null,11,22)
test.apply(null,[13,23])
function greet () {
  console.log(`Hello, name is ${this.name} and age is ${this.age}`)
}

const user = {
  name: 'Tyler',
  age: 27,
}

greet.apply(user);
greet.call(user);
var bindgreet = greet.bind(user);
bindgreet();
var bindgreet2 = greet.bind();
bindgreet2(user)

function greet2 (l1, l2, l3) {
  console.log(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  )
}
const user2 = {
  name: 'Pankaj',
  age: 27,
}
const languages = ['JavaScript', 'PHP', 'Python']

greet2.call(user2, languages[0], languages[1], languages[2])

function greet3 (l1, l2, l3) {
  console.log(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  )
}

const user3 = {
  name: 'Tyler',
  age: 27,
}

greet3.apply(user3, languages)