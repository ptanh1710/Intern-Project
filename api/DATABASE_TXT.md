# Table: User(Admin), Category, Product, Customer, Order, OrderItem
|_ Relationship:    [Product <- Category]
                    [Customer -> Order]
                    [Product -> OrderItem <- Order]

|__ Model:  [Category]  : id, name, slug, description, isActived
            [Product]   : id, name, slug, price, quantity, image, thumbUrl
            [Customer]  : id, name, username, password, email, address, phone
            [Order]     : id, customerId, total
            [OrderItem] : id, orderId, productId, quantity, price


    |__ Create Model and Migration: (php artisan make:model [NameModel] -m)
