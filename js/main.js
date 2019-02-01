/*
    TIMEPAD WIDGET
    author: Dmitry Karbushev
    time: 2019.01
    version: 0.33
*/

// MAGNIFIC POPUP
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
'use strict'

// APPEND STYLES
var styles = document.createElement('style');
styles.innerText = ".mfp-bg,.mfp-wrap{position:fixed;left:0;top:0}.mfp-bg,.mfp-container,.mfp-wrap{height:100%;width:100%}.mfp-arrow:after,.mfp-arrow:before,.mfp-container:before,.mfp-figure:after{content:''}.link-button_v1,.table-line_v1{-webkit-transition:background-color .4s ease-out,border-color .4s ease-out,color .4s ease-out}.mfp-bg{z-index:1042;overflow:hidden;background:#0b0b0b;opacity:.8}.mfp-wrap{z-index:1043;outline:0!important;-webkit-backface-visibility:hidden}.mfp-container{text-align:center;position:absolute;left:0;top:0;padding:0 8px;box-sizing:border-box}.mfp-container:before{display:inline-block;height:100%;vertical-align:middle}.mfp-align-top .mfp-container:before{display:none}.mfp-content{position:relative;display:inline-block;vertical-align:middle;margin:0 auto;text-align:left;z-index:1045}.mfp-ajax-holder .mfp-content,.mfp-inline-holder .mfp-content{width:100%;cursor:auto}.mfp-ajax-cur{cursor:progress}.mfp-zoom-out-cur,.mfp-zoom-out-cur .mfp-image-holder .mfp-close{cursor:-moz-zoom-out;cursor:-webkit-zoom-out;cursor:zoom-out}.mfp-zoom{cursor:pointer;cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in}.mfp-auto-cursor .mfp-content{cursor:auto}.mfp-arrow,.mfp-close,.mfp-counter,.mfp-preloader{-webkit-user-select:none;-moz-user-select:none;user-select:none}.mfp-loading.mfp-figure{display:none}.mfp-hide{display:none!important}.mfp-preloader{color:#CCC;position:absolute;top:50%;width:auto;text-align:center;margin-top:-.8em;left:8px;right:8px;z-index:1044}.mfp-preloader a{color:#CCC}.mfp-close,.mfp-preloader a:hover{color:#FFF}.mfp-s-error .mfp-content,.mfp-s-ready .mfp-preloader{display:none}button.mfp-arrow,button.mfp-close{overflow:visible;cursor:pointer;background:0 0;border:0;-webkit-appearance:none;display:block;outline:0;padding:0;z-index:1046;box-shadow:none;touch-action:manipulation}.mfp-figure:after,.mfp-iframe-scaler iframe{box-shadow:0 0 8px rgba(0,0,0,.6);position:absolute;left:0}button::-moz-focus-inner{padding:0;border:0}.mfp-close{width:44px;height:44px;line-height:44px;position:absolute;right:0;top:0;text-decoration:none;text-align:center;opacity:.65;padding:0 0 18px 10px;font-style:normal;font-size:28px;font-family:Arial,Baskerville,monospace}.mfp-close:focus,.mfp-close:hover{opacity:1}.mfp-close:active{top:1px}.mfp-iframe-holder .mfp-close,.mfp-image-holder .mfp-close{color:#FFF;right:-6px;text-align:right;padding-right:6px;width:100%}.mfp-counter{position:absolute;top:0;right:0;color:#CCC;font-size:12px;line-height:18px;white-space:nowrap}.mfp-figure,img.mfp-img{line-height:0}.mfp-arrow{position:absolute;opacity:.65;margin:-55px 0 0;top:50%;padding:0;width:90px;height:110px;-webkit-tap-highlight-color:transparent}.mfp-arrow:active{margin-top:-54px}.mfp-arrow:focus,.mfp-arrow:hover{opacity:1}.mfp-arrow:after,.mfp-arrow:before{display:block;width:0;height:0;position:absolute;left:0;top:0;margin-top:35px;margin-left:35px;border:inset transparent}.mfp-arrow:after{border-top-width:13px;border-bottom-width:13px;top:8px}.mfp-arrow:before{border-top-width:21px;border-bottom-width:21px;opacity:.7}.mfp-arrow-left{left:0}.mfp-arrow-left:after{border-right:17px solid #FFF;margin-left:31px}.mfp-arrow-left:before{margin-left:25px;border-right:27px solid #3F3F3F}.mfp-arrow-right{right:0}.mfp-arrow-right:after{border-left:17px solid #FFF;margin-left:39px}.mfp-arrow-right:before{border-left:27px solid #3F3F3F}.mfp-iframe-holder{padding-top:40px;padding-bottom:40px}.mfp-iframe-holder .mfp-content{line-height:0;width:100%;max-width:900px}.mfp-image-holder .mfp-content,img.mfp-img{max-width:100%}.mfp-iframe-holder .mfp-close{top:-40px}.mfp-iframe-scaler{width:100%;height:0;overflow:hidden;padding-top:56.25%}.mfp-iframe-scaler iframe{display:block;top:0;width:100%;height:100%;background:#000}.mfp-figure:after,img.mfp-img{width:auto;height:auto;display:block}img.mfp-img{box-sizing:border-box;padding:40px 0;margin:0 auto}.mfp-figure:after{top:40px;bottom:40px;right:0;z-index:-1;background:#444}.mfp-figure small{color:#BDBDBD;display:block;font-size:12px;line-height:14px}.mfp-figure figure{margin:0}.mfp-bottom-bar{margin-top:-36px;position:absolute;top:100%;left:0;width:100%;cursor:auto}.mfp-title{text-align:left;line-height:18px;color:#F3F3F3;word-wrap:break-word;padding-right:36px}.mfp-gallery .mfp-image-holder .mfp-figure{cursor:pointer}@media screen and (max-width:800px) and (orientation:landscape),screen and (max-height:300px){.mfp-img-mobile .mfp-image-holder{padding-left:0;padding-right:0}.mfp-img-mobile img.mfp-img{padding:0}.mfp-img-mobile .mfp-figure:after{top:0;bottom:0}.mfp-img-mobile .mfp-figure small{display:inline;margin-left:5px}.mfp-img-mobile .mfp-bottom-bar{background:rgba(0,0,0,.6);bottom:0;margin:0;top:auto;padding:3px 5px;position:fixed;box-sizing:border-box}.mfp-img-mobile .mfp-bottom-bar:empty{padding:0}.mfp-img-mobile .mfp-counter{right:5px;top:3px}.mfp-img-mobile .mfp-close{top:0;right:0;width:35px;height:35px;line-height:35px;background:rgba(0,0,0,.6);position:fixed;text-align:center;padding:0}}.col_v1,.row_v1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox}.link-button_v1,.white-popup-block{position:relative;font-family:'3ds',Arial,Helvetica,sans-serif}@media all and (max-width:900px){.mfp-arrow{-webkit-transform:scale(.75);transform:scale(.75)}.mfp-arrow-left{-webkit-transform-origin:0;transform-origin:0}.mfp-arrow-right{-webkit-transform-origin:100%;transform-origin:100%}.mfp-container{padding-left:6px;padding-right:6px}}.col_v1{display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%}.menu_v1,.row_v1{-webkit-box-orient:horizontal;-webkit-box-direction:normal;width:100%}.row_v1{display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.link-button_v1,.menu_v1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox}.menu__item_v1{list-style:none}.menu_v1{display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.link-button_v1{display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;overflow:hidden;min-width:6em;border-radius:1.6666666667em;margin-right:2em;border:2px solid;color:#fff;text-align:center;text-shadow:none;text-decoration:none;font-size:.938em;padding:.6em 2em;outline:0;transition:background-color .4s ease-out,border-color .4s ease-out,color .4s ease-out}.link-button_v1 svg{margin-right:8px}.link-button_v1 span{width:100%}.link-button_v1.link-button--filled-blue_v1{border-color:#239de8;background:#239de8}.link-button_v1:hover{border-color:#1a77ac;background:#1a77ac}.white-popup-block{background:#FFF;padding:24px 0;text-align:left;max-width:960px;margin:40px auto;color:#010101}.table-head_v1{width:100%;margin-bottom:8px}.table-head_v1 div{width:30%;padding-left:24px}.table-head_v1 div:first-child,.table-head_v1 div:last-child{width:20%}.table-head_v1 div:not(:first-child){border-left:1px solid #dedede}.table-head_v1 span{text-transform:uppercase;padding:8px 0;font-size:11px;color:#333;font-weight:700}.table-line-info_v1,.table-line_v1{width:100%;box-sizing:border-box;border-bottom:2px dotted #efefef;padding:24px 0}.table-line-info_v1 div,.table-line_v1 div{padding-left:24px;padding-right:24px;width:30%}.table-line-info_v1 div:first-child,.table-line-info_v1 div:last-child,.table-line_v1 div:first-child,.table-line_v1 div:last-child{width:20%}.table-line-info_v1 div:nth-child(3),.table-line_v1 div:nth-child(3){-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.table-line_v1{transition:background-color .4s ease-out,border-color .4s ease-out,color .4s ease-out}.table-line_v1:hover{background-color:#eaeaea;cursor:pointer}.table-line-info_v1{padding-left:24px;padding-right:24px}.table-line-info_v1:last-child{border:none;padding-bottom:0}.table-line__time{font-weight:700;color:#333}.table-line__time-title{margin-bottom:8px;text-transform:uppercase;color:#333;font-size:14px}.table-line__title{display:block;margin-bottom:8px;font-size:16px}.table-line__title-title{margin-bottom:8px;text-transform:uppercase;color:#333;font-size:14px}.table-line__descr{display:block;margin-bottom:8px;font-size:12px;color:#999;font-style:italic}.table-line__speakerimg{object-fit:cover;width:80px;height:120px}.table-line__speaker{display:block;width:20px;margin-left:12px;line-height:1.3}.table-line__speaker-title{width:100%;display:block;margin-bottom:8px;text-transform:uppercase;color:#333;font-size:14px}.table-line__planimg{object-fit:cover;width:100%}.table-line__plan{display:block;font-size:12px;color:#999;margin-top:8px;font-style:italic}.js-hidden,.mobile-visible{display:none}.table-line__plan-title{margin-bottom:8px;text-transform:uppercase;color:#333;font-size:14px}.table-line__orgtitle,.table-line__themestitle{text-transform:uppercase;color:#333;padding:8px 0;font-size:12px;font-weight:700;margin-bottom:16px}.table-line__org,.table-line__themes{color:#666;font-size:14px;line-height:1.2}.table-line__back{width:auto!important;margin:36px auto 0;border-radius:20px;cursor:pointer;background-color:#239de8;text-align:center;border-color:#239de8;color:#fff;-webkit-transition:background-color .4s ease-out,border-color .4s ease-out,color .4s ease-out;transition:background-color .4s ease-out,border-color .4s ease-out,color .4s ease-out}.table-line__back span{padding:6px 8px}.table-line__back:hover{background-color:#1a77ac;border-color:#1a77ac}.js-hidden{opacity:0}.mfp-close-btn-in .mfp-close{color:#000!important;opacity:1;width:28px;height:28px;line-height:28px}@media screen and (max-width:780px){.mobile-visible{display:block}.table-head_v1{display:none}.table-line-info_v1,.table-line_v1{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.table-line-info_v1 div,.table-line_v1 div{box-sizing:border-box;width:100%!important;display:block;margin-bottom:24px}.table-line-info_v1 div:nth-child(3),.table-line-info_v1 div:nth-child(4),.table-line_v1 div:nth-child(3),.table-line_v1 div:nth-child(4){-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.white-popup-block{margin-top:0;margin-bottom:0}.mfp-container{padding:0}.table-line__time{display:block;font-size:48px;margin-bottom:24px}.table-line__title{font-size:24px}.table-line__descr{margin-bottom:24px;font-size:18px}.table-line__speakerimg{object-fit:cover;width:180px;height:100%;margin:0 auto}.table-line__speaker{display:block;width:auto;font-size:24px;margin:16px auto 24px;line-height:1.3}.table-line__planimg{object-fit:cover;width:240px;height:auto;margin:0 auto}.table-line__plan{font-size:16px;margin:12px auto 0}.table-line__orgtitle,.table-line__themestitle{padding:8px 0;margin-bottom:8px;font-weight:400;text-transform:uppercase;color:#333;font-size:14px}.table-line__org,.table-line__themes{color:#666;font-size:16px;line-height:1.4}.table-line__back{width:auto!important;margin:36px auto 0;border-radius:20px;cursor:pointer;background-color:#239de8;text-align:center;border-color:#239de8;color:#fff;-webkit-transition:background-color .4s ease-out,border-color .4s ease-out,color .4s ease-out;transition:background-color .4s ease-out,border-color .4s ease-out,color .4s ease-out}.table-line__back span{padding:6px 8px}.table-line__back:hover{background-color:#1a77ac;border-color:#1a77ac}};";
document.body.appendChild(styles);


