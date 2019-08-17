$('.carousel').carousel({
    pause: "false"
});

$("#carouselExampleFade #content a").on("click", function(event){
    if(this.hash !== ""){
        event.preventDefault();
        const hash = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 65
            }, 800
        );
    }
});

var today = new Date();
var hrs = today.getHours();
var mins = today.getMinutes();
var day = today.getDay();

if(hrs==10 && mins>=30 && !(day==0)){
    $(".timeline").text("Is Open Now till 6:30 PM");
}
else if(hrs>10 && hrs<18 && !(day==0)){
    $(".timeline").text("Is Open Now till 6:30 PM");
}
else if(hrs==18 && mins<=30 && !(day==0)){
    $(".timeline").text("Is Open Now till 6:30 PM");
}
else if(hrs==18 && mins>30  && !(day==6)){
    $(".timeline").text("Will Open Tommorrow At 10:30 AM");
}
else if(hrs>18 && hrs<=23  && !(day==6)){
    $(".timeline").text("Will Open Tommorrow At 10:30 AM");
}
else if(hrs==18 && mins>30  && (day==6)){
    $(".timeline").text("Will Open On Monday At 10:30 AM");
}
else if(hrs>18 && hrs<=23  && (day==6)){
    $(".timeline").text("Will Open On Monday At 10:30 AM");
}
else if(!(day==0)){
    $(".timeline").text("Will Open Today At 10:30 AM");
}
else{
    $(".timeline").text("Will Open On Monday At 10:30 AM");
}



$(document).ready(function(){
    var speed = 200;

    // check for hash and if div exist... scroll to div
    var hash = window.location.hash;
    if($(hash).length) scrollToID(hash, speed); 

    // scroll to div on nav click
    $('.know_more .product_list .direct_link').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        if($(id).length) scrollToID(id, speed);
    });
})

function scrollToID(id, speed) {
    var offSet = 100;
    var obj = $(id).offset();
    var targetOffset = obj.top - offSet;
    $('html,body').animate({ scrollTop: targetOffset }, speed);
}

if(window.location.pathname == "/"){
    $("nav .n-list").find('li.active').removeClass("active");
    $("nav .n-list .home").addClass("active");
    $(".alert").css({
        position: "absolute",
        width: "65vw",
        opacity: "0.8"
    });
}
else if(window.location.pathname == "/login"){
    $("nav .n-list").find('li.active').removeClass("active");
    $("nav .n-list .login").addClass("active");
}
else if(window.location.pathname == "/signup"){
    $("nav .n-list").find('li.active').removeClass("active");
    $("nav .n-list .signup").addClass("active");
}
else if(window.location.pathname == "/aboutus"){
    $("nav .n-list").find('li.active').removeClass("active");
    $("nav .n-list .aboutus").addClass("active");
}
else if(window.location.pathname == "/contactus"){
    $("nav .n-list").find('li.active').removeClass("active");
    $("nav .n-list .contactus").addClass("active");
}

// Get the modal
var modal = document.querySelectorAll('.mod');

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
    for(var i=0; i<modal.length; i++){
        if (event.target == modal[i]) {
            modal[i].style.display = "none";
        }
    }
}

$("#star-rating i.one").on("mouseover",function(){
    $("#star-rating input").val(1);
    $(this).addClass("check");
    $("#star-rating i.two").removeClass("check");
    $("#star-rating i.three").removeClass("check");
    $("#star-rating i.four").removeClass("check");
    $("#star-rating i.five").removeClass("check");
});
$("#star-rating i.two").on("mouseover",function(){
    $("#star-rating input").val(2);
    $(this).addClass("check");
    $("#star-rating i.one").addClass("check");
    $("#star-rating i.three").removeClass("check");
    $("#star-rating i.four").removeClass("check");
    $("#star-rating i.five").removeClass("check");
});
$("#star-rating i.three").on("mouseover",function(){
    $("#star-rating input").val(3);
    $(this).addClass("check");
    $("#star-rating i.one").addClass("check");
    $("#star-rating i.two").addClass("check");
    $("#star-rating i.four").removeClass("check");
    $("#star-rating i.five").removeClass("check");
});
$("#star-rating i.four").on("mouseover",function(){
    $("#star-rating input").val(4);
    $(this).addClass("check");
    $("#star-rating i.one").addClass("check");
    $("#star-rating i.two").addClass("check");
    $("#star-rating i.three").addClass("check");
    $("#star-rating i.five").removeClass("check");
});
$("#star-rating i.five").on("mouseover",function(){
    $("#star-rating input").val(5);
    $(this).addClass("check");
    $("#star-rating i.one").addClass("check");
    $("#star-rating i.two").addClass("check");
    $("#star-rating i.three").addClass("check");
    $("#star-rating i.four").addClass("check");
});

if($("#star-rating input").val()==="1"){
    $("#star-rating i.one").addClass("check");
    $("#star-rating i.two").removeClass("check");
    $("#star-rating i.three").removeClass("check");
    $("#star-rating i.four").removeClass("check");
    $("#star-rating i.five").removeClass("check");
}else if($("#star-rating input").val()==="2"){
    $("#star-rating i.one").addClass("check");
    $("#star-rating i.two").addClass("check");
    $("#star-rating i.three").removeClass("check");
    $("#star-rating i.four").removeClass("check");
    $("#star-rating i.five").removeClass("check");
}else if($("#star-rating input").val()==="3"){
    $("#star-rating i.one").addClass("check");
    $("#star-rating i.two").addClass("check");
    $("#star-rating i.three").addClass("check");
    $("#star-rating i.four").removeClass("check");
    $("#star-rating i.five").removeClass("check");
}else if($("#star-rating input").val()==="4"){
    $("#star-rating i.one").addClass("check");
    $("#star-rating i.two").addClass("check");
    $("#star-rating i.three").addClass("check");
    $("#star-rating i.four").addClass("check");
    $("#star-rating i.five").removeClass("check");
}else if($("#star-rating input").val()==="5"){
    $("#star-rating i.one").addClass("check");
    $("#star-rating i.two").addClass("check");
    $("#star-rating i.three").addClass("check");
    $("#star-rating i.four").addClass("check");
    $("#star-rating i.five").addClass("check");
}



