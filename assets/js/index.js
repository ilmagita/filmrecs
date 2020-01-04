//comment

document.getElementById("sendButton").onclick = function() {
    document.getElementById("name").value
    document.getElementById("email").value
    document.getElementById("message").value
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    const NameEmailString = `
            <b class='judul'><a href='#'>${name} (${email})</a>
            <p>says... </p><br/></b>
    `;

    const MessageString = `
            
        <p>${message}</p>
    `;

    const dom1 = new DOMParser().parseFromString(NameEmailString, "text/xml");
    document.getElementById("post").appendChild(dom1.firstChild)
    const dom2 = new DOMParser().parseFromString(MessageString, "text/xml");
    document.getElementById("post").appendChild(dom2.firstChild) 

    // console.log($('<p>asdasd</p>'))

    // const p = document.createElement("p")
    // p.innerHTML = name + " (" + email + ") " + "says " + message

    // document.getElementById("post").appendChild(p)
}

//random film

