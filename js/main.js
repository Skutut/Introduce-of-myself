/**
 * Created by PrincessofUtopia on 2016/6/16.
 */

var $window = $(window);
var clientWidth = $(window).width();
console.log(clientWidth);
var clientHeight = $(window).height();

$(function () {
    $("#content").css("width",$("#code").width());
    $("#content").css("height", $("#code").height()+30);
    //$("#content").css("margin-top", Math.max(($window.height() - $("#content").height()) / 2, 10));
    //$("#content").css("margin-left", Math.max(($window.width() - $("#content").width()) / 2, 10));
});

$(window).resize(function() {
    var newWidth = $(window).width();
    var newHeight = $(window).height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});


(function($) {
    $.fn.typewriter = function() {
        this.each(function() {
            var $ele = $(this), str = $ele.html(), progress = 0;
            $ele.html('');
            var timer = setInterval(function() {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 50);
        });
        return this;
    };
})(jQuery);

function adjustCodePosition() {
    $('#content').css("margin-top", 100);
}

/*function logoClick(){
    $("#content").css("display", "block");
    $("#skills").css("display", "none");
    $("#about").css("display", "none");
    $("#contact").css("display", "none");
}*/
function homeClick(){
    $("#content").css("display", "block");
    $("#skills").css("display", "none");
    $("#about").css("display", "none");
    $("#contact").css("display", "none");
}
function skillClick(){
    $("#content").css("display", "none");
    $("#skills").css("display", "block");
    $("#skills_one").css("display", "block");
    $("#skills_two").css("display", "block");
    $("#skills_three").css("display", "block");
    $("#skills_four").css("display", "block");
    $("#about").css("display", "none");
    $("#contact").css("display", "none");
}
function baseClick(){
    if(document.getElementById("skills_one").style.display=="none"){
        document.getElementById("skills_one").style.display="block";
    }
    else{
        document.getElementById("skills_one").style.display="none";
    }
}
function frameClick(){
    if(document.getElementById("skills_two").style.display=="none"){
        document.getElementById("skills_two").style.display="block";
    }
    else{
        document.getElementById("skills_two").style.display="none";
    }
}
function serverClick() {
    if(document.getElementById("skills_three").style.display=="none"){
        document.getElementById("skills_three").style.display="block";
    }
    else{
        document.getElementById("skills_three").style.display="none";
    }
}
function developClick() {
    if(document.getElementById("skills_four").style.display=="none"){
        document.getElementById("skills_four").style.display="block";
    }
    else{
        document.getElementById("skills_four").style.display="none";
    }
}
function aboutClick(){
    $("#content").css("display", "none");
    $("#skills").css("display", "none");
    $("#contact").css("display", "none");
    $("#about").css("display", "block");
}
function contactClick(){
    $("#content").css("display", "none");
    $("#skills").css("display", "none");
    $("#about").css("display", "none");
    $("#contact").css("display", "block");
}