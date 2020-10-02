function nextpage() {
    let curOpen;
    $(document).ready(function () {
        curOpen = $('.step')[0];
        $('.carousel').carousel({
            interval: false

        })

        $(".left").click(function () {
            $("#video").carousel("prev");
        });

        $(".right").click(function () {
            $("#video").carousel("next");
        });

        $(".left2").click(function () {
            $("#video2").carousel("prev");
        });

        $(".right2").click(function () {
            $("#video2").carousel("next");
        });
        $(".left3").click(function () {
            $("#video3").carousel("prev");
        });

        $(".right3").click(function () {
            $("#video3").carousel("next");
        });

        $('.next-btn').on('click', function () {
            let cur = $(this).closest('.step');
            let next = $(cur).next();
            $(cur).addClass('minimized');
            setTimeout(function () {
                $(next).removeClass('minimized');
                curOpen = $(next);
            }, 400);
        });

        $('.close-btn').on('click', function () {
            let cur = $(this).closest('.step');
            $(cur).addClass('minimized');
            curOpen = null;
        });

        $('.step .step-content').on('click', function (e) {
            e.stopPropagation();
        });

        $('.step').on('click', function () {
            if (!$(this).hasClass("minimized")) {
                curOpen = null;
                $(this).addClass('minimized');
            } else {
                let next = $(this);
                if (curOpen === null) {
                    curOpen = next;
                    $(curOpen).removeClass('minimized');
                } else {
                    $(curOpen).addClass('minimized');
                    setTimeout(function () {
                        $(next).removeClass('minimized');
                        curOpen = $(next);
                    }, 300);
                }
            }
        });
    })
};

function load() {
    window.load = function () {
        const loader = document.querySelector('.loading');
        console.log(loader);
    };
}

function checkusername() {
    var username = document.getElementById('username');
    var email = document.getElementById('email');

    if(username.value != null){
        $.ajax({
            url: '/checkusername',
            data: {
                username: username.value,
            },
            type: 'get',
            dataType: 'json',
            success: function (data) {
                if(data == true){
                    alert('Username already taken')
                }
            }
        });
    }
    else if(email.value != null){
        $.ajax({
            url: '/checkusername',
            data: {
                username: username.value,
            },
            type: 'get',
            dataType: 'json',
            success: function (data) {
                if(data == true){
                    alert('Username already taken')
                }
            }
        });
    }
    
}
