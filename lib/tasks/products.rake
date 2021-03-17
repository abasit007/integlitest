namespace :products do
  desc "TODO"
  task add_products: :environment do
    product = Product.new
    file = File.open("#{Rails.root}/app/assets/images/car.jpg")
    product.image = file
    product.price = 50000
    product.name = "Range rover"
    product.quantity = 50
    product.user_id = User.first.id
    file.close
    product.save!

    product = Product.new
    file = File.open("#{Rails.root}/app/assets/images/laptop.jpg")
    product.image = file
    product.price = 500
    product.name = "HP Elite Book"
    product.quantity = 50
    product.user_id = User.first.id
    file.close
    product.save!
  end

end
