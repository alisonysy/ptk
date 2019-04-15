let rows = $('.row');
let height = parseInt($(rows[0]).css('height').slice(0,-2));

$(document).on('scroll',(e)=>{
    for(var row of rows){
        let top = row.getBoundingClientRect().top;
        console.log(top)
        let lf=$(row).find('.itemLf');
        let rt=$(row).find('.itemRt');
        if(top<600 && top>(-height/2)){
            $(lf).css({display:'inline-block',animation:'lfSlidingOut 1.5s linear forwards'});
            $(rt).css({display:'inline-block',animation:'rtSlidingOut 1.5s linear forwards'});
        }else if(top<(-height/2)){
            //$(lf).removeClass('active').addClass('back');
            $(lf).css({animation:'lfSlidingIn 1.5s linear reverse forwards'});
            $(rt).css({animation:'rtSlidingIn 1.5s linear reverse forwards'});
        }else if(top>600){
            $(lf).css({animation:'lfSlidingIn 1.5s linear reverse forwards'});
            $(rt).css({animation:'rtSlidingIn 1.5s linear reverse forwards'});

        }
    
    }
})