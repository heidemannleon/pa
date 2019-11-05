  
// Funktsioonid

// Funktsioon, mis arvutab 
// riistküliku pindala
// ja väljastab ekraani

function riistkylikuPindala(pikkus, laius){
    // väljastame väärtused
    console.log('Pikkus = ' + pikkus);
    console.log('Laius = ' + laius);
    // arvutame pindala
    let pindala = pikkus * laius;
    // väljastame pindala
    console.log('Pindala = ' + pindala);
  }
  
  riistkylikuPindala(15, 5);