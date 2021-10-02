CountDownTimer('07/22/2022 07:00 PM', 'countdown');

function CountDownTimer(dt, id) {
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'Obrigado pela presença!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = `<p><b>${days}</b> dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos</p>`;
    }

    timer = setInterval(showRemaining, 1000);
}