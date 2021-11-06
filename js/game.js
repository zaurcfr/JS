$(() => {
    let game = $("#game")
    let width = $(window).width();
    let height = $(window).height();
    game    
        .css({
            width: "800px",
            height: "600px",
            background: "#FFF",
            position: "relative"
        })
    
       
    for(let i = 0; i < 6; i++) {
        for(let j = 0; j < 8; j++) {
            let id = "p" + i + j;
            game.append(`<div id="${id}"></div>`)
            $("#" + id)
                .css({
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    background: `url("img/6.jpg") ${-100 * j}px ${-100 * i}px`,
                    transform: `rotate(${rand(-20, 20)}deg)`,
                    boxShadow: "0 0 5px #000",
                    left: rand(850, width - 150) + "px",
                    top: rand(0, height - 150) + "px"
                })
                .draggable({
                    cursor: "move",
                    cursorAt: {top: 50, left: 50},
                    zIndex: 10,
                    snap: true,
                    drag: function() {
                        $(this).css({
                            transform: "rotate(0deg)"
                        })
                    },
                    stop: function() {
                        $(this)
                            .css({
                                left: Math.round($(this).position().left / 100) * 100,
                                top: Math.round($(this).position().top / 100) * 100
                            })
                    }
                })
        }
    }
    

    function rand(min, max) {
        return Math.round(Math.random() * (max - min) ) + min;
      }

})