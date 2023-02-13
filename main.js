
function init(){
	var messages = document.querySelector(".phoneMessages");
		messages.innerHTML += createMessage ("stacey", "hi this is stacey.", false);
		messages.innerHTML += createMessage ("james", "hi this is james.", false);
		messages.innerHTML += createMessage ("me", "No worries.", false);

}

function createMessage(character, text, isMe){
	var output = "";
	// Name & Icon Formatting
	output += '<div class="nameFriend">';
	output += '<img class = "icon" src ="http://placekitten.com/30/30">';
	output += '<p class="nameText ' + character + '">';
	//NOTE: still having issues getting the name to print/format
	output += '</p></div>';
	// Text Message Content Formatting
	output += '<div class="messageIncoming">'
	output += '<p class="messageText">';
	output += text; 
	output += '</p></div>';

	return output;
}