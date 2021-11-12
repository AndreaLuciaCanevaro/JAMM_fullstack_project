-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-jamm.alwaysdata.net
-- Generation Time: Nov 12, 2021 at 04:44 PM
-- Server version: 10.5.11-MariaDB
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jamm_grupo8`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `brandName` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `brandName`, `created_at`, `modified_at`, `deleted_at`) VALUES
(1, 'JBL', '2021-11-01 20:11:40', '2021-11-01 20:11:40', NULL),
(2, 'SONY', '2021-11-01 20:12:08', '2021-11-01 20:12:08', NULL),
(3, 'Genius', '2021-11-01 20:12:29', '2021-11-01 20:12:29', NULL),
(4, 'Makkax', '2021-11-01 20:13:04', '2021-11-01 20:13:04', NULL),
(5, 'Logitech', '2021-11-01 20:13:26', '2021-11-01 20:13:26', NULL),
(6, 'Razer', '2021-11-01 20:14:20', '2021-11-01 20:14:20', NULL),
(7, 'Samsung', '2021-11-01 20:14:35', '2021-11-01 20:14:35', NULL),
(8, 'Lenovo', '2021-11-01 20:14:56', '2021-11-01 20:14:56', NULL),
(9, 'LG', '2021-11-01 20:15:25', '2021-11-01 20:15:25', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `modified_at`, `deleted_at`) VALUES
(1, 'Gaming', '2021-11-01 19:09:30', '2021-11-01 19:09:30', NULL),
(2, 'Accesorios', '2021-11-01 19:11:40', '2021-11-01 19:11:40', NULL),
(3, 'Dispositivos', '2021-11-01 19:11:40', '2021-11-01 19:11:40', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `image` text NOT NULL,
  `description` text DEFAULT NULL,
  `price` int(11) NOT NULL,
  `color` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `productName`, `image`, `description`, `price`, `color`, `created_at`, `modified_at`, `deleted_at`) VALUES
(1, 1, 'Auriculares X900 L', 'Auris.jpg', 'Auriculares Gamer JBL Quantum 600 Inalámbricos PC/PS4/PS5/Xbox/NS', 10000, NULL, '2021-11-01 20:18:41', '2021-11-01 20:18:41', NULL),
(2, 1, 'PlayStation5', 'Play.jpg', 'Consola PS5 Playstation Edición Física + Joystick Ps5 Sony Dual Sense', 195000, NULL, '2021-11-01 20:22:08', '2021-11-01 20:22:08', NULL),
(3, 1, 'Mando PS5', 'Joystick.jpg', 'Joystick Playstation 5 Dual Sense', 13000, NULL, '2021-11-01 20:23:08', '2021-11-01 20:23:08', NULL),
(4, 1, 'SpiderMan Miles Morales', 'JuegoSpiderMan.jpg', 'Juego Spiderman Miles Morales', 7000, NULL, '2021-11-01 20:23:51', '2021-11-01 20:23:51', NULL),
(5, 2, 'Teclado XRT20', 'Teclado.jpg', 'Teclado Genius Smart XRT-20 Negro', 1500, NULL, '2021-11-01 20:24:40', '2021-11-01 20:24:40', NULL),
(6, 2, 'Silla Gaming Champ', 'Silla.jpg', 'Silla Gamer Makkax Roja/Blanca/Negra', 38200, NULL, '2021-11-01 20:26:13', '2021-11-01 20:26:13', NULL),
(7, 2, 'Mouse Logitech 400', 'Mouse.jpg', 'Mouse Gamer Optico Colores Gaming Rgb', 2000, NULL, '2021-11-01 20:26:48', '2021-11-01 20:26:48', NULL),
(8, 2, 'MousePad Alien XR', 'Mousepad.jpg', '4000', 4000, NULL, '2021-11-01 20:27:23', '2021-11-01 20:27:23', NULL),
(9, 3, 'Tablet Samsung X10', 'Tablet.jpg', 'Tablet Samsung Galaxy Tab A7 SM-T500 10.4 64GB dark gray con 3GB de memoria RAM', 30000, NULL, '2021-11-01 20:28:07', '2021-11-01 20:28:07', NULL),
(10, 3, 'Notebook Lenovo 809', 'Notebook.jpg', 'Notebook Lenovo Yoga 7 Core I7 12GB SSD 512GB TACTIL Win10', 80000, NULL, '2021-11-01 20:28:44', '2021-11-01 20:28:44', NULL),
(11, 3, 'Samsung Galaxy S10', 'Celular.jpg', 'Celular Libre Samsung Galaxy S10 Violeta SM-G991BZVLARO CM', 120000, NULL, '2021-11-01 20:29:40', '2021-11-01 20:29:40', NULL),
(12, 3, 'Tablet LG Flex', 'TabletPlegable.jpg', 'ThinkPad X1 Fold Gen 1 - Black 8 GB LPDDR4x 4266MHz Soldada, POP Memoria', 150000, NULL, '2021-11-01 20:30:17', '2021-11-01 20:30:17', NULL),
(17, 1, 'fggrgregr', 'product-1636072652461.jpg', ' egrgrgrg', 2222555, 'Negro', '2021-11-04 23:37:32', '2021-11-04 23:37:32', NULL),
(18, 3, 'prueba2', 'product-1636077124182.jpg', ' otro producto prueba', 444446, 'Negro', '2021-11-05 01:41:04', '2021-11-05 01:52:04', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `productsbrands`
--

CREATE TABLE `productsbrands` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productsbrands`
--

