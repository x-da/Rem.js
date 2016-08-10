# rem.js
移动端rem字体差点完美解决方案。<br>
设计稿与尺寸平滑转换。<br>
几乎兼容所有移动设备。<br>
# 使用
在\<head>\</head>标签内增加<br>
\<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" /><br> \<script type="text/javascript" src="rem.js">\</script\><br>
设计稿推荐使用尺寸为640X***，即640宽的PSD、
在PS量的1px=0.01rem，比如一个按钮为144px*60px;那么在CSS代码上则为{width:1.44rem;height:0.6rem}
# 若设计稿不是640PX咋办？
1、将设计稿强制修改图像大小为640px，高度等比例缩放<br>
2、修改源代码（或者传参）在闭包内传入psd_w参数，即为设计稿参数。<br>