var handleTWFpostRepaint = function(params) {
    // Убираем копирайт
    this.$$('.twf2-branding').hide();
    // Убираем благотворительную программу
    this.$$('.js-charity').hide();
}

// APPEND JS
// Кнопка покупки билета
var script1 = document.createElement('script');
script1.defer = 'defer';
script1.charset = 'UTF-8';
$(script1).attr('data-timepad-customized', 44466).attr('data-timepad-widget-v2', 'event_register');
script1.src = 'https://timepad.ru/js/tpwf/loader/min/loader.js';
script1.innerText = '(function(){return {"event": {"id" : 888157 }, "hidePreloading" : true, "display": "popup", "popup": {"triggerSelector" : "#timepad_twf_register_888157"},"bindEvents": {"postRepaint": "handleTWFpostRepaint"}}})();';
document.head.appendChild(script1);

// Кнопка предварительно регистрации
var script2 = document.createElement('script');
script2.defer = 'defer';
script2charset = 'UTF-8';
$(script2).attr('data-timepad-customized', 44466).attr('data-timepad-widget-v2', 'event_register');
script2.src = 'https://timepad.ru/js/tpwf/loader/min/loader.js';
script2.innerText = '(function(){return {"event": {"id" : 896017 }, "hidePreloading" : true, "display": "popup", "popup": {"triggerSelector" : "#timepad_twf_register_896017"},"bindEvents": {"postRepaint": "handleTWFpostRepaint"}}})();';
document.head.appendChild(script2);