INSERT INTO `productsbrands` (`id`, `product_id`, `brand_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 2),
(4, 4, 2),
(5, 5, 3),
(6, 6, 4),
(7, 7, 5),
(8, 8, 6),
(9, 9, 7),
(10, 10, 8),
(11, 11, 7),
(12, 12, 9);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `image` text NOT NULL,
  `category` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `image`, `category`, `created_at`, `modified_at`, `deleted_at`) VALUES
(3, 'Juan', 'juani@hotmail.com', '$2a$10$1K2fmuoH9ZTkxGgXZHmBM.zDFsfRskqUrWOFK3cugQpm5dlIhDRMG', 'user-1635444012954.jpg', NULL, '2021-11-01 20:03:30', '2021-11-01 20:03:30', NULL),
(4, 'Pedrito', 'pedro@hotmail.com', '$2a$10$zJdxTc7ekNRbKvzn/swG2.zcEHdhU7/1Nb2c3d9T1HOqmSJJO0U1G', 'user-1635444899807.jpg', NULL, '2021-11-01 20:04:29', '2021-11-12 15:32:07', NULL),
(5, 'Martin Taddia', 'taddiamartin@gmail.com', '$2a$10$yqkQhmXjFM.0Cv2jtLSoLuEihl5gWdcM3IfvzIs1rOTcibyS1C47S', 'user-1636492916098.jpg', NULL, '2021-11-09 21:21:56', '2021-11-10 13:54:56', NULL),
(6, 'Andi', 'andi@hotmail.com', '$2a$10$9.LTibbrYbb7/iHdjSa7iOOy7hnGOl4rLy4s0kIVLnq88sOx7RlXG', 'user-1636493163796.jpg', NULL, '2021-11-09 21:26:04', '2021-11-09 21:26:04', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `usersproducts`
--

CREATE TABLE `usersproducts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Products_FK` (`category_id`);

--
-- Indexes for table `productsbrands`
--
ALTER TABLE `productsbrands`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ProductsBrands_FK` (`product_id`),
  ADD KEY `ProductsBrands_FK_1` (`brand_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usersproducts`
--
ALTER TABLE `usersproducts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UsersProducts_FK` (`user_id`),
  ADD KEY `UsersProducts_FK_1` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `productsbrands`
--
ALTER TABLE `productsbrands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `usersproducts`
--
ALTER TABLE `usersproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `Products_FK` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `productsbrands`
--
ALTER TABLE `productsbrands`
  ADD CONSTRAINT `ProductsBrands_FK` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `ProductsBrands_FK_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);

--
-- Constraints for table `usersproducts`
--
ALTER TABLE `usersproducts`
  ADD CONSTRAINT `UsersProducts_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `UsersProducts_FK_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
