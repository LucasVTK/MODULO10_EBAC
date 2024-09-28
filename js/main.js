$(document).ready(function(){ //perguntando ao Jquery se ele esta pronto
    $('#carrousel-imagens').slick({// ativando o carrosel de imagens usando o plugin slick do Jquery
        autoplay:true,
        arrows:false
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle() // Habilitando a função click para exibir a navegação da pagina
    })

    //MINHA MUDANÇA, APÓS O .MENU-HAMBURGUER FAZER O SLIDE DOWN, POSSO TER 2 OPÇÕES DE RECOLHER ESTA NAVEGAÇÃO, CLICANDO EM QUALQUER LUGAR DA TELA OU CLICANDO NO MENU NOVAMENTE...
    $('.botaoUniversal').on('click', function(){
        $('nav').slideUp()
    })

    
    $('#telefone').mask('(00) 00000-0000', { //VALIDAÇÃO DE CAMPO, VEMOS AQUI O DE TELEFONE COMO EXEMPLO, EM MASK PARA NUMEROS ADICIONE OS 000 E LETRAS O SSS EXEMPLO PLACAS DE CARROS $('#PLACA').MASK('SSS-0000', { PLACEHOLDER: 'ABC-0000'})
        placeholder:'(00)00000-0000'
    })
    $('form').validate({//Chamando o plugin de validação dentro da tag FORM!! SEMPRE LEMBRE DE COLOCAR EM '' e adicionando um objeto dentro desta funçao, no caso as {},depois disso, chamando embaixo, rules:{nome: {required:true}} temos que dizer se é false ou true e as regras de validação ficarão ali dentro.

        // ATENÇÃO!!!! Este plugin NÃO trabalha com ids, e sim com a tag NAME dentro da tag html, tambem não aceita traços!!
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            mensagem: {
                required:true
            },
            telefone:{
                required:false
            },
            VeiculoDeInteresse:{
                required:false
            }
        },
        //Trocando a mensagem padrão do plugin
        messages:{
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira seu E-mail',
            mensagem:'Por favor digite sua mensagem para falar conosco!'   
        },
        //Validando o campo do formulario
            submitHandler: function(form, evento){
                console.log(form)
            },
            //se o formulario estiver incorreto vamos avisar por esta função de validação.
            invalidHandler: function(evento, validador){
                let camposIncorretos = validador.numberOfInvalids()
                if(camposIncorretos)
                alert(`Existem ${camposIncorretos} campos incorretos, complete corretamente para falar conosco`) 
            }   
    })
    $('.lista-veiculos button').click(function(){
        const destino = $('#contato')

        const nomeVeiculo = $(this).parent().find('h3').text()
        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop:destino.offset().top
        }, 1000)
    })
})
