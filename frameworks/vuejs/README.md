# Vuejs  

Vue usa programação reativa. Aqui foi chamado um script para usar Vuejs, mas em produção é melhor usar o `vue-cli`.    

### Usando o Vuejs  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando o Vuejs</title>
</head>
<body>

    <!-- Instância da var 'app' -->
    <div id="app">
        {{ mensagem }}
    </div>

    <!-- Este link só é usado em dev. Usar outro para produção. -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <script>
        var app = new Vue({
            // Elemento pai do aplicativo.
            el: '#app',
            // Onde ficam nossas variáveis.
            data: {
                mensagem: 'Hello Vue!'
            }
        })
    </script>
    
</body>
</html>
```  

### Diretivas  

São espécies de regras colocadas como atributos html que serão interpretadas pelo Vuejs para tomar determinada ação.  

Algumas diretivas: `v-model, v-if, v-else, v-for, v-show, v-cloak`.  

#### v-show, v-if e v-else  

Fazem coisas parecidas. Eles mostram algo na tela se uma expressão booleana for verdadeira. Mas `v-show` definido como falso não mostra na tela, mas mostra o conteúdo no código. Já `v-if` se definido como falso não mostra nem na tela nem no código. Se `v-if` for "false" `v-else` será exibido.  

```html
<div id="app">
    <h1 v-show="titulo">Título</h1>
    <p v-if="paragrafo">Texto que não será exibido nem na tela nem no código se paragrafo for false.</p>
    <p v-else>Este texto será mostrado com v-else.</p>
</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            titulo: true,
            paragrafo: false
        }
    });
</script>
```  

#### v-for  

Nada mais é do que um foreach. Use a variável interna `item` para percorrer os itens e `index` para mostrar seus índices.  

```html
<div id="app">
    <h1>{{titulo}}</h1>
    <ol v-for="item in times">
        <li>{{item}}</li>
    </ol>
    
    <br>

    <h1>{{titulo}}</h1>
    <ul v-for="(item, index) in times">
        <li>{{index}} - {{item.time}}</li>
    </ul>    

</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            titulo: "Times da NBA:",
            times: [
                {time: "San Antonio Spurs"},
                {time: "Toronto Raptors"},
                {time: "Los Angeles Clipers"},
                {time: "Los Angeles Lakers"},
                {time: "Chicago Bulls"},
            ]            
        }
    });
</script>
```  

#### v-model  

Recebe entradas do usuário para dentro do nosso modelo de forma reativa.  

```html
<div id="app">
    <h1>{{titulo}}</h1>

    <label for="time">Time</label>
    <input type="text" name="time" id="time" v-model="time">
    <br><br>

    <label for="campeao">Na temporada passada foi:</label><br>
    <input type="checkbox" name="classificacao" id="classificacao" value="Campeão da NBA" v-model="classificacao">Campeão da NBA<br>
    <input type="checkbox" name="classificacao" id="classificacao" value="Campeão de Conferência" v-model="classificacao">Campeão de Conferência<br>
    <input type="checkbox" name="classificacao" id="classificacao" value="Campeão de Divisão" v-model="classificacao">Campeão de Divisão<br>
    <br>

    <label for="conferencia">Conferência</label><br>
    <select name="conferencia" id="conferencia" v-model="conferencia">
        <option value="Leste">Leste</option>            
        <option value="Oeste">Oeste</option>            
    </select>
    <br><br>

    <label for="divisao">Divisão</label><br>
    <input type="radio" name="divisao" id="divisao" value="Atlântico" v-model="divisao">Atlântico<br>
    <input type="radio" name="divisao" id="divisao" value="Pacífico" v-model="divisao">Pacífico<br>
    <input type="radio" name="divisao" id="divisao" value="Central" v-model="divisao">Central<br>
    <input type="radio" name="divisao" id="divisao" value="Sudeste" v-model="divisao">Sudeste<br>
    <input type="radio" name="divisao" id="divisao" value="Sudoeste" v-model="divisao">Sudoeste<br>
    <input type="radio" name="divisao" id="divisao" value="Noroeste" v-model="divisao">Noroeste<br>
    <br>

    <hr>

    <br>
    <h2>Informações Adicionadas</h2>
    Time: {{time}} <br>
    Resultados da temporada passada: {{classificacao}} <br>
    Conferência: {{conferencia}} <br>
    Divisão: {{divisao}} <br>
