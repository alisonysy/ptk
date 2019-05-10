{
    let view={
        mediaContainer:'.media-logos',
        logos:'.media-logos > .content-item',
        mainColPercent:28,
        activeLogo:'.content-item.active',
    };
    let model = {
        row:{gridRowNum:0,gridRowPercent:0},
        col:{leftNum:0,rightNum:0,colNum:0,colPercent:0}
    };
    let controller={
        init(view,model){
            this.view = view;
            this.model = model;
            this.bindEvents(this.view.mediaContainer,this.view.logos,this.view.mainColPercent);
        },
        bindEvents(mediaContainer,logos,mainColPercent){
            //part 1 - generate grid layout for logos;
            mediaContainer = $(mediaContainer);
            logos = $(logos);
            activeLogo = $(mediaContainer).find(this.view.activeLogo);
            inactiveLogos = $(logos).not(activeLogo);
            this.generateGridBox(mediaContainer,logos,activeLogo,inactiveLogos,mainColPercent);
            //part 2 - bind click event;
            logos.on('click',(e)=>{
                activeLogo = $(mediaContainer).find(this.view.activeLogo);
                let clickedLogo = $(e.currentTarget);
                let temp,clickedLogoGridArea,curActiveGridArea;
                clickedLogoGridArea = clickedLogo.css('grid-area');
                if(clickedLogoGridArea){
                    curActiveGridArea = activeLogo.css('grid-area');
                    temp = clickedLogoGridArea;
                    clickedLogo.addClass('active').siblings().removeClass('active');
                    clickedLogo.css('grid-area',curActiveGridArea);
                    activeLogo.css('grid-area',temp);
                }else{
                    clickedLogo.addClass('active').siblings().removeClass('active');
                }
            })
        },
        generateGridBox(mediaContainer,logos,activeLogo,inactiveLogos,mainColPercent){
            if(logos.length>7){ //multiple rows
                let logoNum = logos.length-1;
                //determine how many grid-rows;
                this.rowsToGenerate(logoNum);
                //determine how many logos on each side and how many columns on one side;
                this.colsToGenerate(logoNum,mainColPercent);
                //generate grid layout for el;
                this.generateGridLayout(mediaContainer,this.model.row,this.model.col,mainColPercent);
                //generate grids based on colNum;
                if(this.model.col.colNum === 2){
                    this.generateCol2Grid(this.model.row,this.model.col,activeLogo,inactiveLogos);
                }else if(this.model.col.colNum === 3){
                    this.generateCol3Grid(this.model.row,this.model.col,activeLogo,inactiveLogos);
                }else{
                    this.generateCol6Grid(this.model.row,this.model.col,activeLogo,inactiveLogos);
                }
            }else{ // one row
                let logoNum = logos.length-1;
                if(logos.length%2){ //odd number of logos;
                    mainColPercent = 35;
                    if(logoNum===0){ // in the case of only 1 logo in total
                        this.generateFlex(mediaContainer);
                    }else if(logoNum===2){ // 3 logos in total
                        this.rowsToGenerate(logoNum);
                        this.colsToGenerate(logoNum,mainColPercent);
                        this.generateGridLayout(mediaContainer,this.model.row,this.model.col,mainColPercent);
                        //left part;
                        this.generateGrid(inactiveLogos,0,1,1,1,2);
                        //right part;
                        this.generateGrid(inactiveLogos,1,1,3,1,4);
                        //active logo;
                        activeLogo.css({
                            gridArea:`1 / 2 / 2 / 3`
                        })
                    }else if(logoNum===4){ //5 logos in total
                        this.rowsToGenerate(logoNum);
                        this.colsToGenerate(logoNum,mainColPercent);
                        this.generateGridLayout(mediaContainer,this.model.row,this.model.col,mainColPercent);
                        this.generateCol2Grid(this.model.row,this.model.col,activeLogo,inactiveLogos);
                    }else{ //7 logos in total
                        this.rowsToGenerate(logoNum);
                        this.colsToGenerate(logoNum,mainColPercent);
                        this.generateGridLayout(mediaContainer,this.model.row,this.model.col,mainColPercent);
                        this.generateCol3Grid(this.model.row,this.model.col,activeLogo,inactiveLogos);
                    }
                }else{ // even number of logos;
                    this.generateFlex(mediaContainer);
                }
            }
        },
        rowsToGenerate(num){
            let gridRowNum = Math.ceil(num / 6);
            this.model.row.gridRowNum = gridRowNum;
            this.model.row.gridRowPercent= 100 / gridRowNum;
        },
        colsToGenerate(num,mainColPercent){
            let leftNum, rightNum,colNum,colPercent;
            leftNum = num%2 ? Math.ceil(num / 2) : (num / 2);
            rightNum = num - leftNum;
            if(num<7){
                colNum = leftNum;
            }else{
                if (leftNum < 5) {
                    colNum = 2;
                } else if (leftNum % 3 === 2 || rightNum % 3 === 2) {
                    colNum = 6;
                } else {
                    colNum = 3;
                }
            }
            colPercent = (100 - mainColPercent) / (2 * colNum);
            //destructuring assignment
            this.model.col = {leftNum,rightNum,colNum,colPercent};
        },
        generateGridLayout(el,row,col,mainColPercent){
            el.css({
                display: 'grid',
                justifyItems: 'center',
                alignItems: 'center',
                gridTemplateColumns: `repeat(${col.colNum},${col.colPercent}%) ${mainColPercent}% repeat(${col.colNum},${col.colPercent}%)`,
                gridTemplateRows: `repeat(${row.gridRowNum},${row.gridRowPercent}%)`,
            })
        },
        generateCol2Grid(row,col,activeLogo,inactiveLogos){
            let colSpan = 1;
            let curRow, curCol, colStart, nextStartCol;
            let n=0;
            if(col.leftNum===col.rightNum){//in this case, 8 inactive items in total;
                //left part;
                for(let i=0;i<col.leftNum;i++){
                    curRow = parseInt(i/2)+1;
                    curCol = i%2;
                    curCol === 0? colStart = 1 : colStart = nextStartCol;
                    nextStartCol = colStart + colSpan;
                    this.generateGrid(inactiveLogos,i,curRow,colStart,1,nextStartCol);
                }
                //right part;
                for(let i = col.leftNum;i < col.leftNum + col.rightNum; i++){
                    curRow = parseInt(n/2)+1;
                    curCol = n%2;
                    curCol === 0? colStart = 4 : colStart = nextStartCol;
                    nextStartCol = colStart + colSpan;
                    this.generateGrid(inactiveLogos,i,curRow,colStart,1,nextStartCol);
                    n++;
                }
            }else{// in this case, 7 inactive logos in total
                n=0;
                //left part;
                for(let i=0;i<col.leftNum;i++){
                    curRow = parseInt(i/2)+1;
                    curCol = i%2;
                    curCol === 0? colStart = 1 : colStart = nextStartCol;
                    nextStartCol = colStart + colSpan;
                    this.generateGrid(inactiveLogos,i,curRow,colStart,1,nextStartCol);
                }
                //right part;
                for(let i = col.leftNum;i < col.leftNum + col.rightNum; i++){
                    curRow = parseInt(n/2)+1;
                    curCol = n%2;
                    if(curRow<row.gridRowNum){
                        curCol === 0? colStart = 4 : colStart = nextStartCol;
                        nextStartCol = colStart + colSpan;
                    }else{
                        colSpan = 2;
                        curCol === 0? colStart = 4 : colStart = nextStartCol;
                        nextStartCol = colStart + colSpan;
                    }
                    this.generateGrid(inactiveLogos,i,curRow,colStart,1,nextStartCol);
                    n++;
                }
            }
            //active logo;
            activeLogo.css({
                gridArea:`1 / 3 / ${row.gridRowNum+1} / 4`
            })
        },
        generateCol3Grid(row,col,activeLogo,inactiveLogos){
            let colSpan = 1;
            let curRow,curCol,colStart,nextStartCol;
            let n=0;
            //left part
            for(let i = 0;i<col.leftNum;i++){
                curRow = parseInt(i/3)+1;
                curCol = i%3;
                if(curRow<row.gridRowNum){
                    colStart = curCol + 1;
                    nextStartCol = colStart + colSpan;
                    this.generateGrid(inactiveLogos,i,curRow,colStart,1,nextStartCol);
                }else{
                    if(col.leftNum%3){
                        colStart = curCol + 1;
                        nextStartCol = colStart + 3*colSpan;
                    }else{
                        colStart = curCol + 1;
                        nextStartCol = colStart + colSpan;
                    }
                    this.generateGrid(inactiveLogos,i,curRow,colStart,1,nextStartCol);
                }
            }
            //right part
            for(let i = col.leftNum; i < col.leftNum + col.rightNum; i++){
                curRow = parseInt(n/3)+1;
                curCol = n%3;
                if(curRow<row.gridRowNum){
                    colStart = curCol + 5;
                    nextStartCol = colStart + colSpan;
                }else{
                    if(col.rightNum%3){
                        colStart = 5;
                        nextStartCol = colStart + 3*colSpan;
                    }else{
                        colStart = curCol + 5;
                        nextStartCol = colStart + colSpan;
                    }
                }
                this.generateGrid(inactiveLogos,i,curRow,colStart,1,nextStartCol);
                n++;
            }
            //active logo;
            activeLogo.css({
                gridArea: `1 / 4 / ${row.gridRowNum + 1} / 5`
            })
        },
        generateCol6Grid(row,col,activeLogo,inactiveLogos){
            let colSpan = 2;
            let curRow,curCol,colStart,nextStartCol;
            let n=0;
            // left part;
            for(let i=0;i<col.leftNum;i++){
                curRow = parseInt(i / 3)+1;
                curCol = i % 3;
                if(curRow < row.gridRowNum){ //not the last row
                    curCol === 0 ? colStart = 1 : colStart = nextStartCol;
                    nextStartCol = colStart + colSpan;
                    this.generateGrid(inactiveLogos,i,curRow,colStart,1,nextStartCol);
                }else{
                    if(col.leftNum%3===1){
                        colStart=1;
                        nextStartCol = colStart + 3*colSpan;
                    }else if(col.leftNum%3===2){
                        curCol === 0 ? colStart = 1 : colStart = nextStartCol;
                        nextStartCol = colStart + colSpan + 1;
                    }else{
                        curCol === 0 ? colStart = 1 : colStart = nextStartCol;
                        nextStartCol = colStart + colSpan;
                    }
                    this.generateGrid(inactiveLogos,i,curRow,colStart,1,nextStartCol);
                }
            }
            //right part;
            for(let i = col.leftNum; i < col.leftNum + col.rightNum; i++){
                curRow = parseInt(n / 3)+1;
                curCol = n % 3;
                if (curRow < row.gridRowNum) {
                    curCol === 0 ? colStart = 8 : colStart = nextStartCol;
                    nextStartCol = colStart + colSpan;
                    this.generateGrid(inactiveLogos,i,curRow,colStart,1,nextStartCol);
                }else{
                    if (col.rightNum % 3 === 1) {
                        colStart = 8;
                        nextStartCol = colStart + 3*colSpan;
                    } else if (col.rightNum % 3 === 2) {
                        curCol === 0 ? colStart = 8 : colStart = nextStartCol;
                        nextStartCol = colStart + colSpan + 1;
                    } else {
                        curCol === 0 ? colStart = 8 : colStart = nextStartCol;
                        nextStartCol = colStart + colSpan;
                    }
                    this.generateGrid(inactiveLogos,i,curRow,colStart,1,nextStartCol);
                }
                n++;
            }
            //active logo;
            activeLogo.css({
                gridArea: `1 / 7 / ${row.gridRowNum + 1} / 8`
            })
        },
        generateGrid(el,item,curRow,colStart,rowSpan,nextStartCol){
            el.eq(item).css({
                gridArea: `${curRow} / ${colStart} / ${curRow + rowSpan} / ${nextStartCol}`
            })
        },
        generateFlex(el){
            el.css({
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
            })
        }
    }
    controller.init(view,model);
}
