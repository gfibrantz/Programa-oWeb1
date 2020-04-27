function lista() {
var array = []
            array.push("Abacate");
            array.push("Limão");
            array.push("Abacaxi");
            array.push("Goiaba");
            array.push("Figo");
            array.push("Carambola");
            array.push("Cereja ");
            array.push("Caqui");
            array.push("Jabuticaba");
            array.push("Banana");
            array.push("Laranja");
            array.forEach(function(item) {
            var li = document.createElement("li");
            var text = document.createTextNode(item);
            li.appendChild(text);
            document.getElementById("myUl").appendChild(li);
             });
            }