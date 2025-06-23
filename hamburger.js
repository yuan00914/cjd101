document.addEventListener('DOMContentLoaded', function() {
    // 漢堡菜單功能
    let hamburgerMenu = document.querySelector('.hamburger-menu');
    let mobileNav = document.querySelector('.mobile-nav');

    if (hamburgerMenu && mobileNav) {
        hamburgerMenu.addEventListener('click', function() {
            mobileNav.classList.toggle('open');
        });

        // 點擊菜單外部收合菜單
        document.addEventListener('click', function(event) {
            const isClickInside = mobileNav.contains(event.target) || hamburgerMenu.contains(event.target);
            if (!isClickInside && mobileNav.classList.contains('open')) {
                mobileNav.classList.remove('open');
            }
        });
    }
});