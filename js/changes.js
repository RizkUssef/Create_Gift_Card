let colors = document.querySelectorAll("input[name='color']");
let card =document.getElementById('full_card');
let flower_container = document.getElementById('flower_container');
let input_color = document.getElementById('input_color');
// console.log(colors);


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
let flowers = document.querySelectorAll("input[name='flower']");
flowers.forEach(function(ele,index) {
    ele.addEventListener('click',function(e){
        let computedStyle = window.getComputedStyle(ele);
        let bgImg = computedStyle.backgroundImage.match(/url\(["']?(.*?)["']?\)/)[1];
        // console.log(bgImg.search("imgs"));
        // console.log(bgImg.slice(22));
        flower_container.src = bgImg.slice(22);
    });
});


// imgs
let top_img =document.getElementById('top_img');
let center_img=document.getElementById('center_img');
let bottom_img=document.getElementById('bottom_img');

let fImg =document.getElementById('fImg');
let sImg=document.getElementById('sImg');
let tImg=document.getElementById('tImg');

fImg.addEventListener('change', function(e){
    const file = e.target.files[0]; // Get the uploaded file
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            top_img.src = e.target.result; // Set the src attribute with the data URL
        };
        reader.readAsDataURL(file)
    }
});

sImg.addEventListener('change', function(e){
    const file = e.target.files[0]; // Get the uploaded file
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            center_img.src = e.target.result; // Set the src attribute with the data URL
        };
        reader.readAsDataURL(file)
    }
});

tImg.addEventListener('change', function(e){
    const file = e.target.files[0]; // Get the uploaded file
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            bottom_img.src = e.target.result; // Set the src attribute with the data URL
        };
        reader.readAsDataURL(file)
    }
});



