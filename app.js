function verMenu(){
    document.getElementById('nav-menu').style.top='0';
}

function cerrarMenu(){
    document.getElementById('nav-menu').style.top='-100%';
}



const alimentos=[
    {
        titulo:"Bebidas Calientes",
        bebida1:"LATTE MACCHIATO",
        url1:"Media/bebidas/latteMacchiatto.png",
        bebida2:"FLAT WHITE",
        url2:"Media/bebidas/flatWhite.png",
        bebida3:"MOCHA",
        url3:"Media/bebidas/Mocha.png",
        bebida4:"MACCHIATO",
        url4:"Media/bebidas/caramelMacchiatto.png",
        bebida5:"CAPUCCIONO",
        url5:"Media/bebidas/capuccino.png",
        bebida6:"LATTE",
        url6:"Media/bebidas/latte.png",
    },
    {
        titulo:"Bebidas Frias",
        bebida1:"ICED LATTE",
        url1:"Media/bebidas/icedLatte.png",
        bebida2:"ICED MOCHA",
        url2:"Media/bebidas/icedMocha.png",
        bebida3:"MILKSHAKES",
        url3:"Media/bebidas/milkShakes.png",
        bebida4:"ICED MACCHIATO",
        url4:"Media/bebidas/icedMacchiatto.png",
        bebida5:"ICED CAPUCCIONO",
        url5:"Media/bebidas/icedCapuccino.png",
        bebida6:"Frappe",
        url6:"Media/bebidas/frappe.png",
    }
    
]

let pos =0;
function arrow(){
    pos++;   
    document.getElementById('tituloAlimentos').innerText=alimentos[pos].titulo;
    document.getElementById('bebida1').innerText=alimentos[pos].bebida1;
    document.getElementById('bebida2').innerText=alimentos[pos].bebida2;
    document.getElementById('bebida3').innerText=alimentos[pos].bebida3;
    document.getElementById('bebida4').innerText=alimentos[pos].bebida4;
    document.getElementById('bebida5').innerText=alimentos[pos].bebida5;
    document.getElementById('bebida6').innerText=alimentos[pos].bebida6;
    document.getElementById('bebida1').style.backgroundImage='linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('+alimentos[pos].url1+')';
    document.getElementById('bebida2').style.backgroundImage='linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('+alimentos[pos].url2+')';
    document.getElementById('bebida3').style.backgroundImage='linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('+alimentos[pos].url3+')';
    document.getElementById('bebida4').style.backgroundImage='linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('+alimentos[pos].url4+')';
    document.getElementById('bebida5').style.backgroundImage='linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('+alimentos[pos].url5+')';
    document.getElementById('bebida6').style.backgroundImage='linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('+alimentos[pos].url6+')';
    if(pos==1){pos=-1;}
}