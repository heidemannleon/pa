// fUNKTSIOONID
function paarsuseKontroll(){
    // ARVU PAARSUSE KONTROLL
    // Defineerin suvalise täisarvu
    let arv = 5;
    // arvutame jääk 2-ga jagamisel
    let jaak = arv % 2;
    if( jaak === 0 ){
        console.log(arv + 'on paaris')
    }else {
        console.log(arv + 'on paaritu');
    }
}
paarsuseKontroll();