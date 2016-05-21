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

	// $(".scroll,.scroll-btn").click(function(e) {
	// 	e.preventDefault();

	// 	$.scrollify.next();
	// });

	
});
