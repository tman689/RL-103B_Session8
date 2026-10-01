const hangDoiXeCho = ['30A-98765', '29B-12345', '51C-45678'];

// 1. Lấy xe đầu tiên ra sạc theo quy tắc FIFO (không dùng hàm shift/pop)
const xeVaoSac = hangDoiXeCho[0];

// Dồn các phần tử còn lại lên phía trước 1 vị trí
for (let i = 0; i < hangDoiXeCho.length - 1; i++) {
  hangDoiXeCho[i] = hangDoiXeCho[i + 1];
}

// Giảm độ dài mảng đi 1
if (hangDoiXeCho.length > 0) {
  hangDoiXeCho.length = hangDoiXeCho.length - 1;
}

console.log('Xe được điều phối vào sạc:', xeVaoSac);

// 2. Thêm xe mới vào cuối hàng đợi (không dùng hàm push)
hangDoiXeCho[hangDoiXeCho.length] = '43D-88888';

// 3. Hiển thị danh sách xe trên bảng LED: Sửa điều kiện 'i <= length' thành 'i < length' để tránh undefined
for (let i = 0; i < hangDoiXeCho.length; i++) {
  console.log(`STT ${i + 1}: ${hangDoiXeCho[i]}`);
}