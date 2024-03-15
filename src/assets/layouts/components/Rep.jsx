

export default function Rep() {
    // useEffect(() => {
    //     const handleImageClick = () => {
    //       $('.sld-img').removeClass('active');
    //       $(event.target).addClass('active');
    //     };

    //     if ($('.sld-img').length > 0) {
    //         $('.sld-img').on('click', handleImageClick);
    //       }

    //       return () => {
    //         $('.sld-img').off('click', handleImageClick);
    //       };
    //     }, []);


  return (
    <>
    
    <div className='c-rep'>
        <div className="sldr">

            <div className="sld-img">
                <img src="./dp11.jpg" alt="dp1" />
                <h3>Mike</h3>
                <div className='dtls'>
                    <h5>Mike</h5>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            <div className="sld-img">
                <img src="./dp3.jpg" alt="dp3" />
                <h3>Jhon Cenna</h3>
                <div className='dtls'>
                    <h5>Jhon Cenna</h5>
                    <p>Lorem ipsum dolor</p>
                </div>
            </div>

            <div className="sld-img-active">
                <img src="./dp2.jpg" alt="dp2" />
                <h3>Chris Juarez</h3>
                <div className='dtls'>
                    <h5>Chris Juarez</h5>
                    <p>Founder</p>
                </div>
            </div>

            {/* <div className="sld-img">
                <img src="./dp6.jpg" alt="dp6" />
                <h3>Mourinho</h3>
                <div className='dtls'>
                    <h5>Mourinho</h5>
                    <p>Lorem ipsum dolor sit amet .</p>
                </div>
            </div> */}

            <div className="sld-img">
                <img src="./dp4.jpg" alt="dp4" />
                <h3>CEO</h3>
                <div className='dtls'>
                    <h5>Hola perdida</h5>
                    <p>Lorem ipsum dolor.</p>
                </div>
            </div>

            <div className="sld-img op-30">
                <img src="./dp5.jpg" alt="dp5" />
                <h3>KKhea</h3>
                <div className='dtls'>
                    <h5>KKhea</h5>
                    <p>Lorem ipsum dolor 8888</p>
                </div>
            </div>

        </div>
    </div>
    {/* <script src='src/assets/layouts/components/jQuery.js'></script>
    <script>
        jQuery(document).ready(function($){
            $('.sld-img').on('click',function(){
                $('.sld-img').removeClass('active')
                $(this).addClass('active')
            })
        })
    </script> */}
    </>
  )
}
