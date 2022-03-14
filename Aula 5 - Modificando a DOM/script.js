function dark() {

    let bodydark = document.querySelectorAll('body');

    bodydark.forEach(body => {
        body.classList.toggle('bodydark');
    })

    let titulodark = document.querySelectorAll('h1');

    titulodark.forEach(h1 => {
        h1.classList.toggle('titulodark');
    })

    let itemdark = document.querySelectorAll('.item');

    itemdark.forEach(item => {
        item.classList.toggle('itemdark');
    })
    
    let textodark = document.querySelectorAll('.container');

    textodark.forEach(container => {
    container.classList.toggle('textodark');
    })
}
