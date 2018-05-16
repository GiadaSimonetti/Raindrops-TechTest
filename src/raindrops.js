class Raindrops {

  plingPlangPlong(n){
    let string = '';
    if( n % 3 === 0 ) string += 'Pling';
    if( n % 5 === 0 ) string += 'Plang';
    if( n % 7 === 0 ) string += 'Plong';
    return string || n;
  }
}
