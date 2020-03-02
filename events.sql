-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Gazdă: 127.0.0.1
-- Timp de generare: mart. 02, 2020 la 09:38 PM
-- Versiune server: 10.4.11-MariaDB
-- Versiune PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Bază de date: `events`
--

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `athletes`
--

CREATE TABLE `athletes` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `test` varchar(255) NOT NULL,
  `result1` float NOT NULL,
  `result2` float NOT NULL,
  `result3` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Eliminarea datelor din tabel `athletes`
--

INSERT INTO `athletes` (`id`, `firstName`, `lastName`, `test`, `result1`, `result2`, `result3`) VALUES
(1, 'Andrei', 'Ionescu', 'Long Jump', 7.18, 7.5, 8.45),
(2, 'Mircea', 'Barbu', 'Running', 293, 253, 231),
(3, 'Alexandru', 'Mihailescu', 'Pole Jump', 4.8, 5.14, 5.7),
(4, 'Robert', 'Paraschiv', 'Shot Put', 18.5, 19.1, 20.2),
(5, 'Mario', 'Chiochina', 'Running', 270, 255, 280),
(6, 'Andreea', 'Varlaam', 'Swimming', 30, 28, 23),
(7, 'Mihai ', 'Popescu', 'Pole Jump', 3.75, 4.1, 4.8),
(8, 'Cristina', 'Jora', 'Long Jump', 5.43, 5.91, 6.3),
(9, 'Elena', 'Preotu', 'Shot Put', 15.33, 15.5, 16.8),
(10, 'Ionut', 'Goga', 'Swimming', 40, 37, 39),
(11, 'Andrei', 'Ionescu', 'Running', 261, 273, 288),
(12, 'Andrei', 'Ionescu', 'Pole Jump', 4.3, 4.9, 5.7),
(13, 'Mircea', 'Barbu', 'Shot Put', 16.3, 17.1, 18.6),
(14, 'Mircea', 'Barbu', 'Long Jump', 6.4, 7.1, 7.5),
(15, 'Robert', 'Paraschiv', 'Swimming', 35, 39, 42),
(16, 'Robert', 'Paraschiv', 'Pole Jump', 4.8, 5.3, 5.5),
(17, 'Mario', 'Chiochina', 'Long Jump', 5.5, 6.4, 7),
(18, 'Mario', 'Chiochina', 'Shot Put', 15.53, 16.21, 16.9),
(19, 'Andreea', 'Varlaam', 'Running', 300, 293, 289),
(20, 'Andreea', 'Varlaam', 'Long Jump', 6.1, 7, 7.3),
(21, 'Cristina', 'Jora', 'Swimming', 34, 37, 40);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `tests`
--

CREATE TABLE `tests` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `recordResult` varchar(255) NOT NULL,
  `recordDate` varchar(255) NOT NULL,
  `recordPerson` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Eliminarea datelor din tabel `tests`
--

INSERT INTO `tests` (`id`, `name`, `description`, `recordResult`, `recordDate`, `recordPerson`) VALUES
(1, 'Running', 'Is a method of terrestrial locomotion allowing humans to move rapidly on foot. The running test consists of a distance of 1000m.', '3min 35s', '2018-06-15', 'Andrei Ionescu'),
(2, 'Swimming', 'Swimming is an individual or team racing sport that requires the use of the whole body to move through water. The basins have a length of 50m width of 21m,the water deepth over the entire length of the distance is 1.80m.', '20.98s', '2018-08-28', 'Mihai Popescu'),
(3, 'Long Jump', 'The long jump is a track end field event in which atheltes combine speed,strength and agility in an attempt to leap as far as possible from a take off point', '8.13m', '2016-05-25', 'Vali Ionescu'),
(4, 'Pole Jump', 'Pole jump is track and field event in which a person uses a long flexible pole as an aid to jump over a bar.', '6.14m', '2018-07-08', 'Alin Simionescu'),
(5, 'Shot Put', 'The shot put is a track and field event involving putting a heavy sphearical ball as fa as possible. In open competions the men\'s weights 7.260 killograms and the women\'s shot weight 4 killograms', '23m', '2019-10-5', 'Claudia Markson');

--
-- Indexuri pentru tabele eliminate
--

--
-- Indexuri pentru tabele `athletes`
--
ALTER TABLE `athletes`
  ADD PRIMARY KEY (`id`);

--
-- Indexuri pentru tabele `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pentru tabele eliminate
--

--
-- AUTO_INCREMENT pentru tabele `athletes`
--
ALTER TABLE `athletes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pentru tabele `tests`
--
ALTER TABLE `tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
