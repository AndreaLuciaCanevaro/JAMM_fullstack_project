-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: jamm
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brandName` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'JBL','2021-11-01 21:11:40','2021-11-01 21:11:40',NULL),(2,'SONY','2021-11-01 21:12:08','2021-11-01 21:12:08',NULL),(3,'Genius','2021-11-01 21:12:29','2021-11-01 21:12:29',NULL),(4,'Makkax','2021-11-01 21:13:04','2021-11-01 21:13:04',NULL),(5,'Logitech','2021-11-01 21:13:26','2021-11-01 21:13:26',NULL),(6,'Razer','2021-11-01 21:14:20','2021-11-01 21:14:20',NULL),(7,'Samsung','2021-11-01 21:14:35','2021-11-01 21:14:35',NULL),(8,'Lenovo','2021-11-01 21:14:56','2021-11-01 21:14:56',NULL),(9,'LG','2021-11-01 21:15:25','2021-11-01 21:15:25',NULL);
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Gaming','2021-11-01 20:09:30','2021-11-01 20:09:30',NULL),(2,'Accesorios','2021-11-01 20:11:40','2021-11-01 20:11:40',NULL),(3,'Dispositivos','2021-11-01 20:11:40','2021-11-01 20:11:40',NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `image` text NOT NULL,
  `description` text DEFAULT NULL,
  `price` int(11) NOT NULL,
  `color` varchar(45) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Products_FK` (`category_id`),
  CONSTRAINT `Products_FK` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,'Auriculares X900 L','Auris.jpg','Auriculares Gamer JBL Quantum 600 Inalámbricos PC/PS4/PS5/Xbox/NS',10000,NULL,'2021-11-01 21:18:41','2021-11-01 21:18:41',NULL),(2,1,'PlayStation5','Play.jpg','Consola PS5 Playstation Edición Física + Joystick Ps5 Sony Dual Sense',195000,NULL,'2021-11-01 21:22:08','2021-11-01 21:22:08',NULL),(3,1,'Mando PS5','Joystick.jpg','Joystick Playstation 5 Dual Sense',13000,NULL,'2021-11-01 21:23:08','2021-11-01 21:23:08',NULL),(4,1,'SpiderMan Miles Morales','JuegoSpiderMan.jpg','Juego Spiderman Miles Morales',7000,NULL,'2021-11-01 21:23:51','2021-11-01 21:23:51',NULL),(5,2,'Teclado XRT20','Teclado.jpg','Teclado Genius Smart XRT-20 Negro',1500,NULL,'2021-11-01 21:24:40','2021-11-01 21:24:40',NULL),(6,2,'Silla Gaming Champ','Silla.jpg','Silla Gamer Makkax Roja/Blanca/Negra',38200,NULL,'2021-11-01 21:26:13','2021-11-01 21:26:13',NULL),(7,2,'Mouse Logitech 400','Mouse.jpg','Mouse Gamer Optico Colores Gaming Rgb',2000,NULL,'2021-11-01 21:26:48','2021-11-01 21:26:48',NULL),(8,2,'MousePad Alien XR','Mousepad.jpg','4000',4000,NULL,'2021-11-01 21:27:23','2021-11-01 21:27:23',NULL),(9,3,'Tablet Samsung X10','Tablet.jpg','Tablet Samsung Galaxy Tab A7 SM-T500 10.4 64GB dark gray con 3GB de memoria RAM',30000,NULL,'2021-11-01 21:28:07','2021-11-01 21:28:07',NULL),(10,3,'Notebook Lenovo 809','Notebook.jpg','Notebook Lenovo Yoga 7 Core I7 12GB SSD 512GB TACTIL Win10',80000,NULL,'2021-11-01 21:28:44','2021-11-01 21:28:44',NULL),(11,3,'Samsung Galaxy S10','Celular.jpg','Celular Libre Samsung Galaxy S10 Violeta SM-G991BZVLARO CM',120000,NULL,'2021-11-01 21:29:40','2021-11-01 21:29:40',NULL),(12,3,'Tablet LG Flex','TabletPlegable.jpg','ThinkPad X1 Fold Gen 1 - Black 8 GB LPDDR4x 4266MHz Soldada, POP Memoria',150000,NULL,'2021-11-01 21:30:17','2021-11-01 21:30:17',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productsbrands`
--

DROP TABLE IF EXISTS `productsbrands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productsbrands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ProductsBrands_FK` (`product_id`),
  KEY `ProductsBrands_FK_1` (`brand_id`),
  CONSTRAINT `ProductsBrands_FK` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `ProductsBrands_FK_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productsbrands`
--

LOCK TABLES `productsbrands` WRITE;
/*!40000 ALTER TABLE `productsbrands` DISABLE KEYS */;
INSERT INTO `productsbrands` VALUES (1,1,1),(2,2,2),(3,3,2),(4,4,2),(5,5,3),(6,6,4),(7,7,5),(8,8,6),(9,9,7),(10,10,8),(11,11,7),(12,12,9);
/*!40000 ALTER TABLE `productsbrands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `image` text NOT NULL,
  `category` varchar(45) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modifed_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Pedro','usuario@hotmail.com','$2a$10$8G9VW78aAJ.6prHIp9W4xeYqBtM5XfbBmot1AF5SLULanng4s7rDW','user-1633656387602.jpg',NULL,'2021-11-01 21:02:55','2021-11-01 21:02:55',NULL),(3,'Juan','juani@hotmail.com','$2a$10$1K2fmuoH9ZTkxGgXZHmBM.zDFsfRskqUrWOFK3cugQpm5dlIhDRMG','user-1635444012954.jpg',NULL,'2021-11-01 21:03:30','2021-11-01 21:03:30',NULL),(4,'Pedroo','pedro@hotmail.com','$2a$10$zJdxTc7ekNRbKvzn/swG2.zcEHdhU7/1Nb2c3d9T1HOqmSJJO0U1G','user-1635444899807.jpg',NULL,'2021-11-01 21:04:29','2021-11-01 21:04:29',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersproducts`
--

DROP TABLE IF EXISTS `usersproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usersproducts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UsersProducts_FK` (`user_id`),
  KEY `UsersProducts_FK_1` (`product_id`),
  CONSTRAINT `UsersProducts_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `UsersProducts_FK_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersproducts`
--

LOCK TABLES `usersproducts` WRITE;
/*!40000 ALTER TABLE `usersproducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `usersproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'jamm'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-01 18:39:58
