let next = document.getElementById('next_btn');
let prev = document.getElementById('prev_btn');

let form_sequ = ["form_color","form_flower","form_images","form_text_enter"];
let current = 0;

next.addEventListener('click',function(e){
    e.preventDefault();
    if(current < form_sequ.length){
        if(form_sequ[current] == "form_text_enter"){
            // next.style.display="none"
            alert("you are in the end")
        }else{
            let hide = document.getElementById(form_sequ[current]);
            let show = document.getElementById(form_sequ[current+1]);
            hide.style.display="none";
            show.style.display="flex"
            current++;
        }
    }
});

prev.addEventListener('click',function(e){
    e.preventDefault();
    if (current == 0) {
        alert("no");
    } else{
        let hide = document.getElementById(form_sequ[current]);
        let show = document.getElementById(form_sequ[current-1]);
        hide.style.display="none";
        show.style.display="flex"
        current--; 
    }
})


