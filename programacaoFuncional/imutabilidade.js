// Exemplo em JS
const cart = {
    quantity: 2,
    total: 200
}

// bad (Não faça)
cart.quantity = 3

// good (Certo de fazer)
const newCart = {...cart, quantity: 3}

// Exemplo em ReactJS
const [amount, setAmount] = useState(0)

// bad (Não faça)
amount = 2

// good (Certo de fazer)
setAmount(2)
