import ProfileBtn from '../../../DropDowns/ProfileBtn/ProfileBtn'
import './FormField.css'

function FormField ( { cssClassName, text1, text2 } ) {
    return (
        <>
            <div className={`form-field-div ` + cssClassName || '' }>
                <span>{text1}</span>
                <span className='span-grey-text'>{text2}</span>
                <ProfileBtn />
            </div>
        </>
    )
}

export default FormField;