function setCookies() {
    // set cookies
    var firstname = document.getElementById('firstname').value;
    var email = document.getElementById('email').value;

    document.cookie = `firstname=${firstname}; email=${email};`;
}

function showCookies() {
    var cookies = document.cookie;
    // Create a new paragraph element
    var paragraph = document.createElement('p');

    paragraph.innerHTML = 'Cookies: ' + cookies;
    document.body.appendChild(paragraph);
}