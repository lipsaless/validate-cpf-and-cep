<?php //include('controller/validacao.php'); ?>

<!-- Semantic -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.css"/>
<link rel="stylesheet" href="css/style.css">

<!-- Jquery -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.js"></script>
<script src="jquery-mask/jquery.mask.js"></script>
<script src="js/style.js"></script>


<div id="form">
    <form id="form-cpf" class="ui form" method="POST" action="">
        <div class="field">
            <label>Insira o cpf:</label>
            <input type="text" name="cpf" id="cpf">
            <p></p>
        </div>
        <button class="ui green button" type="submit">Consultar</button>
    </form>
</div>

<?php 
    //VALIDAÇÃO PHP

    // $cpf = $_POST['cpf'];

    // if (@isCpf($cpf)) {
    //     echo    '<div id="msg" class="ui positive message">
    //                 <i class="close icon"></i>
    //                 <div class="header">
    //                     CPF Válido
    //                 </div>
    //             </div>';
    // } else {
    //     echo    '<div id="msg" class="ui negative message">
    //                 <i class="close icon"></i>
    //                 <div class="header">
    //                     CPF Inválido
    //                 </div>
    //             </div>';
    // } 
?>