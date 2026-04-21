/* 重建 Essence Coffee 獨立腳本 */
document.addEventListener('DOMContentLoaded', () => {
    // 滑鼠跟隨
    const cursor = document.getElementById('cursor-follower');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 滾動顯示動畫
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const reveals = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
    reveals.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 1s ease';
        observer.observe(el);
    });

    // 動態修改樣式以配合 IntersectionObserver
    document.body.insertAdjacentHTML('beforeend', `
        <style>
            .reveal-left.active, .reveal-right.active, .reveal-up.active {
                opacity: 1 !important;
                transform: translate(0, 0) !important;
            }
        </style>
    `);
});
