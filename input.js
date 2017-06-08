setTimeout(function(){ $('#sentence1').removeAttr('hidden');},500);
setTimeout(function(){ $('#sentence2').removeAttr('hidden');},1500);
setTimeout(function(){ $('#sentence3').removeAttr('hidden');},2500);
setTimeout(function(){ $('#sentence4').removeAttr('hidden');},3500);
setTimeout(function(){ $('#sentence5').removeAttr('hidden');},4500);
setTimeout(function(){ $('#sentence6').removeAttr('hidden');},5500);
setTimeout(function(){ $('#sentence7').removeAttr('hidden');},9000);
setTimeout(function(){ $('#sentence8').removeAttr('hidden');},10000);
setTimeout(function(){ $('#sentence9').removeAttr('hidden');},11000);
//index 글씨 천천히 뜨게 하기
$('#hidden1').attr('hidden1','hidden');
$('#hidden2').attr('hidden2','hidden');
$('input').focus(function () {
    $(this).next('span').removeAttr('hidden');
});

$('input').blur(function () {
    $(this).next('span').attr('hidden', 'hidden');
});
//inedx 이름 연락처 옆에 뭐 쓰라고 띄우기
$('#hw').click(function() {
  $('body').animate({scrollTop:0}, 1000);
})
//<--맨위로 스크롤 1초동안-->
function hideMenu(){
	alert("불펌하지마세요");
	return false;
}
document.oncontextmenu = hideMenu;
//불펌방지
$('#submit').click(function(){
  var num = $('#hidden1').val();
  var num2 = $('#hidden2').val();

  if(num!="" && num2!=""){
    var com = confirm(num+"님!\n"+"입력하신 정보가 정확합니까?");
    if(com==true){
      alert($('#hidden1').val() + " 님의 신청이 완료되었습니다.");
      document.getElementById("form_").reset()
    }
    else {
      alert("다시 입력해주세요!")

    }
  }
  else {
    alert("모든 항목을 입력해주셔야 신청이 가능합니다.");
  }
})
//항목을 올바르게 입력하였는지 확인
function over_D(obj){
  obj.src = "D1.PNG";
  obj.style.height = "450px";
  obj.style.width = "450px";
}
function out_D(obj){
  obj.src = "D5.PNG"
  obj.style.height = "300px";
  obj.style.width = "300px";
}

function over_H(obj){
  obj.src = "H2.PNG";
  obj.style.height = "450px";
  obj.style.width = "450px";
}
function out_H(obj){
  obj.src = "H1.PNG"
  obj.style.height = "300px";
  obj.style.width = "300px";
}

function over_B(obj){
  obj.src = "B2.PNG";
  obj.style.height = "450px";
  obj.style.width = "450px";
}
function out_B(obj){
  obj.src = "B1.PNG"
  obj.style.height = "300px";
  obj.style.width = "300px";
}

function over_J(obj){
  obj.src = "J3.PNG";
  obj.style.height = "450px";
  obj.style.width = "450px";
}
function out_J(obj){
  obj.src = "J1.PNG"
  obj.style.height = "300px";
  obj.style.width = "300px";
}

function over_Z(obj){
  obj.src = "Z2.PNG";
  obj.style.height = "450px";
  obj.style.width = "450px";
}
function out_Z(obj){
  obj.src = "Z1.PNG"
  obj.style.height = "300px";
  obj.style.width = "300px";
}
//사진 바꾸기
$("#flip").click(function () {
    $("#panel").slideToggle(1000);
});
//누르면 아래로 스크롤바 내려가기
var i=0;
$("#image_D").bind("click", function() {
if(i==0)
{
  i=1;
        $("#image_D").attr("src","D4.PNG");
}
else if(i==1)
{
  i=2;
        $("#image_D").attr("src","D3.PNG");
}
else if(i==2)
{
  i=3;
        $("#image_D").attr("src","D6.PNG");
}
else {
  i=0;
    $("#image_D").attr("src","D2.PNG");
}
});
var j=0;
$("#image_H").bind("click", function() {
if(j==0)
{
  j=1;
        $("#image_H").attr("src","H4.PNG");
}
else if(j==1)
{
  j=2;
        $("#image_H").attr("src","H5.PNG");
}
else if(j==2)
{
  j=3;
        $("#image_H").attr("src","H6.PNG");
}
else {
  j=0;
    $("#image_H").attr("src","H3.PNG");
}
});
var k=0;
$("#image_B").bind("click", function() {
if(k==0)
{
  k=1;
        $("#image_B").attr("src","B4.PNG");
}
else if(k==1)
{
  k=2;
        $("#image_B").attr("src","B5.PNG");
}
else if(k==2)
{
  k=3;
        $("#image_B").attr("src","B6.PNG");
}
else {
  k=0;
    $("#image_B").attr("src","B3.PNG");
}
});

var p=0;
$("#image_J").bind("click", function() {
if(p==0)
{
  p=1;
        $("#image_J").attr("src","J4.PNG");
}
else if(p==1)
{
  p=2;
        $("#image_J").attr("src","J5.PNG");
}
else if(p==2)
{
  p=3;
        $("#image_J").attr("src","J6.PNG");
}
else {
  p=0;
    $("#image_J").attr("src","J2.PNG");
}
});

var z=0;
$("#image_Z").bind("click", function() {
if(z==0)
{
  z=1;
        $("#image_Z").attr("src","Z5.PNG");
}
else if(z==1)
{
  z=2;
        $("#image_Z").attr("src","Z7.PNG");
}
else if(z==2)
{
  z=3;
        $("#image_Z").attr("src","Z8.PNG");
}
else if(z==3)
{
  z=4;
        $("#image_Z").attr("src","Z9.PNG");
}
else {
  z=0;
    $("#image_Z").attr("src","Z3.PNG");
}
});
//이미지 변경
$("#animate-demo").mouseenter(function () {
    $("#animate-demo").animate({ left: "170px", opacity: "0.5" }, 2000);
    $("#animate-demo").animate({ fontSize: "150px" }, 1000);
});
//별크기 변경
$(".f1").mouseover(function() {
  $(".f1").css("background-color","silver");
    })
$(".f1").mouseout(function(){
  $(".f1").css("background-color","white");
})
$(".f2").mouseover(function() {
  $(".f2").css("background-color","silver");
    })
$(".f2").mouseout(function(){
  $(".f2").css("background-color","white");
})
$(".f3").mouseover(function() {
  $(".f3").css("background-color","silver");
    })
$(".f3").mouseout(function(){
  $(".f3").css("background-color","white");
})
$(".f4").mouseover(function() {
  $(".f4").css("background-color","silver");
    })
$(".f4").mouseout(function(){
  $(".f4").css("background-color","white");
})
$(".f5").mouseover(function() {
  $(".f5").css("background-color","silver");
    })
$(".f5").mouseout(function(){
  $(".f5").css("background-color","white");
})
$(".f6").mouseover(function() {
  $(".f6").css("background-color","silver");
    })
$(".f6").mouseout(function(){
  $(".f6").css("background-color","white");
})
//table 색깔 변경
$("#show").click(function () {
    $("#demo-1").show(2000);
});
$("#hide").click(function () {
    $("#demo-1").hide();
});
