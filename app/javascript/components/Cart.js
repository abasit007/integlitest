import React from "react"
import PropTypes from "prop-types"
class Cart extends React.Component {
  
    checkout = (e) => {
      e.preventDefault();
      
      var url = "/checkout"
      $.ajax({
        type: "post",
        processData: false,
        contentType: false,
        dataType: 'script',
        url: url,
        success: function(result) {
          document.getElementsByClassName("message")[0].innerHTML = "Order created Successfully"
          setTimeout(function(){ document.getElementsByClassName("message")[0].innerHTML = "" }, 3000);
          window.location = window.location.origin + "/products"
        },
      });
    }
  
    render () {
      return (
        <React.Fragment>
          <div className="row product" >
            {this.props.products.map((product, index) => (
              
                <div className="col-md-12"key={index}>
                  <img src={product[1]} alt="" className="img-thumbnail" />
                  <h3>Name: {product[0].name}</h3>
                  <h3>Price: {product[0].price}</h3>
                  
                </div> 
            ))}
            <a href={"/cart"} className="btn btn-primary" id="add_to_cart" onClick={this.checkout}>Checkout</a>
          </div> 
        </React.Fragment>
      );
    }
  
}

export default Cart
