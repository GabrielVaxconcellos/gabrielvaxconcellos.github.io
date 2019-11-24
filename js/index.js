// document.querySelector('.segura-lista-gerada').addEventListener('click',
// function(){
//     document.querySelector('.segura-lista-gerada').classList.toggle('segura-lista-gerada-verde')
// })

document.querySelector('.segura-lista-gerada1').addEventListener('click',
    function () {
        document.querySelector('.segura-lista-gerada1').classList.toggle('segura-lista-gerada-verde')
    })

document.querySelector('.segura-lista-gerada2').addEventListener('click',
    function () {
        document.querySelector('.segura-lista-gerada2').classList.toggle('segura-lista-gerada-verde')
    })

document.querySelector('.segura-lista-gerada3').addEventListener('click',
    function () {
        document.querySelector('.segura-lista-gerada3').classList.toggle('segura-lista-gerada-verde')
    })

document.querySelector('.segura-lista-gerada4').addEventListener('click',
    function () {
        document.querySelector('.segura-lista-gerada4').classList.toggle('segura-lista-gerada-verde')
    })

document.querySelector('.segura-lista-gerada5').addEventListener('click',
    function () {
        document.querySelector('.segura-lista-gerada5').classList.toggle('segura-lista-gerada-verde')
    })

document.querySelector('.segura-lista-gerada6').addEventListener('click',
    function () {
        document.querySelector('.segura-lista-gerada6').classList.toggle('segura-lista-gerada-verde')
    })

document.querySelector('.segura-lista-gerada7').addEventListener('click',
    function () {
        document.querySelector('.segura-lista-gerada7').classList.toggle('segura-lista-gerada-verde')
    })

document.querySelector('.segura-lista-gerada8').addEventListener('click',
    function () {
        document.querySelector('.segura-lista-gerada8').classList.toggle('segura-lista-gerada-verde')
    })

document.querySelector('.segura-lista-gerada9').addEventListener('click',
    function () {
        document.querySelector('.segura-lista-gerada9').classList.toggle('segura-lista-gerada-verde')
    })

document.querySelector('.segura-lista-gerada10').addEventListener('click',
    function () {
        document.querySelector('.segura-lista-gerada10').classList.toggle('segura-lista-gerada-verde')
    })

// Ativar modal

function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.className == 'fechar') {
                modal.classList.remove('mostrar')
            }
        });
    }
}

const formulario = document.querySelector('.btn-lista-gerada');
formulario.addEventListener('click', function () {
    iniciaModal('modal-epi')
})


