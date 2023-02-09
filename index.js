const about = document.getElementById("aboutButton")
const projects = document.getElementById("projectsButton")

document.querySelectorAll('button').forEach(button => {
    projects.addEventListener('click', (e) => {
        document.querySelector('#about').style.display = 'none'
        document.querySelector('#projects').style.display = 'block'
    })
    about.addEventListener('click', (e) => {
        document.querySelector('#projects').style.display = 'none'
        document.querySelector('#about').style.display = 'block'
    })
})