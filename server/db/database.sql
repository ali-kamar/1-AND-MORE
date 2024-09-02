CREATE DATABASE shop;

CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) UNIQUE NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_role VARCHAR(50) NOT NULL DEFAULT 'user'
);

CREATE TABLE Products (
    product_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    imageUrl VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    isAvailable BOOLEAN DEFAULT TRUE,
    offerType DECIMAL(10, 2)
);

CREATE TABLE Categories (
    category_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE wishlist (
    product_id UUID PRIMARY KEY REFERENCES products(product_id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    isAvailable BOOLEAN NOT NULL
);


