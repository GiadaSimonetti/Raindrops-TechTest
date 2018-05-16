class Raindrops {

  plingPlangPlong(n){
    let string = '';
    if (!( n % 3 )) string += 'Pling';
    if (!( n % 5 )) string += 'Plang';
    if (!( n % 7 )) string += 'Plong';
    return string || n;
  }
}
