# Chỉ định image nền
FROM node:20

# Thiết lập thư mục làm việc bên trong container
WORKDIR /app

# Copy file package.json và package-lock.json để cài đặt dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ mã nguồn ứng dụng vào container
COPY . .

# Xây dựng ứng dụng Angular
# RUN npm run build

# Mở cổng 80 để truy cập ứng dụng
EXPOSE 4200

# Chạy ứng dụng khi container khởi động
CMD [ "ng", "serve", "--host", "0.0.0.0"]