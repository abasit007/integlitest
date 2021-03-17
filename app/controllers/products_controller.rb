class ProductsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]
  before_action :find_product, only: [:show]
  def index
    @products = Product.all.map{|s| [s,s.image.url(:medium)]}
  end

  def new

  end

  def create
    @product = Product.create(product_params)
    if @product.save
      redirect_to products_path
    else
      redirect_to products_new_path
    end
  end

  def add_to_cart
    if session[:cart].present?
      session[:cart] << params[:product_id]
    else
      session[:cart] = []
      session[:cart] << params[:product_id]
    end
    render json: session[:cart].count
  end

  def cart
    @products = Product.where(id: session[:cart]).map{|s| [s,s.image.url(:medium)]}
  end

  def checkout
    orders = session[:cart].uniq
    orders.each do |order|
      odr = Order.new(product_id: order, user_id: current_user.id, quantity: session[:cart].count(order))
      odr.save!
    end
    session[:cart] = []
  end
  private

  def find_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:name, :price, :quantity, :user_id, :image)
  end
end
