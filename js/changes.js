let colors = document.querySelectorAll("input[name='color']");
let card =document.getElementById('full_card');
let input_color = document.getElementById('input_color');



// colors
colors.forEach(function(ele,index) {
    ele.addEventListener('click',function(e){
        let computedStyle = window.getComputedStyle(ele);
        let bgColor = computedStyle.backgroundColor;
        card.style.backgroundColor = bgColor;
    });
});

input_color.addEventListener('input',function(){
     colors.forEach(function(ele) {
        ele.checked = false;
    });  
    card.style.backgroundColor=this.value;
});


// flowers
let flower_container = document.getElementById('flower_container');
let img = document.createElement('img');

let flowers = document.querySelectorAll("input[name='flower']");
flowers.forEach(function(ele,index) {
    ele.addEventListener('click',function(e){
        let computedStyle = window.getComputedStyle(ele);
        let bgImg = computedStyle.backgroundImage.match(/url\(["']?(.*?)["']?\)/)[1];
        img.src = bgImg.slice(22);
        flower_container.appendChild(img);
    });
});


// imgs
let top_img =document.getElementById('top_img');
let center_img=document.getElementById('center_img');
let bottom_img=document.getElementById('bottom_img');

top_img.addEventListener('click',function(e){
    top_img.style.zIndex=10;
    center_img.style.zIndex=0;
    bottom_img.style.zIndex=0;
});

center_img.addEventListener('click',function(e){
    top_img.style.zIndex=0;
    center_img.style.zIndex=10;
    bottom_img.style.zIndex=0;
});
bottom_img.addEventListener('click',function(e){
    top_img.style.zIndex=0;
    center_img.style.zIndex=0;
    bottom_img.style.zIndex=10;
});


let fImg =document.getElementById('fImg');
let sImg=document.getElementById('sImg');
let tImg=document.getElementById('tImg');

let top_img_ele = document.createElement('img');
fImg.addEventListener('change', function(e){
    const file = e.target.files[0]; // Get the uploaded file
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            top_img_ele.src = e.target.result;
            top_img.appendChild(top_img_ele);
            // top_img.src = e.target.result; // Set the src attribute with the data URL
        };
        reader.readAsDataURL(file)
    }
});

let center_img_ele = document.createElement('img');
sImg.addEventListener('change', function(e){
    const file = e.target.files[0]; // Get the uploaded file
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            center_img_ele.src = e.target.result;
            center_img.appendChild(center_img_ele); // Set the src attribute with the data URL
        };
        reader.readAsDataURL(file)
    }
});

let bottom_img_ele = document.createElement('img');
tImg.addEventListener('change', function(e){
    const file = e.target.files[0]; // Get the uploaded file
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            bottom_img_ele.src = e.target.result;
            bottom_img.appendChild(bottom_img_ele); // Set the src attribute with the data URL
        };
        reader.readAsDataURL(file)
    }
});



