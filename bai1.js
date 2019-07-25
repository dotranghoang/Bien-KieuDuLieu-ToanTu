let ly;
let Hoa;
let Sinh;
 ly=parseFloat(prompt("Nhap diem Vat Ly"));
 Hoa=parseFloat(prompt("Nhap diem Hoa Hoc"));
 Sinh=parseFloat(prompt("Nhap Diem Sinh Hoc "));
let DTB=(ly+Hoa+Sinh)/3;
let Tong=ly+Hoa+Sinh;
document.write("Diem Trung Binh 3 Mon La: " + DTB );
document.write("<br/>");
document.write("Tong Diem 3 Mon La: "+ Tong );

