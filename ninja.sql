-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 13/02/2022 às 06:36
-- Versão do servidor: 10.4.21-MariaDB
-- Versão do PHP: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `ninja`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `inventory`
--

CREATE TABLE `inventory` (
  `id` int(11) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `ticktes` int(11) NOT NULL DEFAULT 0,
  `ticket_valid` varchar(255) NOT NULL DEFAULT '00',
  `bombs` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `inventory`
--

INSERT INTO `inventory` (`id`, `owner`, `ticktes`, `ticket_valid`, `bombs`) VALUES
(2, '0xf73b3704459e7a14ea81588d6d950112343c72ee', 120, '00', 80);

-- --------------------------------------------------------

--
-- Estrutura para tabela `nft`
--

CREATE TABLE `nft` (
  `id` int(11) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `life` int(11) NOT NULL DEFAULT 5
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `nft`
--

INSERT INTO `nft` (`id`, `owner`, `life`) VALUES
(831, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `nft_status`
--

CREATE TABLE `nft_status` (
  `id` int(11) NOT NULL,
  `life` int(11) NOT NULL,
  `double_rewards` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `nft_status`
--

INSERT INTO `nft_status` (`id`, `life`, `double_rewards`) VALUES
(1, 5, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `prices`
--

CREATE TABLE `prices` (
  `id` int(11) NOT NULL,
  `price_nft` int(11) NOT NULL,
  `renew_life` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `prices`
--

INSERT INTO `prices` (`id`, `price_nft`, `renew_life`) VALUES
(1, 40, 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `rewards`
--

CREATE TABLE `rewards` (
  `id` int(11) NOT NULL,
  `rewards_token` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `rewards`
--

INSERT INTO `rewards` (`id`, `rewards_token`) VALUES
(1, 5);

-- --------------------------------------------------------

--
-- Estrutura para tabela `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `address` varchar(255) NOT NULL DEFAULT '0x',
  `token_acess` varchar(255) NOT NULL DEFAULT '0x',
  `balance_token` int(30) NOT NULL DEFAULT 0,
  `balance_usdt` int(30) NOT NULL DEFAULT 0,
  `tnx_hash_token` varchar(255) NOT NULL DEFAULT '0x',
  `tnx_hash_usdt` varchar(255) NOT NULL DEFAULT '0x'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `user`
--

INSERT INTO `user` (`id`, `address`, `token_acess`, `balance_token`, `balance_usdt`, `tnx_hash_token`, `tnx_hash_usdt`) VALUES
(11, '0xf73b3704459e7a14ea81588d6d950112343c72ee', 'joao', 199470, 15, '0x', '0x'),
(12, '0x9e9d87422add0d4aa050235a0b5115fb5593c2ff', 'joao1234', 0, 3728, '0x', '0x832112843b38f49e88252ead2d5329d9abfd4dde31f667932921f7bc12132926');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `nft`
--
ALTER TABLE `nft`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `nft_status`
--
ALTER TABLE `nft_status`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `rewards`
--
ALTER TABLE `rewards`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `inventory`
--
ALTER TABLE `inventory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `nft`
--
ALTER TABLE `nft`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=832;

--
-- AUTO_INCREMENT de tabela `nft_status`
--
ALTER TABLE `nft_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `prices`
--
ALTER TABLE `prices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `rewards`
--
ALTER TABLE `rewards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
