import React from "react"
import PropTypes from "prop-types"
class Product extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="row">
          <form action={this.props.url} method="post" enctype="multipart/form-data" >
          <input type="hidden" name="product[user_id]" id="user_id" value={this.props.user} className="form-control"/>
            <div className="form-group">
              <label>Product Name</label>
              <input type="text" name="product[name]" id="product_name" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Product Price</label>
              <input type="number" name="product[price]" id="product_price" className="form-control" />
            </div>
            <div className="form-group">
              <label>Product Quantity</label>
              <input type="number" name="product[quantity]" id="product_quantity" className="form-control" />
            </div>
            <div className="form-group">
              <label>Product Image</label>
              <input type="file" name="product[image]" id="product_image" className="form-control" />
            </div>
            <div className="form-group">
            <input type="submit" name="commit" value="Create Product" data-disable-with="Create Product" className="btn btn-secondary"/>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Product
