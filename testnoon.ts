function greeter(name) {
    if(isNoon){
        return "Bonsoir, " + name;
    }
    return "Bonjour, " + name;
 }
  
 var myName = "Sylvain Sidambarom";
  
 var isNoon : boolean;// default value is false
  
 function toggleNoon(){
    isNoon = !isNoon;
 }
  
 document.getElementById("button").addEventListener("click", function(){
    toggleNoon();
    document.getElementById("display").innerHTML = greeter(myName);
 }) ;
  
 document.getElementById("display").innerHTML = greeter(myName);