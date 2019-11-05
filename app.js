// Funktsioonid

// arvu paarsuse kontroll
// funktsiooni defineerimine
/* 
function funktsiooniNimi([param1, param2, .., paramN]){
  funktsiooni sisu
}
*/
function paarsuseKontroll(arv){
    // tulemuslause defineerimine
    let lause;
    // arvutame jääk 2-ga jagamisel
    let jaak = arv % 2;
    // kui jaak on võrdne nulliga
    if( jaak === 0 ){
      // tegu on paaris avuga
      lause =  arv + ' on paaris';
    } else {
      // tegu on paaritu arvuga
      lause =  arv + ' on paaritu';
    }
    // tagastame antud väärtus
    return lause;
  }
  // funktsiooni kasutamine
  let paarsus;
  paarsus = paarsuseKontroll(4);
  console.log(paarsus);




  function ristkylikuPindala(pikkus,laius){
      console.log('Pikkus = ' + pikkus)
      console.log('Laius = ' + laius)
      //arvutame pindala
    let pindala = pikkus * laius
    //väljastame pindala
    console.log('Pindala =' + pindala)
  }
  ristkylikuPindala(15, 5)