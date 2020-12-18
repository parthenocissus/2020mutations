$(document).ready(function () {

    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
    });

    $('.scroll-interface').click(function () {
        window.scroll({top: 2000, left: 0, behavior: 'smooth'});
    });

    $(this).scrollTop(0);

    let center = {"x": 311, "y": 437.5};

    let rayParams = [
        {"r1min": 0, "r1max": 0, "r2min": 0, "r2max": 0, "crmin": 0, "crmax": 0, "a": 0}, // 0, begin
        {"r1min": 0, "r1max": 0, "r2min": 70, "r2max": 120, "crmin": 0, "crmax": 0, "a": 0}, // 1
        {"r1min": 20, "r1max": 300, "r2min": 2000, "r2max": 2001, "crmin": 0, "crmax": 0, "a": 0}, // 2
        {"r1min": 2000, "r1max": 2001, "r2min": 2000, "r2max": 2001, "crmin": 0, "crmax": 0, "a": 0}, // 3
        {"r1min": 30, "r1max": 37, "r2min": 60, "r2max": 120, "crmin": 5, "crmax": 20, "a": 0}, // 4
        {"r1min": 80, "r1max": 100, "r2min": 130, "r2max": 200, "crmin": 10, "crmax": 25, "a": 0}, // 5
        {"r1min": 115, "r1max": 130, "r2min": 160, "r2max": 220, "crmin": 10, "crmax": 25, "a": Math.PI / 6}, // 6
        {"r1min": 14, "r1max": 20, "r2min": 30, "r2max": 60, "crmin": 2, "crmax": 4, "a": Math.PI / 3}, // 7
        {"r1min": 360, "r1max": 400, "r2min": 440, "r2max": 500, "crmin": 30, "crmax": 35, "a": Math.PI / 4}, // 8
        {"r1min": 32, "r1max": 37, "r2min": 50, "r2max": 100, "crmin": 3, "crmax": 10, "a": Math.PI / 9}, // 9
        {"r1min": 1100, "r1max": 1101, "r2min": 1300, "r2max": 1301, "crmin": 100, "crmax": 101, "a": Math.PI / 9}, // 10
    ];

    let keys = [
        {
            "key": 0,
            "trig": () => {
                updateSVG("drop-off", false, 0, 37,
                    "o-inside-off", 1, 0, 0, 0, 0,
                    false, 0, 0, 0)
            }
        }, {
            "key": 12,
            "trig": () => {
                updateSVG("drop-on1", false, 1, 37,
                    "o-inside-off", 1, 0, 0, 0, 0,
                    false, 0, 0, 0)
            }
        }, {
            "key": 13,
            "trig": () => {
                updateSVG("drop-on2", false, 1, 37,
                    "o-inside-on1", 0, 0, 0, 0, 0,
                    false, 0, 0, 0)
            }
        }, {
            "key": 15,
            "trig": () => {
                updateSVG("drop-on3", false, 1, 42,
                    "o-inside-on2", 0, 1, 0, 100, 0,
                    false, 0, 0, 0)
            }
        }, {
            "key": 17,
            "trig": () => {
                updateSVG("drop-on3", false, 1, 26,
                    "o-inside-on2", 0, 1, 1, 200, 1,
                    false, 0, 0, 0)
            }
        }, {
            "key": 25,
            "trig": () => {
                updateSVG("drop-on3", false, 1, 40,
                    "o-inside-on2", 0, 1, 2, 760, 1,
                    false, 0, 0, 0)
            }
        }, {
            "key": 33,
            "trig": () => {
                updateSVG("drop-on3", false, 1, 30,
                    "o-inside-on2", 0, 1, 3, 360, 0,
                    false, 0, 0, 0)
            }
        }, {
            "key": 45,
            "trig": () => {
                updateSVG("drop-on3", false, 1, 30,
                    "o-inside-on2", 0, 1, 0, 360, 0,
                    true, 0, 0, 0)
            }
        }, {
            "key": 46,
            "trig": () => {
                updateSVG("drop-on3", true, 1, 30,
                    "o-inside-on2", 0, 0, 0, 50, 1,
                    true, 0, 0, 0)
            }
        }, {
            "key": 50,
            "trig": () => {
                updateSVG("drop-on3", true, 1, 26,
                    "o-inside-on2", 0, 0, 1, 400, 1,
                    true, 400, 1, 0)
            }
        }, {
            "key": 55,
            "trig": () => {
                updateSVG("drop-on3", true, 1, 37,
                    "o-inside-on2", 0, 0, 4, 300, 1,
                    true, 300, 1, 0)
            }
        }, {
            "key": 60,
            "trig": () => {
                updateSVG("drop-on3", true, 1, 100,
                    "o-inside-on2", 0, 0, 5, 200, 1,
                    true, 200, 1, 0)
            }
        }, {
            "key": 65,
            "trig": () => {
                updateSVG("drop-on3", true, 1, 130,
                    "o-inside-on2", 0, 0, 6, 200, 1,
                    true, 200, 1, 0)
            }
        }, {
            "key": 70,
            "trig": () => {
                updateSVG("drop-on3", true, 1, 20,
                    "o-inside-on2", 0, 0, 7, 200, 1,
                    true, 200, 1, 0)
            }
        }, {
            "key": 75,
            "trig": () => {
                updateSVG("drop-on3", true, 1, 400,
                    "o-inside-on2", 0, 0, 8, 200, 1,
                    true, 200, 1, 0)
            }
        }, {
            "key": 80,
            "trig": () => {
                updateSVG("drop-on3", true, 1, 37,
                    "o-inside-on2", 0, 0, 9, 200, 1,
                    true, 200, 1, 0)
            }
        }, {
            "key": 85,
            "trig": () => {
                updateSVG("drop-on3", true, 1, 1000,
                    "o-inside-on2", 0, 0, 10, 200, 1,
                    true, 200, 1, -82)
            }
        }, {
            "key": 90,
            "trig": () => {
                updateSVG("drop-on3", true, 1, 1000,
                    "o-inside-on2", 0, 0, 10, 200, 1,
                    true, 200, 1, -82, true)
            }
        }, {
            "key": 99,
            "trig": () => {
            }
        }
    ];

    let rayData = [], lineCount = 14;

    rayParams.forEach(function (p) {
        let datum = [];
        for (let i = 0; i < lineCount; i++) {
            let alpha = (i * 2 * Math.PI / lineCount) + p.a,
                r1 = randomMinMax(p.r1min, p.r1max),
                r2 = randomMinMax(p.r2min, p.r2max),
                cr = randomMinMax(p.crmin, p.crmax),
                even = (i % 2 === 0);
            datum.push({
                "x1": center.x + r1 * Math.cos(alpha),
                "y1": center.y + r1 * Math.sin(alpha),
                "x2": center.x + r2 * Math.cos(alpha),
                "y2": center.y + r2 * Math.sin(alpha),
                "cx": even ? center.x + r2 * Math.cos(alpha) : -100,
                "cy": even ? center.y + r2 * Math.sin(alpha) : -100,
                "r": even ? cr : 0
            });
        }
        rayData.push(datum);
    });

    let raygroup = d3.select("body").select("#svgtext").append("g");
    let rays = raygroup.selectAll("line")
        .data(rayData[0])
        .enter()
        .append('line')
        .attr('x1', d => d.x1)
        .attr('y1', d => d.y1)
        .attr('x2', d => d.x2)
        .attr('y2', d => d.y2)
        .style('opacity', 0)
        .classed("rayline", true);
    let rayCircles = raygroup.selectAll("circle")
        .data(rayData[0])
        .enter()
        .append('circle')
        .attr('cx', d => d.cx)
        .attr('cy', d => d.cy)
        .attr('r', d => d.r)
        .style('opacity', 0)
        .classed("raycircle", true);

    let updateSVG = function (dropClass, omainPink, omainOp, omainR, oinsideClass,
                              otxtOp, ocenterOp, rayIndex, rayLinesDur, rayLinesOp,
                              rayLinesPink, rayCircDur, rayCircOp, libX, scale = false) {

        $(".scroll-interface").css("opacity", 0);

        $("#drop").removeClass().addClass(dropClass);
        $("#o-inside").removeClass().addClass(oinsideClass);
        $("#o-text").css("opacity", otxtOp);
        $("#o-center").css("opacity", ocenterOp);

        d3.select("#o-main").classed("pinkstroke", omainPink)
            .style("opacity", omainOp)
            .attr("r", omainR);
        d3.select("#lib").transition().duration(1000)
            .ease(d3.easeElastic)
            .attr("transform", "translate(" + libX + ", 0)");
        let t = scale ? "translate(0, -35) scale(0.8)" : "translate(0, 0) scale(1)"
        d3.select("#txt").transition().duration(100)
            .ease(d3.easePolyInOut)
            .attr("transform", t);

        rays.data(rayData[rayIndex])
            .transition().duration(rayLinesDur)
            .ease(d3.easePolyOut)
            .attr('x1', d => d.x1)
            .attr('y1', d => d.y1)
            .attr('x2', d => d.x2)
            .attr('y2', d => d.y2)
            .style('opacity', rayLinesOp)
            .attr('class', rayLinesPink ? "rayline pinkstroke" : "rayline");
        rayCircles.data(rayData[rayIndex])
            .transition().duration(rayCircDur)
            .ease(d3.easePolyOut)
            .attr('cx', d => d.cx)
            .attr('cy', d => d.cy)
            .attr('r', d => d.r)
            .style('opacity', rayCircOp);
    };

    let wholeSVG = d3.select("#whole-svg");
    let updateGSize = function (scroll) {

        let trashold1 = 18, trashold2 = 85,
            xUp = function () {
                return 0;
            },
            scale = function () {
                return 1;
            };

        if (scroll < trashold1) {
            scale = d3.scalePow().exponent(0.5)
                .domain([0, trashold1]).range([0.9, 1]);
        } else if (scroll > trashold2) {
            xUp = d3.scalePow().exponent(2)
                .domain([trashold2, 100]).range([0, -20]);
            scale = d3.scalePow().exponent(0.5)
                .domain([trashold2, 100]).range([1, 0.9]);
        }

        let t = "translate(0," + xUp(scroll) + ") scale(" + scale(scroll) + ")";
        wholeSVG.classed("begin-adjust", false).attr("transform", t);
    };

    function randomMinMax(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    window.addEventListener('scroll', function () {
        requestAnimationFrame(onScroll);
    });

    function getScrollPercent() {
        let h = parseInt($('main').css('height'), 10);
        return 100 * window.scrollY / h;
    }

    function onScroll() {
        let s = getScrollPercent();
        updateGSize(s);
        for (let i = 0; i < keys.length - 1; i++) {
            if ((s >= keys[i].key) && (s < keys[i + 1].key)) {
                keys[i].trig();
            }
        }
    }

    // Facebook

    let fbButton = document.getElementById('fb-share-button');
    let url = window.location.href;

    fbButton.addEventListener('click', function () {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
            'facebook-share-dialog',
            'width=800,height=600'
        );
        return false;
    });

});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
