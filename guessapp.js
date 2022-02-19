let mode = 6;
let colors = generateRandomColors(mode);

let h1 = document.querySelector('h1');

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let title = document.getElementById('colorDisplay');
let display = document.getElementById('answerDisplay');
let resButton = document.querySelector('#reset');
let easyBtn = document.querySelector('#easy');
let hardBtn = document.querySelector('#hard');

title.textContent = pickedColor;

easyBtn.addEventListener('click', function(){
    mode = 3;
    if(this.classList != 'selected'){
        reset();
        easyBtn.classList.add('selected');
         hardBtn.classList.remove('selected');
    }
})

hardBtn.addEventListener('click', function(){
    mode = 6;
    if(this.classList != 'selected'){
        reset();
        easyBtn.classList.remove('selected');
        hardBtn.classList.add('selected');
    }
   })

resButton.addEventListener('click', function(){ reset()});

for(i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
}

for(i=0;i<squares.length;i++){
    squares[i].addEventListener('click', function(){
    let clickedColor = this.style.backgroundColor;
    console.log(clickedColor, pickedColor)
    if(clickedColor === pickedColor){
        display.textContent = 'Correct';
        resButton.textContent = 'Play Again?';
        changeColors(clickedColor);  
        h1.style.backgroundColor = clickedColor;      
    }   else {
            this.style.backgroundColor = 'black';
            display.textContent = 'Try Again!'
    }
})}

function changeColors(color){
    for(i=0;i<mode;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
        let arr = [];
        for(i=0; i<num; i++){
            arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
   let r = Math.floor(Math.random()*256);
   let g = Math.floor(Math.random()*256);
   let b = Math.floor(Math.random()*256);
   return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

function reset() {
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    title.textContent = pickedColor;
    display.textContent = ''
    for(i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    resButton.textContent = 'New colors';
    h1.style.backgroundColor = 'steelblue';
    }
    for(i=0;i<squares.length;i++){
       if (!colors[i]){
            squares[i].style.display = 'none';
        }else{squares[i].style.display = 'block';}
}
}