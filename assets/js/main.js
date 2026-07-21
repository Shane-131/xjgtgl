/**
 * 新疆高铁国际旅行社 - 全局脚本
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 导航栏滚动效果：透明 → 毛玻璃，文字白 → 深色
  // ==========================================
  const nav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const menuLine1 = document.getElementById('menuLine1');
  const menuLine2 = document.getElementById('menuLine2');
  const navLoginBtn = document.getElementById('navLoginBtn');

  if (nav) {
    const onScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled) {
        nav.classList.add('nav-glass');
        navLinks.forEach(link => {
          link.classList.remove('text-white', 'text-white/70', 'hover:text-white');
          if (link.dataset.active === 'true') {
            link.classList.add('text-brand-teal');
          } else {
            link.classList.add('text-brand-ink/70', 'hover:text-brand-teal');
          }
        });
        if (menuLine1) { menuLine1.classList.remove('bg-white'); menuLine1.classList.add('bg-brand-ink'); }
        if (menuLine2) { menuLine2.classList.remove('bg-white'); menuLine2.classList.add('bg-brand-ink'); }
        if (navLoginBtn) { navLoginBtn.classList.remove('!bg-white', '!text-brand-ink', 'hover:!bg-white/90'); navLoginBtn.classList.add('!bg-brand-teal', '!text-white'); }
      } else {
        nav.classList.remove('nav-glass');
        navLinks.forEach(link => {
          link.classList.remove('text-brand-teal', 'text-brand-ink/70');
          if (link.dataset.active === 'true') {
            link.classList.add('text-white');
          } else {
            link.classList.add('text-white/70');
            link.classList.add('hover:text-white');
          }
        });
        if (menuLine1) { menuLine1.classList.remove('bg-brand-ink'); menuLine1.classList.add('bg-white'); }
        if (menuLine2) { menuLine2.classList.remove('bg-brand-ink'); menuLine2.classList.add('bg-white'); }
        if (navLoginBtn) { navLoginBtn.classList.add('!bg-white', '!text-brand-ink', 'hover:!bg-white/90'); navLoginBtn.classList.remove('!bg-brand-teal', '!text-white'); }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ==========================================
  // 移动端菜单切换
  // ==========================================
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }

  // ==========================================
  // Scroll Reveal：元素滚动到视口时添加 .visible
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // 只触发一次
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );
    revealElements.forEach((el) => observer.observe(el));
  }
});
