"use strict";

var wrongGuessMessage = "Oops your guess is wrong!";
var invalidAnswerMessage = "Please answer either using Y/N or Yes/No.";

var visitorName = prompt('Hello!! Thanks for visitng my page. Please tell me your name?');
console.log("visitor Name is : " + visitorName);

if (visitorName.length > 0) {
alert('Hi '+ visitorName + ' so my guess is you are also a fun loving person and try a lot of new stuff!!!' );
}

var visitorAnswer = prompt('Do you wanna have some fun by playing a Guessing game to get to know about Me?');
console.log("visitor response is : " + visitorAnswer + ":" + visitorAnswer.toUpperCase());

if (visitorAnswer.length > 0 && (visitorAnswer.toUpperCase() === 'Y' || visitorAnswer.toUpperCase() === 'YES')) {

    console.log("Yayyy lets Start the game now!!!");
    alert("Yayyy lets Start the game now!!!");

    var isFavoriteMusicBand = prompt('Do you think Maroon5 is my favorite band?');

    if (isFavoriteMusicBand.toUpperCase() === 'Y' || isFavoriteMusicBand.toUpperCase() === 'YES') {
    console.log("Yipeee you guessed it right, Maroon5 is my favorite band!!!");
    alert("Yipeee you guessed it right, Maroon5 is my favorite band!!!");

    } else if (isFavoriteMusicBand.toUpperCase() === 'N' || isFavoriteMusicBand.toUpperCase() === 'NO' ) {
    console.log(wrongGuessMessage);
    alert(wrongGuessMessage);

    } else {
    console.log(invalidAnswerMessage);
    alert(invalidAnswerMessage);
    }

    var favoriteDJ = prompt('Do you think AfroJack is my favorite DJ?');

    if (favoriteDJ.toUpperCase() === 'Y' || favoriteDJ.toUpperCase() === 'YES') {
    console.log("Yipeee you guessed it right, I love AfroJack!!!!");
    alert("Yipeee you guessed it right, I love AfroJack!!!!");

    } else if (favoriteDJ.toUpperCase() === 'N' || favoriteDJ.toUpperCase() === 'NO' ) {
    console.log(wrongGuessMessage);
    alert(wrongGuessMessage);

    } else {
    console.log(invalidAnswerMessage);
    alert(invalidAnswerMessage);
    }

    var favoriteFoodItem = prompt('Do you think Golgappa is my favorite dish?');

    if (favoriteFoodItem.toUpperCase() === 'Y' || favoriteFoodItem.toUpperCase() === 'YES') {
    console.log("Yipeee you guessed it right, I can eat golgappa anytime!!!");
    alert("Yipeee you guessed it right, I can eat golgappa anytime!!!");

    } else if (favoriteFoodItem.toUpperCase() === 'N' || favoriteFoodItem.toUpperCase() === 'NO' ) {
    console.log(wrongGuessMessage);
    alert(wrongGuessMessage);

    } else {
    console.log(invalidAnswerMessage);
    alert(invalidAnswerMessage);
    }

    var dreamCountriesToVisit = prompt('Do you think Norway, NewZealand, SouthAfrica and Jordan are the countries I want to visit?');

    if (dreamCountriesToVisit.toUpperCase() === 'Y' || favoriteFoodItem.toUpperCase() === 'YES') {
    console.log("Yipeee you guessed it right, all of these are in my bucketlist to visit!!!");
    alert("Yipeee you guessed it right, all of these are in my bucketlist to visit!!!");

    } else if (dreamCountriesToVisit.toUpperCase() === 'N' || favoriteFoodItem.toUpperCase() === 'NO' ) {
    console.log(wrongGuessMessage);
    alert(wrongGuessMessage);

    } else {
    console.log(invalidAnswerMessage);
    alert(invalidAnswerMessage);
    }

    var interests = prompt('Do you think I have interest in Politics, reading books and Painting?');

    if (interests.toUpperCase() === 'Y' || interests.toUpperCase() === 'YES') {
    console.log("Yipeee you guessed it right, I like to be aware of whats happening around and books/painting are goto stuff for me.");
    alert("Yipeee you guessed it right, I like to be aware of whats happening around and books/painting are goto stuff for me.");
    } else if (interests.toUpperCase() === 'N' || interests.toUpperCase() === 'NO' ) {
    console.log(wrongGuessMessage);
    alert(wrongGuessMessage);

    } else {
    console.log(invalidAnswerMessage);
    alert(invalidAnswerMessage);
    }

} else if (visitorAnswer.length > 0 && (visitorAnswer.toUpperCase() === 'N' || visitorAnswer.toUpperCase() === 'NO') ) {
    console.log("No problem!!! Here are few things about Me which I like to do to have fun!!!");
    alert("No problem!!! Here are few things about Me which I like to do to have fun!!!");

} else {
    console.log(invalidAnswerMessage);
    alert(invalidAnswerMessage);
}

