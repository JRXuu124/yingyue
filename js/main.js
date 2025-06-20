document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // 滚动时头部样式变化
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo img');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 产品筛选功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    if (filterButtons.length && productCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的active类
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // 为当前点击的按钮添加active类
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                productCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // 快速查看模态框
    const quickViewButtons = document.querySelectorAll('.quick-view');
    const quickViewModal = document.querySelector('.quick-view-modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (quickViewButtons.length && quickViewModal && closeModal) {
        quickViewButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const productId = this.getAttribute('data-id');
                
                // 这里应该根据productId从数据库获取产品信息
                // 现在只是模拟数据
                const productData = {
                    name: '花岗岩荒料',
                    type: '花岗岩',
                    origin: '广西贺州',
                    spec: '可根据需求定制',
                    features: '硬度高、耐腐蚀、纹理美观',
                    application: '建筑外墙、地面铺装、台面等'
                };
                
                // 填充模态框内容
                quickViewModal.querySelector('h3').textContent = productData.name;
                quickViewModal.querySelector('.product-type').textContent = productData.type;
                quickViewModal.querySelector('.product-origin').textContent = productData.origin;
                quickViewModal.querySelector('.product-spec').textContent = productData.spec;
                quickViewModal.querySelector('.product-features').textContent = productData.features;
                quickViewModal.querySelector('.product-application').textContent = productData.application;
                
                // 显示模态框
                quickViewModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeModal.addEventListener('click', function() {
            quickViewModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // 点击模态框外部关闭
        quickViewModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // 视频模态框
    const videoCards = document.querySelectorAll('.video-card');
    const videoModal = document.querySelector('.video-modal');
    const closeVideoModal = document.querySelector('.close-video-modal');
    
    if (videoCards.length && videoModal && closeVideoModal) {
        videoCards.forEach(card => {
            card.addEventListener('click', function() {
                const videoTitle = this.querySelector('h3').textContent;
                let videoUrl = '';
                
                // 根据标题设置不同的视频URL
                if (videoTitle.includes('花岗岩')) {
                    videoUrl = 'https://www.youtube.com/embed/示例视频ID1';
                } else if (videoTitle.includes('大理石')) {
                    videoUrl = 'https://www.youtube.com/embed/示例视频ID2';
                } else {
                    videoUrl = 'https://www.youtube.com/embed/示例视频ID3';
                }
                
                videoModal.querySelector('iframe').src = videoUrl;
                videoModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeVideoModal.addEventListener('click', function() {
            videoModal.querySelector('iframe').src = '';
            videoModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // 点击模态框外部关闭
        videoModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.querySelector('iframe').src = '';
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // 联系表单提交
    const contactForm = document.getElementById('contactForm');
    const successModal = document.querySelector('.success-modal');
    const closeSuccessModal = document.querySelector('.close-modal-btn');
    
    if (contactForm && successModal && closeSuccessModal) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 这里应该是发送表单数据的AJAX请求
            // 现在只是模拟成功提交
            contactForm.reset();
            successModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeSuccessModal.addEventListener('click', function() {
            successModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // 点击模态框外部关闭
        successModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // 平滑滚动
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 如果是移动端，关闭菜单
                if (window.innerWidth <= 768) {
                    nav.classList.remove('active');
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                }
            }
        });
    });
});