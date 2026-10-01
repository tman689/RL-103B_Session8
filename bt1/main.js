const fastChargingRate = 4500;
const waitingQueue = ['29A-112.33', '30E-889.12', '51K-678.99'];

// 1. Lấy xe đầu hàng đợi (chỉ số 0) theo cơ chế FIFO mà không dùng hàm shift()
const nextVehicle = waitingQueue[0];

// Xóa phần tử đầu tiên bằng cách dồn mảng thủ công mà không dùng hàm
for (let i = 0; i < waitingQueue.length - 1; i++) {
  waitingQueue[i] = waitingQueue[i + 1];
}
// Giảm độ dài mảng đi 1 phần tử
waitingQueue.length = waitingQueue.length > 0 ? waitingQueue.length - 1 : 0;

console.log('Xe được điều phối vào sạc:', nextVehicle);

const completedSessionsKwh = [45.2, 30.5, 62.8, 28.0];
let totalKwh = 0;

// 2. Tính tổng kWh: Dùng i < completedSessionsKwh.length để tránh chỉ số ngoài phạm vi (undefined)
for (let i = 0; i < completedSessionsKwh.length; i++) {
  totalKwh += completedSessionsKwh[i];
}

const totalRevenue = totalKwh * fastChargingRate;
console.log('Tổng sản lượng:', totalKwh, 'kWh');
console.log('Tổng doanh thu:', totalRevenue, 'VNĐ');