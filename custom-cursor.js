(function($) {
    'use strict';

    $(document).ready(function() {
        const cursorTrail = document.querySelector('.tm_cursor-trail');
        const cursorDot = document.querySelector('.tm_cursor-dot');
        const cursorDisk = document.querySelector('.tm_cursor-disk');

        let trailX = 0;
        let trailY = 0;
        let dotX = 0;
        let dotY = 0;
        const smoothingFactor = 0.4;

        function updateCursor(e) {
            dotX = e.clientX;
            dotY = e.clientY;

            cursorDot.style.left = dotX + 'px';
            cursorDot.style.top = dotY + 'px';

            cursorDisk.style.left = dotX + 'px';
            cursorDisk.style.top = dotY + 'px';
        }

        function animateTrail() {
            trailX += (dotX - trailX) * smoothingFactor;
            trailY += (dotY - trailY) * smoothingFactor;

            cursorTrail.style.left = trailX + 'px';
            cursorTrail.style.top = trailY + 'px';

            requestAnimationFrame(animateTrail);
        }

        // Handle hover states with namespaced classes
        $(document).on('mouseover', 'a, button, .elementor-button, .elementor-widget-button a, input[type="submit"], .menu-item a', function() {
            cursorDisk.classList.add('tm_active');
            cursorTrail.classList.add('tm_hide');
            cursorDot.classList.add('tm_hide');
        });
        $(document).on('mouseout', 'a, button, .elementor-button, .elementor-widget-button a, input[type="submit"], .menu-item a', function() {
            cursorDisk.classList.remove('tm_active');
            cursorTrail.classList.remove('tm_hide');
            cursorDot.classList.remove('tm_hide');
        });

        document.addEventListener('mousemove', updateCursor);
        animateTrail();
    });
})(jQuery);
