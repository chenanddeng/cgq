/**
 * Created by Administrator on 2016/10/16.
 */
// 点击切换旅游地区显示状态
// 获取当前点击标签下表，显示对应的内容
var  $tabA = $('.searchbox_clickable_search__tab a');
var  $navigation = $('.searchbox_clickable_search__navigation');
var  $searchTab = $('.searchbox_clickable_search__tab');
$tabA .on({
    click:function () {
        var name = $(this).attr('name');
        $('#ss').val(name)
    }
});
$navigation.children('li').on({
    click:function () {
        var $liIndex = 1*($(this).index())+1;
        $searchTab.each(function () {
            if ($(this).attr('id')==$liIndex){
                $(this).css('display','block')
            }else {
                $(this).css('display','none')
            }
        })
    }
});
// 点击按钮关闭input标签nav
$('.bicon-aclose').click(function () {
    $('.searchbox_clickable_search').css('display','none')
});
// 点击input标签显示nav
$('#ss').click(function () {
    $('.searchbox_clickable_search').css('display','block')
});
// 给选中的tag添加蓝色border，其他兄弟去除
$('.searchbox_clickable_search__navigation__item__link').click(function () {
    $('.searchbox_clickable_search__navigation__item__link').removeClass('searchbox_clickable_search__navigation__item__link--selected');
    $(this).addClass('searchbox_clickable_search__navigation__item__link--selected')
});
$(document).on("click", "*", function(){
    $('#ii').css('display','none')
});
$("#ii").click(function(){return false});
$('#ss').click(function(){return false});

