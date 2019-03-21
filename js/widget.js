/*
    TIMEPAD WIDGET
    author: Dmitry Karbushev
    time: 2019.03
    version: 0.01
*/

// APPEND STYLES
var styles = document.createElement('style');
styles.innerText = ".col_v1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%}.row_v1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%}.menu__item_v1{list-style:none}.menu_v1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.link-button_v1{font-family:'3ds',Arial,Helvetica,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;overflow:hidden;position:relative;min-width:6em;border-radius:1.6666666667em;margin-right:2em;border:2px solid;color:#fff;text-align:center;text-shadow:none;text-decoration:none;font-size:.938em;padding:.6em 2em;outline:0;-webkit-transition:background-color .4s ease-out,border-color .4s ease-out,color .4s ease-out;transition:background-color .4s ease-out,border-color .4s ease-out,color .4s ease-out}.link-button_v1 svg{margin-right:8px}.link-button_v1 span{width:100%}.link-button_v1.link-button--filled-blue_v1{border-color:#239de8;background:#239de8}.link-button_v1:hover{border-color:#1a77ac;background:#1a77ac}";
document.body.appendChild(styles);



// Language mess
var widgetLocale = {
  ru: {
    buttons1: 'Регистрация',
    buttons2: 'Расписание',
    buttons3: 'Видеотрансляция',
  },
  en: {
    buttons1: 'Pre-registration',
    buttons2: 'Schedule',
    buttons3: 'Live broadcast',
  }
}

// Language options
var widgetLangMess = {};
if (window.location.href.indexOf('/ru/') + 1) {
  widgetLangMess = widgetLocale['ru'];
  widgetLang = 'ru';
} else {
  widgetLangMess = widgetLocale['en'];
  widgetLang = 'en';
}


// APPEND JS
$(document).ready(function() {

    var buttons = $('#widget-v1-script').data('buttons');

    var widget = $('#widget-v1');
    var content = '<div class="menu_v1">';
    var link = '#';
      // Append registration button
      if (buttons.indexOf('registration') + 1) {
        link = widgetLang == 'ru' ? 'https://3dforum.accredcenter.ru/' : 'https://3dforum.accredcenter.ru/en/';
        content +=
          '<div class="menu__item_v1">'+
              '<a class="link-button_v1 link-button--filled-blue_v1" href="' + link + '" target="_blank">'+
                  '<span>'+
                      widgetLangMess.buttons1 +
                  '</span>'+
              '</a>'+
          '</div>'
      }
      // Append schedule button
      if (buttons.indexOf('schedule') + 1) {
        link = widgetLang == 'ru' ? 'https://3dforum.org/schedule/' : 'https://3dforum.org/en/schedule/';
        content +=
          '<div class="menu__item_v1">'+
              '<a class="link-button_v1 link-button--filled-blue_v1" href="' + link + '" target="_blank">'+
                  '<span>'+
                      widgetLangMess.buttons2 +
                  '</span>'+
              '</a>'+
          '</div>'
      }
      // Append stream button
      if (buttons.indexOf('stream') + 1) {
        link = widgetLang == 'ru' ? 'https://3dforum.org/stream/' : 'https://3dforum.org/en/stream/';
        content +=
          '<div class="menu__item_v1">'+
              '<a class="link-button_v1 link-button--filled-blue_v1" href="' + link + '" target="_blank">'+
                  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24" height="16" viewBox="0 0 36 30" enable-background="new 0 0 36 30" xml:space="preserve">'+
                  '<polygon fill="#FFFFFF" points="2,23 2,25 5,25 5,26 6,26 6,25 34,25 34,23 6,23 5.917,22 5,22 4.958,23 "/>'+
                  '<path fill="#FFFFFF" d="M34,4v17H2V4H34z M15,9v7l7.406-3.5L15,9z"/>'+
                  '</svg>'+
                  '<span>'+
                      widgetLangMess.buttons3 +
                  '</span>'+
              '</a>'
      }
      content +=
            '</div>'+
        '</div>';


    widget.append(content);
});
