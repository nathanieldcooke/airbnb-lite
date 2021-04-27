import ShowCaseBox from '../ShowCaseBox/ShowCaseBox'
import './NearestToYou.css'

function NearestToYou () {
    return (
        <div className='nearest-to-you'>
            <span>Nearst To You</span>
            <div>
                <ShowCaseBox title='Place Near By'/>
                <ShowCaseBox title='Place Near By' />
                <ShowCaseBox title='Place Near By' />
                <ShowCaseBox title='Place Near By' />
            </div>
        </div>
    )
}

export default NearestToYou;