import React, {Component} from 'react';

import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component{

    state={
        items:[
            {id:uuid(), name:'TV'},
            {id:uuid(), name:'Microwave'},
            {id:uuid(), name:'Heater'},
            {id:uuid(), name:'Mobile'}
        ]
    }


    render(){
        const {items}=this.state;

        return(
            <Container>
            <Button color="dark" style={{marginBottom:'2rem'}} onClick={
                ()=>{
                    const name=prompt('Enter Item');

                    if(name){
                        this.setState(state=>({
                            items:[...state.items,{id:uuid(), name}]

                        }))

                    }
                }

            }>
            ADD ITEM
            </Button>
                <ListGroup>

                <TransitionGroup className="ShoppingList">


                </TransitionGroup>
                </ListGroup>

            </Container>
        )
    }


}
export default ShoppingList