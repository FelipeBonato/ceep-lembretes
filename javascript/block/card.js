// var $cardColors= document.querySelectorAll(".card-colors");

// for (let index = 0; index < $cardColors.length; index++) {
//     $cardColors[index].addEventListener('click', function(){
//         var $card = this.parentNode.parentNode.parentNode;
//             //this dá referencia de quem foi clicado
//         $card.dataset.color = this.dataset.color;

//         for(var position = 0; position < $cardColors.length; position++) {
//             $cardColors[position].classList.remove('isActive');
//         }
//         this.classList.add('isActive');
//     });  
// }

var $wrapCard = document.querySelector('.wrap-card');
var $cardColors = document.querySelectorAll(".card-options");

    $wrapCard.addEventListener('click', function(event) {

        var $this = event.target;
        console.log($this.parentNode.parentNode.parentNode);
        var $card = $this.parentNode.parentNode.parentNode;
        var $cardContent = $card.querySelector(".card-content");  // <p>

        //checando se o elemento tem valor
        if ($this.dataset.color) {
        $card.dataset.color = $this.dataset.color;
        
        for (var position = 0; position < $cardColors.length; position++){
            $cardColors[position].classList.remove('isActive');
        }

        $this.classList.add('isActive');
        }

        if ($this.classList.contains('card_delete')){
            $card.remove();
        }

        if ($this.classList.contains('card_edit')) {
            if($cardContent.getAttribute('contenteditable') == 'false'){  //string
                $cardContent.setAttribute('contenteditable', 'true'); //trocar o valor de consteteditable de false para true
                $cardContent.focus();
                $this.classList.add('isActive'); // this é que "está"sendo clicado
            } else {
                $cardContent.setAttribute('contenteditable', 'false');
                $cardContent.blur();  // remove o focus quando clicar em outro elemento
                $this.classList.remove('isActive');
            }    
        }
    });

