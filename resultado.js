$(document).ready(function(){
	setResultado();
});

function setResultado() {
	$("#resultado").append(localStorage.getItem("resultado"));
}		