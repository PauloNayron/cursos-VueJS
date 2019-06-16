new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Estou alertando agora!')
        },
        alterarValor(e) {
            this.valor = e.target.value
        }
    }
})