//VALIDAÇÃO JS
$(document).ready(function() {
    $('#cpf').mask('999.999.999-99');

    $('#cpf').keyup(function() {
        function validaCPF(cpf) {
            //penúltimo dígito
            var digitoUm = 0;
            //último dígito
            var digitoDois = 0;

            for (i = 0, x = 10; i <=8; i++, x--) {
                digitoUm += cpf[i] * x;
            }

            for (i = 0, x = 11; i <= 9; i++, x--) {
                if (i.toString().repeat(11) == cpf) {
                    $('.field').addClass('error');
                    $('.field p').html('CPF inválido');
                    $('.field p').css('color', '#9f3a38');
                    return false;
                }
                digitoDois += cpf[i] * x;
            }

            //calculando penúltimo número
            var calculoUm = ((digitoUm % 11) < 2) ? 0 : 11-(digitoUm % 11);
            //calculando último número
            var calculoDois = ((digitoDois % 11) < 2) ? 0 : 11-(digitoDois % 11);

            //comparando os cálculos com os dois últimos dígitos
            if (calculoUm != cpf[9] || calculoDois != cpf[10]) {
                return false;
            } else {
                return true;
            }
        }

        //pegando o valor do campo cpf e retirando pontos e traços
        var cpf = $('#cpf').val();
        cpf = cpf.replace(/[^\d]+/g,'');

        //verificações
        if(validaCPF(cpf)) {
            $('.field').removeClass('error');
            $('.field').addClass('success');
            $('.field p').html('CPF válido');
            $('.field p').css('color', 'green');
        } else if(cpf.length < 11) {
            $('.field').addClass('error');
            $('.field p').html('menos de 11 números');
            $('.field p').css('color', '#9f3a38');
        } else if (cpf == '') {
            $('.field').addClass('error');
            $('.field p').html('campo vazio');
            $('.field p').css('color', '#9f3a38');
        } else {
            $('.field').removeClass('success');
            $('.field').addClass('error');
            $('.field p').html('CPF inválido');
            $('.field p').css('color', '#9f3a38');
        }
    });
});