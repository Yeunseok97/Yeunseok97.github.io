let table;
let table2;
let backImage;
let Gangwon;
let Gyunggi;
let Gyeongnam;
let Gyeongbuk;
let Gwangju;
let Daegu;
let Daejeon;
let Busan;
let Seoul;
let Sejong;
let Ulsan;
let Incheon;
let Jeonnam;
let Jeonbuk;
let Jeju;
let Chungnam;
let Chungbuk;
let table_min = 0;
let table_max = 0;
let table_min2 = 0;
let table_max2 = 0;
let valueDate = 0;

function preload() {
  table = loadTable('data/monthly_death_ratio_real_final.csv', 'csv', 'header');
  table2 = loadTable('data/monthly_elderly_ratio_real_final.csv', 'csv', 'header');
  backImage = loadImage('data/SouthKorea_final.png');
  Gangwon = loadImage('data/Gangwon.png');
  Gyunggi = loadImage('data/Gyunggi.png');
  Gyeongnam = loadImage('data/Gyeongnam.png');
  Gyeongbuk = loadImage('data/Gyeongbuk.png');
  Gwangju = loadImage('data/Gwangju.png');
  Daegu = loadImage('data/Daegu.png');
  Daejeon = loadImage('data/Daejeon.png');
  Busan = loadImage('data/Busan.png');
  Seoul = loadImage('data/seoul.png');
  Sejong = loadImage('data/Sejong.png');
  Ulsan = loadImage('data/Ulsan.png');
  Incheon = loadImage('data/Incheon.png');
  Jeonnam = loadImage('data/Jeonnam.png');
  Jeonbuk = loadImage('data/Jeonbuk.png');
  Jeju = loadImage('data/Jeju.png');
  Chungnam = loadImage('data/Chungnam.png');
  Chungbuk = loadImage('data/Chungbuk.png');
}
