let wheelDelta = 0; // 휠 이벤트 발생시 반환값 확인 변수
let browser = 0; // 파이어폭스 브라우저 판별 변수 Bom / 파이어폭스는 휠값이 달라서

// 7개의 section을 class 요소를 배열처리
// 마우스휠 아래(-120) 한번 값. 위로는(120)
// 파이어폭스는 마우스휠 아래(30) 한번 값. 위로는(-30)
// 파이어폭스 브라우저 판별 => window.navigator.userAgent
// 크롬, 익스플로러, 사파리, 오페라 등 Browser[event-mousewheel]
// 파이어폭스 Browser[event-DOMMouseScroll]
// 이전(prev()), 다음(next())

$('.section').each(function(index){
    $(this).on('mousewheel DOMMouseScroll', function(e){
        e.preventDefault();
        browser = window.navigator.userAgent.toLowerCase().indexOf('firefox');

        if(browser >= 0){
            wheelDelta = -e.detail*40
        }else{
            wheelDelta = e.originalEvent.wheelDelta
        }

        if(wheelDelta < 0){
            if(index < $('.section').length-1){
                $('html, body').stop().animate({scrollTop:$(this).next().offset().top},500);
            }
        }else{
            if(index > 0){
                $('html, body').stop().animate({scrollTop:$(this).prev().offset().top},500);
            }
        }
    });
});

