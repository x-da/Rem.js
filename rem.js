;(function() {
    if (!-[1, ]) {
        return 0;
    };
    var html = document.getElementsByTagName('html')[0];
    var script = document.getElementsByTagName('script')[0];
    //参数
    var psd_w = script.getAttribute('fu-psd');
    var _min = script.getAttribute('fu-min');
    var _max =  script.getAttribute('fu-max');
    var full =  script.getAttribute('fu-full');
    //常量
    var win = window;
    var doc = document;
    var dpr = window.devicePixelRatio || 1;
    //与FreeUi框架会师
    win.FreeUi = win.FreeUi || {};
    FreeUi['Rem'] = _rem;

    function _rem(psd_w, _min, _max, full) {
        var win = window;
        var screen = win.screen;
        //手机宽高比 短:高
        var ratio = Math.min(screen.width, screen.height) / Math.max(screen.width, screen.height);
        //设计稿宽
        var psd_w = Number(psd_w) || 640;
        //手机实际物理像素宽
        var win_w = win.innerWidth;
        //短的width
        if (!full) {
            var orientation = win.orientation || window.screen.orientation.angle || 0;
            if (orientation == 90 || orientation == -90) {
                //横屏
                win_w = win_w * ratio;
            }
            //去除宽杂质像素,排除实际像素影响(UC浏览器)
            var impurity = 0;
            if (win.innerWidth != win.screen.width && (win.screen.width / dpr) != win.innerWidth) {
                var val1 = (win.screen.width - win.innerWidth);
                var val2 = (win.screen.width / dpr - win.innerWidth);
                impurity = val2 > 0 ? val2 : val1;
            };
            if (impurity > 1 && impurity <= 100) {
                win_w += impurity
            };
        }
        var size = 100 / (psd_w / win_w);
        var _min = Number(_min) || 50;
        var _max = Number(_max) || 100;
        size = size >= _max ? _max : size;
        size = size <= _min ? _min : size;
        html.style.fontSize = size + 'px';
        return size;
    };
    //立即执行
    var size = _rem(psd_w, _min, _max, full);
    //某些低性能安卓机延迟0.3s执行
    setTimeout(function() {
        _rem(psd_w, _min, _max, full);
    }, 300);
    //窗口改变
    //var event = 'orientation' in win ? 'orientationchange' : 'resize';
    win.addEventListener('resize', function() {
        setTimeout(function() {
            _rem(psd_w, _min, _max, full);
        }, 100);
    }, false);
    //窗口显示
    win.addEventListener('pageshow', function() {
        _rem(psd_w, _min, _max, full);
    }, false);
    //文档加载完成
    if ("complete" === doc.readyState) {
        _rem(psd_w, _min, _max, full);
    };
    doc.addEventListener("DOMContentLoaded", function() {
        _rem(psd_w, _min, _max, full);
    }, false);
})();
