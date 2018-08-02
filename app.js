const cat = {
    name: 'Mr. Snibbly',
    moods: [
      'Classy',
      'Sassy',
      'He Gone!'
    ],
    moodImgs: [
      'assets/cat.jpg',
      'assets/madcat.jpg',
      ""
    ],
    tolerance: 7,
    pets: 0,
    moodIndex: 0
  }
  
  const cat = {
    name: 'Mittens',
    moods: [
      'Sleepy',
      'Bitey',
      'She Gone!'
    ],
    moodImgs: [
      'https://petcube.com/blog/content/images/2017/08/kitten-supplies-cover.jpg',
      'https://www.catster.com/wp-content/uploads/2017/12/A-gray-kitten-meowing.jpg',
      ""
    ],
    tolerance: 2,
    pets: 0,
    moodIndex: 0
  }

  const catImg = document.getElementById('cat-img')
  const catName = document.getElementById('name')
  const mood = document.getElementById('mood')
  const pets = document.getElementById('pets')
  const petButton = document.getElementById('pet-button')

  function draw() {
    catImg.setAttribute('src', cat.moodImgs[cat.moodIndex])
    catName.innerText = cat.name
    mood.innerText = cat.moods[cat.moodIndex]
    pets.innerText = cat.pets.toString()
    if (cat.pets >= cat.tolerance * 2) {
        petButton.disabled = true;
    }
  }
  
  function pet() {
    cat.pets++;
    if (cat.pets % cat.tolerance == 0) {
      cat.moodIndex++
    }
    draw();
  }
  
  function reset() {
   cat.pets = 0
   cat.moodIndex = 0
    petButton.disabled = false
    draw()
  }
  
  draw()