const panels = document.querySelectorAll('.panel')
const panelH3Elem = document.getElementById('panelH3')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
        panelH3Elem.classList.add('description')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
        panelH3Elem.classList.remove('description')

    })
}
