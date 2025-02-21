var erroCard= document.querySelector('.erro')

function clicar(){
    var text = document.getElementById('text').value;
    var res=document.querySelector('.res')
    var imagemdiv= document.getElementById('imgdiv')
    

    var nome = 'daniel'
    if(text === nome){
        res.innerHTML=`seja muito bem vindo ${nome} <br> o mapa para o tesouro <br>
        se encontra na imagem abaixo`
        imagemdiv.style.display ='block'
    }else{
        erroCard.classList.add('mostrar')
    }
}

let btnFechar = document.querySelector('.btnFechar');

btnFechar.addEventListener('click', ()=>{
    erroCard.classList.remove('mostrar')
})