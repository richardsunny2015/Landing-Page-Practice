const sumChildren = document.getElementsByClassName('sum-desc');

function addMouseOver(divs) {
    for (let i = 0; i < divs.length; i++) {
        const icon = divs[i].firstElementChild
        divs[i].addEventListener('mouseover', mouseOverEvent(5, icon))
        divs[i].addEventListener('mouseleave', mouseOverEvent(4, icon))
    }
}

const mouseOverEvent = (rem, icon) => () => {
    icon.style.fontSize = `${rem}rem`
}

addMouseOver(sumChildren)
