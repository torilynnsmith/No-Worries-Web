//initiate these variables OnLoad
//Time
let minutes = 0;
let seconds = 0; 

//Sound
let silenceAudio = new Audio ("silence.mp3");
let friendAudio = new Audio ("textmessage.mp3");
let playerAudio = new Audio ("textsent.mp3");
let notifAudio = new Audio ("generalnotification.mp3");
let calAudio = new Audio ("reminder.mp3");

//Other
let momBool = false; 

//////////////////////////////////////////////////////////////////////////
//INTIS AND DISMISS TO START FUNCITONS
//index.html init
function init(){

}

//momchat.html init
// function momInit(){
// 	silenceAudio.play(); 
// 	console.log("disToStart called"); 

// 	momBool = true; 

// 	//PROBLEM how to get sound to play. do we bring back a disToStart for this page?
// 	document.getElementById("inputFieldContainer").style.visibility = "visible";
// 	document.getElementById("chatNameWrapper").style.visibility = "visible";
// 	document.getElementById("headerWrapper").style.visibility = "visible";

// 	//start Mom Chat texts & notifs after 3 seconds
// 	setTimeout(momChatTexts,3000); //3 secs
// 	setTimeout(finalPlayerText, 10000); //10 secs
// 	setTimeout(finalNotif,15000) //15 secs

// 	dismissNotif(); 
// }

//Default Notification is Dismissed to start the experience.
function disToStart(){

	// playerAudio.play(); 
	silenceAudio.play(); 
	console.log("disToStart called"); 
	//ISSUE: Having trouble gettins sounds to play in Safari. 
	//Tried this method where I play a sound with this disToStart interaction and it's still not working.
		//Tested with the playerAudio.play(); as well
	//sounds work when typing or sending a message, but not when receiving texts or notifications. 

	// Make the Timer
	new Timer(
		document.querySelector(".timer")
	)
	document.getElementById("timer").style.visibility = "visible";
	document.getElementById("inputFieldContainer").style.visibility = "visible";
	document.getElementById("chatNameWrapper").style.visibility = "visible";
	document.getElementById("headerWrapper").style.visibility = "visible";

	dismissNotif(); 
}
//////////////////////////////////////////////////////////////////////////
//Create Friend Messages
let i = 0;

