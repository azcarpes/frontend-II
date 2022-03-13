function dark() {

    let bodydark = document.querySelectorAll('body');

    bodydark.forEach(body => {
        body.classList.add('bodydark');
    })

    let titulodark = document.querySelectorAll('h1');

    titulodark.forEach(h1 => {
        h1.classList.add('titulodark');
    })

    let itemdark = document.querySelectorAll('.item');

    itemdark.forEach(item => {
        item.classList.add('itemdark');
    })
    
    let textodark = document.querySelectorAll('.container');

    textodark.forEach(container => {
    container.classList.add('textodark');
    })
}


let novoCard = document.querySelector("div");

novoCard.innerHTML = 
`<div class="item">
    <img src="./imagens/tiger.jpg">
    <h2>O tigre</h2>
    <p> O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae)
  pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador
  carnívoro e é a maior espécie de felino do mundo.</p>
 </div>
<div class="item">
      <img src="./imagens/leon.jpg">
      <h2>O leão</h2>
      <p>
        O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero
        gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África
        subsahariana
        (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da
        Índia.
      </p>
    </div>
    <div class="item">
      <img src="./imagens/leopardo.jpg">
      <h2>O leopardo</h2>
      <p>
        O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros
        felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso
        hióide que lhes permite rugir.
        É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra
        (melanista).
      </p>
    </div>
    <div class="item">
      <img src="./imagens/pantera-negra.jpg">
      <h2>A pantera negra</h2>
      <p>
        A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o
        leopardo (Panthera pardus) e a onça-pintada (Panthera onca).
        Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma
        variação negra destes animais.
      </p>
    </div>
    <div class="item">
      <img src="./imagens/jaguar.jpg">
      <h2>O jaguar</h2>
      <p>
        O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do
        gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também
        é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera
        leo).
      </p>
    </div>
    <div class="item">
      <img src="./imagens/chita.jpg">
      <h2>O guepardo</h2>
      <p>
        O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único
        representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre
        mais rápido
        do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.
      </p>
    </div>`
