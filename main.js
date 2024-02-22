import { parosE } from "./fuggveny.js";


function main(){
    parosE(5);
    // tesztelési esetek
    // 1. teszteset szam = 0
    // 2. teszteset szam = 4 ekvivalencia osztály, azon értékek halmza, amely azonos teszteseteketet jelentek mivel a függvényen ugyanúgy fog viselni az összes elemére
    // 3. teszteset szam = 5
    // 4. teszteset szam = -4
    // 5. teszteset szam = -5
    // 6. teszteset szam = 2.5
    // 7. teszteset szam = integer.felsőhatár
    // 8. teszteset szam = integer.Alsóhatár
    // 9. teszteset szam = String(betű)
    console.log(`1. szam = 0 |vart: true|kapott${parosE(0)} | ${true == parosE(0)}? Jó : Hibás `)
    console.log(`2. szam = 4 |vart: true|kapott${parosE(4)} | ${true == parosE(4)}? Jó : Hibás `)
    console.log(`3. szam = 5 |vart: true|kapott${parosE(5)} | ${true == parosE(5)}? Jó : Hibás `)
    console.log(`4. szam = -4 |vart: true|kapott${parosE(-4)} | ${true == parosE(-4)}? Jó : Hibás `)
    console.log(`5. szam = -5 |vart: true|kapott${parosE(-5)} | ${true == parosE(-5)}? Jó : Hibás `)
    console.log(`6. szam = 2.5 |vart: true|kapott${parosE(2.5)} | ${true == parosE(2.5)}? Jó : Hibás `)
    console.log(`7. szam = sok |vart: true|kapott${parosE(Number.MAX_VALUE)} | ${true == parosE(Number.MAX_VALUE)}? Jó : Hibás `)
    console.log(`8. szam = nagyon sok |vart: true|kapott${parosE(Number.MIN_VALUE)} | ${true == parosE(Number.MIN_VALUE)}? Jó : Hibás `)
    console.log(`8. szam = nagyon sok |vart: true| kapott${parosE("7")} | ${true == parosE("7")}? Jó : Hibás `)
    
    // console.log(`5. teszteset: szam = -5 |várteredmény = false`);
    // console.log(parosE(-5))
    // console.log(`6. teszteset: szam = 2.5 |várteredmény = false`);
    // console.log(parosE(2.5))
    // console.log(`7. teszteset: szam = MAX_VAULE |várteredmény = true`);
    // console.log(parosE(Number.MAX_VALUE))
    // console.log(`8. teszteset: szam = MAX_VAULE |várteredmény = false`);
    // console.log(parosE(Number.MIN_VALUE))
    // console.log(`8. teszteset: szam = "7" |várteredmény = false`);
    // console.log(parosE("7"));

}
main();