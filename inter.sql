-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Jan-2022 às 21:16
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `inter`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `nft`
--

CREATE TABLE `nft` (
  `id` int(11) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `star` varchar(255) NOT NULL,
  `rounds` int(11) NOT NULL,
  `damage` int(11) NOT NULL,
  `day_buy` int(11) NOT NULL,
  `day_renew` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `nft`
--

INSERT INTO `nft` (`id`, `owner`, `star`, `rounds`, `damage`, `day_buy`, `day_renew`) VALUES
(1, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(2, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'two', 2, 2, 1, 45),
(3, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(4, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'two', 2, 2, 1, 45),
(5, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(6, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(7, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'two', 2, 2, 1, 45),
(8, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(9, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(10, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(11, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(12, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'three', 4, 4, 1, 45),
(13, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'three', 4, 4, 1, 45),
(14, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'three', 4, 4, 1, 45),
(15, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'three', 4, 4, 1, 45),
(16, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(17, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'three', 4, 4, 1, 45),
(18, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(19, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(20, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(21, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(22, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(23, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(24, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(25, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(26, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(27, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'three', 4, 4, 1, 45),
(28, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(29, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'two', 2, 2, 1, 45),
(30, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45),
(31, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'one', 1, 1, 1, 45);

-- --------------------------------------------------------

--
-- Estrutura da tabela `nft_status`
--

CREATE TABLE `nft_status` (
  `id` int(11) NOT NULL,
  `star` varchar(222) NOT NULL,
  `rounds` int(11) NOT NULL,
  `damage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `nft_status`
--

INSERT INTO `nft_status` (`id`, `star`, `rounds`, `damage`) VALUES
(1, 'one', 1, 1),
(2, 'two', 2, 2),
(3, 'three', 4, 4),
(4, 'four', 6, 6);

-- --------------------------------------------------------

--
-- Estrutura da tabela `prices`
--

CREATE TABLE `prices` (
  `id` int(11) NOT NULL,
  `ships` int(30) NOT NULL,
  `fuel` int(30) NOT NULL,
  `damage` int(30) NOT NULL,
  `renew_price` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `prices`
--

INSERT INTO `prices` (`id`, `ships`, `fuel`, `damage`, `renew_price`) VALUES
(1, 200, 1, 1, 120);

-- --------------------------------------------------------

--
-- Estrutura da tabela `rewards`
--

CREATE TABLE `rewards` (
  `id` int(11) NOT NULL,
  `id_nft` int(11) NOT NULL,
  `rewards_50` int(30) NOT NULL,
  `rewards_40` int(11) NOT NULL,
  `rewards_30` int(11) NOT NULL,
  `rewards_20` int(11) NOT NULL,
  `rewards_10` int(11) NOT NULL,
  `rewards_0` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `balance_token` int(30) NOT NULL,
  `balance_usdt` int(30) NOT NULL,
  `tnx_hash_token` varchar(255) NOT NULL,
  `tnx_hash_usdt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`id`, `address`, `balance_token`, `balance_usdt`, `tnx_hash_token`, `tnx_hash_usdt`) VALUES
(6, 'a', 0, 0, '', ''),
(7, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 2, 0, '', '');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `nft`
--
ALTER TABLE `nft`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `nft_status`
--
ALTER TABLE `nft_status`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `rewards`
--
ALTER TABLE `rewards`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `nft`
--
ALTER TABLE `nft`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de tabela `nft_status`
--
ALTER TABLE `nft_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `prices`
--
ALTER TABLE `prices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `rewards`
--
ALTER TABLE `rewards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
