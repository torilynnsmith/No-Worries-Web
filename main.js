//initiate these functions OnLoad
function init(){
	
	//Make the friend messages on load
	// var messages = document.querySelector(".phoneMessages");

	// for (var i = 0; i < data.messages.length; i++){
	// 	// console.log(data.messages[i].message);
	// 	messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].message, false);

	// }

		// messages.innerHTML += createMessage ("becca", "hi this is Becca.", false);
		// messages.innerHTML += createMessage ("miranda", "hi this is Miranda.", false);
		// messages.innerHTML += createMessage ("me", "No worries.", true);
		// messages.innerHTML += createMessage ("becca", "hi this is Becca.", false);
		// messages.innerHTML += createMessage ("miranda", "hi this is Miranda.", false);
		// messages.innerHTML += createMessage ("me", "No worries.", true);
		// messages.innerHTML += createMessage ("becca", "hi this is Becca.", false);
		// messages.innerHTML += createMessage ("miranda", "hi this is Miranda.", false);
		// messages.innerHTML += createMessage ("me", "No worries.", true);
	
	// Make the Timer
	new Timer(
		document.querySelector(".timer")
	)


}
//////////////////////////////////////////////////////////////////////////
//Create Friend Messages every ??? seconds
//TO DO: does this actually need to be linked to a timer? 
let i = 0;

function makeFriendText(){
	var messages = document.querySelector(".phoneMessages");
	
	messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].message, false);
	i++; 
	updateScroll(); //scroll to bottom when new text is created
}

setInterval(function(){
	makeFriendText();
}, 30000) //1000 ms = 1 second, currently set to every 30 secs
//TO DO: In game interval is every 30 seconds

//////////////////////////////////////////////////////////////////////////
//Create Text Messages (Friend & Player)

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
// //PLAYER TEXT INPUT
let input = localStorage.getItem("input");

var correctMessage = ["No Worries."]; 

function returnText(){
	input = document.getElementById("playerInputText").value;

	//check if message matches "No Worries"
	matchString(); 

	//reset placeholder text to 'eMessage'
	document.querySelector('.e-message').value = ''; 
}

//CHECK IF PLAYER INPUT MATCHES NO WORRIES
function matchString(){
	var messages = document.querySelector(".phoneMessages");
	var result = input.match(/no worries/gi);
	console.log ("Output : " + result);
	console.log(input);

	//TO DO: delete and retype text feature.
	if (result===null){
		messages.innerHTML += createMessage ("me", correctMessage, true);
		updateScroll();
	} else {
		messages.innerHTML += createMessage ("me", correctMessage, true);
		updateScroll();
	}
} 


//NOTE: add this update scroll to the friend messages as well when attached to the timer intervals
function updateScroll(){
	var phoneWindowDiv = document.getElementById("phoneBG");
	// window.scrollTo(0,document.body.scrollHeight); //scrolls to the bottom of the whole page
	phoneWindowDiv.scrollTo(0,phoneWindowDiv.scrollHeight); //scrolls to the bottom of the div class

}

//////////////////////////////////////////////////////////////////////////
//TIMER STUFF
class Timer {
	
	//Construct the Timer
    constructor (root){
        root.innerHTML = Timer.getHTML();

		this.el = {
			minutes: root.querySelector(".timer__part--minutes"),
			seconds: root.querySelector(".timer__part--seconds"),
			control: root.querySelector(".timer__part--control"),
			reset: root.querySelector(".timer__btn--reset"),
		};

		this.interval = null; 
		this.remainingSeconds = 10 * 60; //in seconds (currently: 10 minutes)
		this.start(); //start Timer on page load

		//click button to start and stop timer
		//TO DO: Probably delete this as well? escape rooms don't stop the timer when providing hints. 
		//OPTION: have a secret passcode for the player input field that brings up the play/pause and reset timer buttons
		// this.el.control.addEventListener("click", () => {
		// 	if (this.interval === null) {
		// 		this.start();
		// 	} else {
		// 		this.stop();
		// 	}
		// })

		//Set time amount with timer button
		//TO DO: DELETE/HIDE THIS
		// this.el.reset.addEventListener("click", () => {
		// 	const inputMinutes = prompt("Enter number of minutes:");

		// 	//if player submitted value is less than 60 minutes/1 hour
		// 	if (inputMinutes < 60){
		// 		this.stop();
		// 		this.remainingSeconds = inputMinutes * 60; //convert minutes to seconds
		// 		this.updateInterfaceTime(); 
		// 	}
		// })

    }

	updateInterfaceTime(){
		const minutes = Math.floor(this.remainingSeconds / 60);
		const seconds = this.remainingSeconds % 60; 

		//minutes & seconds must be at least 2 characters, if 2 characters doesn't exist, add a zero to the front. 
		this.el.minutes.textContent = minutes.toString().padStart(2,"0");
		this.el.seconds.textContent = seconds.toString().padStart(2,"0");

	}

	updateInterfaceControls (){
		//https://www.youtube.com/watch?v=PIiMSMz7KzM
		if (this.interval === null){ //display play button
			this.el.control.innerHTML = '<span class="material-icons">play_circle</span>';
			this.el.control.classList.add("timer__btn--start");
			this.el.control.classList.remove("timer__btn--stop");
		} else { //display pause button
			this.el.control.innerHTML = '<span class="material-icons">pause_circle</span>'; 
			this.el.control.classList.add("timer__btn--stop");
			this.el.control.classList.remove("timer__btn--start");

		}
	}

	start () {
		if (this.remainingSeconds === 0) return;

		this.interval = setInterval(() => {
			this.remainingSeconds--; //remove 1 from current value
			this.updateInterfaceTime();

			//if timer reaches 0, stop the timer
			if (this.remainingSeconds === 0) {
				this.stop();
			}
		}, 1000); //every 1000 ms (1 second)

		// this.updateInterfaceControls(); //swap out buttons
	}

	stop () {
		clearInterval(this.interval);

		this.interval = null; 

		// this.updateInterfaceControls(); 
	}

    static getHTML(){
        return `
            <span class="timer__part timer__part--minutes">10</span>
            <span class="timer__part">:</span>
            <span class="timer__part timer__part--seconds">00</span>
        `;
		// return `
		// 	<span class="timer__part timer__part--minutes">15</span>
		// 	<span class="timer__part">:</span>
		// 	<span class="timer__part timer__part--seconds">00</span>
		// 	<button type="button" class="timer__btn timer__btn--control timer__btn--start timer__part--control">
		// 		<span class="material-icons">play_circle</span>
		// 	</button>
		// 	<button type="button" class="timer__btn timer__btn--reset">
		// 	<span class="material-icons">timer</span>
		// 	</button>
		// `;
    }
}