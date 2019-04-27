

//find active button's id;
let logos = $('.media-logos > div');
console.log(logos.length);

//determine whether 1 line or multiple;
if(logos.length>7){ //multiple lines
    let logoNum = logos.length - 1;
    //determine how many grid-rows;
    let gridRowNum = Math.ceil(logoNum/6);
    //determine how many logos each side has;
    let leftNum, rightNum;
    if(logoNum%2){
        leftNum = Math.ceil(logoNum/2);
    }else{
        leftNum = logoNum/2;
    }
    rightNum = logoNum - leftNum;

    //determine how many columns;
    console.log(leftNum)
}


let activeLogo = $('.media-logos > div.active');
let activeLogoId = activeLogo.attr('id');
let clickedLogoId;
let logoNextActive;

// get clicked btn-id
logos.on('click',(e)=>{
    let clickedLogo = e.currentTarget;
    clickedLogoId= $(clickedLogo).attr('id');  
    //find correspondent id in grid-wrapper;
    for(i=0;i<logos.length;i++){
        let eachId = $(logos[i]).attr('id');
        if(eachId === clickedLogoId){
            logoNextActive = logos.eq(i);
            let curGridArea = logoNextActive.css('grid-area').substring(0,6).trim();
            activeLogo.css('grid-area',curGridArea);
            logoNextActive.addClass('active').siblings().removeClass('active');
            logoNextActive.css('grid-area','active-item');
            activeLogo = logoNextActive;
        }
    }
})

