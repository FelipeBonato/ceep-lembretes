var $newCard = document.querySelector('.newCard');
var $newCardContent = document.querySelector('.newCard-content');
var $newCardAction = document.querySelector('.newCard-action');

$newCardContent.addEventListener('input', function(){
    var $error = document.querySelector('.error');

    if($error != null) {
        $error.remove();
    }
});

$newCard.addEventListener('submit', function (event) {
    event.preventDefault();

    if ($newCardContent.value == '') {

        if (document.querySelector('.error') == null) {
            var $error = document.createElement('span');
            $error.classList.add('error');
            $error.textContent = 'Porfavor, preencha o campo a cima.';
            //inserir antes do botão meu span
            $newCard.insertBefore($error, $newCardAction);
        }
    } else {
        var $wrapCard = document.querySelector('.wrap-card');
        var $card = document.querySelector('.card');
        var $copyCard = $card.cloneNode(true);
        
        //alterando o valor do meu <p> do novo card
        $copyCard.querySelector('.card-content').textContent = $newCardContent.value;

        $wrapCard.insertBefore($copyCard, $card);

    }
});
