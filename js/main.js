!function () {

  var duration = 50  //默认的计时时间

  $('.svgButton').on('click', 'svg', (e) => {
    let $svg = $(e.currentTarget)
    let speed = $svg.attr('data-speed')
    $svg.addClass('active').siblings('.active').removeClass('active')
    switch (speed) {
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
    }
  })

  let result = `
/* 我们来画一只皮卡丘吧
 * 首先准备一下画布
 * 当然了 它已经与画布融为了一体
 */

/* 你可以在屏幕右上角控制播放速度 */

.paintWrapper {
  width: 100%;
  height: 100%;
  background: #fee533;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* 画一个鼻子 */

.nose {
  width: 0;
  height: 0;
  border: 12px solid;
  border-radius: 50%;
  border-color: black transparent transparent transparent;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}

/* 画眼睛 */

.eye {
  width: 52px;
  height: 52px;
  background: #2e2e2e;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 70px;
}

/* 左眼在左边 */

.eye.left {
  right: 50%;
  margin-right: 83px;
}

/* 右眼在右边 */

.eye.right {
  left: 50%;
  margin-left: 83px;
}

/* 画两颗眼珠 */

.eye::before {
  content: "";
  display: block;
  width: 26px;
  height: 26px;
  background: white;
  position: absolute;
  top: 1px;
  left: 3px;
  border: 2px solid black;
  border-radius: 50%;
}

/* 画两个红红的脸蛋 */

.face {
  height: 71px;
  width: 71px;
  background: #fc0d1c;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 165px;
}
.face.left {
  transform: translateX(-180px);
  left: 50%;
}
.face.right {
  transform: translateX(180px);
  right: 50%;
}

/* 画它的上嘴唇 */

.mouseTop {
  width: 80px;
  height: 20px;
  border: 2px solid black;
  position: absolute;
  top: 130px;
  z-index: 1;
  background: #fee533;
}
.mouseTop.left {
  border-top: none;
  border-right: none;
  border-bottom-left-radius: 30px 20px;
  transform: rotate(-20deg);
  right: 50%;
}
.mouseTop.right {
  border-top: none;
  border-left: none;
  border-bottom-right-radius: 30px 20px;
  transform: rotate(20deg);
  left: 50%;
}

/* 画它的下嘴唇 */

.mouseWrapper{
    width: 130px;
    height: 130px;
    margin: 133px auto 0 auto;
    overflow: hidden;
    position: relative;
    z-index: 0;
}
.mouse{
    width: 100px;
    height: 400px;
    background: #990513;
    border: 2px solid black;
    border-radius: 150px/400px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
}

/* 画个小舌头 */

.mouse::before{
    content: '';
    display: block;
    width: 120px;
    height: 120px;
    background: #FD4B62;
    border-radius: 50%;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
}

/* OK，绘画完成 */
    `
  writeCode('', result)

  function writeCode(prefix, code, fn) {
    let $code = $('#code')
    let $style = $('#styleTag')
    let n = 0
    let h
    let id = setTimeout(function timer() { //记录下计时器的id，如果需要直接显示功能可能需要用到
      n += 1
      $code.html(prefix + code.substring(0, n))
      $style.html(prefix + code.substring(0, n))
      h = $code.prop('scrollHeight')
      $code.scrollTop(h)
      if (n < code.length) {
        id = setTimeout(timer, duration)
      } else {
        fn && fn.call()
      }
    }, duration)
  }

}.call()