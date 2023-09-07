function changeMode(size, weight, transform, background, color) {

    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
}

function main() {

    var paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    var button = document.createElement('button');
    button.textContent = 'Spooky';
    document.body.appendChild(button);
    button.addEventListener('click', function () {
        changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    });

    var button1 = document.createElement('button');
    button1.textContent = 'Dark mode';
    document.body.appendChild(button1);
    button1.addEventListener('click', function () {
        changeMode(12, 'bold', 'capitalize', 'black', 'white');
    });

    var button2 = document.createElement('button');
    button2.textContent = 'Scream mode';
    document.body.appendChild(button2);
    button2.addEventListener('click', function () {
        changeMode(12, 'normal', 'lowercase', 'white', 'black');
    });
}

main();
