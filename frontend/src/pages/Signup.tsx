import Quote from '../components/authentification/Quote'
import SignupInputs from '../components/authentification/SignupInputs'


function Signup() {
    return (
        <div>
            <div className='grid lg:grid-cols-2'>
                <div>
                    <SignupInputs/>
                </div>
                <div className='hidden lg:block'>
                    <Quote />
                </div>

            </div>

        </div>
    )
}

export default Signup
