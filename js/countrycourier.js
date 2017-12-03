! function ($) {
    $(document).ready(
        function () {

            //-- Search icon
            (function () {

                $(".open-form").click(
                    function () {
                        $(".open-form").hide();
                        $(".close-form").css("display","block");
                        $(".search-block-form").show();
                        $(".search-block-form input").focus();
                        return false;
                    }
                );
                $(".close-form").click(
                    function () {
                        $(".close-form").hide();
                        $(".open-form").css("display","block");
                        $(".search-block-form").hide();
                        return false;
                    }
                );

            })();

            //-- Flexslider
            (function () {

                if (typeof $.fn.flexslider === 'function') {
                    $('.flexslider').flexslider(
                        {
                            direction: "vertical",
                            controlNav: false,
                            directionNav: false
                        }
                    );
                }

            })();

            //-- Parallax
            (function () {
                $(window).scroll(
                    function (e) {
                        var bg = $('.intro');
                        var yPos = -($(window).scrollTop() / bg.data('speed'));
                        var coords = '50% '+ yPos + 'px';
                        bg.css({ backgroundPosition: coords});
                    }
                )
            })();

            //-- Scroll to
            (function () {
                $('#goto-section2').on(
                    'click', function (e) {
                        e.preventDefault()
                        $.scrollTo('#section2', 800, { offset: -220 });
                    }
                );
            })();


        }
    );
}(jQuery);