</div>

<!-- Este link só é usado em dev. Usar outro para produção. -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            titulo: "Times da NBA:",
            time: "",
            classificacao: [],
            conferencia: "",
            divisao: ""
        }
    });
</script>
```  

#### v-bind  

Altera atributos html. Pode ser substituído por apenas `:`.  

```html
<div id="app">
    <h1>{{titulo}}</h1>
    <input type="text" v-bind:value="texto"><br>
    <input type="text" v-bind:value="'Agora com aspas simples direto no texto'">
</div>

<!-- Este link só é usado em dev. Usar outro para produção. -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            titulo: "V-Bind:",
            texto: "Texto via v-bind com variável"
        }
    });
</script>
```  

#### v-on  

O `v-on` é usado para chamar eventos. Pode usar `@` no lugar como atalho.  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando o Vuejs</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>

    <div id="app">
        <h1>{{titulo}}</h1>
        <form action="espn.com.br/nba">
            <button type="submit" class="btn btn-primary" v-on:click.prevent.stop="enviar()">Enviar</button>        
        </form>

    <!-- Este link só é usado em dev. Usar outro para produção. -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <script>
        var app = new Vue({
            el: "#app",
            data: {
                titulo: "Exemplo",
            },
            methods:{
                enviar(){
                    alert('Enviado com Sucesso!')
                }
            }
        });
    </script>
    
</body>
</html>
```  

### Filters  

Serve para customizar as variáveis que serão exibidas na tela. O `|` é usado para indicar o uso do filtro.  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando o Vuejs</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>

    <div id="app">
        <h1>{{titulo}}</h1>
        <ul>
            <li v-for="jogador in jogadores">{{ jogador.nome | toUpperCase() }}</li>
            <li v-for="jogador in jogadores">{{ jogador.nome | truncate('9') }}</li>
        </ul>

    <!-- Este link só é usado em dev. Usar outro para produção. -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <script>
        var app = new Vue({
            el: "#app",
            data: {
                titulo: "Times da NBA:",
                jogadores: [
                    {nome: "Stephan Curry"},
                    {nome: "Kaway Leonard"},
                    {nome: "Luka Doncic"}
                ]
            },
            filters:{
                toUpperCase(str){
                    return str.toUpperCase()
                },
                truncate(str, tamanho){
                    let saida = str
                    if(saida.length> tamanho){
                        saida = saida.substring(0, tamanho) + ' ...'
                    }
                    return saida
                }
            }
        });
    </script>
    
</body>
</html>
```  

### Computed e Watch  

O `methods` executa uma ação. O `watch` executa ações se váriaveis estiverem sendo monitoradas por ele e sofrerem alterações. O `computed` executará uma ação se uma ou mais variáveis que estiverem dentro de um de seus métodos sofrer alteração.  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando o Vuejs</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    
        <div id="app">
            <h1>{{titulo}}</h1><br>

            <input type="text" v-model="titulo"><br>
            {{ computando }}

            <br><br>
            <button class="btn btn-primary" v-on:click="imprimirMensagem()">Mudar Mensagem</button>
            
            <!-- Este link só é usado em dev. Usar outro para produção. -->
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script>
            var app = new Vue({
                el: "#app",
                data: {
                    titulo: "Mensagem Inicial"
                }, 
                computed: {
                    computando(){
                        console.log('Computed executado: ' + this.titulo)
                    }
                },
                watch: {
                    titulo(){
                        console.log('Watch executado')
                    }
                },
                methods: {
                    imprimirMensagem(){
                        console.log('Methods executado')
                        this.titulo = "Segunda Mensagem"
                    }
                }
            })
        </script>
    
</body>
</html>
```  
### Hooks e Cliclo de Vida  

