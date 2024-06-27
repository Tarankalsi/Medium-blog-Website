
import Quote from '../components/authentification/Quote'

import SigninInputs from '../components/authentification/SigninInputs'

function Signin() {
  return (
    <div>
        <div className='grid lg:grid-cols-2'>
            <div>
                <SigninInputs/>
            </div>
            <div className='hidden lg:block'>
                <Quote />
            </div>

        </div>

    </div>
)
}

export default Signin


  
