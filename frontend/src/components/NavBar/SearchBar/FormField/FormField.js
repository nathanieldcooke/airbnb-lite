import { useState, useEffect } from 'react';
import Location from '../../../DropDowns/SearchBar/Location/Location'
import './FormField.css'

function FormField ( {DropDown, text1, text2 } ) {

    let [display, setDisplay] = useState('hidden');

    return (
        <>
            <div className={`form-field-div `}
                onClick={((e) => { setDisplay('') })}
                onMouseLeave={((e) => { setDisplay('hidden') })}
            >
                <span>{text1}</span>
                <span className='span-grey-text'>{text2}</span>
                <DropDown display={display}/>
            </div>
        </>
    )
}

export default FormField;