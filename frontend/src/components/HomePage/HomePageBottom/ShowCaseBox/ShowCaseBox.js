import './ShowCaseBox.css'
        // later also an img
function ShowCaseBox ({title, src}) {
    return (
        <div className='show-case-box'>
            <span>{title}</span>
            <div className='image'>
                <img src={`${src}`}/>
            </div>
        </div>
    )
}

export default ShowCaseBox