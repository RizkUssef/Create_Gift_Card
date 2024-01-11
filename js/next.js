let next = document.getElementById('next_btn');
let prev = document.getElementById('prev_btn');
let head_label =document.getElementById('head_label');
let msg_section= document.getElementById('next_prev_msg_id');
// console.log(msg_section)

let form_sequ = ["form_color","form_flower","form_images","form_text_enter"];
let head_label_text = ["Pick Card Color","Pick Flower","Upload Images","Write Heartfelt & Kind Message"];
let current = 0;

next.addEventListener('click',function(e){
    e.preventDefault();
    if(current < form_sequ.length){
        if(form_sequ[current] == "form_text_enter"){
            msg_section.style.display="flex";
            document.getElementById('msg_header_text').textContent=`there are no further details or elements to be added to the card`;
            document.getElementById('msg_header_para').textContent=`If you have no further changes needed, please finalize the card creation and submit it`;
            document.getElementById('remove_msg').addEventListener('click',function(){
                msg_section.style.display="none";
            });
        }else{
            let hide = document.getElementById(form_sequ[current]);
            let show = document.getElementById(form_sequ[current+1]);
            hide.style.display="none";
            show.style.display="flex";
            head_label.textContent = head_label_text[current+1];
            current++;
        }
    }
});

prev.addEventListener('click',function(e){
    e.preventDefault();
    if (current == 0) {
        msg_section.style.display="flex";
        document.getElementById('msg_header_text').textContent=`this is already the initial step in creating your card`;
        document.getElementById('msg_header_para').textContent=`Please select your preferred card color. If you don't need to choose a color, feel free to skip this step by clicking on next button`;
        document.getElementById('remove_msg').addEventListener('click',function(){
            msg_section.style.display="none";
        });
    } else{
        let hide = document.getElementById(form_sequ[current]);
        let show = document.getElementById(form_sequ[current-1]);
        hide.style.display="none";
        show.style.display="flex";
        head_label.textContent = head_label_text[current-1];

        current--; 
    }
})


