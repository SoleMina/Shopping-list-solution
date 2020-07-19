var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputLength() {
	return input.value.length;
}

//Active class delete to the existing button
var btnDelete = document.querySelectorAll(".delete").length;
for(var i = 0; i < btnDelete; i++) {
 		document.querySelectorAll(".delete")[i].addEventListener("click", function() {
 			var btnDeleted = this.parentElement;
			btnDeleted.style.display = "none";
 		});
}
//Add cursive style to existing li
var lista = document.querySelectorAll("li");
for(var i = 0; i< lista.length; i++) {
	lista[i].addEventListener("click", function() {
		var listaLine = this;
		listaLine.classList.toggle("cursive");
	});
}


function createListElement() {
	var li = document.createElement("li");
	var btnList = document.createElement("button");
	btnList.classList.add("space");
	li.appendChild(document.createTextNode(input.value));
	btnList.appendChild(document.createTextNode("Delete"));
	li.appendChild(btnList);
	ul.appendChild(li);

		//Add cursive class to li
		li.addEventListener("click", function() {
		li.classList.toggle("cursive");
	})
		//Add display none style to the button
	    btnList.addEventListener("click", function() {
		btnList.parentElement.style.display = "none";
	})
	    
	input.value = "";
}

function addListAfterClick() {
	if(input.value === "") {
		alert("the input is empty, please fill it");
	}else{
		createListElement();
	}

}

function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeypress);

