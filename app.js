const mrSnibbly = {
    name: 'Mr. Snibbly',
    moods: ['Classy', 'Sassy'],
    moodImages:['assets/cat.jpg', 'assets/madcat.jpg'],
    tolerance: 7,
    pets: 0,
    moodIndex: 0
}

const catImg = document.getElementById('cat-img')

const catName = document.getElementById('name')

const mood = document.getElementById('mood')

const pets = document.getElementById('pets')


function draw(){
    cat-img.setAttribute('src', mrSnibbly.moodImgs[mrSnibbly.moodIndex])
    catName.innerText = mrSnibbly.name
    mood.innerTest = mrSnibbly.moods[mrSnibbly.moodIndex]
    pets.innerText = mrSnibbly.pets.toString()
}

function pet(){

}

function reset(){

}