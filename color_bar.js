function color_bar(barX, barY, barW){
  for(let i = 0; i < 255; i++){
    stroke(i, 100, 100);
    line(barX, barY+i, barX + barW, barY+i);
  }
  text(table_max, barX+30, barY+5);
  text(table_min, barX+30, barY+254+5);
}

function color_bar2(barX, barY, barW){
  for(let i = 0; i < 255; i++){
    stroke(i, 100, 100);
    line(barX, barY+i, barX + barW, barY+i);
  }
  text(table_max2, barX+30, barY+5);
  text(table_min2, barX+30, barY+254+5);
}
