-- --------------------------------------------------------
-- Host:                         whereto.cmhf9cywbgly.us-east-2.rds.amazonaws.com
-- Server version:               5.6.29-log - MySQL Community Server (GPL)
-- Server OS:                    Linux
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table citydata.unemployment
DROP TABLE IF EXISTS `unemployment`;
CREATE TABLE IF NOT EXISTS `unemployment` (
  `state` varchar(50) NOT NULL,
  `unemployment_rate_2016` decimal(3,2) NOT NULL,
  `employment_rank` int(2) NOT NULL,
  PRIMARY KEY (`state`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table citydata.unemployment: ~51 rows (approximately)
DELETE FROM `unemployment`;
/*!40000 ALTER TABLE `unemployment` DISABLE KEYS */;
INSERT INTO `unemployment` (`state`, `unemployment_rate_2016`, `employment_rank`) VALUES
	('Alabama', 6.20, 49),
	('Alaska', 6.70, 51),
	('Arizona', 4.80, 28),
	('Arkansas', 3.90, 13),
	('California', 5.20, 40),
	('Colorado', 3.00, 5),
	('Connecticut', 4.40, 23),
	('Delaware', 4.30, 21),
	('District of Columbia', 5.80, 46),
	('Florida', 4.90, 31),
	('Georgia', 5.40, 42),
	('Hawaii', 2.90, 4),
	('Idaho', 3.70, 11),
	('Illinois', 5.70, 45),
	('Indiana', 4.00, 15),
	('Iowa', 3.60, 10),
	('Kansas', 4.20, 19),
	('Kentucky', 4.80, 28),
	('Louisiana', 6.10, 48),
	('Maine', 3.80, 12),
	('Maryland', 4.20, 19),
	('Massachusetts', 2.80, 2),
	('Michigan', 5.00, 35),
	('Minnesota', 3.90, 13),
	('Mississippi', 5.60, 43),
	('Missouri', 4.40, 23),
	('Montana', 4.00, 15),
	('Nebraska', 3.40, 9),
	('Nevada', 5.10, 38),
	('New Hampshire', 2.60, 1),
	('New Jersey', 4.70, 27),
	('New Mexico', 6.60, 50),
	('New York', 4.90, 31),
	('North Carolina', 5.10, 38),
	('North Dakota', 3.00, 5),
	('Ohio', 4.90, 31),
	('Oklahoma', 5.00, 35),
	('Oregon', 4.60, 25),
	('Pennsylvania', 5.60, 43),
	('Rhode Island', 5.00, 35),
	('South Carolina', 4.30, 21),
	('South Dakota', 2.80, 2),
	('Tennessee', 4.90, 31),
	('Texas', 4.60, 25),
	('Utah', 3.10, 7),
	('Vermont', 3.10, 7),
	('Virginia', 4.10, 18),
	('Washington', 5.20, 40),
	('West Virginia', 5.90, 47),
	('Wisconsin', 4.00, 15),
	('Wyoming', 4.80, 28);
/*!40000 ALTER TABLE `unemployment` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
