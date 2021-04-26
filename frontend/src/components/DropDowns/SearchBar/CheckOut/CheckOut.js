import './CheckOut.css'

function CheckOut({ display }) {

    return (
        <>
            <div className='checkout-spacer-div'>

            </div>
            <div className={`checkout-btn-dropdown ${display} `}>
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

export default CheckOut