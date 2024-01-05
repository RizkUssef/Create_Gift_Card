let header_msg = document.getElementById('header_msg');
let msg_color = document.getElementById('msg_color');
let msg =document.getElementById('msg');

let header = document.getElementById('header_contant');
let msg_contant = document.getElementById('msg_contant');


header_msg.addEventListener('input',function(e){
    header.textContent=e.target.value;
});

msg_color.addEventListener("input",function(e){
    msg_contant.style.color=e.target.value;
});

msg.addEventListener("input",function(e){
    msg_contant.textContent=e.target.value;
});
