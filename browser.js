(function() {
    'use strict';
    setInterval(() => {  // 定时执行, 每一秒复制一次
        cp();
        console.log(document.getElementsByClassName("content")[0].innerText);
    }, 1000);

    function cp() { // 用于复制题目
        const el = document.createElement('textarea');
        el.value = document.getElementsByClassName("content")[0].innerText;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
    }
})();