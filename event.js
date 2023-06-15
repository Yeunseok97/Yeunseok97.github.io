function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if(valueDate > 0){
      valueDate--;
    }
  } else if (keyCode === RIGHT_ARROW) {
    if(valueDate < 11){
      valueDate++;
    }
  }
}
