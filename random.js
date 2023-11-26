let inputEl=document.getElementById("sayi")
let btnTahmin=document.getElementById("tahmin")
let btnBasla=document.getElementById("basla")
let pEl=document.getElementById("sonuc")

const randomOlustur = (max,min) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
let randomNumber;
btnBasla.addEventListener("click",()=>{
    randomNumber=randomOlustur(100,1);
    console.log(randomNumber);
    inputEl.style.display="block"
    btnTahmin.style.display="block";
    btnBasla.style.display="none";
    inputEl.focus()
})



btnTahmin.addEventListener("click",()=>{ 
    let inputValue=Number(inputEl.value);  
    
    if(!inputValue || inputValue>100 || inputValue<1){
        pEl.innerHTML="Lütfen 0-100 arasında bir sayı giriniz!";
    }else if(inputValue>randomNumber){
        pEl.innerHTML="Yanlış tahmin! Lütfen daha küçük bir sayi giriniz..";
    }else if(inputValue<randomNumber){
        pEl.innerHTML="Yanlış tahmin! Lütfen daha büyük bir sayi giriniz..";

    }else{
        pEl.innerHTML="🎉🎉🎉Tebrikler,kazandınız🎉🎉🎉"
        btnTahmin.style.display="none";
        btnBasla.style.display="block";
        inputEl.style.display="none";
    }
    
    
    inputEl.value="";
    inputEl.focus();
    
})