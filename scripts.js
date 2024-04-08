$(document).ready(function () {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function () {
        open();
    });
    btn_open.click(function () {
        open();
    });
    btn_reset.click(function () {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
        setTimeout(function () {
            showCard();
        }, 2000); // Espera 2 segundos después de abrir el sobre
    }
    function close() {
        envelope.addClass("close")
            .removeClass("open");
        setTimeout(function () {
            hideCard();
        }, 1000); // Espera 1 segundo antes de ocultar la carta
    }

    function showCard() {
        $('#overlay').addClass('open');
    }

    function hideCard() {
        $('#overlay').removeClass('open');
    }

});
