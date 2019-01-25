function onLoad() {

    // var box = document.querySelector('.box');
    // var colorInput = document.getElementById('color');
    // var changeColorButton = document.querySelector('.change-color');
    // var styleInput = document.getElementById('style');
    // var styleValue = document.getElementById('styleValue');
    // changeColorButton.addEventListener('click', function () {
    //     var color = colorInput.value;
    //     box.style.backgroundColor = color;
    // });
            // var myStyle = styleInput.value;
        // var myValue = styleValue.value;
        // box.style[myStyle] = myValue;
        // console.log(Screen);
        // console.log(Screen.innerHTML);
        // console.log(Screen.innerText);

    let Screen = document.getElementsByClassName('item1')
    console.log(Screen);



    var Action = document.querySelector('.item5');

    Action.addEventListener('click', function () {
        Screen = document.getElementById("Screen"); 
        Screen.innerText = "ОБАНА!!!";
    });
}


