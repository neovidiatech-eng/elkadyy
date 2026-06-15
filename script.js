document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu & Sidebar Toggle
    const menuToggle = document.getElementById("menuToggle");
    const menuClose = document.getElementById("menuClose");
    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

    if (menuToggle && sidebar && sidebarOverlay) {
        menuToggle.addEventListener("click", () => {
            sidebar.classList.add("active");
            sidebarOverlay.classList.add("active");
        });
    }

    if (menuClose && sidebar && sidebarOverlay) {
        menuClose.addEventListener("click", () => {
            sidebar.classList.remove("active");
            sidebarOverlay.classList.remove("active");
        });
    }

    if (sidebarOverlay && sidebar) {
        sidebarOverlay.addEventListener("click", () => {
            sidebar.classList.remove("active");
            sidebarOverlay.classList.remove("active");
        });
    }

    // Scroll Reveal (.fade-in)
    const fadeElements = document.querySelectorAll(".fade-in");
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 50; // Show slightly before it reaches the bottom
        
        fadeElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger on load to show elements already in view

    // Header Scroll Effect (.scrolled)
    const header = document.querySelector(".main-header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // Floating Contact Action Button (FAB)
    const fabToggle = document.getElementById("fabToggle");
    const fabWrapper = document.getElementById("fabWrapper");
    
    if (fabToggle && fabWrapper) {
        fabToggle.addEventListener("click", () => {
            fabWrapper.classList.toggle("open");
            const icon = fabToggle.querySelector("i");
            if (icon) {
                if (fabWrapper.classList.contains("open")) {
                    icon.classList.remove("fa-plus");
                    icon.classList.add("fa-times");
                } else {
                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-plus");
                }
            }
        });
    }
    // Sidebar Dropdown Toggle
    const sidebarDropdownToggles = document.querySelectorAll(".sidebar-dropdown-toggle");
    sidebarDropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            const parent = toggle.parentElement;
            const submenu = parent.querySelector(".sidebar-submenu");
            
            parent.classList.toggle("active");
            if (submenu) {
                submenu.classList.toggle("active");
            }
        });
    });

    // Improved Draggable Infinite Slider
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {
        const track = slider.querySelector(".slider-track");
        const nextBtn = slider.querySelector(".slider-arrow.next");
        const prevBtn = slider.querySelector(".slider-arrow.prev");

        if (track && nextBtn && prevBtn) {
            let isDragging = false;
            let startPos = 0;
            let currentTranslate = 0;
            let prevTranslate = 0;
            let animationID = 0;
            let currentIndex = 0;
            let isTransitioning = false;

            // Clone slides for infinite effect if not enough
            const slides = Array.from(track.querySelectorAll(".slide"));
            if (slides.length > 0 && slides.length < 12) {
                slides.forEach(slide => track.appendChild(slide.cloneNode(true)));
                slides.forEach(slide => track.appendChild(slide.cloneNode(true)));
            }

            // Move Next
            const moveNext = () => {
                if (isTransitioning) return;
                isTransitioning = true;
                
                const slide = track.firstElementChild;
                const style = window.getComputedStyle(slide);
                const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
                const slideWidth = slide.offsetWidth + margin;
                
                track.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
                track.style.transform = `translateX(-${slideWidth}px)`;

                const finalize = () => {
                    track.style.transition = "none";
                    track.appendChild(track.firstElementChild);
                    track.style.transform = "translateX(0)";
                    isTransitioning = false;
                };

                track.addEventListener("transitionend", finalize, { once: true });
                setTimeout(() => { if (isTransitioning) finalize(); }, 700);
            };

            // Move Prev
            const movePrev = () => {
                if (isTransitioning) return;
                isTransitioning = true;

                const slide = track.lastElementChild;
                const style = window.getComputedStyle(slide);
                const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
                const slideWidth = slide.offsetWidth + margin;

                track.style.transition = "none";
                track.prepend(track.lastElementChild);
                track.style.transform = `translateX(-${slideWidth}px)`;

                track.offsetHeight; // force reflow

                track.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
                track.style.transform = "translateX(0)";

                const finalize = () => {
                    isTransitioning = false;
                };

                track.addEventListener("transitionend", finalize, { once: true });
                setTimeout(() => { if (isTransitioning) finalize(); }, 700);
            };

            // Dragging Logic
            const touchStart = (index) => {
                return (event) => {
                    isDragging = true;
                    startPos = getPositionX(event);
                    animationID = requestAnimationFrame(animation);
                    slider.classList.add('grabbing');
                    clearInterval(autoPlayInterval);
                };
            };

            const touchMove = (event) => {
                if (isDragging) {
                    const currentPosition = getPositionX(event);
                    currentTranslate = prevTranslate + currentPosition - startPos;
                }
            };

            const touchEnd = () => {
                isDragging = false;
                cancelAnimationFrame(animationID);
                slider.classList.remove('grabbing');

                const movedBy = currentTranslate - prevTranslate;

                if (movedBy < -100) moveNext();
                else if (movedBy > 100) movePrev();
                
                currentTranslate = 0;
                prevTranslate = 0;
                track.style.transform = `translateX(0)`;
                
                startAutoPlay();
            };

            const getPositionX = (event) => {
                return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
            };

            const animation = () => {
                setSliderPosition();
                if (isDragging) requestAnimationFrame(animation);
            };

            const setSliderPosition = () => {
                track.style.transform = `translateX(${currentTranslate}px)`;
            };

            // Event Listeners
            track.addEventListener('mousedown', touchStart());
            track.addEventListener('touchstart', touchStart());
            track.addEventListener('mouseup', touchEnd);
            track.addEventListener('mouseleave', touchEnd);
            track.addEventListener('touchend', touchEnd);
            track.addEventListener('mousemove', touchMove);
            track.addEventListener('touchmove', touchMove);

            // Button Click Listeners
            nextBtn.addEventListener("click", (e) => {
                e.preventDefault();
                moveNext();
                resetAutoPlay();
            });
            prevBtn.addEventListener("click", (e) => {
                e.preventDefault();
                movePrev();
                resetAutoPlay();
            });

            // Auto-play
            let autoPlayInterval;
            const startAutoPlay = () => {
                clearInterval(autoPlayInterval);
                autoPlayInterval = setInterval(moveNext, 4000);
            };
            const resetAutoPlay = () => {
                startAutoPlay();
            };

            startAutoPlay();

            slider.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
            slider.addEventListener('mouseleave', () => startAutoPlay());
        }
    });
    // Auto-scrolling reviews slider
    const autoTrack = document.getElementById('auto-reviews-track');
    if (autoTrack) {
        let isTransitioning = false;
        
        setInterval(() => {
            if (isTransitioning) return;
            isTransitioning = true;
            
            const firstSlide = autoTrack.firstElementChild;
            const trackStyles = window.getComputedStyle(autoTrack);
            const gapValue = parseFloat(trackStyles.columnGap || trackStyles.gap || '0') || 0;
            const slideWidth = firstSlide.getBoundingClientRect().width + gapValue;
            
            autoTrack.style.transition = 'transform 0.5s ease-in-out';
            autoTrack.style.transform = `translateX(-${slideWidth}px)`;
            
            const finalize = () => {
                autoTrack.style.transition = 'none';
                autoTrack.appendChild(autoTrack.firstElementChild);
                autoTrack.style.transform = 'translateX(0)';
                isTransitioning = false;
            };
            
            autoTrack.addEventListener('transitionend', finalize, { once: true });
            setTimeout(() => { if (isTransitioning) finalize(); }, 600);
        }, 5000);
    }
});
