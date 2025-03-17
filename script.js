function firstChar(text) {
	let char = "";
  for(let i = 0 ; i<text.length ; i++){
	  if(text){
		  char = text[0];
	  }
	  else{
		  char=""
	  }
  }
	return char;
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
