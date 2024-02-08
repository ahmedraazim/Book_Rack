//selecting popup box, popup overlay button
var popupoverlay = document.querySelector(".popup-overlay")
var popupoverlay = document.querySelector(".popup-box")
var addpopoupbutton = document.getElementById("add-popup-buttton")

addpopoupbutton.addEventListener("click", function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"

})

//selecting cancel button
var cancelpopoup = document.getElementById("cancel-popup")
cancelpopoup.addEventListener("click", function(event)
{
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//selecting container, add-book-button, book-title, book's author, book's description 
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var bookdescription = document.getElementById("book-description-input")

const descriptionInput = document.getElementById('book-description-input');
    const wordCountDisplay = document.getElementById('word-count');

    descriptionInput.addEventListener('input', function() {
        const words = this.value.trim().split(/\s+/).length;
        wordCountDisplay.textContent = words > 50 ? 'Maximum word count exceeded' : `${words} word(s)`;
    });

addbook.addEventListener("click", function(event)
{
    event.preventDefault()
    var div = document.createElement("Div")
    div.setAttribute("class", "book-container")
    div.innerHTML=` <h2>${booktitle.value}</h2>
                    <h5>${bookauthor.value}</h5>
                    <p>${bookdescription.value}</p>
                    <button onclick="deletebook(event)">Delete</button> `
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})



function deletebook(event)
{
    event.target.parentElement.remove()
}