O Vue.js disponibiliza alguns hooks(métodos) durante o seu ciclo de vida. É possível usar esses hooks dentro de nossos programas para controlar melhor a aplicação. O DOM fica pronto no hook "mounted".  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando o Vuejs</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    
        <div id="app">
            <h1>{{titulo}}</h1><br>
        </div>

        <!-- Este link só é usado em dev. Usar outro para produção. -->
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script>
            var app = new Vue({
                el: "#app",

                beforeCreate(){
                    console.log("beforeCreate")
                    console.log("Título: ", this.titulo)
                    console.log("Elemento(el): ", this.$el)
                },
                created(){
                    console.log("created")
                    console.log("Título: ", this.titulo)
                    console.log("Elemento(el): ", this.$el)
                },
                beforeMount(){
                    console.log("beforeMount")
                    console.log("Título: ", this.titulo)
                    console.log("Elemento(el): ", this.$el)
                },
                mounted(){
                    console.log("mounted")
                    console.log("Título: ", this.titulo)
                    console.log("Elemento(el): ", this.$el)
                },
                beforeUpdate(){
                    console.log("beforeUpdate")
                },
                updated(){
                    console.log("update")
                },

                data: {
                    titulo: "Hooks e Ciclo de Vida."
                }, 
            })
        </script>
    
</body>
</html>
```  

### Componentes  

Com os componentes é possível reaproveitar o código feito em vários locais da aplicação.  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando o Vuejs</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    
        <div id="app">
            <h1>{{titulo}}</h1><br>
            <barra-menu></barra-menu>
            <barra-menu></barra-menu>
            <barra-menu2></barra-menu2>
            <barra-menu2></barra-menu2>
        </div>

        <!-- Template -->
        <template id="menu2">
            <ul>
                <li>Elemento 1</li>
                <li>Elemento 2</li>
            </ul>
        </template>

        <!-- Este link só é usado em dev. Usar outro para produção. -->
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script>

            // Este aqui não é o melhor método.
            Vue.component('barra-menu', {
                template: "<ul><li>Primeiro Elemento</li><li>Segundo Elemento</li></ul>"
            })

            // Este aqui é um método melhor com uso do template.
            Vue.component('barra-menu2', {
                template: "#menu2"
            })


            var app = new Vue({
                el: "#app",
                
                data: {
                    titulo: "Hooks e Ciclo de Vida."
                }, 
            })
        </script>
    
</body>
</html>
```  

#### Componentes Filhos  

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando o Vuejs</title>
    <!-- Bootstrap CSS -->
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>

    <div id="app">
        <h1>{{titulo}}</h1><br>
        <barra-nav></barra-nav>
    </div>

    <!-- Template navbar -->
    <template id="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado"
                aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">

                <!-- Usando o template filho do menu -->
                <barra-menu></barra-menu>

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
                </form>
            </div>
        </nav>
    </template>


    <!-- Template menu -->
    <template id="menu">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(página atual)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Ação</a>
                    <a class="dropdown-item" href="#">Outra ação</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Algo mais aqui</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Desativado</a>
            </li>
        </ul>
    </template>

    <!-- Este link só é usado em dev. Usar outro para produção. -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>

        // Usando o template.
        Vue.component('barra-menu', {
            template: "#menu"
        })

        Vue.component('barra-nav', {
            template: "#nav"
        })


        var app = new Vue({
            el: "#app",

            data: {
                titulo: "Componentes."
            },
        })
    </script>


    <!-- BOOTSTRAP JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
</body>

