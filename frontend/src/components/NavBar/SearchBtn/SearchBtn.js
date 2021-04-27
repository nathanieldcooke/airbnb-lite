// import FormField from './FormField/FormField'
import './SearchBtn.css'

function SearchBtn( { showBtn, setWindowScroll } ) {
    return (
        <div className={`search-btn-container ${showBtn}`}>
            <div className='quote-search-btn-div'>
                <form className='search-btn-form' onClick={() => (setWindowScroll(false))}>
                    <button disabled={true} className='search-form-button' type='submit'><i className="fas fa-search"></i></button>
                </form>
            </div>
        </div>

    )
}

export default SearchBtn