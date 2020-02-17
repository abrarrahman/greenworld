import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import $ from 'jquery';

const Map = () => {
    console.log('out',$('.gmap_canvas').height(),$('.gmap_canvas').width());
    
    
    return(
        <div>
            <div className='loading-maps tc'>
                <p>Loading directions...</p>
                <Spinner className='green' animation="border"/>
            </div>
            <div className="mapouter center">
                <div className="gmap_canvas d-none">
                    <iframe 
                        width='100%' 
                        height="500px" 
                        id="gmap_canvas" 
                        src="https://maps.google.com/maps?q=green%20world%20fashions%20ltd%2C%20dhaka%2Cbangledesh&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight="0" 
                        marginWidth="0"
                        onLoad={()=>{
                            $('.loading-maps').remove();
                            $('.gmap_canvas').removeClass('d-none');
                            }}
                        title='Green World location'></iframe>
                </div>
            </div>
        </div>
    )
}

export default Map;