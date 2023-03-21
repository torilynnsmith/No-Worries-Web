//initiate these functions OnLoad
function init(){
	
	// Make the Timer
	new Timer(
		document.querySelector(".timer")
	)

}
//////////////////////////////////////////////////////////////////////////
//Create Friend Messages every 30 seconds
//TO DO: does this actually need to be linked to a timer? 
let i = 0;
friendInterval = null; 
//currently linked to timer?

function makeFriendText(){
	var messages = document.querySelector(".phoneMessages");
	
	// messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].message, false);
	messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].message, data.messages[i].name);
	i++; 
	updateScroll(); //scroll to bottom when new text is created
}



//////////////////////////////////////////////////////////////////////////
//Create Text Messages (Friend & Player)

function createMessage(character, text, characterName){
	var output = "";
	// Name & Icon Formatting
	output += '<div class="messageContainer">'

	if (characterName === "Me"){ // If a Player Text
		//Container
		output += '<div class="namePlayer">';
		//Character Name
		output += '<p class="nameText">';
		output += characterName;
		output += '</p>';
		//Icon
		output += '<img class = "iconPlayer" src ="http://placekitten.com/30/30">';	
	} 

	//FREE AVATAR PLACEHOLDER LINK= https://pravatar.cc
	//Becca = 30, Miranda = 49, Yvonne = 38, Layne = 25, Kennedy = 48, Mom = 22, else = 24
	else { // If a Friend Text
		//Container
		output += '<div class="nameFriend">';
		//Icon, associate with Character Name
		if (characterName === "Becca"){
			output += '<img class = "iconFriend" src ="https://i.pravatar.cc/150?img=30">';	
		} else if (characterName === "Miranda"){
			output += '<img class = "iconFriend" src ="https://i.pravatar.cc/150?img=49">';	
		} else if (characterName === "Yvonne"){
			output += '<img class = "iconFriend" src ="https://i.pravatar.cc/150?img=38">';	
		} else if (characterName === "Layne"){
			output += '<img class = "iconFriend" src ="https://i.pravatar.cc/150?img=25">';	
		} else if (characterName === "Kennedy"){
			output += '<img class = "iconFriend" src ="https://i.pravatar.cc/150?img=48">';	
		} else if (characterName === "Mom"){
			output += '<img class = "iconFriend" src ="https://i.pravatar.cc/150?img=22">';	
		}
		else {
			output += '<img class = "iconFriend" src ="https://i.pravatar.cc/150?img=24">';	
		}
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

//TRY TO REMOVE ALL PUNCTION FROM INPUT
// var inputNoPunct = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");
// console.log(inputNoPunct);

var correctMessage = ["No Worries."]; 

function returnText(){
	input = document.getElementById("playerInputText").value;

	//check if message matches "No Worries"
	matchString(); 

	//reset placeholder text to 'eMessage'
	document.querySelector('.e-message').value = '';
}

//CHECK IF PLAYER TEXT MESSAGE INPUT MATCHES NO WORRIES
function matchString(){
	// var correctString = "no worries"; (9, 0-9 or 10 characters total)
	var messages = document.querySelector(".phoneMessages");
	var resultTot = input.match(/no worries/gi); //check if input contains "no worries"

	var resultStart = input.toLocaleLowerCase().startsWith("no worries"); //check if input starts with "no worries"
	var resultEnd = input.toLocaleLowerCase().endsWith("no worries"); //check if input ends with "no worries"
	//TO DO: update to include punctuation (.,?)
	//Tried adding in a second parameter to specify an endPosition to search, but that's too specific and turns phrases up incorrectly.
	//NOTE: GET DANNY HELP HERE! 

	console.log ("resultTot Output : " + resultTot);
	console.log ("resultStart Output : " + resultStart);
	console.log ("resultEnd Output : " + resultEnd);
	console.log(input);

	if (resultTot===null){ 
		//INCORRECT: the phrase "no worries" does not exist in the string at all
		//TO DO: Call retyping function

		messages.innerHTML += createMessage ("me", correctMessage, "Me");
		console.log ("INCORRECT: no worries not contained at all.");
		console.log ("resultTot Output : " + resultTot)
		updateScroll();
		//TO DO: delete and retype text feature.

	} else { //CORRECT: input contains "no worries" and only "no worries"
		if (resultStart === true && resultEnd === true){ 
			//CORRECT: input contains "no worries" and only "no worries"
			//the phrase "no worries" is in the string at the start and the end with NOTHING ELSE

			//TO DO: Call retyping function
			
			messages.innerHTML += createMessage ("me", correctMessage, "Me");
			console.log ("CORRECT: 'no worries' contained at start & end, only.");
			// console.log ("resultStart Output : " + resultStart);
			// console.log ("resultEnd Output : " + resultEnd);
			updateScroll();

		} else {
		//INCORRECT: "no worries" not at start and end of message
		messages.innerHTML += createMessage ("me", correctMessage, "Me");
		console.log ("INCORRECT: 'no worries' not at start & end.");
		// console.log ("resultTot Output : " + resultTot);
		updateScroll();
		//TO DO: delete and retype text feature.
		}
	}
} 

//TO DO: add play/pause/and restart timer password functionallity


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

		friendInterval = setInterval(() =>{
			makeFriendText();
			console.log(i); 
			if (i >= data.messages.length) {
				clearInterval(friendInterval);
			}

		}, 5000) //1000 ms = 1 second, currently set to every 30 secs
		//NOTE: Ideal in-game interval is every 30 seconds
		//NOTE: setInterval calls repeatedly vs. setTimeout does something once. (might be useful for blocking player input?)
		//TO DO: How to pause the friend texts alongside the timer. 

		// this.updateInterfaceControls(); //swap out buttons
	}

	stop () {
		clearInterval(this.interval);
		clearInterval(friendInterval); 

		this.interval = null; 
		friendInterval = null; 

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

//EXTRA STUFF