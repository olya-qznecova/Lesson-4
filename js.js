$(function(){
    $('.menu a').click(function(event) {
        event.preventDefault(); // отменяем стандартное действие браузера при событии "клик" (клик по ссылке без перехода на новый URL)
        $('.menu .active').removeClass('active'); // убираем у активного элемена класс active
        $(this).addClass('active'); // добавляем класс active элементу, на котором произошло событие (клик)
        var page = $(this).attr('href'); // получаем значение href элемента, на котором сработало событие
        $('.page').not(page).css({'display':'none'}); //меняем у вкладки значение display:block на none
        $(page).fadeToggle(600); //анимация
    });
});