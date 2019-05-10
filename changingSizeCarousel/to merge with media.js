<div class="pitaka-section pt-media">
  <style>
    @media screen and (min-width:1025px) {

      /* media */
      .media-logos {
        height: auto;
        width: 90%;
        margin: 5% auto;
        grid-row-gap: 20%;
        padding: 0;
      }

      .media-logos .active {
        transform: scale(1.3);
        transition: 0.5s all;
      }

      .media-logos li {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .media-logos li:focus {
        outline: none;
      }

      .media-logos li img {
        width: 60%;
      }

      .arrowBox {
        display: none;
      }

      @supports not (display: grid){
        .media-logos{
          background: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
        }
      }
    }
    @media screen and (max-width:1024px) {
  .product-media {
    position: relative
  }

  .product-media .m-content {
    /* display: -webkit-box; */
    overflow: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    position: relative;
    width: 1100% !important;
    min-height: min-content;
  }

  .product-media .m-content .content-item {
    padding: 0 8em;
    width: 9.09%;
    display: block !important;
  }
  .product-media .m-content{padding:0}

  .product-media .logoBox {
    overflow: hidden;
  }
  .product-media .itemsBox{position: relative;width:100%}
  .product-media .arrowBox .arrow {
    position: absolute;
    top: 50%;
    height: 90px;
    transform: translateY(-50%);
    width: 50px;
    opacity:0.6;
    filter:Alpha(opacity=60);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product-media .arrowBox .arrow_perv{
    left: 4em;
  }
  .product-media .arrowBox .arrow_next{
    right:4em;
  }
  .product-media .arrowBox .arrow svg{
    width: 2em;
  }
}
@media screen and (max-width:640px){
  .product-media .arrowBox .arrow_perv{
    left: .5em;
  }
  .product-media .arrowBox .arrow_next{
    right:.5em;
  }
  .product-media .m-content .content-item {
    padding: 0 4em;
  }
}
  </style>
  <div class="product-media">
    <div class="container max1080">
      <h3 class="standard-h3 text-center white-color"><span class="font-regular">Our </span>Credits</h3>
    </div>
    <div class="itemsBox">
      <div class="m-content" id="contentBox">
        <div id="i1" class="content-item active">
          <div class="media-logo"><a
              href="https://www.forbes.com/sites/bradmoon/2017/11/08/pitaka-magwallet-ue-the-minimalst-modular-rfid-blocking-carbon-fiber-wallet/#2a06a8b21662"
              target="_blank">{{ 'forbes-logo.png' | asset_url | img_tag: 'Magwallet' }}</a></div>
          <div class="mquotes"></div>
          <p>
            <a href="https://www.forbes.com/sites/bradmoon/2017/11/08/pitaka-magwallet-ue-the-minimalst-modular-rfid-blocking-carbon-fiber-wallet/#2a06a8b21662"
              target="_blank">There’s no denying the high tech, cool factor of the Pitaka MagWallet UE --especially when
              you add in those optional extra modules. It can be a very sleek alternative to a traditional wallet. </a>
          </p>
        </div>
        <div id="i2" class="content-item">
          <div class="media-logo"><a href="https://www.digitaltrends.com/cool-tech/pitaka-carbon-fiber-wallet/"
              target="_blank">{{ 'm-trends.png' | asset_url | img_tag: 'Magwallet' }}</a></div>
          <div class="mquotes"></div>
          <p>
            <a href="https://www.digitaltrends.com/cool-tech/pitaka-carbon-fiber-wallet/" target="_blank">Most slim
              wallets are just variations on the same design and the same material. But if you’re looking to
              stand out and make a statement with what’s in your pocket, the Pitaka may be the wallet for you.</a>
          </p>
        </div>
        <div id="i3" class="content-item">
          <div class="media-logo"><a href="https://9to5toys.com/2017/08/24/pitaka-new-wallet/"
              target="_blank">{{ '9to5toys-logo.png' | asset_url | img_tag: '' }}</a></div>
          <div class="mquotes"></div>
          <p>
            <a href="https://9to5toys.com/2017/08/24/pitaka-new-wallet/" target="_blank">I am honestly excited to get my
              hands on the PITAKA New Wallet, as it looks like something that could
              finally replace my aging and thick leather wallet I carry around with me everywhere.</a>
          </p>
        </div>
        <div id="i4" class="content-item">
          <div class="media-logo"><a href="https://thegadgetflow.com/blog/pitaka-new-fresh-carbon-fiber-take/"
              target="_blank">{{ 'gadgetflow.png' | asset_url | img_tag: '' }}</a></div>
          <div class="mquotes"></div>
          <p>
            <a href="https://thegadgetflow.com/blog/pitaka-new-fresh-carbon-fiber-take/" target="_blank">The PITAKA New
              is well designed; it’s tough, slim, good looking, secure, and fun to use. The modularity
              lets me adjust the wallet layout to fit my exact needs so I’ll always have what I need. The New offers
              a great value and head turning aesthetics.</a>
          </p>
        </div>
        <div id="i5" class="content-item">
          <div class="media-logo"><a
              href="https://the-gadgeteer.com/2017/03/01/pitaka-carbon-fiber-magnetic-wallet-review/"
              target="_blank">{{ 'm-gatgeter.png' | asset_url | img_tag: 'Magwallet' }}</a></div>
          <div class="mquotes"></div>
          <p>
            <a href="https://the-gadgeteer.com/2017/03/01/pitaka-carbon-fiber-magnetic-wallet-review/"
              target="_blank">Have you been shopping for a new minimalistic wallet but don't want one with the same old
              tired style as everyone
              else's minimal wallet? Then look no further my friends because I have a wallet that you'll want to check
              out. It's
              the PITAKA carbon fiber magnetic wallet and it's definitely unique.</a>
          </p>
        </div>

        <div id="i6" class="content-item">
          <div class="media-logo"><a href="http://thefunnybeaver.com/pitaka-slim-carbon-fiber-wallet/"
              target="_blank">{{ 'm-beaver.png' | asset_url | img_tag: 'Magwallet' }}</a>
            </div>
          <div class="mquotes"></div>
          <p>
            <a href="http://thefunnybeaver.com/pitaka-slim-carbon-fiber-wallet/" target="_blank">PITAKA makes some of
              the best slim wallets around. The slim magnetic design allows you to slip it into
              your pocket with ease while the divided storage allows you to carry all the knick-knacks. The multilayered
              magnetic storage compartments are a perfect fit for your cards, money, keys, sim-cards and coins while
              also being RFID blocking for good measure.</a>
          </p>
        </div>
        <div id="i7" class="content-item">
          <div class="media-logo"><a href="http://nextluxury.com/mens-style-and-fashion/best-rfid-wallet-for-men/"
              target="_blank">{{ 'm-nextluxury.png' | asset_url | img_tag: 'Magwallet' }}</a></div>
          <div class="mquotes"></div>
          <p>
            <a href="http://nextluxury.com/mens-style-and-fashion/best-rfid-wallet-for-men/" target="_blank">It features
              a carbon fiber construction for durability and puts the classic wallet on a serious weight loss diet.</a>
          </p>
        </div>
        <div id="i8" class="content-item">
          <div class="media-logo"><a href="http://www.bestslimwallet.com/pitaka-carbon-fiber-wallet/"
              target="_blank">{{ 'm-bestslimwallet.png' | asset_url | img_tag: 'Magwallet' }}</a></div>
          <div class="mquotes"></div>
          <p>
            <a href="http://www.bestslimwallet.com/pitaka-carbon-fiber-wallet/" target="_blank">The way that the PITAKA
              Carbon Fiber Wallet works is rather unique. To access your wallet contents, you fan
              out the other end of the wallet by sliding the layers apart with your fingers. With a little practice you
              should be able to do this single handedly. In terms of coolness level, this one is right up there. It is
              bound
              to attract quite some attention when you use it in public or among friends.</a>
          </p>
        </div>

        <div id="i9" class="content-item">
          <div class="media-logo"><a href="https://www.techora.net/2017/04/pitaka-carbon-fiber-wallet-review.html"
              target="_blank">{{ 'm-echora.png' | asset_url | img_tag: 'Magwallet' }}</a></div>
          <div class="mquotes"></div>
          <p>
            <a href="https://www.techora.net/2017/04/pitaka-carbon-fiber-wallet-review.html" target="_blank">Not just
              the choice of built material, but the design of PITAKA carbon fiber wallet is unique as well.
              It features a modular design so that no matter how thick your wallet regularly is, the PITAKA carbon
              fiber wallet will suit all your needs.</a>
          </p>
        </div>
      </div>
      <div class="arrowBox">
        <div id="media_arrow_prev" class="arrow arrow_perv">
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'>
            <path d='M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z' fill='#F5F7F7' /></svg>
        </div>
        <div id="media_arrow_next" class="arrow arrow_next">
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'>
            <path d='M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z' fill='#F5F7F7' /></svg>
        </div>
      </div>
    </div>

    <div class="logoBox">
      <ul class="media-logos">
        <li id="i1" class="thumb-ico m-item active">
          {{ 'forbes-logo.png' | asset_url | img_tag: 'Magwallet review by Forbes' }}
        </li>
        <li id="i2" class="thumb-ico m-item">
          {{ 'm-trends.png' | asset_url | img_tag: 'Magwallet review by Trends' }}
        </li>
        <li id="i3" class="thumb-ico m-item">
          {{ '9to5toys-logo.png' | asset_url | img_tag: 'Magwallet review by 9to5toys' }}
        </li>
        <li id="i4" class="thumb-ico m-item">
          {{ 'gadgetflow.png' | asset_url | img_tag: 'Magwallet review by Gadgetflow' }}
        </li>
        <li id="i5" class="thumb-ico m-item">
          {{ 'm-gatgeter.png' | asset_url | img_tag: 'Magwallet review by Gatgeter' }}
        </li>
        <li id="i6" class="thumb-ico m-item">
          {{ 'm-beaver.png' | asset_url | img_tag: 'Magwallet review by Beaver' }}
        </li>
        <li id="i7" class="thumb-ico m-item">
          {{ 'm-nextluxury.png' | asset_url | img_tag: 'Magwallet review by NextLuxury' }}
        </li>
        <li id="i8" class="thumb-ico m-item">
          {{ 'm-bestslimwallet.png' | asset_url | img_tag: 'Magwallet review by BestSlimWallet' }}
        </li>
        <li id="i9" class="thumb-ico m-item">
          {{ 'm-echora.png' | asset_url | img_tag: 'Magwallet review by Echora' }}
        </li>
      </ul>
    </div>
  </div>
</div>

<script>
  if (window.screen.width < 1025) { //此是手机端布局
    (function (window, document) {
      var currentPosition = 0; // 记录当前页面位置
      var currentPoint = -1; // 记录当前点的位置
      var pageNow = 1; // 当前页码
      var logos = null;
      var contents = null;
      var app = {
        init: function () {
          document.addEventListener('DOMContentLoaded', function () {
            logos = document.querySelectorAll('.product-media .m-item');
            contents = document.querySelectorAll('.product-media #contentBox .content-item');
            app.bindTouchEvent(); // 绑定触摸事件
            app.bindClickEvent(); //绑定按钮点击事件
            app.bindLogoClickEvent(); //绑定logo点击事件
            app.setPageNow(); // 设置初始页码
          }.bind(app), false);
        }(),

        // 页面平移
        transform: function (translate) {
          this.style.webkitTransform = 'translateX(' + translate + 'px)';
          currentPosition = translate;
        },
        /**
         * 设置当前页码
         */
        setPageNow: function () {
          currentPoint = pageNow - 1;
          for (var i = 0; i < logos.length; i++) {
            logos[i].classList.remove('active');
            contents[i].classList.remove('active');
          }
          logos[currentPoint].classList.add('active');
          contents[currentPoint].classList.add('active');
        },
        /**
        * 绑定logo点击事件
        */
        bindLogoClickEvent: function () {
          var viewport = document.querySelector('.product-media #contentBox');
          var logoBox = document.querySelector('.product-media .media-logos');
          var pageWidth = window.innerWidth; // 页面宽度
          var translate = 0;
          viewport.style.webkitTransition = '0.3s ease -webkit-transform';
          //点击，ogo切换
          var list = logoBox.querySelectorAll('.m-item');
          for (var i = 0; i < list.length; i++) {
            list[i].index = i;
          }
          logoBox.addEventListener('click', function (e) {
            var itemIndex = e.target.parentNode.index;
            translate = - (pageWidth * itemIndex);
            this.transform.call(viewport, translate);
            // 计算当前的页码
            pageNow = itemIndex + 1;
            setTimeout(function () {
              // 设置页码，DOM操作需要放到异步队列中，否则会出现卡顿
              this.setPageNow();
            }.bind(this), 100);

          }.bind(this), false);
        },
        /**
        * 绑定按钮点击事件
        */
        bindClickEvent: function () {
          var viewport = document.querySelector('.product-media #contentBox');
          var arrowLeft = document.querySelector('.product-media #media_arrow_prev');
          var arrowRight = document.querySelector('.product-media #media_arrow_next');
          var pageWidth = window.innerWidth; // 页面宽度
          var maxWidth = -pageWidth * (contents.length - 1); // 页面滑动最后一页的位置
          var translate = 0;
          viewport.style.webkitTransition = '0.3s ease -webkit-transform';
          //点击切换下一个
          arrowRight.addEventListener('click', function (e) {
            e.preventDefault();
            translate = currentPosition - pageWidth;
            // 右边界
            translate = translate < maxWidth ? maxWidth : translate;
            if (currentPosition === maxWidth) {
              return;
            }

            this.transform.call(viewport, translate);
            // 计算当前的页码
            pageNow = Math.round(Math.abs(translate) / pageWidth) + 1;
            setTimeout(function () {
              // 设置页码，DOM操作需要放到异步队列中，否则会出现卡顿
              this.setPageNow();
            }.bind(this), 100);

          }.bind(this), false);

          //点击切换上一个
          arrowLeft.addEventListener('click', function (e) {
            e.preventDefault();
            translate = currentPosition + pageWidth;
            // 左边界
            translate = translate > 0 ? 0 : translate;
            if (currentPosition === 0) {
              return;
            }
            // 执行滑动，让页面完整的显示到屏幕上
            this.transform.call(viewport, translate);
            // 计算当前的页码
            pageNow = Math.round(Math.abs(translate) / pageWidth) + 1;
            setTimeout(function () {
              // 设置页码，DOM操作需要放到异步队列中，否则会出现卡顿
              this.setPageNow();
            }.bind(this), 100);

          }.bind(this), false);
        },

        /**
         * 绑定触摸事件
         */
        bindTouchEvent: function () {
          var viewport = document.querySelector('.product-media #contentBox');
          var pageWidth = window.innerWidth; // 页面宽度
          var maxWidth = -pageWidth * (contents.length - 1); // 页面滑动最后一页的位置
          var startX, startY;
          var initialPos = 0; // 手指按下的屏幕位置
          var moveLength = 0; // 手指当前滑动的距离
          var direction = 'left'; // 滑动的方向
          var isMove = false; // 是否发生左右滑动
          var startT = 0; // 记录手指按下去的时间
          var isTouchEnd = true; // 标记当前滑动是否结束(手指已离开屏幕) 

          // 手指放在屏幕上
          viewport.addEventListener('touchstart', function (e) {
            e.preventDefault();
            // 单手指触摸或者多手指同时触摸，禁止第二个手指延迟操作事件
            if (e.touches.length === 1 || isTouchEnd) {
              var touch = e.touches[0];
              startX = touch.pageX;
              startY = touch.pageY;
              initialPos = currentPosition; // 本次滑动前的初始位置
              viewport.style.webkitTransition = ''; // 取消动画效果
              startT = +new Date(); // 记录手指按下的开始时间
              isMove = false; // 是否产生滑动
              isTouchEnd = false; // 当前滑动开始
            }
          }.bind(this), false);

          // 手指在屏幕上滑动，页面跟随手指移动
          viewport.addEventListener('touchmove', function (e) {
            e.preventDefault();

            // 如果当前滑动已结束，不管其他手指是否在屏幕上都禁止该事件
            if (isTouchEnd) return;

            var touch = e.touches[0];
            var deltaX = touch.pageX - startX;
            var deltaY = touch.pageY - startY;

            var translate = initialPos + deltaX; // 当前需要移动到的位置
            // 如果translate>0 或 < maxWidth,则表示页面超出边界
            if (translate > 0) {
              translate = 0;
            }
            if (translate < maxWidth) {
              translate = maxWidth;
            }
            deltaX = translate - initialPos;
            this.transform.call(viewport, translate);
            isMove = true;
            moveLength = deltaX;
            direction = deltaX > 0 ? 'right' : 'left'; // 判断手指滑动的方向
          }.bind(this), false);

          // 手指离开屏幕时，计算最终需要停留在哪一页
          viewport.addEventListener('touchend', function (e) {
            e.preventDefault();
            var translate = 0;
            // 计算手指在屏幕上停留的时间
            var deltaT = +new Date() - startT;
            // 发生了滑动，并且当前滑动事件未结束
            if (isMove && !isTouchEnd) {
              isTouchEnd = true; // 标记当前完整的滑动事件已经结束 
              // 使用动画过渡让页面滑动到最终的位置
              viewport.style.webkitTransition = '0.3s ease -webkit-transform';
              if (deltaT < 300) { // 如果停留时间小于300ms,则认为是快速滑动，无论滑动距离是多少，都停留到下一页
                if (currentPosition === 0 && translate === 0) {
                  return;
                }
                translate = direction === 'left' ?
                  currentPosition - (pageWidth + moveLength) :
                  currentPosition + pageWidth - moveLength;
                // 如果最终位置超过边界位置，则停留在边界位置
                // 左边界
                translate = translate > 0 ? 0 : translate;
                // 右边界
                translate = translate < maxWidth ? maxWidth : translate;
              } else {
                // 如果滑动距离小于屏幕的50%，则退回到上一页
                if (Math.abs(moveLength) / pageWidth < 0.5) {
                  translate = currentPosition - moveLength;
                } else {
                  // 如果滑动距离大于屏幕的50%，则滑动到下一页
                  translate = direction === 'left' ?
                    currentPosition - (pageWidth + moveLength) :
                    currentPosition + pageWidth - moveLength;
                  translate = translate > 0 ? 0 : translate;
                  translate = translate < maxWidth ? maxWidth : translate;
                }
              }

              // 执行滑动，让页面完整的显示到屏幕上
              this.transform.call(viewport, translate);
              // 计算当前的页码
              pageNow = Math.round(Math.abs(translate) / pageWidth) + 1;

              setTimeout(function () {
                // 设置页码，DOM操作需要放到异步队列中，否则会出现卡顿
                this.setPageNow();
              }.bind(this), 100);
            }
          }.bind(this), false);
        }
      }
    })(window, document);
  } else { //此是PC端布局
    console.log('large screen')
    let mediaContainer = $('.media-logos');
    let logos = $('.media-logos > li');
    let mainColPercent = 28; //主列宽度（%）
    //分别找出active的logo和inactive的logo
    let activeLogo = $('.media-logos > li.active');
    let inactiveLogos = $('.media-logos > .content-item').not($('.media-logos > .active'));
    let logoNum;
    
    //若logo数量大于7，则多行，否则则1行；
    if (logos.length > 7) { //multiple lines
      logoNum = logos.length - 1;
      //决定一共要多少行
      let gridRowNum = Math.ceil(logoNum / 6);
      let gridRowPercent = 100 / gridRowNum;
      //决定左右每部分分别容纳多少个logo，若不能平分，左边列比右边列要多一个
      let leftNum, rightNum;
      if (logoNum % 2) {
        leftNum = Math.ceil(logoNum / 2);
      } else {
        leftNum = logoNum / 2;
      }
      rightNum = logoNum - leftNum;

      //决定单部分要生成多少列
      let colNum, colPercent;
      if (leftNum < 5) {
        colNum = 2;
      } else if (leftNum % 3 === 2 || rightNum % 3 === 2) {
        colNum = 6;
      } else {
        colNum = 3;
      }
      colPercent = (100 - mainColPercent) / (2 * colNum);

      //css生成grid 
      mediaContainer.css({
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
        gridTemplateColumns: `repeat(${colNum},${colPercent}%) ${mainColPercent}% repeat(${colNum},${colPercent}%)`,
        gridTemplateRows: `repeat(${gridRowNum},${gridRowPercent}%)`,
      })
      //为inactive的logo配置grid-area的名字
      for (let i = 0; i < inactiveLogos.length; i++) {
        inactiveLogos.eq(i).css({
          gridArea: `item${i}`
        })
      };
      //为active的logo配置grid-area的名字
      activeLogo.css('grid-area', 'active-item');
      //生成 grid-template-areas; 分为2列、6列和3列的情况
      if (colNum === 2) {
        console.log('cols are: ' + colNum)
        if (leftNum === rightNum) { //这是9个logo，每边4个的情况
          mediaContainer.css({
            gridTemplateAreas: `
                "item0 item1 active-item item2 item3"
                "item4 item5 active-item item6 item7"
                `
          })
        } else { //这是8个logo，左边4个，右边3个的情况
          mediaContainer.css({
            gridTemplateAreas: `
                "item0 item1 active-item item2 item3"
                "item4 item5 active-item item6 item6"
                `
          })
        }
      } else if (colNum === 6) {
        console.log('cols are: ' + colNum)
        let colSpan = 2; //每个logo占2列
        let nextStartCol;
        //生成左边布局
        for (let i = 0; i < leftNum; i++) {
          //决定logo在第几行
          let curRow = parseInt(i / 3);
          //决定logo在第几列
          let curCol = i % 3;
          if (curRow < gridRowNum - 1) {
            let colStart;
            curCol === 0 ? colStart = 1 : colStart = nextStartCol;
            nextStartCol = colStart + colSpan;
            inactiveLogos.eq(i).css({
              gridArea: `${curRow + 1} / ${colStart} / ${curRow + 2} / ${nextStartCol}`
            })
          } else {
            if (leftNum % 3 === 1) { //若最后行只有1个，则充盈所有列
              inactiveLogos.eq(i).css({
                gridArea: `${curRow + 1} / 1 / ${curRow + 2} / 7`
              })
            } else if (leftNum % 3 === 2) {//若最后行只有2个，则2个需要居中
              let colStart;
              curCol === 0 ? colStart = 1 : colStart = nextStartCol;
              nextStartCol = colStart + colSpan + 1;
              inactiveLogos.eq(i).css({
                gridArea: `${curRow + 1} / ${colStart} / ${curRow + 2} / ${nextStartCol}`
              })
            } else { //若最后行刚好3个，则如之前行的布局
              let colStart;
              curCol === 0 ? colStart = 1 : colStart = nextStartCol;
              nextStartCol = colStart + colSpan;
              inactiveLogos.eq(i).css({
                gridArea: `${curRow + 1} / ${colStart} / ${curRow + 2} / ${nextStartCol}`
              })
            }
          }
        };
        //生成右边布局
        let n = 0;           
        for (let i = leftNum; i < leftNum + rightNum; i++) { 
          let curRow = parseInt(n / 3);
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
        // 生成中间active的logo布局
        activeLogo.css({
          gridArea: `1 / 7 / ${gridRowNum + 1} / 8`
        })
      } else {
        console.log('cols are: ' + colNum)
        let colSpan = 1;
        //left part
        for (let i = 0; i < leftNum; i++) {
          let curRow = parseInt(i / 3);
          let curCol = i % 3;
          if (curRow < gridRowNum - 1) {
            inactiveLogos.eq(i).css({
              gridArea: `${curRow + 1} / ${curCol + 1} / ${curRow + 2} / ${curCol + 1 + colSpan}`
            })
          } else {
            if (leftNum % 3) {
              inactiveLogos.eq(i).css({
                gridArea: `${curRow + 1} / 1 / ${curRow + 2} / 4`
              })
            } else {
              inactiveLogos.eq(i).css({
                gridArea: `${curRow + 1} / ${curCol + 1} / ${curRow + 2} / ${curCol + 1 + colSpan}`
              })
            }
          }
        };
        //right part
        let n = 0;
        for (let i = leftNum; i < leftNum + rightNum; i++) {
          let curRow = parseInt(n / 3);
          let curCol = n % 3;
          if (curRow < gridRowNum - 1) {
            inactiveLogos.eq(i).css({
              gridArea: `${curRow + 1} / ${curCol + 5} / ${curRow + 2} / ${curCol + 5 + colSpan}`
            })
          } else {
            if (leftNum % 3) {
              inactiveLogos.eq(i).css({
                gridArea: `${curRow + 1} / 5 / ${curRow + 2} / 8`
              })
            } else {
              inactiveLogos.eq(i).css({
                gridArea: `${curRow + 1} / ${curCol + 5} / ${curRow + 2} / ${curCol + 5 + colSpan}`
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
    } else { //若logo数量少于等于7，则排成一排
      logoNum = logos.length - 1;
      if (logos.length % 2) { //若是单数，则用grid布局
        mainColPercent = 35;
        let leftNum, rightNum, colNum, colPercent;
        leftNum = logoNum / 2;
        rightNum = logoNum - leftNum;
        colNum = leftNum;
        colPercent = (100 - mainColPercent) / (2 * colNum);
        mediaContainer.css({
          display: 'grid',
          justifyItems: 'center',
          alignItems: 'center',
          gridTemplateColumns: `repeat(${colNum},${colPercent}%) ${mainColPercent}% repeat(${colNum},${colPercent}%)`,
          gridTemplateRows: `100%`,
        })
        //生成active的logo的布局
        let colsTotal = logos.length + 1;
        activeLogo.css({
          gridArea: `1 / ${colsTotal / 2} / 2 / ${colsTotal / 2 + 1}`
        })
        //生成inactive的logo的布局
        let colStart = 1;
        let nextStartCol;
        //左边部分
        for (let i = 0; i < leftNum; i++) {
          nextStartCol = colStart + 1;
          logos.eq(i).css({
            gridArea: ` 1 / ${colStart} / 2 / ${nextStartCol}`
          })
          colStart = nextStartCol;
        }
        //右边部分
        for (let i = leftNum + 1; i < leftNum + rightNum + 1; i++) {
          if (logos.eq(i).hasClass('active')) {
            continue;
          }
          colStart = colsTotal / 2 + 1;
          nextStartCol = colStart + 1;
          logos.eq(i).css({
            gridArea: ` 1 / ${colStart} / 2 / ${nextStartCol}`
          })
          colStart = nextStartCol;
        }
      } else { //若是偶数，则用flex布局
        mediaContainer.css({
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        })
      }
    }


    // 点击logo时候，交换两个logo的位置
    logos.on('click', (e) => {    
      activeLogo = $('.media-logos > li.active');
      let clickedLogo = e.currentTarget;
      let temp;
      clickedLogoGridArea = $(clickedLogo).css('grid-area');
      if (clickedLogoGridArea) { //检测是否是grid布局
        let curActiveGridArea = activeLogo.css('grid-area');
        temp = clickedLogoGridArea;
        $(clickedLogo).addClass('active').siblings().removeClass('active');
        $(clickedLogo).css('grid-area', curActiveGridArea);
        activeLogo.css('grid-area', temp);
      } else {
        $(clickedLogo).addClass('active').siblings().removeClass('active');
      }
    })



  }
</script>
