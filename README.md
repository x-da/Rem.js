# rem.js V1.0.1
demo地址：[http://freeui.org/demo/rem/](http://freeui.org/demo/rem/)<br>
移动端rem字体差点完美解决方案。<br>
设计稿与尺寸平滑转换。<br>
几乎兼容所有移动设备。<br>
# 使用亮点
一、可加参数<br>

1、fu-psd：设计稿宽度（默认值640）<br>
2、fu-min：html根元素最小字体大小（默认值50）<br>
3、fu-max：html根元素最大字体大小（默认值100）<br>
4、fu-full：是否强制充满屏幕（默认undefined）<br><br>

二、设计稿与CSS尺寸平滑转换<br>
设计稿中的10px换算成CSS的0.1rem。<br><br>

三、横竖屏字体大小不变，采取最佳字体大小<br>
使横屏页面看起来不会感觉太大，无法使用。（但给与fu-full属性时，该条则失效）<br><br>

四、解决变态强迫症<br>
在chrome手机模拟器中切换手机或PC都能字体大小平滑转换<br><br>

#使用方法
在<head>标签内引用：<br>
<script type="text/javascript" src="http://freeui.org/demo/rem/js/rem.js" fu-psd="640"></script><br>

# 若设计稿不是640PX咋办？
1、将设计稿强制修改图像大小为640px，高度等比例缩放<br>
2、修改源代码（或者传参）在闭包内传入psd_w参数，即为设计稿参数。<br>
