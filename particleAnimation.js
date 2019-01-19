;(function (window) {
    function particleAnimation(ENDINDEX, ELEMENT, objparameter) {
        this.STARTINDEX = 0 // 这个固定起始是0
        this.ENDINDEX = ENDINDEX //  这个是要创建多少个div
        this.ELEMENT = ELEMENT //这个是要插入的父元素
        this.objparameter = objparameter //这个是生成粒子div的样式，必填；
        // objparameter ={
        //     width:2, //粒子的宽
        //     height:2, //粒子的高
        //     bottomADNtop:'top', //粒子动画的方向
        //     leftANDright:'left',//粒子动画的方向
        //     animation:'_t_center_centerTo 1s infinite linear', //动画函数，动画需要自己写
        //     leftNum:471, // 粒子随机生成的范围，根据父元素的宽来制定
        //     topNum:40,// 粒子随机生成的范围，根据父元素的高来制定
        //     color:'#00b4ff' //粒子生成的颜色
        // }
    }

    particleAnimation.prototype.DIVInit = function (parameter) {
        var DIV = document.createElement('div')
        DIV.style.height = parameter.height + 'px'
        DIV.style.width = parameter.width + 'px'
        DIV.style.backgroundColor = parameter.color
        DIV.style.display = 'inline-block';
        DIV.style.position = 'absolute'
        DIV.style[parameter.leftANDright] = Math.floor(Math.random() * parameter.leftNum) + 'px'
        DIV.style[parameter.bottomADNtop] = Math.floor(Math.random() * parameter.topNum) + 'px'
        DIV.style.animation = parameter.animation
        return DIV
    }

    particleAnimation.prototype.render = function () {
        var index = this.STARTINDEX
        var ENDINDEX = this.ENDINDEX
        var particleDOMC = this.DIVInit
        var ELEMENT = this.ELEMENT
        var objparameter = this.objparameter
        var setINrer = setInterval(function () {
            if (index >= ENDINDEX) {
                clearInterval(setINrer)
            } else {
                ELEMENT.appendChild(particleDOMC(objparameter))

            }
            index++
        }, 20)

    }
    window.particleAnimation = particleAnimation
})(window)