-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:33065
-- Generation Time: Mar 14, 2024 at 05:08 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `plantdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `citas`
--

CREATE TABLE `citas` (
  `id_cita` int(11) NOT NULL,
  `id_paciente` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `motivo` varchar(200) NOT NULL,
  `id_terapia` int(11) NOT NULL,
  `id_mp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `citas`
--

INSERT INTO `citas` (`id_cita`, `id_paciente`, `fecha`, `motivo`, `id_terapia`, `id_mp`) VALUES
(17, 2, '2024-04-02 06:20:00', 'dlor de cabeza', 1, 2),
(20, 6, '2024-03-28 00:05:00', 'dolor de cuello', 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `generos`
--

CREATE TABLE `generos` (
  `id_genero` int(11) NOT NULL,
  `genero` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `generos`
--

INSERT INTO `generos` (`id_genero`, `genero`) VALUES
(1, 'Masculino'),
(2, 'Femenino');

-- --------------------------------------------------------

--
-- Table structure for table `metodos_pago`
--

CREATE TABLE `metodos_pago` (
  `id_mp` int(11) NOT NULL,
  `metodo_pago` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `metodos_pago`
--

INSERT INTO `metodos_pago` (`id_mp`, `metodo_pago`) VALUES
(1, 'Efectivo'),
(2, 'Pago Movil'),
(3, 'Transferencia');

-- --------------------------------------------------------

--
-- Table structure for table `pacientes`
--

CREATE TABLE `pacientes` (
  `id_paciente` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `apellido` varchar(300) NOT NULL,
  `id_genero` int(11) NOT NULL,
  `cedula` varchar(8) NOT NULL,
  `telefono` varchar(11) NOT NULL,
  `direccion` varchar(1000) NOT NULL,
  `ocupacion` varchar(100) NOT NULL,
  `recomendado` varchar(100) DEFAULT NULL,
  `fecha_nac` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pacientes`
--

INSERT INTO `pacientes` (`id_paciente`, `nombre`, `apellido`, `id_genero`, `cedula`, `telefono`, `direccion`, `ocupacion`, `recomendado`, `fecha_nac`) VALUES
(1, 'Rudy', 'Chacon', 1, '111111', '', 'El hatillo', '', NULL, '0000-00-00'),
(2, 'Andrea', 'Rincon', 2, '2222222', '', 'Caricuao', '', NULL, '0000-00-00'),
(4, 'James', 'Lopez', 1, '24311555', '', 'los flores', '', NULL, '0000-00-00'),
(6, 'elijah', 'parra', 1, '10000000', '04121111111', 'propatria', 'programador', NULL, '2024-03-01');

-- --------------------------------------------------------

--
-- Table structure for table `terapias`
--

CREATE TABLE `terapias` (
  `id_terapia` int(11) NOT NULL,
  `nombre_terapia` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `terapias`
--

INSERT INTO `terapias` (`id_terapia`, `nombre_terapia`) VALUES
(1, 'Acupuntura'),
(2, 'Piedras');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `name` varchar(400) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `username`, `password`) VALUES
(28, 'james@gmail.com', 'james', 'james', 'b4cc344d25a2efe540adbf2678e2304c'),
(29, 'rudy@gmail.com', 'rudy', 'rudy', 'cfce9735de7c3873a55331a4e74b70fc'),
(30, 'barbara@gmail.com', 'barbara', 'barbara', '4d6c4d6b5b6c7fd2c43727ce32a56f4e'),
(31, '', '', '', 'd41d8cd98f00b204e9800998ecf8427e'),
(35, 'elijah@gmail.com', 'elijah', 'elijah', 'a6ebe407fa6e2337cb2deb573d17791e');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`id_cita`),
  ADD KEY `id_terapia` (`id_terapia`) USING BTREE,
  ADD KEY `id_mp` (`id_mp`) USING BTREE,
  ADD KEY `id_paciente` (`id_paciente`) USING BTREE;

--
-- Indexes for table `metodos_pago`
--
ALTER TABLE `metodos_pago`
  ADD PRIMARY KEY (`id_mp`);

--
-- Indexes for table `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id_paciente`),
  ADD KEY `id_genero` (`id_genero`);

--
-- Indexes for table `terapias`
--
ALTER TABLE `terapias`
  ADD PRIMARY KEY (`id_terapia`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `citas`
--
ALTER TABLE `citas`
  MODIFY `id_cita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `metodos_pago`
--
ALTER TABLE `metodos_pago`
  MODIFY `id_mp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id_paciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `terapias`
--
ALTER TABLE `terapias`
  MODIFY `id_terapia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
