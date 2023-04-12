/*
       ## Child combinator
       *Identificado pelo sinal '>' entre dois seletores
       *Seleciona somente o elemento que é filho direto do pai
       *Elementos depois do filho direto serão desconsiderados
      ex:
       ```css
       body > ul > li
       ```

       ## Adjacent sibling combinator ( combinador do irmão adjacente)
       *Identificado pelo sinal '+' entre dois seletores
       *Seleciona somente o elemento do lado direito que é irmão direto na hierarquia
       ex:
       
       ```css
       h1 + p`
       ```

       ## General sibling combinator ( combinador geral do irmão)
       *Identificado pelo sinal '~' entre dois seletores
       *Seleciona todos os elementos irmãos
       ex:
       ```css
        h1 ~ p
       ```

       ##Utilizando combinadores
       
       ```css
       ul > li [class="red"]
       ```

       ##Dica
       * Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização
       dos elementos.
       * Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.

       ## Pseudo-classes

       É um tipo de seletor que irá selecionar um elemento que estiver em 
       um estado específico.

       Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o
       ponteiro do mouse em cima dele.

       Pseudo-classes começam com 2 pontos seguido do nome da pseudo class.
       `:pseudo-class-name` 

       ## Selcionando elementos com pseudo-classes

       * :first-child
       * :nth-of-type()
       * :nth-child()

       ## Ações do usúario
       * :hover
       * :focus

       ## Atributos
       * :disabled
       * :required


       ## Referência

       https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
       

       ## Pseudo-elements

       Com Pseudo-elements nós podemos adcionar elementos HTML pelo proprio CSS
       `::pseudo-element-name`

       ##  Exemplos
       * ::before
       * ::after
       * ::first-line

       ## Referência
       https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

       ## Normal Flow
       Ou flow é a maneira que os elementos `block`e `inline`
       ficam na página 
       ex: <p>Texto block com <strong>inline</strong> dentro</p>

       ## Tables
       É a maneira de Tabelas onde a tag ´table` recebe um display `table`fazendo com que
       os elementos internos como `ts`e `tr`possam ser usados para montar uma tabela
       ex: <table>
        <tr>
            <td> Hora </td>
            <td> 20:00 </td>
        </tr>
        <tr>
            <td> Hora </td>
            <td> 20:37 </td>
        </tr>
       </table>

       ## Tabless
       Uso das propriedes `float, `clear`para que os elementos possam
       mudar de posição na tela.
       ex:
       <div style="float: left">
        Esquerda
       </div>
       <div style="float: right">
        Direita
       </div>
       <div style="clear: both">
        Normal
       </div>

       ## Flexbox
       A caixa se torna flex, fazendo com que os elementos internos
       possam receber melhor:
       
       - Alinhamento
       - Ordenação
       - Tamanhos flexíveis
       ex.
       ```CSS
       .flexbox{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
       }
       .item: nth-child(1){
        order: 1    
       }
       
       ```html
       <div class="flexbox">
        <div class="item">A</div>
        <div class="item">B</div>
        <div class="item">C</div>
       </div>

       ### Terminologia
        - Flex Container
            - Flex item
        - Nesting (Elementos que contém outros elementos dentro)
        - Axix (eixo)
            - main
                - start, end
                - start, end
            - cross
                - start,end
        - Flex Sizing
            - Flexível
            -altera width/height dos itens para preenchimento dos espaços do flex container

        <div class="container">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>


        # Propriedades do flex container

        * Direção dos itens
        * Multi linhas
        * Alinhamento
            * Principal
            * Cruzado
        * Espaços entre os itens
        
        # Direção dos itens 

        - Flex é uma dimensão (Horizontal ou Vertical)
        - Podemos mudar a direção com `Flex-direction`
        - Valores: (row | row-reverse | column | column-reverse)

        <div class="container">
            <div class="item">A</div>
            <div class="item">B</div>
            <div class="item">C</div>
        </div>
        para essa box ficar flex usa-se ...

        css
        .container{
            display: flex;
            flex-direction: row-reverse; (vai mudar a direção e a Ordenação) 
        }

        .container{
            display: flex;
            flex-direction: column-reverse; (vai mudar a direção e a Ordenação no eixo cruzado ou vertical)
            height: 10mvh; (para mudar a altura) 
        }
        
        # flex-warp

        - Podemos usar multi-linhas.
        - Cada nova linha, um novo flex container.
       
         HTML

        <div class="box">
            <div>A</div>
            <div>B</div>
            <div>C</div>
        </div>

        CSS

        .box{
            /* display: flex; */
            flex-warp: wrap; (Cria novas linhas somente se necessário, com wrap-reverse muda a ordenação)
            border: 1px dashed red;
        }

        .box div{
            border: 1px solid;

            /* width: 80px; */
        }

        # flex-flow

        -shorthand
        - flex-direction || flex-wrap

        # justify-content

        - Alinhamento dos elementos dentro do Container
        - Distribição dos elementos

        ## Valores

        - flex-start
        - flex-end
        - center
        - space-around 
        - space-between
        - spece-evenly

       # align-itens 

       - Alinhamento dos elementos no eixo cruzado 

       ## Valores
       
       - stretch (padrão, esticados)
       - flex-start 
       - flex-end
       - center

       # gap

       - capacidade de colocar espaços entre os elementos


       ## Valores

       Unidades de medidas 
       fixas: px, pt
       flexíveis: %, em, rem



      # Propriedades para os itens

      - flex-basis
      - flex-grow
      - flex-shirink
      - flex
      - order


      # flex-basis
      .box{
        display: flex;

        border: 1px dashed red;
        }

        .box div{
            border: 1px solid;
            flex-basis: auto;(usado para alterar largura, auto e o padrão e pode-se usar
            %, px etc)
        }


        # flex-grow

        - O crescimento do item dentro do container
        em relação aos espaços vazios.

        .box{
        display: flex;

        border: 1px dashed red;
        }

        .box div{
            border: 1px solid;
        }
        .box div: nth-child|(2),
        .box div: nth-child|(3){
            flex-grow: 1;       (Faz cada elemento ficar com uma fração do espaço)
        }
        .box div: nth-child|(1){
            flex-grow: 2;  (Faz este elemento ficar com duas frações do espaço)
        }

        # flex-shirink 
        - Encolhe o item dentro do Container


        # Flex
        - shorthand
        - flex-grow flex-shirink flex-basis
        - podem ter 1, 2 ou 3 Valores
        



        *//*
       ## Child combinator
       *Identificado pelo sinal '>' entre dois seletores
       *Seleciona somente o elemento que é filho direto do pai
       *Elementos depois do filho direto serão desconsiderados
      ex:
       ```css
       body > ul > li
       ```

       ## Adjacent sibling combinator ( combinador do irmão adjacente)
       *Identificado pelo sinal '+' entre dois seletores
       *Seleciona somente o elemento do lado direito que é irmão direto na hierarquia
       ex:
       
       ```css
       h1 + p`
       ```

       ## General sibling combinator ( combinador geral do irmão)
       *Identificado pelo sinal '~' entre dois seletores
       *Seleciona todos os elementos irmãos
       ex:
       ```css
        h1 ~ p
       ```

       ##Utilizando combinadores
       
       ```css
       ul > li [class="red"]
       ```

       ##Dica
       * Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização
       dos elementos.
       * Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.

       ## Pseudo-classes

       É um tipo de seletor que irá selecionar um elemento que estiver em 
       um estado específico.

       Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o
       ponteiro do mouse em cima dele.

       Pseudo-classes começam com 2 pontos seguido do nome da pseudo class.
       `:pseudo-class-name` 

       ## Selcionando elementos com pseudo-classes

       * :first-child
       * :nth-of-type()
       * :nth-child()

       ## Ações do usúario
       * :hover
       * :focus

       ## Atributos
       * :disabled
       * :required


       ## Referência

       https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
       

       ## Pseudo-elements

       Com Pseudo-elements nós podemos adcionar elementos HTML pelo proprio CSS
       `::pseudo-element-name`

       ##  Exemplos
       * ::before
       * ::after
       * ::first-line

       ## Referência
       https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

       ## Normal Flow
       Ou flow é a maneira que os elementos `block`e `inline`
       ficam na página 
       ex: <p>Texto block com <strong>inline</strong> dentro</p>

       ## Tables
       É a maneira de Tabelas onde a tag ´table` recebe um display `table`fazendo com que
       os elementos internos como `ts`e `tr`possam ser usados para montar uma tabela
       ex: <table>
        <tr>
            <td> Hora </td>
            <td> 20:00 </td>
        </tr>
        <tr>
            <td> Hora </td>
            <td> 20:37 </td>
        </tr>
       </table>

       ## Tabless
       Uso das propriedes `float, `clear`para que os elementos possam
       mudar de posição na tela.
       ex:
       <div style="float: left">
        Esquerda
       </div>
       <div style="float: right">
        Direita
       </div>
       <div style="clear: both">
        Normal
       </div>

       ## Flexbox
       A caixa se torna flex, fazendo com que os elementos internos
       possam receber melhor:
       
       - Alinhamento
       - Ordenação
       - Tamanhos flexíveis
       ex.
       ```CSS
       .flexbox{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
       }
       .item: nth-child(1){
        order: 1    
       }
       
       ```html
       <div class="flexbox">
        <div class="item">A</div>
        <div class="item">B</div>
        <div class="item">C</div>
       </div>

       ### Terminologia
        - Flex Container
            - Flex item
        - Nesting (Elementos que contém outros elementos dentro)
        - Axix (eixo)
            - main
                - start, end
                - start, end
            - cross
                - start,end
        - Flex Sizing
            - Flexível
            -altera width/height dos itens para preenchimento dos espaços do flex container

        <div class="container">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>


        # Propriedades do flex container

        * Direção dos itens
        * Multi linhas
        * Alinhamento
            * Principal
            * Cruzado
        * Espaços entre os itens
        
        # Direção dos itens 

        - Flex é uma dimensão (Horizontal ou Vertical)
        - Podemos mudar a direção com `Flex-direction`
        - Valores: (row | row-reverse | column | column-reverse)

        <div class="container">
            <div class="item">A</div>
            <div class="item">B</div>
            <div class="item">C</div>
        </div>
        para essa box ficar flex usa-se ...

        css
        .container{
            display: flex;
            flex-direction: row-reverse; (vai mudar a direção e a Ordenação) 
        }

        .container{
            display: flex;
            flex-direction: column-reverse; (vai mudar a direção e a Ordenação no eixo cruzado ou vertical)
            height: 10mvh; (para mudar a altura) 
        }
        
        # flex-warp

        - Podemos usar multi-linhas.
        - Cada nova linha, um novo flex container.
       
         HTML

        <div class="box">
            <div>A</div>
            <div>B</div>
            <div>C</div>
        </div>

        CSS

        .box{
            /* display: flex; */
            flex-warp: wrap; (Cria novas linhas somente se necessário, com wrap-reverse muda a ordenação)
            border: 1px dashed red;
        }

        .box div{
            border: 1px solid;

            /* width: 80px; */
        }

        # flex-flow

        -shorthand
        - flex-direction || flex-wrap

        # justify-content

        - Alinhamento dos elementos dentro do Container
        - Distribição dos elementos

        ## Valores

        - flex-start
        - flex-end
        - center
        - space-around 
        - space-between
        - spece-evenly

       # align-itens 

       - Alinhamento dos elementos no eixo cruzado 

       ## Valores
       
       - stretch (padrão, esticados)
       - flex-start 
       - flex-end
       - center

       # gap

       - capacidade de colocar espaços entre os elementos


       ## Valores

       Unidades de medidas 
       fixas: px, pt
       flexíveis: %, em, rem



      # Propriedades para os itens

      - flex-basis
      - flex-grow
      - flex-shirink
      - flex
      - order


      # flex-basis
      .box{
        display: flex;

        border: 1px dashed red;
        }

        .box div{
            border: 1px solid;
            flex-basis: auto;(usado para alterar largura, auto e o padrão e pode-se usar
            %, px etc)
        }


        # flex-grow

        - O crescimento do item dentro do container
        em relação aos espaços vazios.

        .box{
        display: flex;

        border: 1px dashed red;
        }

        .box div{
            border: 1px solid;
        }
        .box div: nth-child|(2),
        .box div: nth-child|(3){
            flex-grow: 1;       (Faz cada elemento ficar com uma fração do espaço)
        }
        .box div: nth-child|(1){
            flex-grow: 2;  (Faz este elemento ficar com duas frações do espaço)
        }

        # flex-shirink 
        - Encolhe o item dentro do Container


        # Flex
        - shorthand
        - flex-grow flex-shirink flex-basis
        - podem ter 1, 2 ou 3 Valores
        



        */