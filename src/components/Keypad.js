// Code Keypad Component Here

function Keypad (){
    function password() {
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={password}></input>
        </div>
    )
}

export default Keypad;