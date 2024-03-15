export default function Cntc() {
  return (
    <div className="c-cntc contact">
      <div className="cntc container">
        <div className="h-cntc section-header">
          <h2 className="title-cntc">Conviertete en un visionario con TSL</h2>
        </div>
        <div className="contact-content">
          <div className="contact-items">
            <div className="contact-item">
              <i></i>
              <div className="text">
                <h3>Call us</h3>
                <p>+ 11 5852 9535</p>
              </div>
            </div>

            <div className="contact-item">
              <i></i>
              <div className="text">
                <h3>Email us</h3>
                <p>tsl@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <i></i>
              <div className="text">
                <h3>Reach us</h3>
                <p>x street</p>
              </div>
            </div>

          </div>
          <form action="" className="contact-form">
            <div className="col-2">
                <div className="input-box">
                    <input type="text" placeholder="Name" className="input"/>
                </div>
                
                <div className="input-box">
                    <input type="text" placeholder="Email" className="input"/>
                </div>              
            </div>
            <div className="input-box">
                    <input type="text" placeholder="Subject" className="input"/>
                </div>

                <div className="input-box">
                    <textarea placeholder="Message" className="input input-message"></textarea>
                </div>
                <button type="submit" className="btn">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
