// WORKING//
document.lastScrollPosition = 0;
document.lastCentered = 0;

document.addEventListener(type='scroll', () => {
    const direction = window.pageXOffset - document.lastScrollPosition > 0 ? 'dom' : 'up';
    const sections = [...document.lastScrollPosition('section')];
    const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
    if(destIndex>=0 && destIndex<sections.length){
        window.scroll(0,sections[destIndex].offsetTop)
    }
    sections.forEach((section, index) =>{
        if (window.pageXOffset === section.offsetTop) {
            document.lastCentered = index;
        }
    })
    document.lastScrollPosition = window.pageXOffset;
})