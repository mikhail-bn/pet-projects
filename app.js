console.log('Work in progres....');

const columns = document.querySelectorAll('.column');
const colorGen = () => {
    const hexColor = '0123456789ABCDEF';
    let rendomColor = '';
    for (let i = 0; i < 6; i++) {
        rendomColor += hexColor[Math.floor(Math.random() * hexColor.length)]
    }
    return `#${rendomColor}`
}
const setColor = () => {
    columns.forEach((column) => {
        column.style.background = colorGen()
    })
}
setColor()