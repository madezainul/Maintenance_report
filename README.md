# Maintenance Report

CREATE TABLE table_name(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    date DATE NOT NULL,
    shift VARCHAR(2) NOT NULL,
    supervisor VARCHAR(100) NOT NULL,
    technician_name VARCHAR(100) NOT NULL
) COMMENT '';

-- Insert 10 rows of data into the table with varied dates and shifts
INSERT INTO table_name (create_time, date, shift, supervisor, technician_name)
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