</html>
```  

#### Comunicação entre Componentes Pais e Filhos  

São componentes que podem ficar dentro de outros. Para usar a comunicação do pai para o filho use o "props". Do filho para o pai emitirá eventos pelo "this.$emit".  

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando o Vuejs</title>
    <!-- Bootstrap CSS -->
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>

    <div id="app">
        <h1>{{titulo}}</h1><br>
        <barra-nav></barra-nav>
    </div>

    <!-- Template navbar -->
    <template id="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado"
                aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">

                <!-- Usando o template filho do menu -->
                <barra-menu v-bind:items="varItems" v-on:emit-click="getLink">
                </barra-menu>

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
                </form>
            </div>
        </nav>
    </template>


    <!-- Template menu -->
    <template id="menu">
        <ul class="navbar-nav mr-auto">
            <li v-for="(item, index) in items" class="nav-item">
                <a v-on:click.stop.prevent="emitClick(index)" class="nav-link" href="#">{{ item.label }}</a>
            </li>
        </ul>
    </template>

    <!-- Este link só é usado em dev. Usar outro para produção. -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>

        // Usando o template.
        Vue.component('barra-menu', {
            template: "#menu",
            props: {
                items: {
                    type: Array,
                    required: true
                }
            },
            methods: {
                emitClick(index) {
                    this.$emit('emit-click', index)
                }
            }
        })
        
        Vue.component('barra-nav', {
            template: "#nav",
            data() {
                return {
                    varItems: [{ label: 'Home' }, { label: 'Link' }, { label: 'Desabilitado' }]
                }
            },
            methods: {
                getLink(index) {
                    alert(this.varItems[index].label)
                    console.log(this.varItems[index].label)
                }
            }
        })


        var app = new Vue({
            el: "#app",

            data: {
                titulo: "Componentes."
            },
        })
    </script>


    <!-- BOOTSTRAP JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
</body>

</html>
```  

#### Comunicação entre Componentes não Parentes  

Mantendo a comunicação através do "eventBus" que é uma nova instância do Vuejs.  

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando o Vuejs</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>

    <div id="app">

        <br><br><br><br>

        <div class="container">

            <input-form></input-form>

            <br>

            <my-list></my-list>

        </div>


    </div>

    <!-- Início dos Templates -->
    <template id="form">
        <div class="card">
            <div class="card-header">
                <div class="form-group">
                    <label for="">Título</label>
                    <!-- Define o v-model title -->
                    <input type="text" class="form-control" v-model="title">
                </div>
                <!-- Chama o evento submit() -->
                <button class="btn btn-primary" @click.stop.prevent="submit()">Enviar</button>
            </div>
        </div>
    </template>

    <template id="list">
        <ul class="list-group">
            <li v-for="item in list" class="list-group-item">{{ item.title }}</li>
        </ul>
    </template>
    <!-- Fim dos Templates -->

    <!-- Este link só é usado em dev. Usar outro para produção. -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>

        // "data()" dentro de um componente tem que ser uma função,
        // diferente se for colocado dentro da instância do Vue("var app").
        // Componente "input-form".
        Vue.component('input-form', {
            template: '#form',
            data() {
                return {
                    title: '',
                }
            },
            methods: {
                submit() {
                    eventBus.$emit('submit', this.title)
                }
            }
        })

        // Componente "my-list".
        Vue.component('my-list', {
            template: '#list',
            // Hook do ciclo de vida.
            created() {
                var vm = this
                eventBus.$on('submit', function (title) {
                    if(title){
                        vm.list.push( {title: title} )
                    }
                    console.log('Criando o evento submit no eventBus.')
                })
            },
            data() {
                return {
                    list: [
                        {title: "San Antonio Spurs"},
                        {title: "Chicago Bulls"},
                        {title: "Dallas Mavericks"},
                        {title: "Los Angeles Clipers"},
                        {title: "Los Angeles Lakers"}
                    ]
                }
            }
        })

        // EventBus.
        var eventBus = new Vue()

        // Instância do Vue.
        var app = new Vue({
            el: "#app",

            data: {
                titulo: "Componentes."
            },
        })
    </script>


</body>

