// main.js
$(document).ready(function () {
    // Mobile nav toggle
    $('#nav-toggle').on('click', function () {
        $('.main-nav').toggleClass('open');
    });

    // Back to top button show/hide
    const backToTop = $('#back-to-top');

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200) {
            backToTop.fadeIn(200);
        } else {
            backToTop.fadeOut(200);
        }
    });

    // Back to top smooth scroll
    backToTop.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    // Set current year in footer
    $('#year').text(new Date().getFullYear());

    // Animate skill bars when visible
    function animateSkillBars() {
        $('.skill-bar').each(function () {
            const bar = $(this).find('.skill-bar-inner');
            const value = $(this).data('skill');
            if (isElementInViewport(this) && !bar.data('animated')) {
                bar.css('width', value + '%');
                bar.data('animated', true);
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100
        );
    }

    $(window).on('scroll resize', animateSkillBars);
    animateSkillBars();

    // Contact form (client-side only)
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const subject = $('#subject').val().trim();
        const message = $('#message').val().trim();
        const statusEl = $('#form-status');

        if (!name || !email || !subject || !message) {
            statusEl.text('Please fill all required fields.').css('color', '#f97316');
            return;
        }

        // Fake success message (no backend here)
        statusEl.text('Thank you! Your message has been noted.').css('color', '#22c55e');
        $(this)[0].reset();
    });
});
