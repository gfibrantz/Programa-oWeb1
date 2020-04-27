
    function somar() {
      
      var num1 = document.querySelector(".n1").value;
      var num2 = document.querySelector(".n2").value;
      var num3 = document.querySelector(".n3").value;
      var resultado = Number(num1) + Number(num2) + Number(num3);
      if(resultado % 2 == 0) {
      alert(resultado + " Valor Par");
      }
      else {
      alert(resultado + " Valor Ímpar");
      }
      document.querySelector(".n1").value = '';
      document.querySelector(".n2").value = '';
      document.querySelector(".n3").value = '';
    }
    
    function verifica() {
        if(document.querySelector(".n1").value=="" || document.querySelector(".n2").value=="" || document.querySelector(".n3").value=="" ) { 
            alert("Digite um valor em todos campos de texto");
           } else { 
            somar();
           }
       }