</html>
```  

Mantendo a comunicação pelo eventHub do próprio Vue.  

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando o Vuejs</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>

    <div id="app">

        <br><br><br><br>

        <div class="container">

            <input-form></input-form>

            <br>

            <my-list></my-list>

        </div>


    </div>

    <!-- Início dos Templates -->
    <template id="form">
        <div class="card">
            <div class="card-header">
                <div class="form-group">
                    <label for="">Título</label>
                    <!-- Define o v-model title -->
                    <input type="text" class="form-control" v-model="title">
                </div>
                <!-- Chama o evento submit() -->
                <button class="btn btn-primary" @click.stop.prevent="submit()">Enviar</button>
            </div>
        </div>
    </template>

    <template id="list">
        <ul class="list-group">
            <li v-for="item in list" class="list-group-item">{{ item.title }}</li>
        </ul>
    </template>
    <!-- Fim dos Templates -->

    <!-- Este link só é usado em dev. Usar outro para produção. -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>

        // "data()" dentro de um componente tem que ser uma função,
        // diferente se for colocado dentro da instância do Vue("var app").
        // Componente "input-form".
        Vue.component('input-form', {
            template: '#form',
            data() {
                return {
                    title: '',
                }
            },
            methods: {
                submit() {
                    this.$eventHub.$emit('submit', this.title)
                    console.log("Emissão do Evento submit.")
                }
            }
        })

        // Componente "my-list".
        Vue.component('my-list', {
            template: '#list',
            // Hook do ciclo de vida.
            created() {
                var vm = this
                this.$eventHub.$on('submit', function (title) {
                    if(title){
                        vm.list.push( {title: title} )
                    }
                    console.log('Criando um Listener para o evento submit.')
                })
            },
            data() {
                return {
                    list: [
                        {title: "San Antonio Spurs"},
                        {title: "Chicago Bulls"},
                        {title: "Dallas Mavericks"},
                        {title: "Los Angeles Clipers"},
                        {title: "Los Angeles Lakers"}
                    ]
                }
            }
        })

        // EventBus.
        Vue.prototype.$eventHub = new Vue()

        // Instância do Vue.
        var app = new Vue({
            el: "#app",

            data: {
                titulo: "Componentes."
            },
        })
    </script>


</body>

</html>
```  

### Slots  

Servem para passar conteúdo dinâmicamente.  

Exemplo 1.  

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando o Vuejs</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>

    <div id="app">
        <br><br><br>
        <div class="container">
            <card>
                <!-- Aqui vai o conteúdo que vai aparecer no slot -->
                <br>
                <strong>Conteúdo do Primeiro Slot.</strong>
                <br><br>

                <h5 class="card-title">Título do primeiro cartão</h5>
                <p class="card-text">Conteúdo ou texto do primeiro cartão.</p>
                <a href="#" class="btn btn-primary">Primeiro Botão</a>  

            </card>

            <br>

            <card>
                <!-- Aqui vai o conteúdo que vai aparecer no slot -->
                <br>
                <strong>Conteúdo do Segundo Slot.</strong>
                <br><br>

                <h5 class="card-title">Título do segundo cartão</h5>
                <p class="card-text">Conteúdo ou texto do segundo cartão.</p>
                <a href="#" class="btn btn-primary">Segundo Botão</a>  
                              
            </card>
        </div>
    </div>

    <!-- Templates -->
    <template id="card">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap">
            <div class="card-body">
                <!-- slot -->
                <!-- O conteúdo dinâmico será adicionado aqui -->
                <slot></slot>

            </div>
        </div>
    </template>

    <!-- Este link só é usado em dev. Usar outro para produção. -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>

        Vue.component('card', {
            template: "#card",
            data() {
                return {
                    title: '',
                }
            }
        })

        var app = new Vue({
            el: "#app",

            data: {
                titulo: "Componentes."
            },
        })
    </script>


</body>

