import './ProfileBtn.css'

function ProfileBtn ( { display } ) {
    return (
        <>
            <div className='spacer-div'>

            </div>
            <div className={`profile-btn-dropdown ${ display } `}>
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

export default ProfileBtn