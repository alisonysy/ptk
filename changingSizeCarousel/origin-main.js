
//find active button's id;
let mediaContainer = $('.media-logos');
let logos = $('.media-logos > div');
let mainColPercent = 28; //in percentage
//find out the active item and inactive items;
let activeLogo = $('.media-logos > div.active');
let inactiveLogos = $('.media-logos > .content-item').not($('.media-logos > .active'));
let logoNum;
//determine whether 1 line or multiple;

if (logos.length > 7) { //multiple lines
    logoNum = logos.length - 1;
    //determine how many grid-rows;
    let gridRowNum = Math.ceil(logoNum / 6);
    let gridRowPercent = 100 / gridRowNum;
    //determine how many logos each side has;
    let leftNum, rightNum;
    if (logoNum % 2) {
        leftNum = Math.ceil(logoNum / 2);
    } else {
        leftNum = logoNum / 2;
    }
    rightNum = logoNum - leftNum;
    //console.log('left: '+leftNum + ', right: '+rightNum)

    //determine how many columns on one side;
    let colNum, colPercent;
    if (leftNum < 5) {
        colNum = 2;
    } else if (leftNum % 3 === 2 || rightNum % 3 === 2) {
        colNum = 6;
    } else {
        colNum = 3;
    }
    colPercent = (100 - mainColPercent) / (2 * colNum);

    //generate grid layout on element;
    mediaContainer.css({
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
        gridTemplateColumns: `repeat(${colNum},${colPercent}%) ${mainColPercent}% repeat(${colNum},${colPercent}%)`,
        gridTemplateRows: `repeat(${gridRowNum},${gridRowPercent}%)`,
    })
    //assign grid-area-name for each item except the active one;
    for (let i = 0; i < inactiveLogos.length; i++) {
        inactiveLogos.eq(i).css({
            gridArea: `item${i}`
        })
    };
    //assign grid-area-name for active item;
    activeLogo.css('grid-area', 'active-item');
    //generate grid-template-areas;
    if (colNum === 2) {
        console.log('cols are: '+colNum)
        if (leftNum === rightNum) {
            mediaContainer.css({
                gridTemplateAreas: `
                "item0 item1 active-item item2 item3"
                "item4 item5 active-item item6 item7"
                `
            })
        } else {
            mediaContainer.css({
                gridTemplateAreas: `
                "item0 item1 active-item item2 item3"
                "item4 item5 active-item item6 item6"
                `
            })
        }
    } else if (colNum === 6) {
        console.log('cols are: '+colNum)
        // 1st part --------- for inactive logo placement 
        //using grid-area: <row-start>/<col-start>/<row-end>/<col-end>;
        //the last two items have a span of 3, otherwise 2;
        let colSpan = 2;
        let nextStartCol;
        //for the left part;
        for (let i = 0; i < leftNum; i++) {
            //determine which row it is on;
            let curRow = parseInt(i / 3);
            //determine which col it's on;
            let curCol = i % 3;
            if (curRow < gridRowNum - 1) {
                let colStart;
                curCol === 0 ? colStart = 1 : colStart = nextStartCol;

                nextStartCol = colStart + colSpan;
                inactiveLogos.eq(i).css({
                    gridArea: `${curRow + 1} / ${colStart} / ${curRow + 2} / ${nextStartCol}`
                })
            } else {
                if (leftNum % 3 === 1) {
                    inactiveLogos.eq(i).css({
                        gridArea: `${curRow + 1} / 1 / ${curRow + 2} / 7`
                    })
                } else if (leftNum % 3 === 2) {
                    let colStart;
                    curCol === 0 ? colStart = 1 : colStart = nextStartCol;

                    nextStartCol = colStart + colSpan + 1;
                    inactiveLogos.eq(i).css({
                        gridArea: `${curRow + 1} / ${colStart} / ${curRow + 2} / ${nextStartCol}`
                    })
                } else {
                    let colStart;
                    curCol === 0 ? colStart = 1 : colStart = nextStartCol;

                    nextStartCol = colStart + colSpan;
                    inactiveLogos.eq(i).css({
                        gridArea: `${curRow + 1} / ${colStart} / ${curRow + 2} / ${nextStartCol}`
                    })
                }
            }
        };
        //for the right part;
        let n=0;            //use another variable to represent the index in the right part;
        for (let i = leftNum; i < leftNum + rightNum; i++) { //i as the index for logos in .media-logos
            //determine which row it is on;
            let curRow = parseInt(n / 3);
            //determine which col it's on;
            let curCol = n % 3;
            if (curRow < gridRowNum - 1) {
                let colStart;
                curCol === 0 ? colStart = 8 : colStart = nextStartCol;

                nextStartCol = colStart + colSpan;
                inactiveLogos.eq(i).css({
                    gridArea: `${curRow + 1} / ${colStart} / ${curRow + 2} / ${nextStartCol}`
                })
            } else {
                if (rightNum % 3 === 1) {
                    inactiveLogos.eq(i).css({
                        gridArea: `${curRow + 1} / 8 / ${curRow + 2} / 14`
                    })
                } else if (leftNum % 3 === 2) {
                    let colStart;
                    curCol === 0 ? colStart = 8 : colStart = nextStartCol;

                    nextStartCol = colStart + colSpan + 1;
                    inactiveLogos.eq(i).css({
                        gridArea: `${curRow + 1} / ${colStart} / ${curRow + 2} / ${nextStartCol}`
                    })
                } else {
                    let colStart;
                    curCol === 0 ? colStart = 8 : colStart = nextStartCol;

                    nextStartCol = colStart + colSpan;
                    inactiveLogos.eq(i).css({
                        gridArea: `${curRow + 1} / ${colStart} / ${curRow + 2} / ${nextStartCol}`
                    })
                }
            }
            n++;
        }
        // 2nd part ---------- for active-item placement;
        activeLogo.css({
            gridArea: `1 / 7 / ${gridRowNum + 1} / 8`
        })
    }else{
        console.log('cols are: '+colNum)
        let colSpan = 1;
        //left part
        for(let i = 0;i<leftNum;i++){
            let curRow = parseInt(i/3);
            let curCol = i%3;
            if(curRow<gridRowNum-1){
                inactiveLogos.eq(i).css({
                    gridArea: `${curRow + 1} / ${curCol+1} / ${curRow + 2} / ${curCol+1+colSpan}`
                })
            }else{
                if(leftNum%3){
                    inactiveLogos.eq(i).css({
                        gridArea: `${curRow + 1} / 1 / ${curRow + 2} / 4`
                    })
                }else{
                    inactiveLogos.eq(i).css({
                        gridArea: `${curRow + 1} / ${curCol+1} / ${curRow + 2} / ${curCol+1+colSpan}`
                    })
                }
            }
        };
        //right part
        let n=0;
        for(let i = leftNum;i<leftNum + rightNum; i++){
            let curRow = parseInt(n/3);
            let curCol = n%3;
            if(curRow<gridRowNum-1){
                inactiveLogos.eq(i).css({
                    gridArea: `${curRow + 1} / ${curCol+5} / ${curRow + 2} / ${curCol+5+colSpan}`
                })
            }else{
                if(leftNum%3){
                    inactiveLogos.eq(i).css({
                        gridArea: `${curRow + 1} / 5 / ${curRow + 2} / 8`
                    })
                }else{
                    inactiveLogos.eq(i).css({
                        gridArea: `${curRow + 1} / ${curCol+5} / ${curRow + 2} / ${curCol+5+colSpan}`
                    })
                }
            }
            n++;
        };
        // 2nd part ---------- for active-item placement;
        activeLogo.css({
            gridArea: `1 / 4 / ${gridRowNum + 1} / 5`
        })
    }
}else{
    logoNum=logos.length-1;
    if(logos.length%2){
        mainColPercent = 35;
        let leftNum,rightNum,colNum,colPercent;
        leftNum = logoNum/2;
        rightNum = logoNum - leftNum;
        colNum = leftNum;
        colPercent = (100 - mainColPercent) / (2*colNum);
        mediaContainer.css({
            display: 'grid',
            justifyItems: 'center',
            alignItems: 'center',
            gridTemplateColumns: `repeat(${colNum},${colPercent}%) ${mainColPercent}% repeat(${colNum},${colPercent}%)`,
            gridTemplateRows: `100%`,
        })
        //generate grid for active item
        let colsTotal = logos.length+1;
        activeLogo.css({
            gridArea:`1 / ${colsTotal/2} / 2 / ${colsTotal/2 + 1}`
        })
        //generate grid for inactive items
        let colStart=1;
        let nextStartCol;
        //left part
        for(let i =0;i<leftNum;i++){
            nextStartCol = colStart + 1;
            logos.eq(i).css({
                gridArea:` 1 / ${colStart} / 2 / ${nextStartCol}`
            })
            colStart = nextStartCol;
        }
        //right part
        for(let i=leftNum+1;i<leftNum+rightNum+1;i++){
            if(logos.eq(i).hasClass('active')){
                continue;
            }
            colStart= colsTotal/2 + 1;
            nextStartCol = colStart + 1;
            logos.eq(i).css({
                gridArea:` 1 / ${colStart} / 2 / ${nextStartCol}`
            })
            colStart = nextStartCol;
        }
    }else{
        mediaContainer.css({
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        })
    }
}


// swap active logo and clicked logo
logos.on('click', function(e) {    //just swap the grid-area values between activeLogo and clickedLogo;
    activeLogo = $('.media-logos > div.active');
    console.log(this)
    let clickedLogo = e.currentTarget;
    let temp;
    clickedLogoGridArea = $(clickedLogo).css('grid-area');
    if(clickedLogoGridArea){
        let curActiveGridArea = activeLogo.css('grid-area');
        temp = clickedLogoGridArea;
        $(clickedLogo).addClass('active').siblings().removeClass('active');
        $(clickedLogo).css('grid-area',curActiveGridArea);
        activeLogo.css('grid-area',temp);    
    }else{
        $(clickedLogo).addClass('active').siblings().removeClass('active');
    }
})


