function verifica() {
    if(document.querySelector(".i1").value=="") { 
        alert("Digite um valor no campo de texto");
       } else { 
        var valor = document.querySelector(".i1").value;
        var r = fatorial(Number(valor));
        document.getElementById("result").innerHTML = "Resultado: " + r;
       }
   }
   function fatorial(n){
    if ((n == 0) || (n == 1))
      return 1;
    else
      return (n * fatorial(n - 1));
  }