export const setNumber=(number)=>{
     if(number){
      
 const numberString = number.toString();

 if(numberString.length> 3 && numberString.length<=6){
    if(numberString.length===6){return numberString.slice(0,3)+"K"}
    if(numberString.length===5){return numberString.slice(0,2)+"K"}
    if(numberString.length===4){return numberString[0]+"K"}

 }
 else if(numberString.length>6 && numberString.length<=9){
    if(numberString.length===9){return numberString.slice(0,3)+"M"}
    if(numberString.length===8){return numberString.slice(0,2)+"."+ numberString[3] +"M"}
    if(numberString.length===7){return numberString[0]+"M"}

 }
 else{
     return numberString;
 }
     }else{
        return 0;
     }


}