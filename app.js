(function (){
    const App = {
        htmlElements:{
            calcularForm: document.getElementById('form-p1'),calpali: document.getElementById('calc-pali'),calpalindromoResult: document.getElementById('calc-palindromo'),
            calcularFormp2: document.getElementById('form-p2'),calcadena: document.getElementById('contarcadena'),calcadenaResult: document.getElementById('calc-caracter'),
            calcularFormp3: document.getElementById('form-p3'),calano: document.getElementById('ingresoano'),calanoResult: document.getElementById('calc-ano'),
            calcularFormp4: document.getElementById('form-p4'),calprimo: document.getElementById('ingresaprimo'),calprimoResult: document.getElementById('calc-primo')
        },
        init:()=>{
            App.bindEvents();
        },
        bindEvents:()=>{
            App.htmlElements.calcularForm.addEventListener('submit', App.events.onCalculatorFormSubmit),
            App.htmlElements.calcularFormp2.addEventListener('submit',App.events.contarCadena),
            App.htmlElements.calcularFormp3.addEventListener('submit',App.events.bisiesto)
            App.htmlElements.calcularFormp4.addEventListener('submit',App.events.numeroprimo)
        },
        events: {
            onCalculatorFormSubmit:(event)=>{
                event.preventDefault();
                const ValueA = Number(App.htmlElements.calpali.value);
                const ValueB = ValueA.toString(2);
                const operationResult = App.utils.texto(ValueA);
                const operationResult2 = App.utils.texto2(ValueB);
                let palabra;
                let palabra2;
                if(operationResult)
                {
                    palabra="Es palíndromo en Base 10";
                }else{
                    palabra="No es palíndromo en Base 10";
                }

                if(operationResult2)
                {
                    palabra2="Es palíndromo en Base 2";
                }else{
                    palabra2="No es palíndromo en Base 2";
                }
                
                const response = `La cadena ingresada ${ValueA}  ${palabra}`;
                const response2= `El binario ${ValueB}  ${palabra2}`;
                App.htmlElements.calpalindromoResult.innerText = `${response} \n ${response2} ` ;
           },
           contarCadena:(event)=>{
                event.preventDefault();
                const ValueA = String(App.htmlElements.calcadena.value);
                const operationResult = App.utils.Cantidad(ValueA);
                
                const response = JSON.stringify(operationResult);;
                App.htmlElements.calcadenaResult.innerText = response;
           },

           bisiesto:(event)=>{
                event.preventDefault();
                const ValueA = String(App.htmlElements.calano.value);
                const operationResult = App.utils.bisi(ValueA);
                
                const response = operationResult;
                App.htmlElements.calanoResult.innerText = response;
           },
           numeroprimo:(event)=>{
                event.preventDefault();
                const ValueA = String(App.htmlElements.calprimo.value);
                 //= App.utils.primo(ValueA);
                let j =1;
                let numerosPrimos = [];
                let suma=0;
                for (; j <= ValueA; j++) {

                if (App.utils.primo(j)) {
                numerosPrimos.push(j);
                }

                }
                for (let i = 0; i < numerosPrimos.length; i++) {
                        suma =suma + numerosPrimos[i];
                        
                }
                const operationResult ="La suma de los números primos es: "+suma;
                const response = operationResult;
                App.htmlElements.calprimoResult.innerText = response;
           }


         },
         utils: {

            
             texto:(palabra)=>
            {
                for (let i=0;i<palabra.length;i++){
                    if(palabra[i]!=palabra[palabra.length-i-1]){
                        return false;
                    }
                }
                return true;

                
            },

            texto2:(palabra)=>
            {
                for (let i=0;i<palabra.length;i++){
                    if(palabra[i]!=palabra[palabra.length-i-1]){
                        return false;
                    }
                }
                return true;

                
            },

            Cantidad:(text)=>
            {
                const answer ={};
            for (let i = 0; i < text.length; i++) {
                if (answer[text[i]]) {
                    answer[text[i]]++;
                }else{
                    answer[text[i]] = 1;
                }
                
            }
            return answer;
                
            },

            bisi:(year)=>
            {   
                let ano, respuesta;
                ano = year;
                if(((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0)){
                    ano ="El año: "+ano+" es Bisiesto";
                }else{
                    ano= "El año no es Bisiesto";
                }
                return ano;
                
            },

            primo:(numero)=>
            {   
                for ( i = 2; i < numero; i++) {

                    if (numero % i === 0) {
                    return false;
                    }

                }

                return numero ; 
            }
            
        },
        
     }
    
    App.init();
})();
