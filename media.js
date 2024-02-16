var js_n1;
var js_n2;
var js_soma;

function calcular ( ) {
    js_n1 = document.sistemedia.nota1.value;
    js_n2 = document.sistemedia.nota2.value; 
    js_nome = document.sistemedia.nome.value;

    js_soma = parseInt(js_n1) + parseInt(js_n2);
    js_resultado = js_soma /2;
     alert (js_nome + "," + " a sua media foi "+js_resultado);
}