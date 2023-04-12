const { Route } = require('express')

const express = require('express')
const axios = require('axios')

const app = express()


app.listen('3000') //aqui esta criado o server

//Middlware (precisa ser usando para mostrar ao browser que é um json) e tranforma tudo o que chega em json

app.use(express.json())


//app.route('/').get( (req, res) => res.send("Hello!!")  )
//app.route('/sobre').get( (req, res) => res.send("Hello -> Sobre")  )



//app.route('/').post( (req, res) => res.send(req.body) )

/*let author = "Anderson Mattar"
    app.route('/:identificador').delete( (req, res) => {
        res.send(req.params.identificador)
    })
app.route('/').get( (req, res) => res.send(author))
app.route('/').put( (req, res) => {
    author = req.body.author
    res.send(author)
} )*/

/*app.route('/').get( (req, res) => res.send(req.query.name))
app.route('/').put( (req, res) => res.send(req.body.author) )
app.route('/:parametro').get( (req, res) => res.send(req.params.parametro))*/

/*app.route('/').post( (req, res) => {
    const {nome, cidade, Livros_favoritos} = req.body
res.send(`meu nome é ${nome} e minha cidade é ${cidade} meus livros favoritos são ${Livros_favoritos}`)
})*/

/*app.route('/').get( (req, res) => res.send("Oi!"))//É preciso uma rota com apenas ('/')
app.route('/:variavel').get( (req, res) => res.send(req.params.variavel))
app.route('/identidade/:nome').get( (req, res) => res.send(req.params.nome))
*/

/*app.route('/').get( (req, res) => res.send(req.query.nome) )

app.route('/about/user').get( (req, res) => res.send(req.query) )*/

//Consumindo APIs

app.route('/').get((req, res) => {
    
    axios.get('https://api.github.com/users/Andersonmattardev')// usando o axios para consumir a api do github
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`)) // usando promisses e se usar assim com uma template string aparece a  imagem do avatar
    .catch(error => console.error(error))

})


