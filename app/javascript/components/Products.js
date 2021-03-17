import React from "react"
import PropTypes from "prop-types"
class Products extends React.Component {
  addToCart = (e) => {
    e.preventDefault();
    var product_id = e.currentTarget.href.split("/").pop();
    var url = "/products/add_to_cart?product_id="+product_id
    $.ajax({
      type: "post",
      processData: false,
      contentType: false,
      dataType: 'script',
      url: url,
      success: function(result) {
        document.getElementsByClassName("cart-total")[0].innerHTML = result;
        document.getElementsByClassName("message")[0].innerHTML = "Product Added to Cart"
        setTimeout(function(){ document.getElementsByClassName("message")[0].innerHTML = "" }, 3000);
      },
    });
  }

  render () {
    return (
      <React.Fragment>
        <div className="row product" >
          {this.props.products.map((product, index) => (
            
              <div className="col-md-4"key={index}>
                <img src={product[1]} alt="" className="img-thumbnail" />
                <h3>Name: {product[0].name}</h3>
                <h3>Price: {product[0].price}</h3>
                <h3>Quantity: {product[0].quantity}</h3>
                <a href={"/add_to_cart/"+ product[0].id} value ={product[0].id} className="btn btn-primary" id="add_to_cart" onClick={this.addToCart}>Add to Cart</a>
              </div> 
          ))}
        </div> 
      </React.Fragment>
    );
  }
}

export default Products
