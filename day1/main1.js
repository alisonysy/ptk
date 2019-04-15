let wrapper = $('.wrapper')[0];
let phCase1 = $('.case');
let prev = window.scrollY;
let originLeft = parseInt($(phCase1).css('left').slice(0, -2));
let maxLeft = 85;

$(document).on('scroll', function (e) {
    let top = wrapper.getBoundingClientRect().top;
    if (top < 400) {
        let scrolling = window.scrollY - prev;
        let left = $(phCase1).css('left').slice(0, -2);
        left = parseInt(left);
        if (left > maxLeft && scrolling>0) {
            let scrollLeft = left - scrolling;
            if (scrollLeft <= maxLeft) {
                scrollLeft = maxLeft;
            }
            $(phCase1).css('left', `${scrollLeft}px`);
        } else if (left <= originLeft && scrolling <0) {
            let scrollRight = left - scrolling;
            if (scrollRight >= originLeft) {
                scrollRight = originLeft;
            }
            $(phCase1).css('left', `${scrollRight}px`);
        }
    }
    prev = window.scrollY;
})