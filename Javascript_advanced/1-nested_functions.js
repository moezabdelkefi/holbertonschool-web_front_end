var globalVariable = "welcome";
function outer() {
    alert(globalVariable);
    var course = "Holberton";

    function inner() {
        alert(globalVariable + " " + course);
        var exclamation = "!";

        function inception() {
            alert(inception + "" + course + exclamation);

        }
        inception();
    }
    inner();
}
outer();
