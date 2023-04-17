//initiate these functions OnLoad
let minutes = 0;
let seconds = 0; 

function init(){

}

//Default Notification is Dismissed to start the experience.
function disToStart(){
	// Make the Timer
	new Timer(
		document.querySelector(".timer")
	)
	dismissNotif(); 
}
//////////////////////////////////////////////////////////////////////////
//Create Friend Messages every 30 seconds
	//TODO: Switch to TIMESTAMPS
let i = 0;
friendInterval = null; 

// function textTimerTest(){
// 	if (minutes === 14 && seconds === 55){ //14:55
// 		console.log("called from textTimerTest");
// 		console.log("minutes:" + minutes);
// 		console.log("seconds:" + seconds);
		
// 		// messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[0].time, data.messages[i].message);
// 		// i++; 
// 		// updateScroll(); //scroll to bottom when new text is created
// 	}
// }

function makeFriendText(){

	var messages = document.querySelector(".phoneMessages");

	if (minutes === 14 && seconds === 57){ //14:55, Send message 1, Player
		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[0].time);
		i++; 
		updateScroll(); //scroll to bottom when new text is created
	} else if (minutes === 14 && seconds === 30){ //14:55, Send message 2, Becca
		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[1].time);
		i++; 
		updateScroll();
	} else if (minutes === 14 && seconds === 30){ //14:55, Send message 2, Becca
		console.log("called from makeFriendText");
		console.log("minutes:" + minutes);
		console.log("seconds:" + seconds);

		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[1].time);
		i++; 
		updateScroll();
	} else {
		return; 
	}
	
	// messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].message, false);
	// messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].time, data.messages[i].message);
	// i++; 
	// updateScroll(); //scroll to bottom when new text is created
}

//////////////////////////////////////////////////////////////////////////
//Create Text Messages (Friend & Player)

function createMessage(characterName, characterClass, text){

	var output = "";

	// Name & Icon Formatting
	output += '<div class="messageContainer">'

	if (characterName === "Me"){ // If a Player Text
		//Play Sound
		//TO DO: Get Player Text Sound, also add to Player Input Area
		let playerAudio = new Audio ("textsent.mp3");
		playerAudio.play(); 

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
		//Play Sound
		let friendAudio = new Audio ("textmessage.mp3");
		friendAudio.play(); 

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
		output += characterName;
		output += '</p>';
	}
	output += '</div>';

	//Text Message Content Formatting
	//Container
	output += '<div class="messageIncoming ' + characterClass +'">'
	//Print Text
	output += '<p class="messageText">';
	output += text; 
	output += '</p></div></div>';

	return output;
}

//////////////////////////////////////////////////////////////////////////
//PLAYER TEXT INPUT
let input = localStorage.getItem("input");

//TRY TO REMOVE ALL PUNCTUATION FROM INPUT
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

//RETYPING FEATURE
//TO DO: MAKE THIS
function autoType(){
	console.log ("Autotype called. " + input); 

	//reset placeholder text to 'eMessage'
	// document.querySelector('.e-message').value = '';

	//leave placeholder text as the input
	document.querySelector('.e-message').value = input;

	//NOTE THIS FOLLOWING SECTION OF CODE, I THINK THIS IS CLOSE, JUST NEEDS MODIFICATION
	// https://codepen.io/tommydunn/pen/WEZNLq

	// TxtRotate.prototype.tick = function() {
	// 	var i = this.loopNum % this.toRotate.length;
	// 	var fullTxt = this.toRotate[i];
	  
	// 	if (this.isDeleting) {
	// 	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	// 	} else {
	// 	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	// 	}

	//THOUGHTS: if the input is incorrect, 
	//I can save the user input content and length, 
	//then re-enter it minus one character at a time to make it look like it's deleting
	//until the count is back to zero.
	//THEN, I can do the same in reverse with "no worries" + whatever punctuation they ended with, if any.

}

