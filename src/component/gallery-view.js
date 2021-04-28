import React from 'react'
import { Card } from 'react-bootstrap';

class GalleryView extends React.Component{
    constructor(props){
        super(props);
   
    this.state={
        filterChar:'i'
    }
}
    render(){
        const actorArr= this.props.actorData.filter(actor=>(`${actor.fname} ${actor.lname}`).includes(this.state.filterChar))
        .map((actor) => {

            return(
                 <Card style={{ width: '18rem' }} key={actor.id} >
                     <Card.Body>
                        <Card.Img src={actor.image}/>
                        <Card.Title>{`${actor.fname} ${actor.lname}`} </Card.Title>
                        <Card.Text>{` ${actor.calcAge()}`} </Card.Text> 
                        <small className="text-muted" ><Card.Link> <a href={actor.imdbLink}> IMDB</a> </Card.Link> </small>
                        </Card.Body>
                </Card>
            )
        })
        return(
                <div>{actorArr}</div>
            
        )
    }
}

export default GalleryView;