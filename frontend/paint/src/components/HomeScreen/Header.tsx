import React, {useState} from 'react'

const Header = () => {
    const [button, setButton] = useState<Boolean>(false);

    const ButtonToggle = () => {
        setButton(!button);
    }
  return (
    <div>
        <div className='top-content d-flex align-items-center justify-content-center'>
            <div className='row container justify-content-center'>
                <div className='col-md-8'>
                    <div className='form-holder  d-flex align-items-center justify-content-between'>
                        <div className='input-holder bg-white p-2'>
                            <input type="text p-2" placeholder='Search painted poster'/>
                        </div>
                        <button className='bg-white btn-search' onClick={ButtonToggle}>
                            {button ? <div className='spinner-border'></div> : <i className='fa fa-search'></i>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
export {}