// Events data file
var script3 = document.createElement('script');
script3.src = 'widget/data.js';
document.head.appendChild(script3);

var locale = {
  ru: {
    buttons1: 'Предварительная регистрация',
    buttons2: 'Программа',
    buttons3: 'Онлайн-трансляции',
    buttons4: 'Купить билет',
    tabletitle1: 'Время мероприятия',
    tabletitle2: 'Наименование мероприятия',
    tabletitle3: 'Спикер',
    tabletitle4: 'Место проведения',
    tabletitle5: 'Организатор',
    tabletitle6: 'Темы для обсуждения',
    translationText: 'Трансляция еще не скоро :\\',
  },
  en: {
    buttons1: 'Pre-registration',
    buttons2: 'Program',
    buttons3: 'Live broadcast',
    buttons4: 'Buy ticket',
    tabletitle1: 'Event time',
    tabletitle2: 'Event name',
    tabletitle3: 'Speaker',
    tabletitle4: 'Event place',
    tabletitle5: 'Promoter',
    tabletitle6: 'Topics for discussion',
    translationText: 'The translation is not soon :\\',
  }
}

$(document).ready(function() {

    var widgetLangMess = {};
    if (window.location.href.indexOf('/ru/') >= 0 ) {
      widgetLangMess = locale['ru'];
      widgetLang = 'ru';
    } else {
      widgetLangMess = locale['en'];
      widgetLang = 'en';
    }


    var widget = $('#widget-v1');
    var content = 
        '<div class="menu_v1">'+
        '<div class="menu__item_v1">'+
            '<a class="link-button_v1 link-button--filled-blue_v1" href="#" id="timepad_twf_register_896017">'+
                '<span>'+
                    widgetLangMess.buttons1 +
                '</span>'+
            '</a>'+
        '</div>'+
        '<div class="menu__item_v1">'+
            '<a class="link-button_v1 link-button--filled-blue_v1 popup-with-form" target="_self" href="#curriculum">'+
                '<span>'+
                    widgetLangMess.buttons2 +
                '</span>'+
            '</a>'+
        '</div>'+
        '<div class="menu__item_v1">'+
            '<a class="link-button_v1 link-button--filled-blue_v1 popup-with-form" target="_self" href="#stream">'+
                '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24" height="16" viewBox="0 0 36 30" enable-background="new 0 0 36 30" xml:space="preserve">'+
                '<polygon fill="#FFFFFF" points="2,23 2,25 5,25 5,26 6,26 6,25 34,25 34,23 6,23 5.917,22 5,22 4.958,23 "/>'+
                '<path fill="#FFFFFF" d="M34,4v17H2V4H34z M15,9v7l7.406-3.5L15,9z"/>'+
                '</svg>'+
                '<span>'+
                    widgetLangMess.buttons3 +
                '</span>'+
            '</a>'+
        '</div>'+
        '<div class="menu__item_v1">'+
            '<a class="link-button_v1 link-button--filled-blue_v1" href="#" id="timepad_twf_register_888157">'+
                '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24" height="16" viewBox="0 0 36 30" enable-background="new 0 0 36 30" xml:space="preserve">'+
                '<path fill="#FFFFFF" d="M0.34,4.842h7.713l5.201,22.423H32.09v-2.153H14.913l-0.896-3.857l16.458-0.044c0,0,1.068,0.084,1.42-0.965c0.35-1.048,4.041-12.157,4.041-12.157s0.439-1.586-1.504-1.588c-1.939-0.002-24.047,0.045-24.047,0.045L9.443,2.734H0.34C0.34,2.734-0.378,3.407,0.34,4.842z"/>'+
                '</svg>'+
                '<span>'+
                    widgetLangMess.buttons4 +
                '</span>'+
            '</a>'+
        '</div>'+
    '</div>'+

    '<div id="curriculum" class="mfp-hide white-popup-block">'+
        '<div class="row_v1 table-head_v1">'+
            '<div class="col_v1">'+
                '<span>'+
                    widgetLangMess.tabletitle1+
                '</span>'+
            '</div>'+
            '<div class="col_v1">'+
                '<span>'+
                    widgetLangMess.tabletitle2+
                '</span>'+
            '</div>'+
            '<div class="col_v1">'+
                '<span>'+
                    widgetLangMess.tabletitle3+
                '</span>'+
            '</div>'+
            '<div class="col_v1">'+
                '<span>'+
                    widgetLangMess.tabletitle4+
                '</span>'+
            '</div>'+
        '</div>'+
        '<div class="table-content_v1 col_v1" id="js-table-content">'+
        '</div>'+
    '</div>'+
    '<div id="stream" class="mfp-hide white-popup-block">'+
        '<h3>' + widgetLangMess.translationText + '</h3>'+
    '</div>';

    widget.append(content);
    $.getScript("widget/data.js").done(function( script, textStatus ) {
        constructPopup();
    });
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        callbacks: {
            beforeOpen: function() {
                $('#curriculum').find('.js-active').removeClass('js-active').addClass('js-hidden').removeAttr('style');
                $('#js-table-content').removeAttr('style');
            }
        }
    });
  



    $(document).on('click', '.js-open-event', function() {
        var $block = $('#' + $(this).data('event'));
        var $content = $('#js-table-content');
        $content.animate({opacity: 0}, 200, function() {
            $content.css({'display': 'none'});
            $block.css({'display':'block'}).animate({'opacity': 1}, 200).removeClass('js-hidden').addClass('js-active');
        });
    });

    $(document).on('click', '.js-popup-back', function() {
        var $block = $('#curriculum').find('.js-active').first();
        $content = $('#js-table-content');
        $block.animate({opacity: 0}, 200, function() {
            $block.css({'display': 'none'}).addClass('js-hidden').removeClass('js-active').removeAttr('style');
            $content.css({'display':'block', 'opacity': 0}).animate({'opacity': 1}, 200);
        });
    });
});


