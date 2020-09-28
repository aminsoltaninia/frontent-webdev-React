
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class Menu extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            selectDish: null,
        }
    }

    onDishSelect(dish) {
        this.setState({
            selectDish: dish
        })
    }

    renderDish(dish) {
        if (dish != null) {
            console.log(dish)
            return (
                <Card>

                    <CardImg width="100%" height="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div></div>
            )

        }
    }

    render() {
            const dishes = this.props.dishes;
            const menu = dishes.map((dish) => {
                 return (
                     <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card onClick={() => this.onDishSelect(dish)}>
  
                           <CardImg width="100%" height="100%" src={dish.image} alt={dish.name} />


                           <CardImgOverlay className="ml-5">
                              <CardTitle>{dish.name}</CardTitle>
                           </CardImgOverlay>
                        </Card>
                      </div>
            )
        });

        return (

            <div className="container">
                <div className="row">

                    {menu}

                </div>
                <div className="row">
                     {this.renderDish(this.state.selectDish)}
                </div>
            </div>
        )

    }



}



export default Menu;