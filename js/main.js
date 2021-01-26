function load() {
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        const body = document.querySelector('body');

        function mainFunction() {
            function screen() {
                const 
                    btn = $('.fullscreen__btn'),
                    btnText = $('.fullscreen__btn span'),
                    fullscreen = $('.fullscreen'),
                    fullscreenEl = $('.fullscreen__el-white'),
                    translateBtn = $('.translate-page__btn');
        
                $(btn).on('click', function (e) {
                    e.preventDefault();
                    $(this).toggleClass('active');
                    $(fullscreen).toggleClass('active');
                    $(fullscreenEl).toggleClass('active');
                    $(translateBtn).toggleClass('active');
                });
            };
            screen();
        
            function translate() {
                let langText = {
                    'en': {
                        'descr': 'This is a full screen block (on all devices)',
                        'onClick': 'Click'
                    },
                    'ru': {
                        'descr': 'Это полноэкранный блок (на всех устройствах)',
                        'onClick': 'Нажми'
                    }
                };
        
                const translatePageBtn = $('.translate-page__btn');
        
                translatePageBtn.on('click', function(e) {
                    e.preventDefault();
                    const translatePage = $('.translate-page');
        
                    if ((!translatePage.children().hasClass('hidden')) || (translatePage.children().hasClass('hidden'))) {
                        translatePageBtn.toggleClass('hidden');
                    }
        
                    let 
                        lang = $(this).attr('id'),
                        langClass = $('.lang');
        
                    langClass.each(function(index, item) {
                        $(this).text(langText[lang][$(this).attr('key')]);
                    });
                });
            };
            translate();            
        };
        mainFunction();

        loader.className += ' loader_no-active'; 
        body.className += ' overflow-active';
    });
}
load();