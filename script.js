function calculo() {
    var n1 = window.document.getElementById('num')
    var tab = window.document.getElementById('seltab')
    
    if (n1.value.length == 0) {
    window.alert('Erro falta numeros')
    } else {
        let i = Number(n1.value)
        let c = 1
        tab.innerHTML = ``
        while (c <= 10) {
            let itens = document.createElement('option')
            itens.text = `${i} x ${c} = ${i*c}`
            tab.appendChild(itens)
            c++
        }
    }







}