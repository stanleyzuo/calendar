var days = document.querySelectorAll(".day");
var arr = [];

for(var i = 0; i < days.length; i++) {
	days[i].id = i;
	days[i].onclick = changeStyles;
}

if(localStorage.getItem("calData")) {
	arr = localStorage.getItem("calData").split(",");
	for(var i = 0; i < days.length; i++) {
		if(arr[i] == "true") {
			days[i].classList.add("selected");
		}
	}
} else {
	for(var i = 0; i < days.length; i++) {
		arr.push(false);
	}
}

function changeStyles() {
	if(this.className == "day") {
		this.classList.add("selected");
		arr[this.id] = true;
		localStorage.setItem("calData", arr);
	} else {
		this.classList.remove("selected");
		arr[this.id] = false;
		localStorage.setItem("calData", arr);
	}
}