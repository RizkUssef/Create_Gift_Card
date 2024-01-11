let msg_section_submit = document.getElementById("next_prev_msg_id");

let form = document.getElementById("create_card_form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(form.elements["flower"].value);
  if (form.elements["flower"].value == "") {
    showMsg(
      `Choose a flower bouquet`,
      `Sending your soulmate a flower bouquet is like whispering a silent 'I love you' through nature's most beautiful creations`,
      `imgs/msg images/pick flower.jpeg`,
      `I'll Pick One`
    );
  } else if (
    form.elements["firstImage"].files.length == 0 &&
    form.elements["secImage"].files.length == 0 &&
    form.elements["thirdImage"].files.length == 0
  ) {
    showMsg(
      `consider uploading at least one image`,
      `it's a treasure chest for your memories, a picture-perfect glimpse to cherish forever`,
      `imgs/msg images/pick image.jpeg`,
      `I'll Upload One`
    );
  } else {
    showMsg(
      `Your card has been created`,
      `Now, let's proceed to the next step by entering the email address to which you'd like to send this card`,
      `imgs/msg images/enter email.jpeg`,
      `Let's Go`
    );
  }
});

function showMsg(headText, paraText, srcImg, btnContant) {
  document.getElementById("msg_header_text").textContent = headText;
  document.getElementById("msg_header_para").textContent = paraText;
  document.getElementById("msg_img").src = srcImg;
  let innerBtn = document.getElementById("remove_msg");
  innerBtn.textContent = btnContant;
  innerBtn.addEventListener("click", function () {
      msg_section_submit.style.display = "none";
      if(btnContant==`Let's Go`){
        window.location.href=`pages/card cover.html`;
        }   
  });
  msg_section_submit.style.display = "flex";
}