function makeFriendText(){

	var messages = document.querySelector(".phoneMessages");

	if (minutes === 14 && seconds === 56){ //14:57, Send message 0, Player
	// if (minutes === 14 && seconds === 57){ //DEMO 14:57, Send message 0, Player
		// console.log("called from makeFriendText, 0");
		// console.log("minutes:" + minutes);
		// console.log("seconds:" + seconds);
		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[i].time, data.messages.length[0]);
		i++; 
		updateScroll();
	} else if (minutes === 14 && seconds === 30){ //14:30, Send message 1, Becca
	// } else if (minutes === 14 && seconds === 45){ //DEMO 14:45, Send message 1, Becca
		// console.log("called from makeFriendText, 1");
		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[i].time, data.messages.length[1]);
		i++; 
		updateScroll();
	} else if (minutes === 12 && seconds === 30){ //12:30, Send message 2, Miranda
	// } else if (minutes === 14 && seconds === 30){ //DEMO 14:30, Send message 2, Miranda
		//TO DO: Move the Miranda & Becca exchange up about a minute and a half
		// console.log("called from makeFriendText, 2");
		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[i].time, data.messages.length[2]);
		i++; 
		updateScroll();
	} else if (minutes === 12 && seconds === 00){ //12:00, Send message 3, Becca
	// } else if (minutes === 14 && seconds === 15){ //DEMO 14:15, Send message 3, Becca
		// console.log("called from makeFriendText, 3");
		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[i].time, data.messages.length[3]);
		i++; 
		updateScroll();
	} else if (minutes === 11 && seconds === 30){ //11:30, Send message 4, Miranda
	// } else if (minutes === 14 && seconds === 00){ //DEMO 14:00, Send message 4, Miranda
		// console.log("called from makeFriendText, 4");
		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[i].time, data.messages.length[4]);
		i++; 
		updateScroll();
	} else if (minutes === 09 && seconds === 30){ //09:30, Send message 5, Yvonne
	// } else if (minutes === 13 && seconds === 45){ //DEMO 13:45, Send message 5, Yvonne
		// console.log("called from makeFriendText, 5");
		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[i].time, data.messages.length[5]);
		i++; 
		updateScroll();
	} else if (minutes === 09 && seconds === 00){ //09:00, Send message 6, Becca
	// } else if (minutes === 13 && seconds === 30){ //DEMO 13:30, Send message 6, Becca
		// console.log("called from makeFriendText, 6");
		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[i].time, data.messages.length[6]);
		i++; 
		updateScroll();
	} else if (minutes === 08 && seconds === 30){ //08:30, Send message 7, Yvonne
	// } else if (minutes === 13 && seconds === 15){ //DEMO 13:15, Send message 7, Yvonne
		// console.log("called from makeFriendText, 7");
		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[i].time, data.messages.length[7]);
		i++; 
		updateScroll();
	} else if (minutes === 07 && seconds === 00){ //07:00, Send message 8, Layne
	// } else if (minutes === 12 && seconds === 45){ //DEMO 12:45, Send message 8, Layne
		// console.log("called from makeFriendText, 8");
		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[i].time, data.messages.length[8]);
		i++; 
		updateScroll();
	} else if (minutes === 05 && seconds === 30){ //05:30, Send message 9, Kennedy
	// } else if (minutes === 12 && seconds === 15){ //DEMO 12:15, Send message 9, Kennedy
		// console.log("called from makeFriendText, 9");
		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[i].time, data.messages.length[9]);
		i++; 
		updateScroll();
	} else if (minutes === 03 && seconds === 30){ //04:00, Send message 10, Becca
	// } else if (minutes === 12 && seconds === 30){ //DEMO 12:30, Send message 10, Becca
		// console.log("called from makeFriendText, 10");
		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[i].time, data.messages.length[10]);
		i++; 
		updateScroll();
	} else if (minutes === 03 && seconds === 00){ //03:00, Send message 11, Becca
	// } else if (minutes === 11 && seconds === 05){ //DEMO 11:05, Send message 11, Becca
		// console.log("called from makeFriendText, 11");
		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[i].time, data.messages.length[11]);
		i++; 
		updateScroll();
	} else if (minutes === 02 && seconds === 00){ //02:00, Send message 12, Becca
	// } else if (minutes === 11 && seconds === 00){ //DEMO 11:00, Send message 12, Becca
		// console.log("called from makeFriendText, 12");
		messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[i].time, data.messages.length[12]);
		i++; 
		updateScroll();
	} else if (minutes === 01 && seconds === 00) {
		console.log("makeMomText");
		// notifAudio.play();
		messages.innerHTML += createMessage (data.messages[13].name, data.messages[13].class, data.messages[13].message, data.messages[13].time, data.messages.length[13]);
		updateScroll();
	} else if (minutes === 00 && seconds === 30) {
		console.log("called from finalPlayerText");

		momBool = true; 
		console.log("momBool =" + momBool); 

		//NOTE: Possible change this to "Thank you. I love you. heart emoji"?
		messages.innerHTML += createMessage ("Me", "me", correctMessage,);
		// messages.innerHTML += createMessage (data.messages[13].name, data.messages[13].class, data.messages[13].message, data.messages[13].time, data.messages.length[13]);
		updateScroll();
	//DELTE THIS NOTE WHEN DONE
	//NOTE: Message 13 (from Mom) was moved to the MOM CHAT PAGE section
	} else {
		return; 
	}
	
}

//////////////////////////////////////////////////////////////////////////
//MOM CHAT PAGE 

//ISSUE: 
//main.js:170 Not allowed to load local resource: file:///Users/victorialsmith/Desktop/github/No-Worries-Web/momchat.html
//solution, repopulate the page with mom text stuff 

//Go to the Mom Chat Page when time runs out
function nextChat(){ 
	if (minutes === 14 && seconds === 50){ //change to 00:00
		console.log("nextChat called");
		// notifAudio.play(); 

		//Clear Chat Div of friend's messages
		clearChatDiv(); 

		//change chat name
		document.getElementById("chatNameText").innerHTML = "Mom &#128151;";
	
		//might change this to a TimeOut of less than 1 second to make it cleaner?
	// } else if (minutes === 14 && seconds === 57){
	// 	window.location.href = "file:///Users/victorialsmith/Desktop/github/No-Worries-Web/momchat.html";
	}
}

