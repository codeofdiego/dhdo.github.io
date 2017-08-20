$(function() {
	console.log('scrollify')
	$.scrollify({
        section : "section",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: false,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });

	$(".scroll-btn-home").click(function(e) {
        e.preventDefault();

        $.scrollify.move('#home');
    });
    
    $(".scroll-btn-projects").click(function(e) {
        e.preventDefault();

        $.scrollify.move('#projects');
    });
    
    $(".scroll-btn-blog").click(function(e) {
        e.preventDefault();

        $.scrollify.move('#blog');
    });
    
    $(".scroll-btn-contact").click(function(e) {
		e.preventDefault();

		$.scrollify.move('#contact');
	});

	
});
