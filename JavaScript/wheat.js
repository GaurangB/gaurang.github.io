window.addEventListener("load", function () {
    grow = document.querySelector('#grow')
    grow.addEventListener('click', function () {

        let growg = document.querySelector('#Wheat')
        let i = 50;
        var int = setInterval(function () {
            i++;
            growg.setAttribute('width', `${i}px`)
            if (i >= 300)
                clearInterval(int)
        }, 100)

    })
})
