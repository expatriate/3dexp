'use strict'

$(document).ready(function() {
  var widget = $('#widget-v1');
  var content = 
    '<div class="menu">' +
        '<div class="menu__item">' +
            '<a class="link-button link-button--filled-blue popup-with-form" target="_self" href="#test-form">' +
                '<span>' +
                    'Предварительная регистрация' +
                '</span>' +
            '</a>' +
        '</div>' +
        '<div class="menu__item">' +
            '<a class="link-button link-button--filled-blue popup-with-form" target="_self" href="#test-form">' +
                '<span>' +
                    'Расписание' +
                '</span>' +
            '</a>' +
        '</div>' +
        '<div class="menu__item">' +
            '<a class="link-button link-button--filled-blue popup-with-form" target="_self" href="#test-form">' +
                '<span>' +
                    'Трансляция' +
                '</span>' +
            '</a>' +
        '</div>' +
        '<div class="menu__item">' +
            '<a class="link-button link-button--filled-blue popup-with-form" target="_self" href="#test-form">' +
                '<span>' +
                    'Купить билет' +
                '</span>' +
            '</a>' +
        '</div>' +
        '<div class="menu__item">' +
            '<a href="#" id="timepad_twf_register_888157" style="height: 40px !important; display: inline-block !important; text-decoration: none !important;"><img style="height: 40px !important;" src="https://timepad.ru/img/twf2/btns/twfbtn1.png"/></a><script async="async" defer="defer" charset="UTF-8" data-timepad-customized="44466" data-timepad-widget-v2="event_register" src="https://timepad.ru/js/tpwf/loader/min/loader.js">(function(){return {"event" : {"id" : 888157 }, "hidePreloading" : true, "display" : "popup", "popup" : {"triggerSelector" : "#timepad_twf_register_888157"}}})();</script>' +
        '</div>' +
    '</div>';

    widget.append(content);
  



























  /*$('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        console.log(window.parent)
        //window.parent.resetFrameSize($(window).height(),$(window).width())
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });*/
});


