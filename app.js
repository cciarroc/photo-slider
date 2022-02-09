//Setup: we have a container with a width and height, positioned relative. 
//Each slide is position absolute, which is why you can only see the last slide (they all have the same position so the last one covers the one before)

// JS will be set up using positioning | check index of item and move it in the x direction

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

// start by iterating over the slides | this essentially puts them all in a horizontal line
slides.forEach(function(slide, index){
    slide.style.left = `${index*100}%`
})


let counter = 0;

nextBtn.addEventListener("click", function(){
    counter++;
    carousel();
})
prevBtn.addEventListener("click", function(){
    counter--;
    carousel();
})

const carousel = function(){
    // slides wrap around
    // if(counter === slides.length){
    //     counter=0;
    // } else if(counter <0){
    //     counter = slides.length -1;
    // }
    
    
    // hiding/showing prev/next buttons
    if(counter < slides.length -1){
        nextBtn.style.display = "block";
    } else{
        nextBtn.style.display = "none";
    }

    if(counter > 0){
        prevBtn.style.display = "block";
    } else{
        prevBtn.style.display = "none";
    }

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter *100}%)`;
    })
}
// when counter increases to 1, all slides move 100% to the left

prevBtn.style.display = "none"; //hides from the get-go