
const ComprarCasco = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Comprar casco")
        }, 1000)
    })
}

const ComprarGuantes = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Comprar Guantes")
        }, 2000)
    })
}

const irDePaseo = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Ir de paseo")
        }, 8000)
    })
}

const pasearEnBici = async () => {

    const casco = await ComprarCasco();
    const guantes = await ComprarGuantes();
    const paseo = await irDePaseo();
    return ([casco, guantes, paseo]);
}

pasearEnBici().then(res => console.log(res));