
let submitt = document.getElementById('submit');

submitt.addEventListener('click', function(){

	let input = document.getElementById("partName");

	if(input.value.length>0){

		let usrInput = document.getElementById("partName").value;

		document.getElementById("show").innerHTML = usrInput;

		document.getElementById("partName").style.display = "none";

		document.getElementById("reload").style.display = "block";

		document.getElementById("submit").style.display = "none";

	} else {

		document.getElementById("partName").style.display = "block";

		document.getElementById("reload").style.display = "none";

		document.getElementById("submit").style.display = "block";

		document.getElementById("show").innerHTML = "Please write something!";

	}

});

let reload = document.getElementById("reload");

reload.addEventListener("click", function(){

location.reload();

});