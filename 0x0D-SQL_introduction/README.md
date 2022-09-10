# SQL - Introduction

## Concepts
For this project, we expect you to look at these concepts:

* [Databases](./Databases.md)
* Databases


## Resources:books:
Read or watch:
* [What is Database & SQL?](https://www.youtube.com/watch?v=FR4QIeZaPeM)
* [A Basic MySQL Tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04)
* [Basic SQL statements: DDL and DML](https://web.csulb.edu/colleges/coe/cecs/dbdesign/dbdesign.php?page=sql/ddldml.php)
* [Basic queries: SQL and RA](https://web.csulb.edu/colleges/coe/cecs/dbdesign/dbdesign.php?page=sql/queries.php)
* [SQL technique: functions](https://web.csulb.edu/colleges/coe/cecs/dbdesign/dbdesign.php?page=sql/functions.php)
* [SQL technique: subqueries](https://web.csulb.edu/colleges/coe/cecs/dbdesign/dbdesign.php?page=sql/subqueries.php)
* [What makes the big difference between a backtick and an apostrophe?](https://stackoverflow.com/questions/29402361/what-makes-the-big-difference-between-a-backtick-and-an-apostrophe/29402458)
* [MySQL Cheat Sheet](https://intellipaat.com/mediaFiles/2019/02/SQL-Commands-Cheat-Sheet.pdf)
* [MySQL 5.7 SQL Statement Syntax](https://dev.mysql.com/doc/refman/8.0/en/sql-statements.html)

---
## Learning Objectives:bulb:
What I learned from this project:

* What’s a database
* What’s a relational database
* What does SQL stand for
* What’s MySQL
* How to create a database in MySQL
* What does DDL and DML stand for
* How to CREATE or ALTER a table
* How to SELECT data from a table
* How to INSERT, UPDATE or DELETE data
* What are subqueries
* How to use MySQL functions

---
## **More Info**
## Comments for your SQL file:
```
$ cat my_script.sql
-- 3 first students in the Batch ID=3
-- because Batch 3 is the best!
SELECT id, name FROM students WHERE batch_id = 3 ORDER BY created_at DESC LIMIT 3;
$
````

## Install MySQL 8.0 on Ubuntu 20.04 LTS

```
$ sudo apt update
$ sudo apt install mysql-server
...
$ mysql --version
mysql  Ver 8.0.25-0ubuntu0.20.04.1 for Linux on x86_64 ((Ubuntu))
$
```
Connect to your MySQL server:
```
$ sudo mysql
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 11
Server version: 8.0.25-0ubuntu0.20.04.1 (Ubuntu)

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
mysql> quit
Bye
$
```

## Use “container-on-demand” to run MySQL
**In the container, credentials are `root/root`**

* Ask for container `Ubuntu 20.04`
* Connect via SSH
* OR connect via the Web terminal
* In the container, you should start MySQL before playing with it:
```
$ service mysql start                                                   
 * Starting MySQL database server mysqld 
$
$ cat 0-list_databases.sql | mysql -uroot -p                               
Database                                                                                   
information_schema                                                                         
mysql                                                                                      
performance_schema                                                                         
sys                      
$
```
In the container, credentials are `root/root`

---

## Tasks

* **0. List databases**
  * [0-list_databases.sql](./0-list_databases.sql): MySQL script that lists all databases.

* **1. Create a database**
  * [1-create_database.sql](./1-create_database.sql): MySQL script that creates the database `hbtn_0c_0`.

* **2. Delete a database**
  * [2-remove_databases.sql](./2-remove_databases.sql): MySQL script that deletes the database `hbtn_0c_0`.

* **3. List tables**
  * [3-list_tables.sql](./3-list_tables.sql): MySQL script that lists all tables.

* **4. First table**
  * [4-first_table.sql](./4-first_table.sql): MySQL script that creates a table `first_table`.

* **5. Full description**
  * [5-full_table.sql](./5-full_table.sql): MySQL script that prints the full description of the table `first_table`.

* **6. List all in table**
  * [6-list_values.sql](./6-list_values.sql): MySQL script that lists all rows of the table `first_table`.

* **7. First add**
  * [7-insert_value.sql](./7-insert_value.sql): MySQL script that inserts a new row in the table `first_table`.

* **8. Count 89**
  * [8-count_89.sql](./8-count_89.sql): MySQL script that displays the number records with `id = 89` in the table `first_table`.

* **9. Full creation**
  * [9-full_creation.sql](./9-full_creation.sql): MySQL script that creates and fills a table `second_table` and add some rows.

* **10. List by best**
  * [10-top_score.sql](./10-top_score.sql): MySQL script that lists the `score` and `name` of all records of the table `second_table` in order of descending `score`.

* **11. Select the best**
  * [11-best_score.sql](./11-best_score.sql): MySQL script that lists the `score` and `name` of all records with a `score >= 10` in the table `second_table` in order of descending score.

* **12. Cheating is bad**
  * [12-no_cheating.sql](./12-no_cheating.sql): MySQL script that updates the score of Bob to 10 the table `second_table`.

* **13. Score too low**
  * [13-change_class.sql](./13-change_class.sql): MySQL script that removes all records with a `score <= 5` in the table `second_table`.

* **14. Average**
  * [14-average.sql](./14-average.sql): MySQL script that computes the average `score` of all records in the table `second_table`.

* **15. Number by score**
  * [15-groups.sql](./15-groups.sql): MySQL script that lists the `score` and number of records with the same score in the table `second_table` in order of descending count.

* **16. Say my name**
  * [16-no_link.sql](./16-no_link.sql): MySQL script that lists the `score` and `name` of all records in the table `second_table` in order of descending `score`. Does not display rows without a `name` value.
  
---

## Author
* **Chacha Alex Chacha** - [Chacha-A-Chacha](https://github.com/Chacha-A-Chacha)