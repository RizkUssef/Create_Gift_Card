let cover = document.createElement('section');
cover.classList.add("cover_card");
cover.id = "card_section"
cover.innerHTML=`        <h1>Your card has been created. It will be sent to your soulmate in just 4 minutes </h1>
<div class="top">
    <div class="up">
        <img src="imgs/logo/Light HUIFR.svg" alt="no">
        <h1>Let's create the best memories, just for us.</h1>
    </div>
    <div class="down">
        <img src="imgs/fyonka/light fyonka.png" alt="" srcset="">
    </div>
</div>
<div class="bottom">
    <img src="imgs/stamp/flower stamp.png" alt="">
</div>
<div class="ok">
<button id="remove_cover" class="ok_btn">Ok</button>
</div>`;

let form = document.getElementById("create_card_form");
form.addEventListener('submit',function(e){
    e.preventDefault();
    document.body.appendChild(cover);
    let remove_btn = document.getElementById('remove_cover');
    let card_sec = document.getElementById('card_section');
    remove_btn.addEventListener('click',function(){
        card_sec.remove();
    });

});
