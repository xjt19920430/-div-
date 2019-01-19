;(function (window) {
    function particleAnimation(STARTINDEX, ENDINDEX, ELEMENT, objparameter) {
        this.STARTINDEX = STARTINDEX
        this.ENDINDEX = ENDINDEX
        this.ELEMENT = ELEMENT
        this.objparameter = objparameter

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