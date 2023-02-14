
function init(){
	var messages = document.querySelector(".phoneMessages");
		messages.innerHTML += createMessage ("stacey", "hi this is stacey.", false);
		messages.innerHTML += createMessage ("james", "hi this is james.", false);
		messages.innerHTML += createMessage ("me", "No worries.", true);
		messages.innerHTML += createMessage ("stacey", "hi this is stacey.", false);
		messages.innerHTML += createMessage ("james", "hi this is james.", false);
		messages.innerHTML += createMessage ("me", "No worries.", true);
		messages.innerHTML += createMessage ("stacey", "hi this is stacey.", false);
		messages.innerHTML += createMessage ("james", "hi this is james.", false);
		messages.innerHTML += createMessage ("me", "No worries.", true);

}

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