var screen = document.getElementById("screen");

 function display(num){
    screen.value+= num;

 }

 function calculate(){
    try{
        screen.value= eval(screen.value)
    }
    catch{
        alert("Invalid")
    }
 }

 function clearAll(){
    screen.value= "";
 }

 function delAll(){
    screen.value = screen.value.slice(0,-1);
 }