const pics = [
    'nycbw.jpg',
    'nola.jpg',
    'nyc.jpeg',
    'brooklyn.jpg',
    'subway.jpg',
    'dunmore.jpg',
    'spiritedaway.jpg',
    'cuddly-whiskers.jpg',
    'tokyo.jpg',
    'board.jpg',
    'nola-2.jpg',
    'dunmore-2.jpg'
];

const scrollState = {
    about: false,
    work: false,
    connect: false
}

$('#header-btn').on('click', function() {
    $('html, body').animate({
        scrollTop: $('#heading-about').offset().top - 25
    }, 600, 'swing');
})

$(window).scroll(function() {
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() >= 700 && !scrollState.about) {
        scrollState.about = true;
        aboutInit()
    }
    if ($(window).scrollTop() >= 1700 && !scrollState.work) {
        scrollState.work = true;
        workInit()
    }
})

const $header = $('.header');

bgInit();

function barsInit() {
    $('.fill').each(function() {
        let width = $(this).next().text();
        width = Number(width.replace('%', ''));
        $(this).css({'width':`${width}%`});
    })
}

function bgInit() {
    // set initial bg image
    $header.css({
        'background-image': `url('img/${pics[0]}')`
    });
    
    runBg();
}

function runBg() {
    let i = 1;
    setInterval(() => {
        $header.css({
            'background-image': `url('img/${pics[i]}')`
        })
        setTimeout(() => {
            if (i === pics.length - 1) {
                i = 0;
            } else {
                i++;
            }
        }, 750);
    }, 4500)
}

function aboutInit() {
    $('#heading-about').addClass('animated').removeClass('u-hidden');
    $('.section-about__box').each(function() {
        $(this).addClass('animated').removeClass('u-hidden');
    });
    $('.section-about__bars').addClass('animated').removeClass('u-hidden');
    setTimeout(function() {
        barsInit();
    }, 1000);
    $('.section-about__img').addClass('animated').removeClass('u-hidden');
    $('#bio__heading').addClass('animated').removeClass('u-hidden');
    $('#bio__paragraph').addClass('animated').removeClass('u-hidden');
}

function workInit() {
    $('#heading-work').addClass('animated').removeClass('u-hidden');
    $('.section-work__box').each(function() {
        $(this).addClass('animated').removeClass('u-hidden');
    });
    $('#highlights-heading').addClass('animated').removeClass('u-hidden');
    $('.highlights').addClass('animated').removeClass('u-hidden');
    $('#resume-heading').addClass('animated').removeClass('u-hidden');
    $('#resume-link').addClass('animated').removeClass('u-hidden');
}

