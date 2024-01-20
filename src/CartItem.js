import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ' '
        }
    }
    render(){

        const {price, title, qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img  style = {styles.image}/>
                    {/* <img  style = {styles.image}--> here we pass the JS code/> */}

                </div>

                <div className="right-block">
                    <div style={{fontSize:25}}>{this.state.title}</div>
                    {/* <div style={{fontSize:25}--> Here we pass the object directly}>Phone</div> */}
                    {/* <div style={{Js Object--By using "{{object}}"}}>Phone</div> */}
                    <div style = {{color: '#777'}}>{price}</div>
                    <div style = {{color: '#777'}} >{qty}</div>

                    <div className="cart-item-action">
                        {/* Buttons */}

                        <img alt="decrease" className="action-icons" src= "https://cdn-icons-png.flaticon.com/128/1828/1828906.png"/>
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png"/>
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"/>
                        
                    </div>
                </div>

                {/* super()--By this we are calling the constructor of parent class as
                we are inheriting the 'Component class' */}

            </div>
        )
    }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius: 4,
        background: '#777'
    }
}

export default CartItem;