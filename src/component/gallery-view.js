import React from 'react'
import { Card, Col, Jumbotron, Row } from 'react-bootstrap';
import FilterByInput from './FilterByInput';

class GalleryView extends React.Component{
    constructor(props){
        super(props);
   
    this.state={
        filterChar:''
    }
}

inputText = (event) => {
    const value=event.target.value;
    this.setState({
        filterChar: value
    })
}
    render(){
        const actorFilterArr= this.props.actorsData.filter(actor=>(`${actor.fname} ${actor.lname}`.toLowerCase()).includes((this.state.filterChar).toLowerCase()))
        .map((actor) => {

            return(
                <Col   key={actor.id} sm={6} md={4} lg={3}>
                 <Card >
                     <Card.Body>
                        <Card.Img src={actor.image}/>
                        <a href={actor.imdbLink} target="_blank">  <Card.Title>{`${actor.fname} ${actor.lname}`} </Card.Title></a>
                        <Card.Text>{` BirthDate ${actor.birthday.format('DD/MM/YYYY')}`} </Card.Text> 
                        <Card.Text>{` Age ${actor.calcAge()}`} </Card.Text> 
                        </Card.Body>
                </Card>
                </Col>
         ) })
         
        return(
            <div>
                <Jumbotron>
                    <h1>Actors</h1>
                    
                </Jumbotron>
                <Col sm={6} md={4} lg={3}>
                <FilterByInput
                  inputText={this.inputText}
                  filterChar={this.state.filterChar}
             />             
                
             </Col>
             <Row>
                {actorFilterArr}
                </Row>
            </div>
        )
    }
}

export default GalleryView;