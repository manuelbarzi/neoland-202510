const homeView = createView()
hideView(homeView)

const homeTitle = createTitle()
homeTitle.textContent = 'MyPet'
homeTitle.className = 'font-bold text-xl'
homeView.appendChild(homeTitle)

const homeSubtitle = document.createElement('h2')
homeSubtitle.textContent = 'Welcome Home!'
homeView.appendChild(homeSubtitle)

const homeTopPanel = document.createElement('div')
homeTopPanel.className = 'flex justify-between'
homeView.appendChild(homeTopPanel)

const homeAddPetButton = document.createElement('button')
homeAddPetButton.textContent = '+ Pet'
homeAddPetButton.type = 'button'
homeAddPetButton.className = 'bg-black text-white px-1'
homeTopPanel.appendChild(homeAddPetButton)

homeAddPetButton.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(homeView)
    showView(addPetView)
})

const homeLogoutButton = document.createElement('button')
homeLogoutButton.textContent = 'Logout'
homeLogoutButton.type = 'button'
homeLogoutButton.className = 'bg-black text-white px-1'
homeTopPanel.appendChild(homeLogoutButton)

homeLogoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    logic.logoutUser()

    clearHomePetList()

    hideView(homeView)
    showView(loginView)
})

const homePetList = document.createElement('ul')
homeView.appendChild(homePetList)

document.body.appendChild(homeView)

function renderHomePetList() {
    const pets = logic.getPets()

    for (let i = 0; i < pets.length; i++) {
        const pet = pets[i]

        const petItem = document.createElement('li')
        petItem.className = 'flex'

        const image = document.createElement('img')
        image.src = pet.image
        image.className = 'rounded-[50%] w-20'
        petItem.appendChild(image)

        const name = createParagraph()
        name.textContent = pet.name
        petItem.appendChild(name)

        homePetList.appendChild(petItem)
    }
}

function clearHomePetList() {
    for (let i = homePetList.children.length - 1; i >= 0; i--) {
        const child = homePetList.children[i]

        homePetList.removeChild(child)
    }
}