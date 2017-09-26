define([], function() {
    'use strict';

    return {
        boot: function(el, context, config, mediator) {
            var html = '<style>' + 
            '.immersive-main-media__headline-container, .article__header-info, .content__wrapper--standfirst.mobile-only {' + 
            '       display: none;' +
            '}' +
            '.tonal--tone-feature .tonal__main .drop-cap, .tonal--tone-feature .tonal__main .element-pullquote cite {' +
            '   color: #ffbb00' +
            '}' +
            '.content--immersive-article .in-body-link--immersive {' +
                'color: #222;' +
                'border-bottom-color: #ffbb00;' +
            '}' +
            '</style>';

            el.innerHTML = html;
        }
    };
});
