document.querySelector("h1").innerHTML = "Good Bye";

// alert('hello')

document.getElementById("header").style.color = "blue";

document.getElementsByClassName("btn")[0].style.color = "white";

document.getElementsByClassName("btn")[0].style.backgroundColor = "blue";

document.querySelector("button").classList.add("invisible");

document.querySelector("btn").classList.remove("invisible");

document.querySelector("btn").classList.toggle("invisible");

document.getElementByTagName("checkbox").checked = "true";

document.querySelector("li a").innerHTML = "I'm First";

document.querySelector("#list a").style.color = "red";

document.querySelector("a").attribute;

document.querySelector("a").getAttribute("href");

document.querySelector("a").setAttribute("href", "https://www.google.com");

document.querySelector("li.item2").innerHTML = "I'm second";

document.querySelector("#list .item3").innerHTML = "I'm Third";

document.querySelectorAll("#list2 .item")[1].style.color = "red";
