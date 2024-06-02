// script.js

// 取得所有輪播圖片元素
const carouselImgs = document.querySelectorAll('.carousel-img');

// 設置當前顯示圖片的索引
let currentImgIndex = 0;

// 顯示下一張圖片的函數
function showNextImg() {
    // 隱藏當前顯示的圖片
    carouselImgs[currentImgIndex].style.display = 'none';
    // 將索引移至下一張圖片，如果已經是最後一張，則返回第一張
    currentImgIndex = (currentImgIndex + 1) % carouselImgs.length;
    // 顯示下一張圖片
    carouselImgs[currentImgIndex].style.display = 'block';
}

// 設置自動輪播
setInterval(showNextImg, 3000); // 每3秒自動切換到下一張圖片
