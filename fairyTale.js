// 1. Create a variable named `place` and set the value to a string that says whatever place you want.

let place = "home";

// 2. Create a variable named `creatureName` and set the value to a string that says whatever name you want to give the creature.

let creatureName = "the dog";

// 3. Create a variable named `color` and set the value to a string that says whatever color you want.

let color = "black";

// 4. Create a variable named `color2` and set the value to a string that says a different color you want.

let color2 = "white";

// 5. Create a variable named `emotion` and set the value to a string that says whatever emotion you want.

let emotion = "scared";

// 6. Create a variable named `character` and set the value to a string that says whatever name for a character you want.

let character = "Elliot";

// 7. Create a variable named `number` and set the value to a number greater than 1.

let number = "1";

// 8. Create a variable named `item` and set the value to a string that says whatever item/thing you want.

let item = "ball";

// 9. Create a variable named `item2` and set the value to a string that says a different item/thing you want.

let item2 = "frisbee";

// 10. Create a variable named `verb` and set the value to a string that says whatever verb you want.

let verb = "play";

// 11. Create a variable named `adverb` and set the value to a string that says whatever adverb you want.

let adverb = "happily";

// 12. Create a variable named `number2` and set the value to a number greater than 1.

let number2 = "15";


// 14. Replace the null values with the appropriate variable you created above.
// - Afterwards, run your code and press the button to see your story ✨

document.querySelector("button").addEventListener("click", function() {
    document.querySelector(".place").innerHTML = "home";
    document.querySelector(".creature-name").innerHTML = "the dog";
    document.querySelector(".color").innerHTML = "black";
    document.querySelector(".color-2").innerHTML = "white";
    document.querySelector(".emotion").innerHTML = "scared";
    document.querySelector(".character").innerHTML = "Elliot";
    document.querySelector(".creature-name-again").innerHTML = "the dog";
    document.querySelector(".number").innerHTML = "1";
    document.querySelector(".item").innerHTML = "ball";
    document.querySelector(".character-again").innerHTML = "Elliot";
    document.querySelector(".item-2").innerHTML = "frisbee";
    document.querySelector(".verb").innerHTML = "play";
    document.querySelector(".adverb").innerHTML = "happily";
    document.querySelector(".number-2").innerHTML = "15";
    document.querySelector(".story-container").style = "display:block";
});
