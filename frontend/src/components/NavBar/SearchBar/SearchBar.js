import FormField from './FormField/FormField'
import './SearchBar.css'

function SearchBar( { showBar } ) {
    return (
        <div className={`search-bar-container ${showBar}`}>
            <div className='quote-search-bar-div'>
                <span className='quote-search-bar-span' >Your Next Adventure Starts Here...</span>
            </div>
            <form className='search-bar-form'>
                <FormField text1='Location' text2='Where are you going?' />
                <FormField text1='Check-In' text2='Add dates' />
                <FormField text1='Check-Out' text2='Add dates' />
                <FormField cssClassName='form-field-last-child' text1='Guests' text2='Add guests' />
                <button className='search-form-button' type='submit'><i className="fas fa-search"></i></button>
            </form>
        </div>

    )
}

export default SearchBar