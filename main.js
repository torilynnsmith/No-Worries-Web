
function init(){
	var messages = document.querySelector(".phoneMessages");
		messages.innerHTML += createMessage ("stacey", "hi this is stacey.", false);
		messages.innerHTML += createMessage ("james", "hi this is james.", false);
		messages.innerHTML += createMessage ("me", "No worries.", false);

}

function createMessage(character, text, isMe){
	var output = "";
	output += '<div class="message ' + character + '">';
	output += '<img class = "icon" src ="http://placekitten.com/30/30">';
	output += '<p class=name ' + character + '">';
	//printing the character name is where i left off
	output += '<p class="messageText">';
	output += text; 
	output += '</p></div>';

	return output;
}