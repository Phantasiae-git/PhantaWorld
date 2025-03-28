import React from 'react'
import TextSection from './TextSection'
import "./LetsGet.css"

const LetsGet = () => {
  return (
    <TextSection type="rn">
            <a
        onClick={() =>
          window.open("https://www.instagram.com/direct/t/107255880669711/", "_blank")
        }
        className="plb"
      >
        Let's get to it!
      </a>
      <div className='contain' style={{paddingTop:'50px', display:'flex'}}><h5>Pay me through MBway or PayPal:</h5>
      <a onClick={() => window.open("https://play.google.com/store/apps/details?id=pt.sibs.android.mbway&hl=en&gl=US", '_blank')} className="pill-link-button">
            MBway
          </a>
          <a onClick={() => window.open("https://play.google.com/store/apps/details?id=com.paypal.android.p2pmobile&hl=en&gl=US", '_blank')} className="pill-link-button">
            PayPal
          </a></div>
          </TextSection>
  )
}

export default LetsGet