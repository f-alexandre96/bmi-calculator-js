//capturar evento de submit do formulario
const form = document.querySelector('#formulario'); 
form.addEventListener('submit',function(evento){ //evento ou event ou e são usados
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');//captura dados do imput
    const inputAltura = evento.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value); //converte pra number
    const altura = Number(inputAltura.value);
    //verfica se der Nan
    if(!peso){
        setResultado('Peso inválido', false);
        return;
    }
    
    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;//cria a msg

    setResultado(msg, true);//seta o resultado com a flag true
});


function getNivelImc (imc) {
    const nivel = ['Abaixo do peso','Peso Normal','sobrepeso','obesidade grau 1',
    'obesidade grau 2','obesidade grau 3'];//verifica invertido no if
    //aqui nao precis else if pq quando cai em um return, a function para.
    //só executa a condição que for verdadeira(true)
    //pratica nao recomendada, se só tiver uma coisa simples no if,
    //pode eliminar as chaves.
    if(imc>= 39.9) return nivel[5];         
    if(imc>= 34.9) return nivel[4];            
    if(imc>= 29.9) return nivel[3];            
    if(imc>= 24.9) return nivel[2];    
    if(imc>= 18.5) return nivel[1];    
    if(imc< 18.5)  return nivel[0];
    
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2; //altura elevado a 2 ou altura * altura
    return imc.toFixed(2); //retorna imc com 2 casas decimais
}

function criaP(){//cria um paragrafo
    const p = document.createElement('p');
    return p;
    //p.classList.add(classname); //adiciona uma classe na lista de classes do p(paragrafo html)
    
}
function setResultado (msg,isValid){//seleciona a div resultado e zera o html
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // o que eu mandar aqui vai parar no html do resultado

    //cria um paragrafo
    const p = criaP();
    if (isValid) { 
        p.classList.add('paragrafo-resultado');
    } else { 
        p.classList.add('bad');
    }

    p.innerHTML = msg; //seta a classe acima ex:bad a msg 
    resultado.appendChild(p); //adiciona paragrafo no resultado
}