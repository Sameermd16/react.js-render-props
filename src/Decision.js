import React from 'react'

function Decision({children}) {

    const [goingOut, setGoingOut] = React.useState(false)

    function changeMind() {
        setGoingOut((prevState) => {
            return prevState = !prevState
        }) 
    }
    // console.log(goingOut)

    return (
        <div>
            <button onClick={changeMind}>change mind</button>
            {children(goingOut)}
        </div>
    )
}

export default Decision