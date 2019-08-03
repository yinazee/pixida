# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

Customer.create(first_name: "Scott", last_name: "Yu")
Customer.create(first_name: "Maggie", last_name: "Price")
Customer.create(first_name: "Tom", last_name: "Murphy")
Customer.create(first_name: "Lauren", last_name: "Heinz")

Item.create(name: "Bracelet")
Item.create(name: "Necklace")
Item.create(name: "Wallet")
Item.create(name: "Champagne Glasses")
Item.create(name: "Earrings")

Service.create(name: "Polish")
Service.create(name: "Alteration")
Service.create(name: "Etching")
Service.create(name: "Embossing")
Service.create(name: "Engraving")

Order.create(customer_id: 1, item_id: 2, service_id: 1)
Order.create(customer_id: 2, item_id: 3, service_id: 4, status: false)
Order.create(customer_id: 3, item_id: 2, service_id: 2, status: true)
Order.create(customer_id: 4, item_id: 4, service_id: 3, status: false)
