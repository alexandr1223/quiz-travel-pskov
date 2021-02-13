window.addEventListener('DOMContentLoaded', () => {

    jQuery(function($){
        $("#tel").mask("+7(999) 999-9999");
    });

    function firstScreenHide() {
        document.querySelector('.content-left__first-btn').addEventListener('click', function() {
            document.querySelector('.content__hi').style.display = "none"
            document.querySelector('.content__all').style.display = "block"
        })
    }
    firstScreenHide();

    function optionClick() {
        let selected = null;
        document.querySelectorAll('.content-quiz__block').forEach(item => {
            console.log(item)
            item.addEventListener('click', event => {
                if (event.target.classList.contains('content-quiz__item')) {
                    if (selected) {
                        selected.classList.remove('check')
                    }
                    
                    selected = event.target;
                    
                    selected.classList.add('check');
                }
                if (event.target.classList.contains('content-quiz__item--first')) { // Если клик был на элемент первого блока вопросов
                    document.querySelector('.content-quiz__next').classList.add('nextActive'); // Делаем кнопку Далее активной
                } else if (event.target.classList.contains('content-quiz__item--second')) {  
                    document.querySelector('.content-quiz__next').classList.add('nextActive');
                } else if (event.target.classList.contains('content-quiz__item--third')) { 
                    document.querySelector('.content-quiz__next').classList.add('nextActive');
                } else if (event.target.classList.contains('content-quiz__item--fourth')) { 
                    document.querySelector('.content-quiz__next').classList.add('nextActive');
                }
            }, false)
        })
    }
    optionClick();

  

function nextBlock() {
    let counter = 0,
        percent = 0,
        titles = {
            first: 'Как часто вы работаете с оборудованием, которое создает вибрацию?',
            second: 'Хотели бы вы получить защиту ваших рук от воздействия вибрации с помощью нашей научной разработки?',
            third: 'Какая степень защиты вам требуется?',
            fourth: 'Вам нужны перчатки или рукавицы ?'
        };
    
    // Функция смены заголовка
    function setTitle() {
        let titleBlock = document.querySelector('.content-quiz__title'); // Заголовок
        let percentNum = document.querySelector('.content-quiz__progress--title span'); // Число процентов
        let percentLine = document.querySelector('.content-quiz__line'); // Линия процентов
        function setPercent() {
            percentNum.textContent = percent;
            percentLine.style.width = `${percent}%`;
        }
        switch(counter) {
            case 0:
                titleBlock.textContent = titles.first;
                setPercent();
                break;
            case 1:
                titleBlock.textContent = titles.second;
                setPercent();
                break;
            case 2: 
                titleBlock.textContent = titles.third;
                setPercent();
                break;
            case 3:
                titleBlock.textContent = titles.fourth;
                setPercent();
                break;
            case 4:
                function hideTitle() {
                    document.querySelector('.content-quiz__progress').classList.add("blockHide");
                    titleBlock.classList.add("blockHide");
                    function hideNew() {
                        document.querySelector('.content-quiz__progress').classList.add("dNone");
                        titleBlock.classList.add("dNone");
                    }
                    setTimeout(hideNew, 250)
                }
                hideTitle();
                break;
            default:
                titleBlock.textContent = '';
        }
    }

    

    function slideToNextBlock() {
        document.querySelector(".content-quiz__next").addEventListener('click', function() {
            console.log(this)
            if (this.classList.contains("nextActive")) {
            
                counter = counter + 1;
                percent = percent + 25;
                setTitle();
                
    
                // Функция скрытия блока с вариантами выбора
                function hide(block) {
                    document.querySelector(block).classList.add("blockHide");
                    function hideNew() {
                        document.querySelector(block).classList.add("dNone");
                    }
                    setTimeout(hideNew, 250)
                }
    
                // Функция показа следующего блока с вариантами выбора
                function show(block) {
                    function showNew() {
                        document.querySelector(block).classList.add("dBlock");
                        function s() {
                            document.querySelector(block).classList.add("blockShow")
                        }
                        setTimeout(s, 250)
                    }
                    setTimeout(showNew, 250)
                }
                if (counter == 1) {
                    hide(".content-quiz__first");
                    setTimeout(hide(".content-quiz__first"), 0);
                    show(".content-quiz__second");
                    document.querySelector(".content-quiz__prev").classList.add('prevActive')
                } else if (counter == 2) {
                    hide(".content-quiz__second");
                    setTimeout(hide(".content-quiz__second"), 0);
                    show(".content-quiz__third");
                } else if (counter == 3) {
                    hide(".content-quiz__third");
                    setTimeout(hide(".content-quiz__third"), 0);
                    show(".content-quiz__fourth");
                } else if (counter == 4) {
                    hide(".content-quiz__fourth");
                    setTimeout(hide(".content-quiz__fourth"), 0);
                    function nShow() {
                    
                        function showNew() {
                            document.querySelector(".form-send").classList.add("dBlock");
                            function s() {
                                document.querySelector(".form-send").classList.add("blockShow")
                            }
                            setTimeout(s, 150)
                        }
                        setTimeout(showNew, 250)
                    }
                    nShow();
                    document.querySelector(".content-quiz__navigation").classList.add("dNoneHigh");
                }
    
                document.querySelector(".content-quiz__next").classList.remove("nextActive");
            }
        })
    }
    slideToNextBlock();

    function slideToPrevBlock() {
        document.querySelector(".content-quiz__prev").addEventListener('click', function() {
            console.log(this)
            if (this.classList.contains("prevActive")) {
            
                counter = counter - 1;
                percent = percent - 25;
                setTitle();
    
                function hide(blockHide) {
                    document.querySelector(blockHide).classList.add("blockShow");
                    function hideNew() {
                        document.querySelector(blockHide).classList.remove("dBlock");
                    }
                    setTimeout(hideNew, 250)
                }
                function show(block) {
                    
                    function showNew() {
                        document.querySelector(block).classList.remove("dNone");
                        function s() {
                            document.querySelector(block).classList.remove("blockHide")
                        }
                        setTimeout(s, 250)
                    }
                    setTimeout(showNew, 250)
                }
                if (counter == 0) {
                    hide(".content-quiz__second");
                    setTimeout(hide(".content-quiz__second"), 0);
                    show(".content-quiz__first");
                    document.querySelector(".content-quiz__prev").classList.remove('prevActive')
                } else if (counter == 1) {
                    hide(".content-quiz__third");
                    setTimeout(hide(".content-quiz__third"), 0);
                    show(".content-quiz__second");
                } else if (counter == 2) {
                    hide(".content-quiz__fourth");
                    setTimeout(hide(".content-quiz__fourth"), 0);
                    show(".content-quiz__third");
                } else if (counter == 4) {
                    hide(".content-quiz__fourth");
                    setTimeout(hide(".content-quiz__fourth"), 0);
                    function nShow() {
                    
                        function showNew() {
                            document.querySelector(".form-send").classList.add("dBlock");
                            function s() {
                                document.querySelector(".form-send").classList.add("blockShow")
                            }
                            setTimeout(s, 150)
                        }
                        setTimeout(showNew, 250)
                    }
                    nShow();
                    document.querySelector(".content-quiz__navigation").classList.add("dNone");
                }
    
                document.querySelector(".content-quiz__next").classList.remove("nextActive");
            }
    
    
            // function hide() {
            //     document.querySelector(block).classList.add("blockHide");
            //     function hideNew() {
            //         document.querySelector(block).classList.add("dNone");
            //     }
            //     setTimeout(hideNew, 250)
            // }
            // setTimeout(hide, 0)
            // function show() {
            //     document.querySelector(nextBlock).classList.add("dBlock");
            //     function showNew() {
            //         document.querySelector(nextBlock).classList.add("blockShow");
            //     }
            //     setTimeout(showNew, 250)
            // }
            // setTimeout(show, 250)
        })
    }
    slideToPrevBlock();

    
}
nextBlock();


// nextBlock('.content-quiz__first', '.content-quiz__second', '.content-quiz__next');
// nextBlock('.content-quiz__second', '.content-quiz__third', '.nextBtnSecond');
// nextBlock('.content-quiz__third', '.content-quiz__fourth', '.nextBtnThird');
// nextBlock('.content-quiz__fourth', '.form-send', '.nextBtnFourth');


// function prevBlock(block, prevBlock, prevBtn) {
//     document.querySelector(prevBtn).addEventListener('click', () => {
//         document.querySelector(block).style.cssText = "z-index: -100;  opacity: 0; ";
//         document.querySelector(prevBlock).style.cssText = "z-index: 2; opacity: 1; ";
//     })
// }
// prevBlock('.content-quiz__second', '.content-quiz__first', '.prevBtnSecond');
// prevBlock('.content-quiz__third', '.content-quiz__second', '.prevBtnThird');
// prevBlock('.content-quiz__fourth', '.content-quiz__third', '.prevBtnFourth');


var mh = Math.max.apply(Math, $('.content-quiz').map(function(){  
    return $(this).height();
}).get());
$(".content-quiz").height(mh);

function FormSend() {
    $('.content-quiz__item').on('click', function(event) {
        var all_data = $(this).data();
        for (var key in all_data) {
            var data = all_data[key];
            var key = key;
        }
        if ($('.quiz-form').children('input[name="' + key + '"]').length > 0) {
            $('input[name="' + key + '"]').val($(this).data(key));
        } else {
            $(".quiz-form").append('<input type="hidden" name="' + key + '" value="' + $(this).data(key) + '">');
        }
    });
    // $('.content-quiz__options').on('click', function(event) {
    //     var all_data = $(this).data();
    //     for (var key in all_data) {
    //         var data = all_data[key];
    //         var key = key;
    //     }
    //     if ($('.quiz-form').children('input[name="' + key + '"]').length > 0) {
    //         $('input[name="' + key + '"]').val($(this).data(key));
    //     } else {
    //         $(".quiz-form").append('<input type="hidden" name="' + key + '" value="' + $(this).data(key) + '">');
    //     }
    // });

}
FormSend();
})