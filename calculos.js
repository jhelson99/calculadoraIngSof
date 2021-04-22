const btnA      = document.getElementById('btnA');
const btnB      = document.getElementById('btnB');
const btnC      = document.getElementById('btnC');
const btnD      = document.getElementById('btnD');
const btnSumar  = document.getElementById('btnSumar');
const btnIgual  = document.getElementById('btnIgual');
const btnLimp   = document.getElementById('btnLimpiar');
const textResp  = document.getElementById('textResp');
//===============variables================
// let valor1 = '';
// let valor2 = '';
// btnA.addEventListener('click',(e)=>
// {
//     textResp.value  = textResp.value + 'A';
// });
// btnB.addEventListener('click',(e)=>
// {
//     textResp.value = textResp.value + 'B';
// });
// btnC.addEventListener('click',(e)=>
// {
//     textResp.value = textResp.value + 'C';
// });
// btnD.addEventListener('click',(e)=>
// {
//     textResp.value = textResp.value + 'D';
// });


// btnSumar.addEventListener('click',(e)=>
// {
//     valor1 = textResp.value;
//     textResp.value='';
// });
// btnIgual.addEventListener('click',(e)=>
// {
//     valor2 = textResp.value;
//     operaciones(valor1,valor2);

// });

// btnLimp.addEventListener('click',(e)=>
// {
//     textResp.value='';
// });
// const operaciones =(valor1,valor2)=>
// {
//     if(valor1 != '' && valor2 != '' )
//     {
//       textResp.value = (valor1==valor2)?'1':valoresDistintos(valor1,valor2);
//     }
// }
// const valoresDistintos=(valor1,valor2)=>
// {
//     if(valor1=='A' && valor2=='B') return 'C';
//     if(valor1=='C' && valor2=='D') return 'A';
//     if(valor1=='C' && valor2=='B') return 'D';
//     if(valor1=='B' && valor2=='D') return 'A';
//     else return '';
// }

//===============variables================
let valor1 = '';
let valor2 = '';
let valida = false;
btnA.addEventListener('click',(e)=>
{  
    if(valida==true)
    {
        textResp.value  = textResp.value + 'A';
        valor2 = textResp.value;
        operaciones(valor1,valor2);
    }
    else
    {
        textResp.value  = textResp.value + 'A';
    }
});
btnB.addEventListener('click',(e)=>
{
    if(valida==true)
    {
        textResp.value  = textResp.value + 'B';
        valor2 = textResp.value;
        operaciones(valor1,valor2);
    }
    else
    {
        textResp.value  = textResp.value + 'B';
    }
});
btnC.addEventListener('click',(e)=>
{
    if(valida==true)
    {
        textResp.value  = textResp.value + 'C';
        valor2 = textResp.value;
        operaciones(valor1,valor2);
    }
    else
    {
        textResp.value  = textResp.value + 'C';
    }
});
btnD.addEventListener('click',(e)=>
{
    if(valida==true)
    {
        textResp.value  = textResp.value + 'D';
        valor2 = textResp.value;
        operaciones(valor1,valor2);
    }
    else
    {
        textResp.value  = textResp.value + 'D';
    }
});


btnSumar.addEventListener('click',(e)=>
{
    valor1 = textResp.value;
    textResp.value='';
    valida=true;
});
// btnIgual.addEventListener('click',(e)=>
// {
//     valor2 = textResp.value;
//     operaciones(valor1,valor2);

// });

btnLimp.addEventListener('click',(e)=>
{
    textResp.value='';
   
});


const operaciones =(valor1,valor2)=>
{
    if(valor1 != '' && valor2 != '' )
    {
      textResp.value = (valor1==valor2)?'1':valoresDistintos(valor1,valor2);
      valida =false;
    }
}
const valoresDistintos=(valor1,valor2)=>
{
    if(valor1=='A' && valor2=='B') return 'C';
    if(valor1=='C' && valor2=='D') return 'A';
    if(valor1=='C' && valor2=='B') return 'D';
    if(valor1=='B' && valor2=='D') return 'A';
    else return '';
}