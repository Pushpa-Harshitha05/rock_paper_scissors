let anc = document.getElementById("anchor");

anc.addEventListener("click",()=>{
    let div = document.createElement("div");
    div.style.height = "90vh";
    div.style.width = "98vw";
    div.style.textAlign = "center";
    let p=document.createElement("p");
    p.textContent = "loading..";
    p.style.textAlign = "center";
    p.style.fontSize = "35px"
    div.append(p);
    document.body.append(div);
    anc.style.display = "none";
    setTimeout(() => {
        window.location.href = "rock_paper_scissors.html";
    }, 2000);
})