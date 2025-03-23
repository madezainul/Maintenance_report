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

<<<<<<< HEAD
CREATE TABLE report_header(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    date DATE NOT NULL,
    shift VARCHAR(2) NOT NULL,
    supervisor VARCHAR(100) NOT NULL,
    technician_name VARCHAR(100) NOT NULL
) COMMENT '';

-- Insert 10 rows of data into the table with varied dates and shifts
INSERT INTO report_header (create_time, date, shift, supervisor, technician_name)
VALUES 
    (NOW(), DATE_SUB(CURDATE(), INTERVAL 1 DAY), 'A', 'John Doe', 'Technician A'),
    (NOW(), DATE_SUB(CURDATE(), INTERVAL 1 DAY), 'B', 'Jane Smith', 'Technician B'),
    (NOW(), CURDATE(), 'A', 'Alice Johnson', 'Technician C'),
    (NOW(), CURDATE(), 'B', 'Bob Brown', 'Technician D'),
    (NOW(), DATE_ADD(CURDATE(), INTERVAL 1 DAY), 'A', 'Charlie Davis', 'Technician E'),
    (NOW(), DATE_ADD(CURDATE(), INTERVAL 1 DAY), 'B', 'Eve Wilson', 'Technician F'),
    (NOW(), DATE_SUB(CURDATE(), INTERVAL 2 DAY), 'A', 'Frank White', 'Technician G'),
    (NOW(), DATE_SUB(CURDATE(), INTERVAL 2 DAY), 'B', 'Grace Lee', 'Technician H'),
    (NOW(), DATE_ADD(CURDATE(), INTERVAL 2 DAY), 'A', 'Henry Moore', 'Technician I'),
    (NOW(), DATE_ADD(CURDATE(), INTERVAL 2 DAY), 'B', 'Ivy Green', 'Technician J');
=======

CREATE TABLE `report_header` (
    `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
    `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
    `date` date NOT NULL,
    `shift` varchar(2) NOT NULL,
    `supervisor` varchar(100) NOT NULL,
    `technician_name` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
) 
>>>>>>> d21385d7433f74ec9ac5936703a899f56da78f7d
