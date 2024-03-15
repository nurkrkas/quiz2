
const icerikler = [
    { id: 1, value: 'şehir;İstanbul' },
    { id: 2, value: 'şampiyonluk;19' },
    { id: 3, value: 'şehir;İstanbul' },
    { id: 4, value: 'renk;Siyah-Beyaz' },
];


const kapsayici=document.getElementById("container");
const btnBasla=document.getElementById("startButton");
let sayac=0;
let kart1 = null;
let kart2 = null;


btnBasla.addEventListener("click",kartOlustur);


function kartOlustur(){
    sayac=0;
    kapsayici.innerHTML="";
    karistir(icerikler);
    icerikler.forEach(icerik=>{
        kart=document.createElement("div");
        kart.innerHTML="?";
        kart.className="card";
        kart.dataset.value=icerik.value;
        kapsayici.appendChild(kart);
        kart.addEventListener("click",kartAc);
    })
}
function karistir(icerikler){
    for(let i=0;i<icerikler.length;i++){
        const rastgeleSayi = Math.floor(Math.random() * (i + 1));
        [icerikler[i], icerikler[rastgeleSayi]] = [icerikler[rastgeleSayi], icerikler[i]];
    }
}


function kartAc(){
    
    sayac++;
    
    
    console.log(sayac);
    if(sayac==1){
        
        kart1=this;
        kart1.innerHTML=this.dataset.value;
        return kart1;
          
    }
    else if(sayac==2){
        kart2=this;   
        kart2.innerHTML=this.dataset.value;
        kartKarsilastir(kart1,kart2);
        
    }
    
    console.log(kart1,kart2);
    
    
}




function kartKarsilastir(kart1,kart2){
    
    if(kart1.textContent===kart2.textContent){
        kart1.classList.add("eslesenler");
        kart2.classList.add("eslesenler");
    }

    sayac=0;

}




