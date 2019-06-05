function arrowClick(element){
	var bg = document.getElementById("background");
	var height = parseInt(bg.style.height.replace("px", ""));

	if(element.parentElement.style.height == "50px"){
		//open menu
		element.parentElement.style.height = "300px";
		element.parentElement.children[2].style.visibility = "visible";

		element.parentElement.style.backgroundImage = "linear-gradient(to right, #095c26, #0c6d3a, #0e7f50, #109166, #12a37d)";

		height += 300;

		element.parentElement.children[0].style.color = "#fff";
	}else{
		//close menu
		element.parentElement.style.height = "50px";
		element.parentElement.children[2].style.visibility = "hidden";
		element.parentElement.style.backgroundImage = "linear-gradient(#fff, #fff)";
		
		height -= 300;

		element.parentElement.children[0].style.color = "#000";
	}

	bg.style.height = height.toString() + "px";
}

function navbarClick(element){
	var buttons = document.getElementsByClassName("navbar-button");

	Array.prototype.forEach.call(buttons, function(button){
		button.classList.remove("active");
	});

	element.classList.add("active");
}