</html>
```  

Exemplo 2. Slots Nomeados. 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando o Vuejs</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>

    <div id="app">
        <br><br><br>
        <div class="container">
            <card>
                <!-- Aqui vai o conteúdo que vai aparecer no slot -->
                <!-- Usando slots nomeados -->
                <br>

                <h5 slot="title" class="card-title">Título do primeiro cartão</h5>
                <p  slot="text" class="card-text">Conteúdo ou texto do primeiro cartão.</p>
                <a  slot="action" href="#" class="btn btn-primary">Primeiro Botão</a>  

            </card>

            <br>

            <card>
                <!-- Aqui vai o conteúdo que vai aparecer no slot -->
                <!-- Usando slots nomeados -->
                <br>                

                <h5 slot="title" class="card-title">Título do segundo cartão</h5>
                <p  slot="text" class="card-text">Conteúdo ou texto do segundo cartão.</p>
                <a  slot="action"href="#" class="btn btn-primary">Segundo Botão</a>  
                              
            </card>
        </div>
    </div>

    <!-- Templates -->
    <template id="card">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap">
            <div class="card-body">
                <!-- slots nomeados -->
                <!-- O conteúdo dinâmico será adicionado aqui -->
                <slot name="title"></slot>
                <slot name="text"></slot>
                <slot name="action"></slot>

            </div>
        </div>
    </template>

    <!-- Este link só é usado em dev. Usar outro para produção. -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>

        Vue.component('card', {
            template: "#card",
            data() {
                return {
                    title: '',
                }
            }
        })

        var app = new Vue({
            el: "#app",

            data: {
                titulo: "Componentes."
            },
        })
    </script>


</body>

</html>
```  

Exemplo 3. Slots com Templates. 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando o Vuejs</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>

    <div id="app">
        <br><br><br>
        <div class="container">
            <card>
                <!-- Aqui vai o conteúdo que vai aparecer no slot -->
                <!-- Usando slots nomeados -->
                <br>

                <h5 slot="title" class="card-title">Título do primeiro cartão</h5>
                <!-- Usando templates para colocar mais de um parágrafo no slot -->
                <template slot="text">
                    <p class="card-text">Primeiro parágrafo do conteúdo ou texto do primeiro cartão.</p>
                    <p class="card-text">Segundo parágrafo do conteúdo ou texto do primeiro cartão.</p>
                </template>
                <a slot="action" href="#" class="btn btn-primary">Primeiro Botão</a>

            </card>

            <br>

            <card>
                <!-- Aqui vai o conteúdo que vai aparecer no slot -->
                <!-- Usando slots nomeados -->
                <br>

                <h5 slot="title" class="card-title">Título do segundo cartão</h5>
                <!-- Usando templates para colocar mais de um parágrafo no slot -->
                <template slot="text">
                    <p class="card-text">Primeiro parágrafo do conteúdo ou texto do segundo cartão.</p>
                    <p class="card-text">Segundo parágrafo do conteúdo ou texto do segundo cartão.</p>
                </template>
                <a slot="action" href="#" class="btn btn-primary">Segundo Botão</a>

            </card>
        </div>
    </div>

    <!-- Templates -->
    <template id="card">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap">
            <div class="card-body">
                <!-- slots nomeados -->
                <!-- O conteúdo dinâmico será adicionado aqui -->
                <slot name="title"></slot>
                <slot name="text"></slot>
                <slot name="action"></slot>

            </div>
        </div>
    </template>

    <!-- Este link só é usado em dev. Usar outro para produção. -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>

        Vue.component('card', {
            template: "#card",
            data() {
                return {
                    title: '',
                }
            }
        })

        var app = new Vue({
            el: "#app",

            data: {
                titulo: "Componentes."
            },
        })
    </script>


</body>

</html>
```  

### Mixins  

Forma de reutilizar suas rotinas de programação.  

> Lembrando que o escopo interno prevalece sobreo o Mixin caso exista funcionalidade com o mesmo nome.  

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando o Vuejs</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>

    <div id="app">
        <br><br><br>
        <div class="container">
            <h1>{{ titulo }}</h1>
            <button @click.stop.prevent="getUsers()" class="btn btn-success">Obter Usuários</button>
        </div>
    </div>

    <!-- Este link só é usado em dev. Usar outro para produção. -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        var mixin = {
            created() {
                console.log("Hook do lifecycle: Created do Mixin")
            },
            methods: {
                getUsers() {
                    console.log("getUsers() do Mixin")
                }
            }
        }

        var app = new Vue({
            el: "#app",

            mixins: [mixin],

            created() {
                console.log("Hook do lifecycle: Created do Vue")
            },
            data: {
                titulo: "Mixins."
            },
            methods: {
                // Substitui o getUsers() do Mixin. O escopo interno prevalece.
                getUsers() {
                    console.log("getUsers() do Vue")
                }
            }
        })
    </script>


</body>

</html>
```  

