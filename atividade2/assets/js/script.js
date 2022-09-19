//  o que são vetores ou arrays

//como declarar uma array
/*let array = ['string', 1, true]
console.log(array);*/

//pode guardar vários tipos de coisas
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
//console.log(array[0]);
//foreach
//array.forEach(function(item, index){console.log(item, index)});

//array.push([]);
//console.log(array);

//array.pop();
//console.log(array);

//array.shift();
//console.log(array);

//array.unshift('novo item no inicio');
//console.log(array);

//console.loh(array.indexOf(true));

//array.splice(0, 3);
//console.log(array);

//let novoArray = array.slice();
//console.log(novoArray);

let object = {string: 'string', number: 1, bollean: true, array: ['array'], objectInterno:{ objectInterno:'object interno'}};
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var{ string, bollean, objectInterno} = object;
console.log(string, bollean, objectInterno);