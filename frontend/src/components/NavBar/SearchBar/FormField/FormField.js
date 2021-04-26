import './FormField.css'

function FormField ( { cssClassName, text1, text2 } ) {
    return (
        <div className={`form-field-div ` + cssClassName || '' }>
            <span>{text1}</span>
            <span className='span-grey-text'>{text2}</span>
        </div>
    )
}

export default FormField;