//delete all friend's previous messages (looks like the chat changes)
function clearChatDiv(){
	document.getElementById("phoneMessages").innerHTML =" "; 
	console.log("clearChatDiv called"); 
}

//DELETE WHEN FINISHED WITH NEW CHAT SET UP
// function momChatTexts(){
// 	var messages = document.querySelector(".phoneMessages");

// 	console.log("called from makeMomText");
// 	messages.innerHTML += createMessage (data.messages[13].name, data.messages[13].class, data.messages[13].message, data.messages[13].time, data.messages.length[13]);
// 	updateScroll();

// }

// function finalPlayerText(){
// 	var messages = document.querySelector(".phoneMessages");
// 	console.log("called from finalPlayerText");

// 	//NOTE: Possible change this to "Thank you. I love you. heart emoji"?
// 	messages.innerHTML += createMessage ("Me", "me", correctMessage,);
// 	// messages.innerHTML += createMessage (data.messages[13].name, data.messages[13].class, data.messages[13].message, data.messages[13].time, data.messages.length[13]);
// 	updateScroll();
// }

// function finalNotif(){
// 	var popUp = document.querySelector(".notifContainer");
// 	console.log("called from finalNotif");

// 	popUp.innerHTML += createNotif (notif.notifications[4].alertName, notif.notifications[4].alertMessage, notif.notifications[4].time, notif.notifications.length[4]);
// 	// notifPresent = false; //changed to false so it won't dismiss automatically?
// }



//////////////////////////////////////////////////////////////////////////
//Create Text Messages (Friend & Player)

