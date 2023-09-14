let table=document.getElementById('con')
let btn=document.getElementsByClassName('el')
let cllose=document.getElementById('close')
cllose.addEventListener('click',()=>{
    document.getElementById('Info_Element').style.scale='0'
    document.getElementById('con').style.opacity='1'
})


$(function(){
    $.getJSON('data\\data.json',(data)=>{
        let info=data
        for(let i=0;i<info.elements.length && info.Colors.length;i++){
            table.innerHTML+=`
            <div class="el">
            <div id='num'>${info.elements[i].number}</div>
            <div>${info.elements[i].symbol}</div>
             </div>
          

            `
            for(let b=0;b<btn.length;b++){
                btn[b].addEventListener('click',()=>{
                    document.getElementById('xpos').innerHTML=info.elements[b].xpos
                    document.getElementById('con').style.opacity='0.5'
                    document.getElementById('ypos').innerHTML=info.elements[b].ypos
                    document.getElementById('search').href=info.elements[b].source
                    document.getElementById('electron_configuration_semantic').innerHTML=info.elements[b].electron_configuration_semantic
                    document.getElementById('name').innerHTML=info.elements[b].name
                    document.getElementById('category').innerHTML=info.elements[b].category
                    document.getElementById('appearance').innerHTML=info.elements[b].appearance
                    document.getElementById('Info_Element').style.scale='1'
                    document.getElementById('image').style.backgroundColor=`#${info.Colors[b].cpkHexColor}`


                })
            }




        }

    })
    
})