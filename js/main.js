
const formulario=document.getElementById('formulario')
const span=document.querySelectorAll('.span')
const input1=document.getElementById('Day')
const input2=document.getElementById('Month')
const input3=document.getElementById('Year') 

let modoCambio=true 

 formulario.addEventListener('submit',(e)=>{
    e.preventDefault() 

    let fechaDia=input1.value 
    let fechaMes=input2.value 
    let fechaAño=input3.value 

    const fechaDay=new Date().getDay()
    const fechaMonth=new Date().getMonth()+1
    const fechaYear=new Date().getFullYear() 

    const nacimientoDia=fechaDay-fechaDia 
    const nacimientoMes=fechaMonth-fechaMes 
    const nacimientoAño=fechaYear-fechaAño 

    if(modoCambio){

        span[0].innerHTML=nacimientoAño
        span[1].innerHTML=nacimientoMes 
        span[2].innerHTML=Math.abs(nacimientoDia)
    } 

     else{
        formulario.reset() 

        span[0].innerHTML='--'
        span[1].innerHTML='--'
        span[2].innerHTML='--'
     } 

     modoCambio=!modoCambio
 })