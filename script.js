/* This file is where all your work should go for Assignment 2.  Please remove this comment. */

function cleanUpIndex(){
    const element = document.querySelectorAll(".contact")
    for (let contact of element){
        contact.remove()
    }
}

function createSingleIndex(given_obj){
    return `
        <a href="page3.html">
            <div class="contact">
                <p>${given_obj.name}</p>
            </div>
        </a>
    `
}

function renderIndex(contact_array){
    const main = document.querySelector(".cover")
    contact_array.forEach(element => {
        console.log(createSingleIndex(element))
        main.innerHTML += createSingleIndex(element)
    });
}
