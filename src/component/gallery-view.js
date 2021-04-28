import React from 'react'

class GalleryView extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const actorArr= this.props.actorData.map((actor) => {

            return( <div className="card">
                        {actor.image}
                        <div className="card-content">
                        {actor.fname}
                        {actor.lname}                     
                        {actor.imdbLink}
                        {actor.calcAge()}
                        </div>
                    </div>
            )
        })
        return(
                <div>{actorArr}</div>
            
        )
    }
}

export default GalleryView;