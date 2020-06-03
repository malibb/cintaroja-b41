const callbackPromesa = (resolve, reject) => {
    // escribir el código de la función
    const number = Math.floor(Math.random() * 10);

    setTimeout(() => {
        return number > 5 ? resolve([{'numero': number}]) : reject(new Error('Menor a 5'));
    }, 1000);
};

// instancia de la clase promesa que recibe un callback
const promesa = new Promise(callbackPromesa);

// 3 métodos then, catch, finally

// cuando la promesa se resuelva

promesa.then((resultado)=>{
  console.log(resultado); 
})
.catch((error) => {
  console.log(error);  
}).finally(()=>{
    console.log('Yo siempre me ejecuto cuando el estado de mi promesa pasa a resuelta, atentamente: Finally');
});
/*
const funcionConContextoAsincrono = async () => {
    try {
       const resultadoDeLaPromesa = await promesa;
        console.log('Resultado Promesa', resultadoDeLaPromesa);
        // resto del codigo 
    } catch(error) {
        console.log(error);
        console.log('todo falló, llama a soporte al 5529891132');
    }
    
};

funcionConContextoAsincrono();

*/

