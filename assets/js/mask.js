// máscara telefone
function mascaraTelefone(event) {
    //let não pode ser fora da função, não pode ser redeclarado
    let tecla = event.key; //captando o que foi digitado no input
    let telefone = event.target.value.replace(/\D+/g, "");

    //só permitirá executar o bloco se a teclada digitdada for número
    if (/^[0-9]$/i.test(tecla)) {
        telefone = telefone + tecla;
        let tamanho = telefone.length;

        //não permite digitar mais que 11 números
        if (tamanho > 11) {
            return false;
        }
        
        //formatando o telefone
        if (tamanho > 10) {
            telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3"); //(00) 00000-0000
        } else if (tamanho > 5) {
            telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3"); //(00) 0000-
        } else if (tamanho > 2) {
            telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2"); //(00) 
        } else {
            telefone = telefone.replace(/^(\d*)/, "($1");//(0
        }

        event.target.value = telefone;
    }

    //proibindo entrada de caracteres inválidos
    if (!["Backspace", "Delete"].includes(tecla)) {
        return false;
    }
}

//máscara cpf
function mascara(i)
{
    var v = i.value; //atribuindo à variável v o valor do parâmetro da função
    
    //v será como um array, e irá verificar se cada elemento é um número utilizando a função isNaN()
    if (isNaN(v[v.length-1]))
    {
       i.value = v.substring(0, v.length-1); //extrai apenas a parte numérica do input
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) 
        i.value += "."; //adiciona um . quando houver 3 números (posição 4), adicionará outro ponto quando houver 6 números + ponto (7 caracteres)
    if (v.length == 11) 
        i.value += "-"; //concatena um - quando houver 9 números + 2 pontos (11 caracteres)
 
}

//máscara data
function dateMask(inputData, e){

    var tecla;
    
    tecla = e.which; //tornando compatível com outros navegadores
    
    //números de 0 a 9 e '/'
    if(tecla >= 47 && tecla < 58)
    { 
        var data = inputData.value;
    
        //se for um número permite a entrada
        if(tecla > 47 && tecla < 58)
        {
            if (data.length == 2 || data.length == 5)
            {
                data += '/';
            }
        }

        //se for a barra, só deixa colocar se estiver na posicao certa
        else if (tecla == 47) { 
            if (data.length != 2 && data.length != 5)
            {
                return false;
            }
        }
    
        //atualiza o input da data
        inputData.value = data;
        return true;
    }
    
    else if (tecla == 8 || tecla == 0) // Backspace, Delete e setas direcionais(para mover o cursor)
        return true;
    else
        return false;
}