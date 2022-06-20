import React from 'react'

function Card(props) {
  return (
    <div className='card'>


        <img className='cardimg' src={props.imageUrl}  alt="Place image"></img>


        <div className='cardbody'>

            <div className='location'>
                <i  class="fa-solid fa-location-dot locationicon " style={{color: '#F55A5A'}}><span className='locationName'> {props.location}  </span></i>

                <a className='maplink' src='' alt='location map link here' >   View on Google Map</a>

                
            </div>
            

            <h1 className='cardheading'>{props.title}</h1>   

            <h4 className='carddate'>{props.startDate}{props.endDate}</h4>

            <p className='cardpara'>
            {props.description}
            </p>
        </div>
    </div>
  )
}

export default Card