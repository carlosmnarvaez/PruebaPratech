var initList = initList || [];
initList.push(function(){
	//before
	//midTransition
	//after
	var $tempTab;
	$('#tab-container')
	.bind("easytabs:initialised", function($defaultTabLink, defaultPanel){
		var hash = window.location.hash.match(/^[^\?]*/)[0];
		$tempTab = $(hash.length ? hash : "#tabs1");
	})
	.bind("easytabs:before", function(e, $targetPanel, settings){
		sg.resetDraggable( $tempTab.find("[data-sg-draggable]") );
		$tempTab = settings;
	}).easytabs();
	$(".tab").click(function(e) {
        sg.sound('success-low');
    });
});

initList.push(function () {
    //before
    //midTransition
    //after
    var $tempTab;
    $('#tab-container2')
	.bind("easytabs:initialised", function ($defaultTabLink, defaultPanel) {
	    var hash = window.location.hash.match(/^[^\?]*/)[0];
	    $tempTab = $(hash.length ? hash : "#tabs1");
	})
	.bind("easytabs:before", function (e, $targetPanel, settings) {
	    sg.resetDraggable($tempTab.find("[data-sg-draggable]"));
	    $tempTab = settings;
	}).easytabs();
    $(".tab").click(function (e) {
        sg.sound('success-low');
    });
});

initList.push(function () {
    //before
    //midTransition
    //after
    var $tempTab;
    $('#tab-container3')
	.bind("easytabs:initialised", function ($defaultTabLink, defaultPanel) {
	    var hash = window.location.hash.match(/^[^\?]*/)[0];
	    $tempTab = $(hash.length ? hash : "#tabs1");
	})
	.bind("easytabs:before", function (e, $targetPanel, settings) {
	    sg.resetDraggable($tempTab.find("[data-sg-draggable]"));
	    $tempTab = settings;
	}).easytabs();
    $(".tab").click(function (e) {
        sg.sound('success-low');
    });
});

initList.push(function () {
    //before
    //midTransition
    //after
    var $tempTab;
    $('#tab-container4')
	.bind("easytabs:initialised", function ($defaultTabLink, defaultPanel) {
	    var hash = window.location.hash.match(/^[^\?]*/)[0];
	    $tempTab = $(hash.length ? hash : "#tabs1");
	})
	.bind("easytabs:before", function (e, $targetPanel, settings) {
	    sg.resetDraggable($tempTab.find("[data-sg-draggable]"));
	    $tempTab = settings;
	}).easytabs();
    $(".tab").click(function (e) {
        sg.sound('success-low');
    });
});

initList.push(function () {
    //before
    //midTransition
    //after
    var $tempTab;
    $('#tab-container5')
	.bind("easytabs:initialised", function ($defaultTabLink, defaultPanel) {
	    var hash = window.location.hash.match(/^[^\?]*/)[0];
	    $tempTab = $(hash.length ? hash : "#tabs1");
	})
	.bind("easytabs:before", function (e, $targetPanel, settings) {
	    sg.resetDraggable($tempTab.find("[data-sg-draggable]"));
	    $tempTab = settings;
	}).easytabs();
    $(".tab").click(function (e) {
        sg.sound('success-low');
    });
});