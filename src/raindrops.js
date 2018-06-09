class Raindrops {
  constructor(){
    this.map = [[3, 'Pling'], [5, 'Plang'], [7, 'Plong'], [9, 'Plung']];
  }

  plingPlangPlong(int){
    const string = this.map.reduce((result, [num, subString]) => {
      if (int % num === 0) return result + subString || result },
       '');
    return string || int.toString();
  }
}
