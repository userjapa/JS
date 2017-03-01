var x = 0;
date = new Date();

window.prompt("DIAS: ", date);

function teste() {
    if (x === 0) {
        document.getElementById('teste').innerHTML = "TESTE";
        x += 1;
    } else if (x === 1) {
        if (window.confirm("deseja proceguir?") === false) {
            x = 1;
        } else {
            document.getElementById('teste').style.color = "red";
            x += 1;
        }
        
    } else {
        window.alert("ZEROU");
        document.getElementById('teste').innerHTML = "";
        x = 0;
    }
}

function aulaJs() {
    var idade = 0;
    var media = 0;
    var nome = "";
    
    idade = 28;
    media = 40.5;
    nome = "Luiz";
    nome += " Henrique";
    
    document.getElementById('teste').innerHTML = nome+ " ," +idade+ " anos , media " +media+ "<br>" +Date();    
}

function calculadora() {
    var t1 = prompt("Informe o primeiro numero: ", "0");
    var t2 = prompt("Informe o segundo numero: ", "0");
        
    var n1 = parseFloat(t1);
    var n2 = parseFloat(t2);
    
    var soma = n1 + n2;
    var sub = n1 - n2;
    var div = n1 / n2;
    var mult = n1 * n2;
    var media = (n1 + n2)/2;
    
    window.alert("Soma: "+soma+ "\nSubtracao: "+sub+ "\nDivisao: "+div+ "\nMultiplicacao: "+mult+ "\nMedia: "+media);
}

function exercicio() {
    var r = parseInt(Math.random() * 100);
    var count = 0;
    
    alert("Acerte o número!");
    while(count != 11) {
        if (count <= 9) {
            var t1 = prompt(count+1 +"ª tentativa:", "");
            var n1 = parseInt(t1);
            
            if (n1 === r) {
                alert("ACERTOU!!!");
                break;
            } else {
                if (n1 > r) {
                    var vp = n1-r;
                } else {
                    var vp = r-n1;
                }

                if (vp > 50) {
                    alert("ERRROUUUUU!! \nEstá FRIO"); 
                } else if((vp <= 50)&&(vp > 25)) {
                    alert("ERRROUUUUU!! \nEstá Esquentando");
                } else if((vp <= 25)&&(vp > 10)) {
                    alert("ERRROUUUUU!! \nEstá Morno");
                } else {
                    alert("ERRROUUUUU!! \nEstá Quente");
                }
            }
        } else {
            alert("Acabaram as tentativas. O numero e: "+r);
        }
        count++;
    }
}


console.log("TesteLog");
console.count("TesteCount");
console.count("TesteCount1");
console.count("TesteCount2");
console.count("TesteCount3");

function soma(n1,n2,callback) {
    callback();
}

function teste1() {
    alert("Teste Callback");
}

soma(10,20,teste1);

///////// STRINGS /////////
var corrente = 'teste de "String" teste';
function showCorrente() {
    alert("Conteudo: "+corrente+"\nTamanho: "+corrente.length+"\nBuscaIndexInicio: "+corrente.indexOf("String")+"\nBuscaIndexFinal: "+corrente.lastIndexOf("String")+"\nLocalizar: "+corrente.search("String")+"\nRepartir: "+corrente.slice(0,5)+"\nRepartir2: "+corrente.substring(0,5)+"\nSubstituirUm: "+corrente.replace("String", "STR")+"\nSubstituirTodos: "+corrente.replace(/teste/g,"TESTE")+"\nContatenar: "+corrente.concat("HUEHUE ", "OI")+"\nStr: "+corrente[0]+"\nSeparar: "+corrente.split("teste"));
    
}

////// MOSTRAR NÚMERO NOS FORMATO OCTAL, HEXADECIMAL E BINARIO /////
var numero = 128;
function paraString() {
    alert("Hexadecinal: "+numero.toString(16)+"\nDecimal: "+numero+"\nOctal: "+numero.toString(8)+"\nBinario: "+numero.toString(2))    
}

////////// ARRAY LIST /////////
var animais = ["LEAO", "CACHORRO", "ONCA", "BODE"];
var tm = animais.length;
var txt;
var x;
function listarArray() {
    for (x = 0; x < tm; x++) {
        txt += animais[x] + " ";
    }
    alert(txt+", "+animais.toString());
}

///////// TYPE OF ///////
function tipoDe() {
    var x = 123;
    
    document.getElementById("teste").innerHTML = 
        x.toString() + "<br>" + (123).toString() + "<br>" + (100 + 23).toString() + "<br>" +
        typeof "john" + "<br>" +
        typeof 3.14 + "<br>" +
        typeof NaN + "<br>" +
        typeof false + "<br>" +
        typeof [1,2,3,4] + "<br>" +
        typeof {name:'john', age:34} + "<br>" +
        typeof new Date() + "<br>" +
        typeof function () {} + "<br>" +
        typeof myCar + "<br>" +
        typeof null;
}

//////////// JSON ////////////
//{
//    "func":[
//        {"pnome":"willian", "unome":"simabukuro"},
//        {"pnome":"jap", "unome":"oneis"},
//        {"pnome":"jap", "unome":"onha"}
//    ]
//}

///////// OBJETO //////////
var obj = {name:"Willian", musica:"Rock", age:21, homem:true};
function showPessoa() {
    alert("Nome: "+obj.name+"\nMusica: "+obj.musica+"\nIdade: "+obj.age+"\nHomem: "+obj.homem);
}
            
////////////////// OBJETO LITERAL /////////////
var voo = {nome: "TESTE"};
        
a = 10;
b = a;
        
b = 20;
        
console.log(a);
console.log(b);
        
pessoa1 = {idade: 15};
pessoa2 = pessoa1;
        
pessoa2.idade = 20;
        
console.log(a);
console.log(b);
    
a1 = {id: 1};
b1 = a1;
        
console.log(a1);
console.log(b1);
        
console.log({} == {});
console.log(a1 == b1);
        
console.log(typeof voo.nome);
        
///// objeto {} e array[] ///

///////////////EXPRESSOES REGULARES/////////////
er = new RegExp("....-....");
console.log(er.test("3030-3030"));
