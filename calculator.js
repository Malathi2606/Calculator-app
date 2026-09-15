let input = document.querySelector("input")
console.log(input);

let getCharacter = (ch)=>{
    if(input.value !=0)
        input.value +=ch;
    else
        input.value = ch;
}

//Clear the input field

let clearInput =()=>{
    input.value =""
}
// Calculation

let Calculate =()=>{
    let data = input.value;
    // console.log(data);
    // console.log(eval(data));
    input.value=eval(data)   
}

// remove last character

let removeLast =()=>{
    let data = input.value;
    let updatedData = data.slice(0,-1)
    input.value = updatedData;
}
