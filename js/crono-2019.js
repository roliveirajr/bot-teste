var parallax = function () {
    var $fwindow = $(window);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    var $contents = [];
    var $backgrounds = [];

    $('[data-type="content"]').each(function (index, e) {
        var $contentObj = $(this);

        $contentObj.__speed = ($contentObj.data('speed') || 1);
        $contentObj.__fgOffset = $contentObj.offset().top;
        $contents.push($contentObj);
    });

    $('[data-type="background"]').each(function () {
        var $backgroundObj = $(this);

        $backgroundObj.__speed = ($backgroundObj.data('speed') || 1);
        $backgroundObj.__fgOffset = $backgroundObj.offset().top;
        $backgrounds.push($backgroundObj);
    });

    $fwindow.on('scroll resize', function () {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        $contents.forEach(function ($contentObj) {
            var yPos = $contentObj.__fgOffset - scrollTop / $contentObj.__speed - 33;

            $contentObj.css('top', yPos);
        })

        $backgrounds.forEach(function ($backgroundObj) {
            var yPos = -((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

            $backgroundObj.css({
                backgroundPositionY: yPos + 'px'
            });
        });
    });

    $fwindow.trigger('scroll');
};

var clickFaq = function() {
    $('.faq li').on('click', function(){
        $(this).toggleClass('active-faq');
    });
}


$(document).ready(function(){
    clickFaq();
    $("html, body").animate({ scrollTop: 0 });

});

$(window).load(function(){
    setTimeout(function(){
        parallax();
    },500)
    $('html').fadeIn('slow');
});