(()=>{var e=(new Date).getFullYear();document.getElementById("year").innerHTML=e.toString(),$(document).ready((function(){$(".hdMenu").click((function(){$(".nvgBox").slideToggle("500"),$(this).toggleClass("event"),$(".mask").toggle()})),$(".mask").click((function(){$(this).hide(),$(".nvgBox").slideUp("500"),$(".hdMenu").removeClass("event")})),$(window).resize((function(){$(this).innerWidth()>760?($(".nvgBox").show(),$(".mask").hide(),$(".hdMenu").removeClass("event")):$(".nvgBox").hide()}));var e=location.href.split("/")[location.href.split("/").length-1].substr(0,4);console.log(e),$(".nvgBox li a[href^='"+e+"']").parent().addClass("active")}))})();