//CHECK IF PLAYER TEXT MESSAGE INPUT MATCHES NO WORRIES
function matchString(){
	var messages = document.querySelector(".phoneMessages");

	//REMOVE PUNCTUATION
	// const punctArray = [".", "!", ",", "?"]; 
	// input = input.replace (/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); //remove punctuation

	input = input.replace ("!",""); 
	input = input.replace (".",""); 
	input = input.replace (",",""); 
	input = input.replace ("?",""); 
	input = input.replace ("@","");
	input = input.replace ("#",""); 
	input = input.replace ("$",""); 
	input = input.replace ("%",""); 
	input = input.replace ("^",""); 
	input = input.replace ("&",""); 
	input = input.replace ("*",""); 
	input = input.replace ("(",""); 
	input = input.replace (")",""); 
	input = input.replace ("-",""); 
	input = input.replace ("=",""); 
	input = input.replace ("_",""); 
	input = input.replace ("+",""); 
	input = input.replace ("`",""); 
	input = input.replace ("~",""); 
	input = input.replace ("[",""); 
	input = input.replace ("]",""); 
	input = input.replace ("{",""); 
	input = input.replace ("}",""); 
	input = input.replace (";",""); 
	input = input.replace (":",""); 
	input = input.replace ("'",""); 
	input = input.replace ("<",""); 
	input = input.replace (">",""); 
	input = input.replace ("/",""); 
	input = input.replace ("|",""); 


	var resultTot = input.match(/no worries/gi); //check if input contains "no worries"

	var resultStart = input.toLocaleLowerCase().startsWith("no worries"); //check if input starts with "no worries"
	var resultEnd = input.toLocaleLowerCase().endsWith("no worries"); //check if input ends with "no worries"
	
	//TO DO: create passwords for starting an stopping the timer for facilitator if needed 

	console.log(input);

	if (resultTot===null){ 
		//INCORRECT: the phrase "no worries" does not exist in the string at all
		//TO DO: Call retyping function
		autoType(); 

		messages.innerHTML += createMessage ("me", correctMessage, "Me");
		console.log ("INCORRECT: no worries not contained at all.");
		console.log ("resultTot Output : " + resultTot)
		updateScroll();
		//TO DO: delete and retype text feature.

	} else { //CORRECT: input contains "no worries" and only "no worries"
		if (resultStart === true && resultEnd === true){ 
			//CORRECT: input contains "no worries" and only "no worries"
			//the phrase "no worries" is in the string at the start and the end with NOTHING ELSE
			//NOTE: this is not actually true! one could type "no worries boop no worries" and it will show as CORRECT
			
			messages.innerHTML += createMessage ("me", correctMessage, "Me");
			console.log ("CORRECT: 'no worries' contained at start & end, only.");
			// console.log ("resultStart Output : " + resultStart);
			// console.log ("resultEnd Output : " + resultEnd);
			
			//reset placeholder text to 'eMessage'
			document.querySelector('.e-message').value = '';

			updateScroll();

		} else {
		//INCORRECT: "no worries" not at start and end of message
		messages.innerHTML += createMessage ("me", correctMessage, "Me");
		console.log ("INCORRECT: 'no worries' not at start & end.");
		// console.log ("resultTot Output : " + resultTot);
		//TO DO: Call retyping function
		autoType(); 

		updateScroll();
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
//POP UP NOTIFICATIONS

//Create Popup Notifcation
let n = 0;
notifMakeInterval = null; 
// notifDeleteInterval = null; 
notifPresent = false; 
//nothing is actually currently linked to the timer (see timer section below/setInterval section)

function makePopUp(){ //see makeFriendText() for example 
	
	//NOTE: Can I put all of the following into it's own if (notifPresent = false) condition?
	if (notifPresent = false) {
		
	}
	notifPresent = true; 
	// console.log (notifPresent);

	var popUp = document.querySelector(".notifContainer");

	popUp.innerHTML += createNotif (notif.notifications[n].alertName, notif.notifications[n].alertMessage);
	n++; 
}

function createNotif(notifType, notifText){ //see createMessage() for example
	//Sound
	let notifAudio = new Audio ("generalnotification.mp3");
	let calAudio = new Audio ("reminder.mp3");

	setTimeout(dismissNotif, 5000);//try again in 5 seconds
		//TO DO: rework to give player more time to read

	var notifOutput = "";
	notifOutput += '<div class="notifContainer">'
	notifOutput += '<div class="notifMessage" id="popupNotif" onclick="dismissNotif()">'

	//TO DO: differentiate between Notifcation Types to make different images icons, etc. 
	if (notifType === "Notification"){ //If a "Notification Text"
		//Sound
		notifAudio.play(); 

		//Header Container
		notifOutput += '<div class ="notifHeader">';
		//Notif Icon, associate with alertName
		notifOutput += '<span class="material-icons">notifications</span>'
		//Notif Name Text, associate with alertName
		notifOutput += '<p class="notifNameText">';
		notifOutput += notifType; 
		notifOutput += '</p>';
	} else if (notifType === "Calendar") { //Create Calendar Notification
		//Sound
		calAudio.play(); 

		//Header Container
		notifOutput += '<div class ="notifHeader">';
		//Notif Icon, associate with alertName
		notifOutput += '<span class="material-icons">event</span>'
		//Notif Name Text, associate with alertName
		notifOutput += '<p class="notifNameText">';
		notifOutput += notifType; 
		notifOutput += '</p>';
	} else if (notifType === "Reminder") { //Create Reminder Notification
		//Sound
		calAudio.play(); 

		//Header Container
		notifOutput += '<div class ="notifHeader">';
		//Notif Icon, associate with alertName
		notifOutput += '<span class="material-icons">priority_high</span>'
		//Notif Name Text, associate with alertName
		notifOutput += '<p class="notifNameText">';
		notifOutput += notifType; 
		notifOutput += '</p>';
	} else {
		//Sound
		notifAudio.play(); 

		//Header Container
		notifOutput += '<div class ="notifHeader">';
		//Notif Icon, associate with alertName
		notifOutput += '<img class = "iconNotif" src ="http://placekitten.com/30/30">';
		//Notif Name Text, associate with alertName
		notifOutput += '<p class="notifNameText">';
		notifOutput += notifType; 
		notifOutput += '</p>';
	}

	notifOutput += '<p class="timeRec">';
	notifOutput += 'now';
	notifOutput += '</p></div>';

	//Notification Message Text Content Formatting
	//Container/Print Text
	notifOutput += '<p class="notifMessageText">';
	notifOutput += notifText; 
	notifOutput += '</p></div></div>';

	return notifOutput;

}

//Dismiss Popup Notification
function dismissNotif(){

	if (notifPresent = false) { //notifcation popup is NOT present
		return; 
	}
		notifPresent = false; 
		// console.log (notifPresent);
		var dismissable = document.getElementById("popupNotif");
		dismissable.remove();

}

//////////////////////////////////////////////////////////////////////////
//TIMER STUFF
// let minutes = 0;
// let seconds = 0; 


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
		this.remainingSeconds = 15 * 60; //in seconds (currently: 15 minutes)
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
		// const minutes = Math.floor(this.remainingSeconds / 60);
		// const seconds = this.remainingSeconds % 60; 

		minutes = Math.floor(this.remainingSeconds / 60);
		seconds = this.remainingSeconds % 60; 

		//minutes & seconds must be at least 2 characters, if 2 characters doesn't exist, add a zero to the front. 
		this.el.minutes.textContent = minutes.toString().padStart(2,"0");
		this.el.seconds.textContent = seconds.toString().padStart(2,"0");
		
		// if (minutes === 14 && seconds === 45){ //14:45
		// 	console.log("called from updateInterfaceTime");
		// 	console.log("minutes:" + minutes);
		// 	console.log("seconds:" + seconds);
			
		// }

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

		this.interval = setInterval(() => { //being called every second
			this.remainingSeconds--; //remove 1 from current value
			this.updateInterfaceTime();

			//TO DO:
				//replace this test funciton with makeFriendText() & makePopUp()
				//Delete friendInterval Section
				//Delete notifMakeInterval Section
			makeFriendText();

			//if timer reaches 0, stop the timer
			if (this.remainingSeconds === 0) {
				this.stop();
			}
		}, 1000); //every 1000 ms (1 second)

		// friendInterval = setInterval(() =>{
		// 	makeFriendText();
		// 	// console.log("friend text length " + i); 
		// 	if (i >= data.messages.length) {
		// 		clearInterval(friendInterval);
		// 	}

		// }, 30000) //1000 ms = 1 second, currently set to every 30 secs

		//TO DO: How to pause the friend texts alongside the timer. 
			//should be solved if we move this to being called when the timer is exactly something. 

		// this.updateInterfaceControls(); //swap out buttons

		//Make next Notifcation after certain Interval
		notifMakeInterval = setInterval(() =>{
			makePopUp();
			// console.log("notif mes length " + n); 
			if (n >= notif.notifications.length) {
				clearInterval(notifMakeInterval);
			}

		}, 10000) //currently set to every 10 secs. 
	}

	stop () {
		clearInterval(this.interval);
		clearInterval(friendInterval); 
		clearInterval(notifMakeInterval); 

		this.interval = null; 
		friendInterval = null; 
		notifMakeInterval = null; 

		// this.updateInterfaceControls(); 
	}

	//Get HTML for Timer
    static getHTML(){
        return `
            <span class="timer__part timer__part--minutes">15</span>
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