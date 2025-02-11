import React from 'react'
import { Container } from 'react-bootstrap'
import CtaHome from '../Home/CtaHome'

const PayNow = () => {
  return (
    <>
          <section className='section paynow'>
        <Container>
            <div className="main-pay">
                <h3>For <br />
                every dream, 
                every business, 
                every creator.</h3>
                <div className="paynowsection">
                    <div className="discrip">
                        <p>The Best Rate Creators Club is built on the belief that everyone deserves an equal opportunity to succeed online. Whether you’re just starting out or looking to grow, our platform is here to support you, with no barriers and all the tools you need.</p>
                    </div>
                    <div className="prize">
                        <h4><span>₹</span>100</h4>
                        <a href="#!" class="button btn-2">Pay Now</a>
                    </div>
                </div>
            </div>
        </Container>
    </section>
    <CtaHome/>
    </>
  )
}

export default PayNow