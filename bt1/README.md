

1. Mục tiêu
Cơ chế hàng đợi FIFO (First In First Out): Đảm bảo xe đến trước được sạc trước bằng cách xử lý phần tử ở vị trí chỉ số `0` thay vì phần tử cuối mảng.
Xử lý lỗi truy cập ngoài phạm vi chỉ số mảng (Index Out of Bounds): Sửa điều kiện lặp để tránh truy cập `undefined` gây kết quả tính toán `NaN`.
Ràng buộc kĩ thuật: Thực hiện hoàn toàn bằng cú pháp và vòng lặp cơ bản, không sử dụng các phương thức/hàm mảng có sẵn(như `.shift()`, `.pop()`,...).

---

2. Phân Tích Lỗi Kỹ Thuật & Nguyên Nhân

Lỗi 1: Sai quy tắc điều phối hàng đợi (FIFO vs LIFO)
Hiện trạng: Mã nguồn ban đầu dùng `waitingQueue.pop()`.
Nguyên nhân: Hàm `.pop()` lấy ra phần tử ở cuối mảng (xe đến sau cùng - LIFO), vi phạm nguyên tắc ưu tiên xe đến trước.
Giải pháp thủ công (Không dùng hàm):
  * Lấy giá trị xe đầu tiên tại chỉ số `0`: `const nextVehicle = waitingQueue[0];`
  * Sử dụng vòng lặp `for` dịch chuyển tất cả phần tử còn lại sang trái 1 vị trí để xóa phần tử đầu tiên.
  * Giảm độ dài mảng (`waitingQueue.length--`).

Lỗi 2: Tràn chỉ số mảng dẫn đến phép toán `NaN`
Hiện trạng:Vòng lặp `for (let i = 0; i <= completedSessionsKwh.length; i++)`.
Nguyên nhân: Mảng có `length` phần tử thì chỉ số hợp lệ chạy từ `0` đến `length - 1`. Điều kiện `i <= length` khiến vòng lặp truy cập phần tử `completedSessionsKwh[length]` có giá trị `undefined`. Phép cộng `totalKwh + undefined` trả về `NaN`.
Giải pháp: Thay đổi điều kiện vòng lặp thành `i < completedSessionsKwh.length`.

---

## 3. Bảng Kiểm Thử (Test Cases)

| STT | Trường hợp kiểm thử | Dữ liệu đầu vào (Input) | Kết quả sai thực tế (Before) | Kết quả đúng mong đợi (After) |
| :---: | :--- | :--- | :--- | :--- |
| TC1 | Kiểm tra quy tắc điều phối hàng đợi (FIFO) | `waitingQueue = ['29A-112.33', '30E-889.12', '51K-678.99']` | Xe được điều phối: `51K-678.99` *(xe đến sau cùng)* | Xe được điều phối: `29A-112.33` *(xe đến đầu tiên)* |
| TC2 | Tính tổng sản lượng & doanh thu ca trực | `completedSessionsKwh = [45.2, 30.5, 62.8, 28.0]` | Tổng sản lượng: `NaN` kWh<br>Tổng doanh thu: `NaN` VNĐ | Tổng sản lượng: `166.5` kWh<br>Tổng doanh thu: `749250` VNĐ |
| TC3 | Kiểm tra biên với Mảng rỗng | `waitingQueue = []`<br>`completedSessionsKwh = []` | Tổng sản lượng: `NaN` kWh<br>Tổng doanh thu: `NaN` VNĐ | Xe được điều phối: `undefined`<br>Tổng sản lượng: `0` kWh<br>Tổng doanh thu: `0` VNĐ |
| TC4 | Kiểm tra biên với Mảng 1 phần tử | `waitingQueue = ['29A-112.33']`<br>`completedSessionsKwh = [45.2]` | Tổng sản lượng: `NaN` kWh<br>Tổng doanh thu: `NaN` VNĐ | Xe được điều phối: `29A-112.33`<br>Tổng sản lượng: `45.2` kWh<br>Tổng doanh thu: `203400` VNĐ |

---

