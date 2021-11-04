$(() => {
    let img = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];
    let x = 0;
    $("body").prepend("<div id='slider'></div>");
    let slider = $("#slider")

    slider
        .append("<div id='ribbon'></div>")  
        .append("<div id='thumbs'></div>")  
        .css({
            position: "relative",
            width: "80%",
            height: "50vh",
            margin: "10vh auto",
            boxShadow: "0 0 10px #000",
            overflow: "hidden"
        })
        .click(function(e) {
            slide(e.pageX > $(window).width() / 2 ? 1 : -1)
        })
    $("#ribbon")
        .css({
            position: "absolute",
            height: "100%",
            background: "yellow",
            left: 0,
            display: "flex"
        });

    img.forEach(image => {
        $("#ribbon").append(`<img src="img/${image}" />`)
    })
    
    $("#ribbon>img")
        .css({
            width: slider.width(),
            height: slider.height(),
            objectFit: "cover"
        })
    
    $("#thumbs")
        .css({
            position: "absolute",
            width: "100%",
            bottom: "10px",
            display: "flex",
            justifyContent: "center"
        })

    img.forEach(image => {
        $("#thumbs").append(`<img src="img/${image}" />`)
    })

    $("#thumbs>img")
        .css({
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            border: "1px solid #FFF",
            objectFit: "cover",
            margin: "10px"
        })
        .click(function(e){
            e.stopPropagation();
            x = $(this).index();
            slide(0);
            console.log(x)
        })

    let start = setTimeout(slide, 3000)

    function slide(dir = 1) {
        clearTimeout(start);
        x += dir;
        x = x < 0 ? img.length - 1 :
            x > img.length - 1 ? 0 : x
        $("#ribbon")
            .animate({left: -100 * x + "%"}, "slow")
        start = setTimeout(slide, 3000);
    }
})