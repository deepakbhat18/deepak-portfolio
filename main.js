
$(document).ready(function () {
 
    $('#nav-toggle').on('click', function () {
        $('.main-nav').toggleClass('open');
    });

    const backToTop = $('#back-to-top');

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200) {
            backToTop.fadeIn(200);
        } else {
            backToTop.fadeOut(200);
        }
    });


    backToTop.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });


    $('#year').text(new Date().getFullYear());

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

      
        statusEl.text('Thank you! Your message has been noted.').css('color', '#22c55e');
        $(this)[0].reset();
    });
});
