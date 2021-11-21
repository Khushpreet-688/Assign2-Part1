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
    const main = document.querySelector(".index")
    contact_array.forEach(element => {
        console.log(createSingleIndex(element))
        main.innerHTML += createSingleIndex(element)
    });
}

function cleanUpView(){
    const element = document.querySelector(".contactinfo")
    element.remove()
}

function renderView(contact_obj){
    contact_node = `
    <div class="contactinfo">
            <div class="contactname">
                ${contact_obj.name}
                <img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
            </div>
            <div class="contactemail">email: ${contact_obj.email}</div>
            <div class="contactphone">cell: ${contact_obj.phone}</div>
            <div class="contactaddress">address: ${contact_obj.address}</div>
            <div class="buttons">
                <button class="button edit" value="Edit">Edit</button>
                <button class="button close" value="Close">Close</button>
            </div>
        </div>
    `
    const main = document.querySelector(".view")
    main.innerHTML += contact_node
}

function cleanUpCreate(){
    const element = document.querySelector(".contactedit")
    element.remove(element)
}

function renderCreate(single_contact){
    single_node = `
    <div class="contactedit">
        <div class="contactimg">
            <img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
        </div>
        <div class="form">
            <form>
                <div class="inputcontainer">
                    <p>${single_contact.name}</p>
                    <button class="extrafield" id="extranamefield" name="extranamefield">+</button>
                </div>

                <div class="inputcontainer">
                    <p>${single_contact.phone}</p>
                    <button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
                </div>

                <div class="inputcontainer">
                    <p>${single_contact.address}</p>
                    <button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
                </div>
                
                <div class="inputcontainer">
                    <p>${single_contact.email}</p>
                    <button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
                </div>

                <div class="buttons">
                    <button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
                    <button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
                </div>
            </form>
        </div>
    </div>
    `
    const main = document.querySelector(".create")
    main.innerHTML += single_node

}