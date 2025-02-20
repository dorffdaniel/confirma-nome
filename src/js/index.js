function clicar(){
    var caixa = document.getElementById('caixa')
    var text = document.getElementById('text').value;
    var res=document.getElementById('res')
    var imagemdiv= document.getElementById('imgdiv')
    var erroimg= document.getElementById('erro')
    

    var nome = 'daniel'
    if(text === nome){
        res.innerHTML=`seja muito bem vindo ${nome} <br> o mapa para o tesouro <br>
        se encontra na imagem abaixo`
        imagemdiv.style.display ='block'
    }else{
        res.textContent=`senha incorreta`
        erroimg.style.display=`block`
        caixa.style.display=`none`
    }
}