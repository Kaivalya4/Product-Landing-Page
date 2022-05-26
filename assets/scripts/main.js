let buttons = document.querySelectorAll(".j-button");
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',response);
}

function response(e){
    let other = document.getElementById("other");
    other.style.backgroundColor = "gray";
    let pop_up = document.querySelector(".pop-up1");
    pop_up.style.display = "block";
    other.style.pointerEvents = "none";

    let cut = document.getElementById("cut");
    cut.addEventListener('click',response1);

    function response1(e){
        other.style.backgroundColor  = "#eee";
        pop_up.style.display="none";
        other.style.pointerEvents = "auto";
    }
}