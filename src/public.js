//   获取当前年份
var year = new Date().getFullYear();
document.getElementById("year").innerHTML = year.toString();

$(document).ready(function(){
    // jQuery展示菜单栏
    $(".hdMenu").click(function(){
        $(".nvgBox").slideToggle("500");
        $(this).toggleClass("event");
        $(".mask").toggle();
    });
    $(".mask").click(function(){
        $(this).hide();
        $(".nvgBox").slideUp("500");
        $(".hdMenu").removeClass("event");
    })
    //修复视窗大小调整时菜单栏、导航、遮罩层的显示效果
    $(window).resize(function(){
        if ($(this).innerWidth() > 760){
            $(".nvgBox").show();
            $(".mask").hide();
            $(".hdMenu").removeClass("event");
        }else{
            $(".nvgBox").hide();
        }
    })
    //当前页头部导航高亮显示
    var path = location.href.split('/')[location.href.split('/').length-1].substr(0,4);
    console.log(path);
    $(".nvgBox li a[href^='"+path+"']").parent().addClass("active");
});