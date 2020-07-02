const height= document.getElementById('inputHeight'); // grabbing elements from DOM by JS
const Width = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');
const pixelCanvas= document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');

// when size is submitted by the user , call makegrid()
sizePicker.addEventListener('submit',function(event){ // adding event to handle the form 
        event.preventDefault(); // to avoid default value 
        makeGrid();
})

function makeGrid()  {
        $('tr').remove(); // to start with a new values

    for (let  i= 1; i <= height.value; i++) {
        const row=  pixelCanvas.insertRow(0);

        for (let j= 1; j<=Width.value; j++) {
            row.insertCell(0);   
    }
}

pixelCanvas.addEventListener('click', function(eve){ // adding event to handle the coloring for the cells of canvas
       if (eve.target.nodeName === 'TD') {
              
          eve.target.style.backgroundColor = colorPicker.value;
    }
})
}


