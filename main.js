


//initiate these functions OnLoad
function init(){
	// var obj=JSON.parse(data);
	// console.log(data.messages[0].message);
	new Timer(
		document.querySelector(".timer")
	)

	var messages = document.querySelector(".phoneMessages");

	for (var i = 0; i < data.messages.length; i++){
		// console.log(data.messages[i].message);
		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].message, false);

	}

		// messages.innerHTML += createMessage ("becca", "hi this is Becca.", false);
		// messages.innerHTML += createMessage ("miranda", "hi this is Miranda.", false);
		// messages.innerHTML += createMessage ("me", "No worries.", true);
		// messages.innerHTML += createMessage ("becca", "hi this is Becca.", false);
		// messages.innerHTML += createMessage ("miranda", "hi this is Miranda.", false);
		// messages.innerHTML += createMessage ("me", "No worries.", true);
		// messages.innerHTML += createMessage ("becca", "hi this is Becca.", false);
		// messages.innerHTML += createMessage ("miranda", "hi this is Miranda.", false);
		// messages.innerHTML += createMessage ("me", "No worries.", true);

}

//Create messages
//TO DO:
	//LINK TO A TIMER
function createMessage(character, text, isMe){
	var output = "";
	// Name & Icon Formatting
	output += '<div class="messageContainer">'
	if (isMe===true){ // If a Player Text
		//Container
		output += '<div class="namePlayer">';
		//Character Name
		output += '<p class="nameText">';
		output += character;
		output += '</p>';
		//Icon
		output += '<img class = "iconPlayer" src ="http://placekitten.com/30/30">';	
	} else { // If a Friend Text
		//Container
		output += '<div class="nameFriend">';
		//Icon
		output += '<img class = "iconFriend" src ="http://placekitten.com/30/30">';	
		//Print Character Name
		output += '<p class="nameText">';
		output += character;
		output += '</p>';
	}
	output += '</div>';

	// Text Message Content Formatting
	//Container
	output += '<div class="messageIncoming ' + character +'">'
	//Print Text
	output += '<p class="messageText">';
	output += text; 
	output += '</p></div></div>';

	return output;
}

//////////////////////////////////////////////////////////////////////////
//store playerinput Text in a Variable: CHECK THIS AGAINST NO WORRIES
let input = localStorage.getItem("input");
var correctMessage = ["No Worries."]; 
// var result = null;

function returnText(){
	input = document.getElementById("playerInputText").value;
	// localStorage.setItem('input',input);
	alert(input);

	matchString(); 
}

//CHECK IF PLAYER INPUT MATCHES NO WORRIES
function matchString(){
	//PROBLEM: input is saving the previous player input, even on reload, and printing that in the console
	var result = input.match(/no worries/gi);
	console.log ("Output : " + result);
	console.log(input);
} 

// console.log(input);




class Timer {
    constructor (root){
        root.innerHTML = Timer.getHTML();

    }

    static getHTML(){
        return `
            <span class="timer__part timer__part--minutes">00</span>
            <span class="timer__part">:</span>
            <span class="timer__part timer__part--seconds">00</span>
            <button type="button" class="timer__btn timer__btn--control timer__btn--start">
                <span class="material-icons">play_circle</span>
            </button>
            <button type="button" class="timer__btn timer__btn--reset">
            <span class="material-icons">timer</span>
            </button>
        `;
    }
}