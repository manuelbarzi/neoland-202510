const { useState } = React

function Home({ onGoToAddPet, onGoToLogin }) {
    console.log('Home -> call')

    const [message, setMessage] = useState('')

    const handleAddPetClick = event => {
        event.preventDefault()

        onGoToAddPet()
    }

    const handleLogoutClick = event => {
        event.preventDefault()

        try {
            logic.logoutUser()

            setMessage('')

            onGoToLogin()
        } catch (error) {
            setMessage('sorry, there was an error on logout, please, try it later')
        }
    }

    console.log('Home -> render')

    return <div className="p-4">
        <h1 className="font-bold text-xl">MyPet</h1>

        <h2 className="font-bold">Welcome Home!</h2>

        <div className="flex justify-between">
            <button className="bg-black text-white px-1" type="button" onClick={handleAddPetClick}>+ Pet</button>
            <button className="bg-black text-white px-1" type="button" onClick={handleLogoutClick}>Logout</button>
        </div>

        <PetList />

        <p>{message}</p>
    </div>
} 