;(function(psd_w, _min, _max) {
    if (!-[1, ]) {
        return 0;
    };
    var html = document.getElementsByTagName('html')[0];
    var win = window;
    var doc = document;
    var is_pc = !(navigator.userAgent.match(/iPhone|iPod|Android|ios|iPad|Windows Phone/));
    win.FreeUi = win.FreeUi || {};
    FreeUi['Rem'] = _rem;
    function _rem(psd_w, _min, _max) {
        //设计稿宽
        var psd_w = Number(psd_w) || 640;
        //手机实际物理像素宽
        var win_w = Math.min(win.innerWidth, win.innerHeight);
        var size = 100 / (psd_w / win_w);
        var _min = Number(_min) || 50;
        var _max = Number(_max) || 100;
        size = size >= _max ? _max : size;
        size = size <= _min ? _min : size;
        html.style.fontSize = size + 'px';
        return size;
    };
    //立即执行
    var size = _rem();
    //某些低性能安卓机延迟0.3s执行
    setTimeout(function() {
        html.style.fontSize = size + 'px';
    }, 300);
    //非手机端窗口改变
    if (is_pc) {
        win.addEventListener('resize', function() {
            _rem();
        }, false);
    };
    //窗口显示
    win.addEventListener('pageshow', function() {
        html.style.fontSize = size + 'px';
    }, false);
    //文档加载完成
    if ("complete" === doc.readyState) {
        html.style.fontSize = size + 'px';
    };
    doc.addEventListener("DOMContentLoaded", function() {
        html.style.fontSize = size + 'px';
    }, false);
})();
