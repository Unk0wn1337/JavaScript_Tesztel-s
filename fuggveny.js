export function parosE(szam){
    let psE =false;
    // Akkor fusson csak le ha a szám értéke egész szám, különben pedig olyannal térjen vissza, hogy nem szám vagy valami hasonló
    if(!Number.isNaN(szam)){
        return "ez nem szám"
    }   
    if(Number.isInteger(szam)){
        if(szam % 2 === 0){
            psE = true;
        }
   
    return psE;
    }
    
}