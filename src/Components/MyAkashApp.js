import React from 'react'

const MyAkashApp = () => {
    return (
        <div className='my-akash-app'>
            <div className='my-akash-header'>
                <h2>MyAKASH App</h2>
                <div className='my-akash-img'>
                    <img src='../Assets/Images/1.png' alt='' />
                </div>
            </div>

            <div className='row steps'>
               <div className='col-md-3 col-sm-6 col-12'>
                  <div className='login-steps'>
                    <div className='d-flex'>
                      <span><i className='fa fa-check'></i></span>
                        <h5>Step 1</h5>
                    </div>
                    <p>Log in to MyAKASH app</p>
                  </div>
                  <div className='login-header'>
                      <h2>Login</h2>
                  </div>
               </div>

               <div className='col-md-3 col-sm-6 col-12'>
                  <div className='login-steps'>
                    <div className='d-flex'>
                      <span><i className='fa fa-check'></i></span>
                        <h5>Step 2</h5>
                    </div>
                    <p>Tap Recharge option</p>
                  </div>
                  <div className='login-header'>
                      <h2>Recharge</h2>
                  </div>
               </div>

               <div className='col-md-3 col-sm-6 col-12'>
                  <div className='login-steps'>
                    <div className='d-flex'>
                      <span><i className='fa fa-check'></i></span>
                        <h5>Step 3</h5>
                    </div>
                    <p>Enter your recharge amount</p>
                  </div>
                  <div className='login-header'>
                      <h2>Recharge Amount</h2>
                  </div>
               </div>
               <div className='col-md-3 col-sm-6 col-12'>
                  <div className='login-steps'>
                    <div className='d-flex'>
                      <span><i className='fa fa-check'></i></span>
                        <h5>Step 4</h5>
                    </div>
                    <p>Slide to recharge</p>
                  </div>
                  <div className='login-header'>
                      <h2>Slide to Recharge</h2>
                  </div>
               </div>

               <div className='col-md-3 col-sm-6 col-12'>
                  <div className='login-steps'>
                    <div className='d-flex'>
                      <span><i className='fa fa-check'></i></span>
                        <h5>Step 5</h5>
                    </div>
                    <p>Select your payment method</p>
                  </div>
                  <div className='login-header'>
                      <h2>Payment Method</h2>
                  </div>
               </div>

               <div className='col-md-3 col-sm-6 col-12'>
                  <div className='login-steps'>
                    <div className='d-flex'>
                      <span><i className='fa fa-check'></i></span>
                        <h5>Step 6</h5>
                    </div>
                    <p>Press payment button</p>
                  </div>
                  <div className='login-header'>
                      <h2>Payment Button</h2>
                  </div>
               </div>

               <div className='col-md-3 col-sm-6 col-12'>
                  <div className='login-steps'>
                    <div className='d-flex'>
                      <span><i className='fa fa-check'></i></span>
                        <h5>Step 7</h5>
                    </div>
                    <p>Enter your payment information</p>
                  </div>
                  <div className='login-header'>
                      <h2>Payment Information</h2>
                  </div>
               </div>

               <div className='col-md-3 col-sm-6 col-12'>
                  <div className='login-steps'>
                    <div className='d-flex'>
                      <span><i className='fa fa-check'></i></span>
                        <h5>Step 7</h5>
                    </div>
                    <p>Complete payment</p>
                  </div>
                  <div className='login-header'>
                      <h2>Complete</h2>
                  </div>
               </div>

               <div className='col-md-3 col-sm-6 col-12'>
                  <div className='login-steps'>
                    <div className='d-flex'>
                      <span><i className='fa fa-check'></i></span>
                        <h5>Step 9</h5>
                    </div>
                    <p>Bill Payment successful</p>
                  </div>
                  <div className='login-header'>
                      <h2>Successful</h2>
                  </div>
               </div>
               
            </div>
        </div>
    )
}

export default MyAkashApp