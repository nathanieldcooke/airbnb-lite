import CheckIn from '../../DropDowns/SearchBar/CheckIn/CheckIn'
import CheckOut from '../../DropDowns/SearchBar/CheckOut/CheckOut'
import Guests from '../../DropDowns/SearchBar/Guests/Guests'
import FormField from './FormField/FormField'
import './SearchBar.css'

function SearchBar( { showBar } ) {
    return (
        <div className={`search-bar-container ${showBar}`}>
            <div className='quote-search-bar-div'>
                <span className='quote-search-bar-span' >Your Next Adventure Starts Here...</span>
            </div>
            <form className='search-bar-form'>
                {/* <FormField DropDown={Location} text1='Location' text2='Where are you going?' /> */}
                <FormField DropDown={CheckIn} text1='Check-In' text2='Add dates' />
                <FormField DropDown={CheckOut} text1='Check-Out' text2='Add dates' />
                <FormField DropDown={Guests} text1='Guests' text2='Add guests' />
                <button disabled={true} className='search-form-button' type='submit'><i className="fas fa-search"></i></button>
            </form>
        </div>

    )
}

export default SearchBar