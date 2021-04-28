import {useState, useEffect} from 'react';
import './BookingForm.css'


const BookingForm = () => {

    let d = new Date();

    const [month, setMonth] = useState(d.getMonth());
    const [year, setYear] = useState(d.getFullYear());
    const [calender, setCalender] = useState(null);

    
    
    useEffect(() => {
        
        function getDay(date) { // get day number from 0 (monday) to 6 (sunday)
            let day = date.getDay();
            if (day == 0) day = 7;
            return day - 1;
        }
        
        let d = new Date(month, year)
        

        let table = '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr></table>';
        
        //spaces until first day
        for (let i = 0; i < getDay(d); i++) {
            table += '<td><td>';
        }
        
        //add actual dates
        while (d.getMonth() == month) {
            table += '<td>' + d.getDate() + '</td>';
            
            if (getDay(d) % 7 === 6) { // sunday, last day of week - newline
                table += '</tr><tr>';
            }
            
            d.setDate(d.getDate() + 1);
        }
        
        // spaces until end of month
        if (getDay(d) !== 0) {
            for (let i = getDay(d); i < 7; i++) {
                table += '</td></td>'
            }
        }
        
        table += '</tr></table>';

        setCalender(<div></div>)
        // setCalender(document.createElement('div'))
        
    }, [month, year]);
    
    
    console.log(calender, month, year)
    
    // let span = <span>HELOOOOOOOOOOOOOO</span>
    

    
    return (
        <div className='booking-form'>
            
        </div>
    )
};

export default BookingForm;