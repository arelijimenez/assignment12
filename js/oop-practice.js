// STEP 1
// Create two classes, one called Cat and another called Dog. Both classes should be created using 
//constructor syntax. The Cat class should be created using a named declaration and the Dog class 
//should be created using an anonymous declaration.
//Named Class
// function Cat() {
//
// }
//
//Anonymous Class
// const Dog = function()  {
//
// }

// STEP 2
//Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class
// 
//const cat1 = new Cat();

// const dog1 = new Dog();

// STEP 3
//Create a new class using constructor syntax called Animal. Create a method within the Animal class 
//that when called, displays the message “The Animal has been created” in the console window. 
// class Animal {
//     constructor() {  
//     }   
// displayMessage = function(){
//     console.log ("The animal has been created");
// }
// }
// const animal1 = new Animal();
// animal1.displayMessage();

// STEP 4
//Now, replicate the above code but this time so that the class accepts an argument and that value is 
//what is displayed in the console window. The message should be passed into the constructor at the 
//moment that the Animal class is instantiated.

// class Animal {
//     constructor(message) {  
//     }   
//     displayMessage = function(){
//         console.log (message);
// }
// }
// let message = "The animal has been created"; 
// const animal1 = new Animal();
// animal1.displayMessage();


// STEP 5
//Start over and now create a new class using constructor syntax called Animal. Define five properties 
//within your class including properties type, breed, color, height, and length. These properties will be 
//set within the object so you’ll need to pass in arguments into the function’s constructor, set the 
//properties, and then pass in the actual values during the object’s instantiation. 
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this._type = type;
//         this._breed = breed;
//         this._color = color;
//         this._height = height;
//         this._length = length;
//         console.log(`My animal is a ${this._type} ${this._breed} its color is ${this._color} its height is ${this._height} and its length is ${this._length}.`);
//     }
// }
// const animal1 = new Animal('Feline', 'Maine Coon Cat', 'orange', 15, 30);

// STEP 6
//Use a for-in loop to loop through and display all of the properties in the Animal class. You should see 
//a total of 5 properties displayed in a list within the console window.
// class Animal {

//     constructor(type, breed, color, height, length) {
//         let obj = [
//         this._type = type,
//         this._breed = breed,
//         this._color = color,
//         this._height = height,
//         this._length = length
//         ];
//         for (let i in obj) {
//             console.log(obj[i]+"");
//         }
//     }
// }
// const animal1 = new Animal('Feline', 'Maine Coon Cat', 'orange', 15, 30);

// STEP 7
//Now, create a public method called speak. Within the speak method you will use a conditional to 
//check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat 
//return “The <color> cat is meowing!” instead. Call that method after the Animal class has been 
//instantiated. 
// class Animal {
//     constructor(type, color) {
//         this._type = type,
//         this._color = color
//     }
//     speak = function() {
//         if (this._type === 'dog') {
//             console.log( `"The ${this._color} dog is barking !"`);
//         } else {
//             console.log( `"The ${this._color} cat is meowing !"`);
//         }
//     }
// }
// const animal1 = new Animal('cat', 'black');
// animal1.speak();

// STEP 8
//Now, convert all of your properties to private properties. Then, create a private method called 
//checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, 
//return cat. Then, create a privileged method called speak that returns the value of the checkType() 
//method. The console window should now display “The <animal type> has made a noise!”

// function Animal(type) {
//     let _type = type;
//     let checkType = function() {
//         if (_type === 'dog') {
//             console.log("Dog !");
//         } else {
//             console.log("Cat !");
//         }
//     }
//     this.speak = function() {
//         checkType();
//         console.log( `"The ${_type} has made a noise!"`);
//     }
// }
// const animal1 = new Animal('cat');
// animal1.speak();


// STEP 9
//Create your own String method called findWords that inherits from the native String Object. This 
//method should find all instances of a specific word within a provided paragraph of text. It should 
//then alert out to the user the number of time that word was found in the paragraph. Remember, 
//you’ll need to add your method to the String object’s prototype.
class Paragraph extends String {
    findWords(word) {
        let words = this.split(/[ ,.]/);
        let totwords = 0;

        for(let i = 0; i < words.length; i++) {
            if (words[i] === word) {
                totwords ++;
            }
        }
        alert("Total of words found in the paragraph: " + totwords);
    }
}
const paragraph1 = new Paragraph('To be, or not to be, that is the question, is the opening frase of Hamlet. This is ');
paragraph1.findWords('is');
