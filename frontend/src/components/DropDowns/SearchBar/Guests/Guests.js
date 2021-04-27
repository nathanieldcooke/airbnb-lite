import './Guests.css'

function Guests({ display }) {

    return (
        <>
            <div className='guests-spacer-div'>

            </div>
            <div className={`guests-btn-dropdown ${display} `}>
                <div>
                    <span>Login</span>
                </div>
                <div>
                    <span>SignUp</span>
                </div>
                <div>
                    <span>Demo User</span>
                </div>
                <div>
                    <span>Demo SignUp</span>
                </div>
            </div>
        </>
    )
}

export default Guests