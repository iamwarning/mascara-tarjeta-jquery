$(document).ready(function() {

    $('#numero-tarjeta').keydown(function(event) {
        var validarNumer = /^([0-9*]{16,16})*$/;
        if (!$('#cuenta').val().match(validarNumer)) {
            this.value = (this.value + '').replace(/[^0-9*]/g, '');
        }
    });
    $('#confirmar-numero-tarjeta').keydown(function(event) {
        var validarNumer = /^([0-9*])*$/;
        if (!$('#confirmar-cuenta').val().match(validarNumer)) {
            this.value = (this.value + '').replace(/[^0-9*]/g, '');
        }
    });
});

$('#confirmar-numero-tarjeta').keyup(function() {
    $("#resultado").html($('#confirmar-cuenta').val());
    if ($('#confirmar-numero-tarjeta').val().length > 15) {

        if ($('#confirmar-cuenta').val() === $('#cuenta').val()) {
            $('#numero-tarjeta').removeClass('is-invalid').addClass('is-valid');
            $('#confirmar-numero-tarjeta').removeClass('is-invalid').addClass('is-valid');
            $('#resultado').removeClass('text-muted').addClass('text-success');
            $('#resultado').removeClass('text-danger').addClass('text-success');
        } else {
            $('#numero-tarjeta').addClass('is-invalid');
            $('#confirmar-numero-tarjeta').addClass('is-invalid');
            $('#resultado').removeClass('text-muted').addClass('text-danger');

        }
    }
});


function mascaraTarjeta(CampoMask, CampoHidd, bolDes) {
    var iniAnt, mskCar;
    var tempBull = "1999";
    var objCMask = document.getElementById(CampoMask);
    var objCHidd = document.getElementById(CampoHidd);
    var tempValIni = "";
    var tempValFin = "";
    var LognMask = objCMask.value.length;
    var CaulBol = bolDes ? LognMask : (LognMask - 1);
    var tamMask = objCMask.getAttribute("maxlength") > 4 ? ((objCMask.getAttribute("maxlength")) - 4) : 2000000;
    for (x = 0; x < LognMask; x++) {
        mskCar = objCMask.value.charAt(x);
        iniAnt = objCHidd.value.charAt(x);
        if (mskCar != unescape('%2A')) {
            tempValIni += mskCar;
            if (x < tamMask && x != CaulBol) {
                tempValFin += unescape('%2A');
            } else {
                tempValFin += mskCar;
            }
        } else {
            tempValIni += iniAnt;
            if (iniAnt != "") {
                if (x < tamMask) {
                    tempValFin += unescape('%2A');
                } else {
                    tempValFin += iniAnt;
                }
            }
        }
    }
    objCHidd.value = tempValIni;
    objCMask.value = "";
    objCMask.value = tempValFin;
}