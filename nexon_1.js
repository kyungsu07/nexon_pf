$(function () {
    $('.ham').click(function () {
        $('.gnb').fadeToggle()
    })

    let w = $('.slide>li').width()
    let intv = setInterval(function () {
        nextAni()
    }, 5000)

    function nextAni() {
        $('.slide').animate({
            marginLeft: -w
        }, 700, function () {
            $('.slide>li').eq(0).appendTo('.slide')
            $('.slide').css({
                marginLeft: 0
            })
            $('.slide_bt span').eq(0).appendTo('.slide_bt')
        })
    }

    $('.tab_list>li').click(function () {

        $('.tab_list>li').removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        console.log(idx)
        $('.game_con').removeClass('on')
        $('.game_con').eq(idx).addClass('on')
    })

    $('.tab_list2 > li').click(function () {
        $('.tab_list2 > li').removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        console.log(idx)
        $('.game_con2').removeClass('on')
        $('.game_con2').eq(idx).addClass('on')
    })  
    
    $()
})