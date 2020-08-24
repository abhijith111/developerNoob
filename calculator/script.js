var buffer
var buttonClick
function compute(val){

    if(val == '+'){
        buffer = document.getElementById('displayItem').innerHTML 
        document.getElementById('displayItem').innerHTML = ''
        buttonClick = "+button"

    }else if(val == '-'){
        buffer = document.getElementById('displayItem').innerHTML
        document.getElementById('displayItem').innerHTML = ''
        buttonClick = "-button"

    }else if(val == '*'){
        buffer = document.getElementById('displayItem').innerHTML
        document.getElementById('displayItem').innerHTML = ''
        buttonClick = "*button"
    }else if(val == '/'){
        buffer = document.getElementById('displayItem').innerHTML
        document.getElementById('displayItem').innerHTML = ''
        buttonClick = "/button"
    }
    
    else{
        document.getElementById("displayItem").innerHTML += val
    }

    
}

function clearScreen(){
    document.getElementById("displayItem").innerHTML = ''
}

function result(){
    if(buttonClick == "+button"){
        buffer = parseFloat(buffer) + parseFloat(document.getElementById('displayItem').innerHTML)
        document.getElementById('displayItem').innerHTML = buffer
    }else if(buttonClick == "-button"){
        buffer = parseFloat(buffer) - parseFloat(document.getElementById('displayItem').innerHTML)
        document.getElementById('displayItem').innerHTML = buffer
    }else if(buttonClick == "*button"){
        buffer = parseFloat(buffer) * parseFloat(document.getElementById('displayItem').innerHTML)
        document.getElementById('displayItem').innerHTML = buffer
    }else if(buttonClick == "/button"){
        buffer = parseFloat(buffer) / parseFloat(document.getElementById('displayItem').innerHTML)
        document.getElementById('displayItem').innerHTML = buffer
    }
}


