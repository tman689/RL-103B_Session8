let hangDoi = ['30A-111', '29B-222', '51C-333'];
console.log("Ban đầu:", hangDoi);

hangDoi.push('43D-444');
console.log("Sau khi thêm xe 43D-444 (push):", hangDoi);

hangDoi.splice(1, 0, '14A-999');
console.log("Sau khi chèn xe ưu tiên 14A-999 (splice):", hangDoi);

let xeDangSac = hangDoi.shift();
console.log("Xe vào sạc:", xeDangSac);
console.log("Hàng đợi sau khi xe vào sạc:", hangDoi);

console.log("Có xe 29B-222 không?:", hangDoi.includes('29B-222'));
console.log("Vị trí xe 51C-333:", hangDoi.indexOf('51C-333'));

let mangKwh = [30, 45, 25];
let donGia = 4500;

let tongDoanhThu = 0;

for (let i = 0; i < mangKwh.length; i++) {
    tongDoanhThu = tongDoanhThu + mangKwh[i] * donGia;
}

console.log("Tổng doanh thu ca trực:", tongDoanhThu, "VNĐ");