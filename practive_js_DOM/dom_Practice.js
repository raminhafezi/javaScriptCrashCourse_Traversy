// add meta tag to the head element

var meta1 = document.createElement("meta")
meta1.setAttribute('charset', "UTF-8")
document.getElementsByTagName('head')[0].appendChild(meta1);

var meta2 = document.createElement("meta")
meta2.setAttribute('name', "viewport")
meta2.setAttribute('content', "width=device-width, initial-scale=1.0")
document.getElementsByTagName('head')[0].appendChild(meta2);

var meta3 = document.createElement("meta")
meta3.setAttribute('http-equiv', "X-UA-Compatible")
meta3.setAttribute('content', "ie=edge")
document.getElementsByTagName('head')[0].appendChild(meta3);

var link = document.createElement("link")
link.setAttribute('rel', "stylesheet")
link.setAttribute('href', "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css")
link.setAttribute('integrity', "sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M")
link.setAttribute('crossorigin', "crossorigin")
document.getElementsByTagName('head')[0].appendChild(link);

var title = document.createElement("title")
title.innerText="Title Place_holder"
document.getElementsByTagName('head')[0].appendChild(title);

head = document.querySelector('head')
// console.log(head)


// add element to the body

body = document.querySelector('body')

var header = document.createElement("header")
header.id = "main-header"
header.className = "bg-success text-white p-4 mb-3"
document.getElementsByTagName('body')[0].appendChild(header)

var div = document.createElement("div")
div.className = "container"
document.getElementsByTagName('header')[0].appendChild(div)

var h1 = document.createElement("h1")
h1.id = "header-title"
h1.innerText = "Item Lister"
document.getElementsByClassName('container')[0].appendChild(h1)

var span = document.createElement("span")
span.style = "display:none"
span.innerText = "123"
h1.appendChild(span)

// body-header is finished

var div = document.createElement("div")
div.className = "container"
body.appendChild(div)

var div = document.createElement("div")
div.id = "main"
div.className = "card card-body"
document.getElementsByClassName("container")[1].appendChild(div)

var h2 = document.createElement("h2")
h2.className = "title"
h2.innerText = "Add Items"
document.getElementsByClassName('card card-body')[0].appendChild(h2)

var form = document.createElement("form")
form.className = "form-inline mb-3"
document.getElementsByClassName('card card-body')[0].appendChild(form)

var input = document.createElement("input")
input.setAttribute("type", "text")
input.className = "form-control mr-2"
document.getElementsByClassName('form-inline mb-3')[0].appendChild(input)

var input = document.createElement("input")
input.type = "submit"
input.className = "btn btn-dark"
input.value = "Submit"
document.getElementsByClassName('form-inline mb-3')[0].appendChild(input)


// Form is finished here


var h2 = document.createElement("h2")
h2.className = "title"
h2.innerText= "Items"
document.getElementsByClassName("card card-body")[0].appendChild(h2)

var ul = document.createElement("ul")
ul.id = "items"
ul.className = "list-group"
document.getElementsByClassName("card card-body")[0].appendChild(ul)

for(var i=0; i<=7; i++){
    var li = document.createElement("li")
    li.className = "list-group-item"
    if(i%2===0) {
        li.style.backgroundColor = "#f4f4f4"}
    else{
        li.style.backgroundColor = "#ccc"}
    li.innerText = "item"+ String(i+1)
    document.getElementsByClassName("list-group")[0].appendChild(li)
}

var li = document.querySelectorAll("li")
// console.log(li)
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
// console.log("Odd",  odd)
// console.log("Even", even)

// console.log(body)

var itemList = document.querySelector('#items');

// ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'pink'

// we can also used parentElement. basically is the same as parentNode

// console.log(itemList.childNodes)
// console.log(itemList.children);
// itemList.children[3].style.backgroundColor = "green";

// First Element child is better than first child
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = "First Element Child"

var span = document.createElement('span')
// span.setAttribute("id", "span")
// span.setAttribute("class", "span_class")

// ul = document.getElementsByClassName("list-group")[0]
//console.log(ul)
//ul.parentNode.appendChild(span)

// ul.appendChild(span)
// console.log(ul.nextElementSibling)

console


