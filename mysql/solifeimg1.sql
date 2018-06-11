-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-06-04 09:43:01
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `php_mysql`
--

-- --------------------------------------------------------

--
-- 表的结构 `solifeimg1`
--

CREATE TABLE `solifeimg1` (
  `id` int(10) NOT NULL,
  `imgurl2` text NOT NULL,
  `title` text NOT NULL,
  `price` int(11) NOT NULL,
  `oriPrice` int(12) NOT NULL,
  `serve` text NOT NULL,
  `headImg` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `solifeimg1`
--

INSERT INTO `solifeimg1` (`id`, `imgurl2`, `title`, `price`, `oriPrice`, `serve`, `headImg`) VALUES
(1, 'https://d1.soolife.cn/images/bd00b54b4c3be4a2b6791199246c0ddf.jpg', '探路者 女式轻薄透气春夏户外防晒皮肤衣TAEB82770', 199, 499, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d3.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(2, 'https://d3.soolife.cn/images/2f641750d01fcfdd1fdb7726c8c49636.jpg', '户外徒步裤 TAMC82818', 199, 499, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d3.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(3, 'https://d1.soolife.cn/images/539c942ced5cddb69a263c607794cb98.jpg', '探路者 女式短袖速干T恤 TAJD82758', 109, 269, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d2.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(4, 'https://d1.soolife.cn/images/9f3c92611379dbe7dd50689480906484.jpg', '创悦 三人高档伞式速开野营自动帐篷 CY-5808', 209, 399, '由"创悦运动按摩器材旗舰店"直接销售和发货，并提供售后服务', 'https://d2.soolife.cn/images/54076355dc63bc0e842b6393e007cc50.jpg'),
(5, 'https://d2.soolife.cn/images/64a9768e2435a01989102a546002c67a.jpg', '探路者 男士户外旅行裤 TAMC81824', 129, 216, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d3.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(6, 'https://d2.soolife.cn/images/23a9c6c225ebe6c8e382c33ceecfe7a1.jpg', '探路者 女式徒步长裤 TAMD82718', 179, 439, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d2.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(7, 'https://d3.soolife.cn/images/b41e0eb4fc431b093f1777ef6eaf5964.jpg', '探路者 女式TIEF越野皮肤衣 TAED82419', 257, 799, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d1.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(8, 'https://d2.soolife.cn/images/159f9aca4bffb088ec3ee0a3fb0f59c2.jpg', '海尔斯（HEALTH)超轻慢跑运动鞋220g775', 159, 499, '', 'https://d2.soolife.cn/images/20c73eb17c9860c8b94c77da5e4d86c6.jpg'),
(9, 'https://d2.soolife.cn/images/efd4cdb0f6273f9a63a85037ef05117a.jpg', '海尔斯（HEALTH)超轻慢跑运动鞋228g775 ', 169, 499, '由"艺投鞋业品牌店"直接销售和发货，并提供售后服务', 'https://d1.soolife.cn/images/20c73eb17c9860c8b94c77da5e4d86c6.jpg'),
(10, 'https://d1.soolife.cn/images/0aaa3b90f51a2316cc1899354916c11f.jpg', '时尚反光印花T恤（孤高猫插画）藏蓝色 ', 439, 478, '由"Cloud Route运动户外旗舰店"直接销售和发货，并提供售后服务', 'https://d2.soolife.cn/images/6ab95497be59d41c4221929402335c91.jpg'),
(11, 'https://d1.soolife.cn/images/b3d82a74b402b5108bca9450612945b2.jpg', 'Cloudroute原创满天星反光弯檐帽（ESSE）', 429, 429, '由"Cloud Route运动户外旗舰店"直接销售和发货，并提供售后服务', 'https://d3.soolife.cn/images/6ab95497be59d41c4221929402335c91.jpg'),
(12, 'https://d2.soolife.cn/images/a063659e14af4fdaaf105b262b04d736.jpg', '美国eaglecreek轻便休闲户外单肩包女旅游斜挎包运动小包 ', 259, 489, '由"UTC行家箱包旗舰店"直接销售和发货，并提供售后服务', 'https://d2.soolife.cn/images/e598e31fe43df51f182e64752a2fb320.jpg'),
(13, 'https://d2.soolife.cn/images/0d52238c92de67e21cd83d34f7e34c5a.jpg', '探路者 女式旅行皮肤衣 TAED82599 ', 199, 499, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务\r\n', 'https://d2.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(14, 'https://d2.soolife.cn/images/2b1fef995ada0d957bd1d9fc1ee206ce.jpg', '探路者 女式旅行皮肤衣 TAED82599 ', 199, 499, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d1.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(15, 'https://d2.soolife.cn/images/9ef553af9b7f7f3dd146664be4a991f2.jpg', '探路者 可收纳便携挎包 TEBD80680 ', 59, 169, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d1.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(16, 'https://d2.soolife.cn/images/cb9533b18970c0484d309bae491f6c51.jpg', '探路者户外防潮垫便携野餐垫露营垫 自动充气垫 ZEFF80404 ', 139, 3999, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d2.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(17, 'https://d1.soolife.cn/images/35ecacfa25415a67f93e099ed8105685.jpg', '探路者 男式TIEF短袖T恤 TAJC81637 ', 159, 399, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d1.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(18, 'https://d3.soolife.cn/images/23ad58d596c3691065131ad05d38bde5.jpg', '探路者 女士溯溪鞋 TFED82662 ', 199, 269, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d1.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(19, 'https://d2.soolife.cn/images/d48387f9871cba5b74a2dd449d63b551.jpg', '探路者 女式徒步鞋 TFJC82052 ', 189, 478, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d2.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(20, 'https://d1.soolife.cn/images/753eff0ea2912026096b08af41472b59.jpg', '探路者 女式短袖速干T恤 TAJD82408 ', 788, 6789, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d3.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(21, 'https://d2.soolife.cn/images/45ac0519783983094e77cf5c41665b67.jpg', '探路者 男式短袖T恤 TAJD81916 ', 79, 179, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d1.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(22, 'https://d1.soolife.cn/images/385cb3b6d06f9ae212ca8841a05ba87a.jpg', '美国eagle creek折叠户外旅行单肩手提行李包旅行 防水男女 激光绿 ', 499, 698, '由"UTC行家箱包旗舰店"直接销售和发货，并提供售后服务\r\n送至\r\n上海 静安区 \r\n', 'https://d2.soolife.cn/images/e598e31fe43df51f182e64752a2fb320.jpg'),
(23, 'https://d3.soolife.cn/images/2a78c8ce3b5714fe66af8231dbe6c480.jpg', '探路者 男式短袖速干T恤 TAJD81666 ', 119, 299, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d1.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(24, 'https://d1.soolife.cn/images/c6b4c87698176cca801181a6744c11eb.jpg', '探路者 女式旅行皮肤衣 TAED82599 ', 199, 399, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d1.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(25, 'https://d2.soolife.cn/images/cc3ca3663c9acd1949a51b04acb1c3b4.jpg', '探路者 男士越野皮肤衣 TAED81415 ', 268, 308, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d1.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(26, 'https://d1.soolife.cn/images/88365253e0f1838ae1e0a3015ecfeed0.jpg', 'TIMBUK2美国2018春夏新款经典纯色潮流邮差包信使包斜挎单肩包男 S', 699, 876, '由"UTC行家箱包旗舰店"直接销售和发货，并提供售后服务', 'https://d1.soolife.cn/images/e598e31fe43df51f182e64752a2fb320.jpg'),
(27, 'https://d3.soolife.cn/images/64a9768e2435a01989102a546002c67a.jpg', '探路者 男士户外旅行裤 TAMC81824 ', 129, 399, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d3.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(28, 'https://d2.soolife.cn/images/2f641750d01fcfdd1fdb7726c8c49636.jpg', '户外徒步裤 TAMC82818 ', 199, 499, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d1.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(29, 'https://d3.soolife.cn/images/bfbc11539d8d7da342e3876d3a829708.jpg', '探路者 女士功能裤 TAMC82698 ', 168, 377, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d2.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(30, 'https://d2.soolife.cn/images/bd12d68a256e429fd0dbdb0f11dff88c.jpg', '探路者 男式速干徒步长裤 TAMD81721 ', 188, 499, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d2.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(31, 'https://d2.soolife.cn/images/962bdd8c1f6512f6124eb02355280977.jpg', '探路者 女式短袖功能T恤 TAJD82681 ', 69, 159, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d1.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(32, 'https://d1.soolife.cn/images/9973a444e22afdb6d842ab8282fed80d.jpg', '探路者 女式短袖速干T恤 TAJD82994 ', 109, 299, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d3.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(33, 'https://d1.soolife.cn/images/c193c64442e7f5525d6a7b4538ba1169.jpg', '探路者 女式TIEF越野皮肤衣 TAED82419 ', 258, 799, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d1.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg'),
(34, 'https://d3.soolife.cn/images/a3042acf223aceb8c42685806278d047.jpg', '探路者 女式短袖速干T恤 TAJD82994 ', 109, 299, '由"探路者TOREAD品牌专卖店"直接销售和发货，并提供售后服务', 'https://d2.soolife.cn/images/085befca06aa42b2b8087bdf6bdd5cbb.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `solifeimg1`
--
ALTER TABLE `solifeimg1`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `solifeimg1`
--
ALTER TABLE `solifeimg1`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
