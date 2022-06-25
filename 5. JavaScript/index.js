var name = prompt("czym się kończą plecy?");
alert("plecy kończą się " + name);

dupsko = "cycki";
alert("hello " + "world " + dupsko);

var ile = dupsko.length;


var text = "przykładowy tekst test"

var dupa = text.slice(0, 4);
alert(dupa);


var duza_dupa = text.toUpperCase();


var imie = prompt("jak się nazywasz mordzia?");

var first = imie.slice(0, 1);

var last = imie.slice(1, imie.length);

alert("siema gżdylu, " + first.toUpperCase() + last.toLowerCase());

function bmi() {
    var weight = prompt("podaj wagę grubasie");
    var height = prompt("ile masz metrów karle?");
    return weight / height ** 2
}


bmi()


