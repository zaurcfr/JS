$(() => {
    let img = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];
    let x = 0;
    $("body").prepend("<div id='slider'></div>");
    

    $("#slider")
        .append("<div id='slide'></div>")    
        .css({
            position: "relative",
            width: "80%",
            height: "50vh",
            margin: "10vh auto",
            background: `url('img/${img[x]}') center/cover`,
            overflow: "hidden"
        })
        .click(function(e) {
            slide(e.pageX > $(window).width() / 2 ? 1 : -1)
        })
    $("#slide")
        .css({
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "yellow",
            left: "100%"
        });
    
    let start = setTimeout(slide, 3000)

    function slide(dir = 1) {
        clearTimeout(start);
        x += dir;
        x = x < 0 ? img.length - 1 :
            x > img.length - 1 ? 0 : x
        $("#slide")
            .css({
                left: dir * 100 + "%",
                background: `url('img/${img[x]}') center/cover`
            })
            .animate({left: 0}, "slow", function() {
                $("#slider").css({background: `url('img/${img[x]}') center/cover`})
            })
        start = setTimeout(slide, 3000);
    }
})