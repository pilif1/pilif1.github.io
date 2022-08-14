var data = new Date();
var rok = new Date(2023, 7, 14)
var roznica1 = rok.getTime() - data.getTime();
var dni1 = Math.floor(roznica1 / (1000 * 60 * 60 * 24)+1);


var delayscript = function(){
git = 10
let x = 1
let i = 0
do{
    let podana = prompt(`Jak bardzo mnie kochasz (1-10)`)
    if (podana >=git) {
        alert(`masz szczescie, ja ciebie tez kotus \nzgadlas za ${x} razem`)
        break
    } else if (podana == 9) {
        alert(`juz prawie `)
        x++
    }
    else if (podana == 8) {
        alert(`jeszcze troche `)
        x++
    }
    else if (podana == 7) {
        alert(`wiecej `)
        x++
    }
    else if (podana == 6) {
        alert(`zle`)
        x++
    }
    else if (podana == 5) {
        alert(`jeszcze raz`)
        x++
    }
    else if (podana == 4) {
        alert(`zla odpowiedz`)
        x++
    }
    else if (podana == 3) {
        alert(`mhm`)
        x++
    }
    else if (podana == 2) {
        alert(`aha`)
        x++
    }
    else if (podana <= 1) {
        alert(`lepiej sie popraw`)
        x++
    }
    i++
}while(i > 0)
};
setTimeout(delayscript, 2501);


var delayscript = function(){
    alert("UWAGA")
};
setTimeout(delayscript, 2500);