function constructPopup() {
    if (typeof widgetv1events != 'undefined' && widgetv1events.length) {
        var content = '', details = '';
        widgetv1events.forEach(function(el, index) {
            var item = el[widgetLang]; 
            var event = '', themes = '', detail = '';
            event = 
                '<div class="table-line_v1 row_v1 js-open-event" data-event="js-event-' + index +'">'+
                    '<div>'+
                        '<span class="mobile-visible table-line__time-title">'+widgetLangMess.tabletitle1+'</span>'+
                        '<span class="table-line__time">'+
                         item.time +
                        '</span>'+
                    '</div>'+
                    '<div>'+
                        '<span class="mobile-visible table-line__title-title">'+widgetLangMess.tabletitle2+'</span>'+
                        '<span class="table-line__title">'+
                            item.name +
                        '</span>'+
                        '<span class="table-line__descr">'+
                            item.descr +
                        '</span>'+
                    '</div>'+
                    '<div>'+
                        '<span class="mobile-visible table-line__speaker-title">'+widgetLangMess.tabletitle3+'</span>'+
                        '<img src="widget/images/' + item.speaker_img + '" alt="" class="table-line__speakerimg">'+
                        '<span class="table-line__speaker">'+
                            item.speaker +
                        '</span>'+
                    '</div>'+
                    '<div>'+
                        '<span class="mobile-visible table-line__plan-title">'+widgetLangMess.tabletitle4+'</span>'+
                        '<img src="widget/images/' + item.place_img + '" alt="" class="table-line__planimg">'+
                        '<span class="table-line__plan">'+
                            item.place +
                        '</span>'+
                    '</div>'+
                '</div>';
            
            if (item.theme && (item.theme.list.length || item.theme.text)) {
                themes += item.theme.text;
                if (item.theme.list.length) {
                    themes += '<ul>';
                }
                item.theme.list.forEach(function(list, listIndex) {
                    themes += '<li>' + list + '</li>';
                });
                if (item.theme.list.length) {
                    themes += '</ul>';
                }
            }


            detail = 
                '<div id="js-event-' + index + '" class="js-hidden">'+
                    '<div class="table-line-info_v1 row_v1 js-open-event">'+
                        '<div>'+
                            '<span class="mobile-visible table-line__time-title">'+widgetLangMess.tabletitle1+'</span>'+
                            '<span class="table-line__time">'+
                            item.time +
                            '</span>'+
                        '</div>'+
                        '<div>'+
                            '<span class="mobile-visible table-line__title-title">'+widgetLangMess.tabletitle2+'</span>'+
                            '<span class="table-line__title">'+
                                item.name +
                            '</span>'+
                            '<span class="table-line__descr">'+
                                item.descr +
                            '</span>'+
                        '</div>'+
                        '<div>'+
                            '<span class="mobile-visible table-line__speaker-title">'+widgetLangMess.tabletitle3+'</span>'+
                            '<img src="widget/images/' + item.speaker_img + '" alt="" class="table-line__speakerimg">'+
                            '<span class="table-line__speaker">'+
                                item.speaker +
                            '</span>'+
                        '</div>'+
                        '<div>'+
                            '<span class="mobile-visible table-line__plan-title">'+widgetLangMess.tabletitle4+'</span>'+
                            '<img src="widget/images/' + item.place_img + '" alt="" class="table-line__planimg">'+
                            '<span class="table-line__plan">'+
                                item.place +
                            '</span>'+
                        '</div>'+
                    '</div>'+
                    '<div class="table-line-info_v1 col_v1">'+
                        '<span class="table-line__orgtitle">'+
                            widgetLangMess.tabletitle5+
                        '</span>'+
                        '<span class="table-line__org">'+
                            item.founder +
                        '</span>'+
                    '</div>'+
                    '<div class="table-line-info_v1 col_v1">'+
                        '<span class="table-line__themestitle">'+
                            widgetLangMess.tabletitle6+
                        '</span>'+
                        '<span class="table-line__themes">'+
                            themes + 
                        '</span>'+
                        '<div class="table-line__back js-popup-back">'+
                            '<span>'+
                                '<svg baseProfile="tiny" fill="#ffffff" height="24px" version="1.2" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M12,3c0,0-6.186,5.34-9.643,8.232C2.154,11.416,2,11.684,2,12c0,0.553,0.447,1,1,1h2v7c0,0.553,0.447,1,1,1h3  c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-7h2c0.553,0,1-0.447,1-1c0-0.316-0.154-0.584-0.383-0.768  C18.184,8.34,12,3,12,3z"/></svg>'+
                            '</span>'+
                        '</div>'+
                    '</div>'+
                '</div>';


            content += event;
            details += detail;
        });
        if (content.length) {
            $('#js-table-content').append(content);
        }
        if (details.length) {
            $('#js-table-content').after(details);
        }
        
    }
}


