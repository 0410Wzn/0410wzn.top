//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(https://wzn0410.oss-cn-beijing.aliyuncs.com/img/CTF/im02l空(夕).jpg)",
    "url(https://wzn0410.oss-cn-beijing.aliyuncs.com/img/CTF/bg04l三咲町08繁華街-(昼).bmp)",
    "url(https://wzn0410.oss-cn-beijing.aliyuncs.com/img/CTF/im09l04旧校舎へ続く森.bmp)",
    "url(https://wzn0410.oss-cn-beijing.aliyuncs.com/img/CTF/bg04l三咲町08繁華街-(夜).bmp)",
    "url(https://wzn0410.oss-cn-beijing.aliyuncs.com/img/CTF/im17ep01(背景).bmp)",
    "url(https://wzn0410.oss-cn-beijing.aliyuncs.com/img/hexobackground/im01オープニング12_背景d2.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.ceil(Math.random() * (backimg.length-1));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//重设banner图片
document.getElementById("page-header").style.backgroundImage = backimg[bgindex];
