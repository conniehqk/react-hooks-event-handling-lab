// Code Keypad Component Here
function Keypad() {
    const changePW=()=>{
        console.log('Entering password...')
    }
    return (
        <input type="password" onChange={changePW}></input>
    )
}

export default Keypad