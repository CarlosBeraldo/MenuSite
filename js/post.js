var post = ['ZOE - O ASPECTO DO CREPÚSCULO','Falaremos um pouco sobre a Zoe que personifica a travessura, a imaginação e a mudança,'+ 
' Zoe atua como a mensageira cósmica do Targon, anunciando a chegada de grandes eventos que transformam mundos.'+
' Sua mera presença já distorce a matemática ancestral que governa a realidade, e às vezes ela pode causar desastres sem ter a menor intenção ou malícia.'+
' Talvez isso explique a despreocupação com que Zoe encara seus deveres, e talvez por isso ela tenha tempo de sobra para brincar, ludibriar os mortais ou '+
'simplesmente se divertir. Um encontro com Zoe pode ser prazeroso e revigorante, mas é sempre mais do que parece e, na maioria das vezes, é extremamente perigoso.'+
'Tal qual a natureza do se seu aspecto targoniano, Zoe não chegou ao poder pelos meios tradicionais. Ela não derrotou forças extremamente ameaçadoras, nem se sacrificou por algum nobre ideal,'+
' nem superou o desafio existencial de escalar o Monte Targon. Na verdade, Zoe era uma garota comum, que foi aparentemente escolhida ao acaso.',
'SYNDRA - A SOBERANA SOMBRIA',
'Quando criança em Navori, Syndra costumava se dispersar com facilidade.'+
' Ela muitas vezes podia se perder na beleza mágica de um lago envolto em sombras ou de uma trilha de besouros escalando uma parede.'+
' Sempre que deixava suas tarefas por fazer, sua mãe a repreendia duramente pela falta de objetividade.'+
' Syndra sempre levava a culpa quando o leite azedava ou quando pequenos infortúnios aconteciam na família.'+'Seu irmão mais velho, Evard,'+
' era quem mais a provocava. Quando isso acontecia, ela costumava se recolher em seu refúgio preferido: o salgueiro-fantasma,'+
' a árvore sagrada do povo de seu vilarejo. Sozinha, ela passava horas conversando com a árvore em busca de consolo.'+
' Mas, certo dia, sem perceber, ela foi seguida por Evard e seus amigos até seu esconderijo.'+
' Eles riram e zombaram de seu choro ingênuo de criança. Enquanto tentava ignorar os insultos,'+
' a vergonha e a raiva cresciam dentro dela, até que um deles jogou um punhado de areia em sua cabeça.'+
' Foi então que Syndra perdeu o controle de suas emoções.'+
' Sua raiva entrou em erupção na forma de orbes mágicos sombrios e cintilantes com o peso de toda a angústia acumulada',
'CORKI - O BOMBARDEIRO OUSADO','Quando Heimerdinger e seus companheiros yordles migraram para Piltover,'+
' eles fizeram com que a ciência se tornasse seu estilo de vida,'+
' e imediatamente fizeram inovadoras contribuições para a comunidade tecmatúrgica.'+
' O que falta de tamanho aos yordles, eles compensam em trabalho. Corki, o Bombardeiro Ousado,'+
' ganhou esse título por ser piloto de teste de uma dessas contribuições - o design original para o Helicóptero de Linha de Frente para Operações de Reconhecimento,'+
' um veículo de ataque aéreo que se tornou a espinha dorsal da Força Expedicionária de Bandópolis (FEB).'+
' Junto a seu esquadrão - os Serpentes Gritantes - Corki voa sobre Valoran,'+
' fazendo o levantamento da topografia e conduzindo manobras acrobáticas para a admiração dos observadores lá embaixo.'+'Corki é o mais renomado dos Serpentes Gritantes por manter o controle sob fogo inimigo e demonstrando bravura até demais.'+
' Ele trabalhou de várias formas, quase sempre sendo voluntário em missões que o levariam além das linhas inimigas,'+
' tanto para adquirir informações confidenciais quanto levar mensagens através de áreas em guerra.'+
' Ele triunfa sobre o perigo, e adora uma boa perseguição aérea pela manhã. Mais do que apenas um piloto de primeira,'+
' Corki também fez várias modificações em seu helicóptero,'+
' equipando-o com um arsenal de armas que alguns acreditam estar lá mais para aparecer do que para funcionar.'+
' Após o cessar-fogo, ele foi forçado a se aposentar, comentando sobre este episódio com "sem gasolina no tanque e com as asas cortadas".'+
' Ele tentou passar o tempo como dublê de voo e guia turístico de desfiladeiros, mas não era a mesma coisa -'+
' ele sentia falta do refrescante cheiro de pólvora ao seu redor.'];
var dataPost = ['Postado em 25 de Setembro 2019']

function postagem(number){
    if(number==0){
        var postagem = document.createElement('div');
        postagem.id = 'postagem';
        document.getElementById("post1").appendChild(postagem);
        var titulo = document.createElement('h6');
        titulo.innerHTML = post[0];
        document.getElementById('postagem').appendChild(titulo);
        var dataPostagem = document.createElement('span');
        dataPostagem.className = "data-postagem";
        dataPostagem.innerHTML = dataPost[0];
        document.getElementById('postagem').appendChild(dataPostagem);
        var imagem = document.createElement('img');
        imagem.className ="img-postagem";
        imagem.src ="img/zoe2.jpg";
        imagem.width ="228";
        imagem.height ="158";
        document.getElementById('postagem').appendChild(imagem);
        var texto = document.createElement('p');
        texto.innerHTML = post[1];
        document.getElementById('postagem').appendChild(texto);
    }
    else if(number==1){
        var postagem = document.createElement('div');
        postagem.id = 'postagem';
        document.getElementById("post1").appendChild(postagem);
        var titulo = document.createElement('h6');
        titulo.innerHTML = post[2];
        document.getElementById('postagem').appendChild(titulo);
        var dataPostagem = document.createElement('span');
        dataPostagem.className = "data-postagem";
        dataPostagem.innerHTML = dataPost[0];
        document.getElementById('postagem').appendChild(dataPostagem);
        var imagem = document.createElement('img');
        imagem.className ="img-postagem";
        imagem.src ="img/Syndra.jpg";
        imagem.width ="228";
        imagem.height ="158";
        document.getElementById('postagem').appendChild(imagem);
        var texto = document.createElement('p');
        texto.innerHTML = post[3];
        document.getElementById('postagem').appendChild(texto);
    }
    else if(number==2){
        var postagem = document.createElement('div');
        postagem.id = 'postagem';
        document.getElementById("post1").appendChild(postagem);
        var titulo = document.createElement('h6');
        titulo.innerHTML = post[4];
        document.getElementById('postagem').appendChild(titulo);
        var dataPostagem = document.createElement('span');
        dataPostagem.className = "data-postagem";
        dataPostagem.innerHTML = dataPost[0];
        document.getElementById('postagem').appendChild(dataPostagem);
        var imagem = document.createElement('img');
        imagem.className ="img-postagem";
        imagem.src ="img/Corki.jpg";
        imagem.width ="228";
        imagem.height ="158";
        document.getElementById('postagem').appendChild(imagem);
        var texto = document.createElement('p');
        texto.innerHTML = post[5];
        document.getElementById('postagem').appendChild(texto);
    }


}
