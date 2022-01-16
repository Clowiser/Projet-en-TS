function greeter(name: string) {
    return "Bonjour, " + name;
 }
  
 var myName = "Alice Pottier";
 var ANumber = 2;
  
 document.getElementById("display").innerHTML = greeter(myName);

 /* si l'on fait document.getElementById("display").innerHTML = greeter(myName);
 * cela enverra obligatoirement un message d'erreur nous signalant que l'argument de type 'number' n'est pas assignable 
 à un paramètre de type 'string'
 */