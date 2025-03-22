CREATE TABLE `users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `username` varchar(100) NOT NULL,
    `email` varchar(100) NOT NULL,
    `password` varchar(100) NOT NULL,
    `token` varchar(255) DEFAULT NULL,
    `token_expires_at` datetime DEFAULT NULL,
    `verified_at` datetime DEFAULT NULL,
    `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
    `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `role` enum('ADMIN', 'USER', 'STAFF') DEFAULT 'USER',
    PRIMARY KEY (`id`),
    UNIQUE KEY `username` (`username`),
    UNIQUE KEY `email` (`email`)
)


CREATE TABLE `report_header` (
    `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
    `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
    `date` date NOT NULL,
    `shift` varchar(2) NOT NULL,
    `supervisor` varchar(100) NOT NULL,
    `technician_name` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
) 