function createMessage(characterName, characterClass, text){

	var output = "";

	// Name & Icon Formatting
	output += '<div class="messageContainer">'

	if (characterName === "Me"){ // If a Player Text
		//Play Sound
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
		// let friendAudio = new Audio ("textmessage.mp3");
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
	// console.log ("Autotype called. " + input); 

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

	//If nothing is typed in the input field, don't send anything. 
	if (input===""){
		return;
	}
	
	//FORMAT FOR CREATING MESSAGES
	// messages.innerHTML += createMessage (data.messages[i].name, data.messages[i].class, data.messages[i].message, data.messages[i].time, data.messages.length[0]);
	// createMessage(characterName, characterClass, text)

	if (resultTot===null){ 
		//INCORRECT: the phrase "no worries" does not exist in the string at all
		//TO DO: Call retyping function
		// autoType(); 

		messages.innerHTML += createMessage ("Me", "me", correctMessage,);
		console.log ("INCORRECT: no worries not contained at all.");
		// console.log ("resultTot Output : " + resultTot)
		updateScroll();

	} else { //CORRECT: input contains "no worries" and only "no worries"
		if (resultStart === true && resultEnd === true){ 
			//CORRECT: input contains "no worries" and only "no worries"
			//the phrase "no worries" is in the string at the start and the end with NOTHING ELSE
			//NOTE: this is not actually true! one could type "no worries boop no worries" and it will show as CORRECT
			
			messages.innerHTML += createMessage ("Me", "me", correctMessage,);
			console.log ("CORRECT: 'no worries' contained at start & end, only.");
			// console.log ("resultStart Output : " + resultStart);
			// console.log ("resultEnd Output : " + resultEnd);
			
			//reset placeholder text to 'eMessage'
			document.querySelector('.e-message').value = '';

			updateScroll();

		} else {
		//INCORRECT: "no worries" not at start and end of message
		messages.innerHTML += createMessage ("Me", "me", correctMessage,);
		console.log ("INCORRECT: 'no worries' not at start & end.");
		// console.log ("resultTot Output : " + resultTot);

		//TO DO: Call retyping function
		// autoType(); 

		updateScroll();
		}
	}
} 

//TO DO/STRETCH: add play/pause/and restart timer password functionallity

function updateScroll(){
	var phoneWindowDiv = document.getElementById("phoneBG");
	// window.scrollTo(0,document.body.scrollHeight); //scrolls to the bottom of the whole page
	phoneWindowDiv.scrollTo(0,phoneWindowDiv.scrollHeight); //scrolls to the bottom of the div class
	// console.log("updateScroll called"); 
}

//////////////////////////////////////////////////////////////////////////
//POP UP NOTIFICATIONS

//Create Popup Notifcation
let n = 0;
notifPresent = false; 

function makePopUp(){ //see makeFriendText() for example 
	var popUp = document.querySelector(".notifContainer");

	if (minutes === 14 && seconds === 52){ //14:58, Send notif 0, Calendar
		popUp.innerHTML += createNotif (notif.notifications[n].alertName, notif.notifications[n].alertMessage, notif.notifications[n].time, notif.notifications.length[0]);
		n++; 
		notifPresent = true; 
		// console.log("called from makePopUp, 0. notifpresent: " + notifPresent);
		// console.log("minutes:" + minutes);
		// console.log("seconds:" + seconds);
	} else if (minutes === 05 && seconds === 00){ //05:00, Send notif 1, Calendar
	// } else if (minutes === 12 && seconds === 00){ //DEMO 12:00, Send notif 1, Calendar
		popUp.innerHTML += createNotif (notif.notifications[n].alertName, notif.notifications[n].alertMessage, notif.notifications[n].time, notif.notifications.length[1]);
		n++; 
		notifPresent = true; 
		// console.log("called from makePopUp, 1. notifpresent: " + notifPresent);
	} else if (minutes === 04 && seconds === 00){ //04:30, Send notif 2, Calendar
	// } else if (minutes === 12 && seconds === 30){ //DEMO 12:30, Send notif 2, Calendar
		popUp.innerHTML += createNotif (notif.notifications[n].alertName, notif.notifications[n].alertMessage, notif.notifications[n].time, notif.notifications.length[2]);
		n++; 
		notifPresent = true; 
		// console.log("called from makePopUp, 2. notifpresent: " + notifPresent);
	} else if (minutes === 00 && seconds === 30){ //04:30, Send notif 3, Calendar
	// } else if (minutes === 10 && seconds === 30){ //DEMO 10:30, Send notif 3, Calendar
		popUp.innerHTML += createNotif (notif.notifications[n].alertName, notif.notifications[n].alertMessage, notif.notifications[n].time, notif.notifications.length[3]);
		n++; 
		notifPresent = true; 
		// console.log("called from makePopUp, 3. notifpresent: " + notifPresent);
	} else if (minutes === 00 && seconds === 20) {
		console.log("finalNotif");
		popUp.innerHTML += createNotif (notif.notifications[4].alertName, notif.notifications[4].alertMessage, notif.notifications[4].time, notif.notifications.length[4]);
		// notifPresent = false; //changed to false so it won't dismiss automatically?
	} else {
		return; 
	}

}

function createNotif(notifType, notifText){ //see createMessage() for example

	// setTimeout(dismissNotif, 15000);
	//Only enable automatic dismiss notif on the friend Chat page
	if (momBool === "false"){
		setTimeout(dismissNotif, 15000);//try again in 15 seconds
	} else if (momBool == "true") {
		console.log("dismissNotif skipped");
	}
		//NOTE: is 15 secs enough time? 

	var notifOutput = "";
	notifOutput += '<div class="notifContainer">'
	notifOutput += '<div class="notifMessage" id="popupNotif" onclick="dismissNotif()">'

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
		// console.log ("notifPresent = " + notifPresent);
		var dismissable = document.getElementById("popupNotif");
		dismissable.remove();
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
			makePopUp(); 
			nextChat(); 

			//if timer reaches 0, stop the timer
			if (this.remainingSeconds === 0) {
				this.stop();
			}
		}, 1000); //every 1000 ms (1 second)
	}

	stop () {
		clearInterval(this.interval);
		this.interval = null; 

		// this.updateInterfaceControls(); 
	}

	//Get HTML for Timer
    static getHTML(){
        return `
            <span class="timer__part timer__part--minutes">15</span>
            <span class="timer__part">:</span>
            <span class="timer__part timer__part--seconds">00</span>
        `;

		// <span class="timer__part timer__part--minutes">15</span>
		// <span class="timer__part">:</span>
		// <span class="timer__part timer__part--seconds">00</span>
		// <span div class="chatNameWrapper">
		// <span class="chatNameContent">The Girls</span>
		// </span>
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