### Ajax com vue-resource  

`vue-resource` é um cliente http para o Vue.js.  

> Repositório do vue-resource: https://github.com/pagekit/vue-resource  

> CDN: <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script>  

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando o Vuejs</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>

    <div id="app">
        <br><br><br>
        <div class="container">
            <h1>{{ titulo }}</h1>
            <button @click.stop.prevent="getUsers()" class="btn btn-success">Obter Usuários</button>

            <br><br><br>

            <div v-if="response.status == 'error'" class="alert alert-danger">{{ response.msg }}</div>

            <div v-if="loader.users" class="">Carregando usuários...</div>

            <ul>
                <li v-for="user in users">{{user.name}}</li>
            </ul>
        </div>
    </div>

    <!-- Este link só é usado em dev. Usar outro para produção. -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- CDN do vue-resource -->
    <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script>

    <!-- Scripts do Vue.js -->
    <script>
        var mixin = {
            methods: {
                getUsers() {
                    this.loader.users = true

                    var url = "http://jsonplaceholder.typicode.com/users"
                    // O vue-resource já se misturou com o Vue.js.
                    // O '$http' é do vue-resource.
                    // Quando a consulta terminar é executada uma ação.
                    this.$http.get(url)
                        .then(function (respostaDaPromessa) {
                            this.users = respostaDaPromessa.body
                        }, function (error) {
                            this.response.status = "error"
                            console.log(error)
                        })
                        .finally(function(){
                            this.loader.users = false
                        })
                    // Vá a aba 'network -> response' para ver o json gerado.
                }
            }
        }

        var app = new Vue({
            el: "#app",

            mixins: [mixin],

            data: {
                titulo: "Ajax",
                users: [],
                loader: {
                    users: false,
                },
                response: {
                    msg: "Aconteceu algum erro.",
                    status: ""
                }
            },
        })
    </script>


</body>

</html>
```  

### Ajax com Axios  

Usando Ajax com o Axios. Axios é um cliente http baseado em promises para o navegador e node.js.  

> Repositório do Axios: https://github.com/axios/axios  

> CDN: <script src="https://unpkg.com/axios/dist/axios.min.js"></script>  

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando o Vuejs</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>

    <div id="app">
        <br><br><br>
        <div class="container">
            <h1>{{ titulo }}</h1>
            <button @click.stop.prevent="getUsers()" class="btn btn-success">Obter Usuários</button>

            <br><br><br>

            <div v-if="response.status == 'error'" class="alert alert-danger">{{ response.msg }}</div>

            <div v-if="loader.users" class="">Carregando usuários...</div>

            <ul>
                <li v-for="user in users">{{user.name}}</li>
            </ul>
        </div>
    </div>

    <!-- Este link só é usado em dev. Usar outro para produção. -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- CDN do axios -->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    <!-- Scripts do Vue.js -->
    <script>
        var mixin = {
            methods: {
                getUsers() {
                    this.loader.users = true

                    var url = "http://jsonplaceholder.typicode.com/users"
                    var instanciaVue = this
                    // Quando a consulta terminar é executada uma ação.
                    axios.get(url).then(function(resposta){
                        instanciaVue.users = resposta.data
                        instanciaVue.loader.users = false
                    })
                    // Vá a aba 'network -> response' para ver o json gerado.
                }
            }
        }

        var app = new Vue({
            el: "#app",

            mixins: [mixin],

            data: {
                titulo: "Ajax com Axios",
                users: [],
                loader: {
                    users: false,
                },
                response: {
                    msg: "Aconteceu algum erro.",
                    status: ""
                }
            },
        })
    </script>


</body>

</html>
```  

### Atributos Especiais  


```html

```  












