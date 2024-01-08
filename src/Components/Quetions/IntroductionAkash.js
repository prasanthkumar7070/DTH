import React from 'react'
import './Intro.scss'
import Collapsible from 'react-collapsible';
const IntroductionAkash = () => {

    return (
        <div className='introduction'>
 <Collapsible trigger="Start here">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
        </div>
    )
}

export default IntroductionAkash