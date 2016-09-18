
/*响应式布局 start*/
function _set_font_size_750() {
    //先留着这个方法，不要删，要给专题调用
}
function setRootFontSize() {
    var width = document.documentElement.clientWidth, fontSize;
    if (width > 540) { width = 540 }
    fontSize = (width / 10);
    document.getElementsByTagName('html')[0].style['font-size'] = fontSize + 'px';
}
setRootFontSize();
window.addEventListener('resize', function() {
    setRootFontSize();
}, false);
/*响应式布局 end*/

function start(){
  var allImg = imgfile;
  var len = allImg.length;
  var imgNum = 0;
  $.imgpreload(allImg,{
        each: function () {
            /*this will be called after each image loaded*/
            var status = $(this).data('loaded') ? 'success' : 'error';
            if (status == "success") { 
                imgNum ++;           
                var v = imgNum / len ;
                $(".loading-num").html(Math.round(v * 100) + "%");                
            }
        },
        all: function () {
            /*this will be called after all images loaded*/          
            $(".swiper-container").show();
            $('.loading-wrap').hide();
            var mySwiper = new Swiper('.swiper-container',{
                  mode: 'vertical'
            });
            $('#way-btn').click(function(){
                var name = $("input[name='name']").val();
                var department = $("input[name='department']").val();
                if(name != '' && department != ''){
                  $('.u-enroll-way').hide();
                  $('.u-enroll-result').show();
                }
            });
        }
    });
};
$(function(){
   start(); 
})
