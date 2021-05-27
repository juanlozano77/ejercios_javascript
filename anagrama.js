function esAnagrama(cadena1,cadena2){
  cadena1=cadena1.toLowerCase()
  cadena2=cadena2.toLowerCase()
  cadena1=cadena1.replace(/ /g, "")
  cadena2=cadena2.replace(/ /g, "")
  
  let coincidencias=0
  if (cadena1.length!==cadena2.length){
    return false
  }     
    let array=cadena1.split('');
    let array2=cadena2.split('');
    for (let i=0;i<cadena1.length;i++){
       
          for (let j=0;j<cadena2.length;j++){
            if (array[i]===array2[j]){
            array2[j]=null
            coincidencias++
            break;
            }    
          } 
  } 
  return (coincidencias==cadena1.length)
}
console.log(esAnagrama("Tom Marvolo Riddle","I am Lord Voldemort"))
