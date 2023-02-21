//initiate these functions OnLoad
function init(){

	//Make the Timer
	new Timer(
		document.querySelector(".timer")
	)
	
	//Make the friend messages on load
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

//////////////////////////////////////////////////////////////////////////
//Create Text Messages (Friend & Player)
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
	} 
	else { // If a Friend Text
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
//PLAYER TEXT INPUT
let input = localStorage.getItem("input");
var correctMessage = ["No Worries."]; 

function returnText(){
	input = document.getElementById("playerInputText").value;
	// localStorage.setItem('input',input);
	// alert(input);

	//create a player text message
	//TO DO: check if it matches in matchString. if no, create the delete and retype message thing.
	var messages = document.querySelector(".phoneMessages");
	messages.innerHTML += createMessage ("me", correctMessage, true);


	matchString(); 
}

//CHECK IF PLAYER INPUT MATCHES NO WORRIES
function matchString(){
	var result = input.match(/no worries/gi);
	console.log ("Output : " + result);
	console.log(input);
} 

// console.log(input);

//////////////////////////////////////////////////////////////////////////
//TIMER STUFF
class Timer {
    constructor (root){
        root.innerHTML = Timer.getHTML();

		this.el = {
			minutes: root.querySelector(".timer__part--minutes"),
			seconds: root.querySelector(".timer__part--seconds"),
			control: root.querySelector(".timer__part--control"),
			reset: root.querySelector(".timer__btn--reset"),
		};

		this.interval = 40; 
		this.remainingSeconds = 90; //in seconds

		// this.updateInterfaceTime();
		this.updateInterfaceControls();

		this.el.control.addEventListener("click", () => {
			//To Do: add in tutorial code
		})

		this.el.reset.addEventListener("click", () => {
			//To Do: add in tutorial code
		})

    }

	updateInterfaceTime(){
		const minutes = Math.floor(this.remainingSeconds / 60);
		const seconds = this.remainingSeconds % 60; 
		// console.log(minutes, seconds);

		//minutes & seconds must be at least 2 characters, if 2 characters doesn't exist, add a zero to the front. 
		this.el.minutes.textContent = minutes.toString().padStart(2,"0");
		this.el.seconds.textContent = seconds.toString().padStart(2,"0");

	}

	updateInterfaceControls (){
		//TO DO: this isn't updating to the pause icon correctly
		//left off tutorial at 25:24
		//https://www.youtube.com/watch?v=PIiMSMz7KzM
		if (this.interval === null){
			this.el.control.innerHTML = '<span class="material-icons">play_circle</span>';
			this.el.control.classList.add("timer__btn--start");
			this.el.control.classList.remove("timer__btn--stop");
		} else {
			this.el.control.innerHTML = '<span class="material-icons">pause</span>';
			this.el.control.classList.add("timer__btn--stop");
			this.el.control.classList.remove("timer__btn--start");

		}
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