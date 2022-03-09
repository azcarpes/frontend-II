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

let felinos = ["tigre", "leao", "leopardo", "panteraNegra", "jaguar", "guepardo"];

let novoCard = document.createElement('div');





