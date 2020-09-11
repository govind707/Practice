const txt = document.querySelector(".txt1");
const txtstr = txt.textContent;
const txtsplit = txtstr.split("");
txt.textContent = "";
for(let i=0;i < txtsplit.length; i++){
    txt.innerHTML += "<span class='c1'>" + txtsplit[i] + "</span>";
}

let c=0;
let timer = setInterval(t,50);

function t(){
    const s = txt.querySelectorAll('span')[c];
    s.classList.add('fade');
    c++;
    if(c === txtsplit.length){
        clearInterval(timer);
        timer = null;
        return;
    }

}