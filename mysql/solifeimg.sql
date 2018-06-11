-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-06-04 09:42:37
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
-- 表的结构 `solifeimg`
--

CREATE TABLE `solifeimg` (
  `id` int(11) NOT NULL,
  `imgurl` text NOT NULL,
  `imgurl2` text NOT NULL,
  `title` text NOT NULL,
  `price` int(12) NOT NULL,
  `headImg` text NOT NULL,
  `oriPrice` text NOT NULL,
  `serve` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `solifeimg`
--

INSERT INTO `solifeimg` (`id`, `imgurl`, `imgurl2`, `title`, `price`, `headImg`, `oriPrice`, `serve`) VALUES
(1, 'https://d1.soolife.cn/img/045aa2d974a93af1d8d163aca4b50659.jpg', 'https://d3.soolife.cn/images/7765662292255e4f112fb846a09b85dc.jpg', '丹尼尔惠灵顿 (DanielWellington )手表DW女表34mm表盘金色边皮带超薄女士石英表带日历DW00100092 ', 750, 'https://d1.soolife.cn/images/d97d088a4d7da9a216315d32b58c96bc.jpg', '￥889', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(2, 'https://d2.soolife.cn/img/df48426aa7659c6027a71c901dbcaf66.jpg', 'https://d3.soolife.cn/images/1e4ad1d8608fadd5df34f769ed3793d5.jpg', '创悦 自动按摩六滚轮深桶多功能型足浴盆 CY-8136 \r\n', 369, 'https://d3.soolife.cn/images/0e85aed361e2957e496465c04f1992d0.jpg', '', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(3, 'https://d2.soolife.cn/img/944a0e609053b8c4693543d76a025e1b.jpg', 'https://d2.soolife.cn/images/ed484b42337a6d8eeedb014b5ade7d75.jpg', '科夫氏 KIFUS气垫BB霜 ', 168, 'https://d2.soolife.cn/images/d5a2863cd5aa32e26fac45761b476369.jpg', '', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(4, 'https://d1.soolife.cn/img/c011ba22118d285d552ee1d168469a9d.jpg', 'https://d2.soolife.cn/images/804284915c043fe13d3b98740881f119.jpg', '水素生活 饮用天然泉水●氢350ml/袋 ', 20, 'https://d2.soolife.cn/images/d5a2863cd5aa32e26fac45761b476369.jpg', '', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(5, 'https://d1.soolife.cn/img/b9a61518f86c24a19a9e3ad60e9ef412.jpg', 'https://d1.soolife.cn/images/d551d6725bd564b5885107f040fd45b1.jpg', '左家右厨 麦饭石不沾多用厨具 四件套', 329, 'https://d2.soolife.cn/images/0e85aed361e2957e496465c04f1992d0.jpg', '', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(6, 'https://d3.soolife.cn/img/a084268adb8cc8279a1f0f1210638a36.jpg', 'https://d2.soolife.cn/images/79b961ffd08254669677dc563669e189.jpg', '设计工匠 牛仔布座垫加皮拎手 浅蓝色RK1316-LBL', 117, 'https://d2.soolife.cn/images/b80f0ca09e9d1ee972b474fc8df3c287.jpg', '', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(7, 'https://d3.soolife.cn/img/10880717a26011ad62aa453fe060ec0f.jpg', '', '', 0, 'https://d2.soolife.cn/shop/bc5f81af300d51b4369d637a1f56f3f5.jpg', '', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(8, 'https://d3.soolife.cn/img/77a4a802ca3a88f63f6547fa6a34f920.jpg', '', '', 0, 'https://d2.soolife.cn/shop/393e5c04d4ab200c115fdac7e67bbabf.jpg', '', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(9, 'https://d2.soolife.cn/img/af66b6f57b2e3fb2bd6a85bf9dd4d8db.jpg', 'https://d2.soolife.cn/images/229021b79ace68e73673f02c83d7d938.jpg', '爱情干红葡萄酒 AMORE 最适合情侣的葡萄酒750ML', 198, 'https://d1.soolife.cn/images/2bbe2594a2c5cb341ebbba7ef7040a60.jpg', '', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(10, 'https://d1.soolife.cn/img/3e4a5f08ea674be2299e707244c6f277.jpg', 'https://d3.soolife.cn/images/404caacd75dc661e1aea081b017622cb.jpg', 'Napattiga娜帕蒂卡泰国乳胶枕头原装进口天然橡胶中低颈椎按摩枕LPT3', 568, 'https://d1.soolife.cn/images/2c6bddad43c8ad9dfc4d7b4a1dbb9dc5.jpg', '', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(11, 'https://d2.soolife.cn/img/e98378648ef4ec7abc64433fccb7bc7c.jpg', 'https://d1.soolife.cn/images/a6180c96041658ff73439035c5d3956e.jpg', '韩国金贝柔BeeBees夏日超薄L号拉拉裤 20片LLKL20 ', 58, 'https://d2.soolife.cn/images/f179366bdc214f5ff80d2388849c1898.jpg', '', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(12, 'https://d1.soolife.cn/img/714744c515c897abcabeb6d50e619a13.jpg', 'https://d2.soolife.cn/images/d6d1e0b615cad83d1006be8823898bc4.jpg', '时语一方新款网纱半裙S17SS011', 89, 'https://d3.soolife.cn/images/c8e949b64c65412a503a7677dd3c04ba.jpg', '', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(13, 'https://d3.soolife.cn/img/f22e9130ebb19fc273aacdb5542f8ab2.jpg', 'https://d3.soolife.cn/images/189bb0f98c00e5134d254a48f14f18b5.jpg', '时语一方夏季新品蕾丝连衣裙S17SS041', 169, 'https://d2.soolife.cn/images/c8e949b64c65412a503a7677dd3c04ba.jpg', '', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(14, 'https://d1.soolife.cn/img/40837d4dba6175aac6b614655946bbec.jpg', 'https://d3.soolife.cn/images/8455e88dfbef8e7837cb87f5eb162080.jpg', '时语一方夏季新款碎花连衣裙S17SS037', 169, 'https://d3.soolife.cn/images/c8e949b64c65412a503a7677dd3c04ba.jpg', '', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(15, 'https://d2.soolife.cn/img/accc3a06f264481f6d16841f0645effb.jpg', 'https://d2.soolife.cn/images/d6d1e0b615cad83d1006be8823898bc4.jpg', '时语一方新款网纱半裙S17SS011', 89, 'https://d3.soolife.cn/images/c8e949b64c65412a503a7677dd3c04ba.jpg', '', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(16, 'https://d3.soolife.cn/img/1e11b4053b05127c9ba1d5c88be39747.jpg', 'https://d3.soolife.cn/images/189bb0f98c00e5134d254a48f14f18b5.jpg', '\r\n时语一方夏季新品蕾丝连衣裙S17SS041', 169, 'https://d2.soolife.cn/images/c8e949b64c65412a503a7677dd3c04ba.jpg', '', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(17, 'https://d1.soolife.cn/img/f65d86e7478e6175420b01bdec57f15a.jpg', 'https://d3.soolife.cn/images/8455e88dfbef8e7837cb87f5eb162080.jpg', '时语一方夏季新款碎花连衣裙S17SS037', 169, 'https://d3.soolife.cn/images/c8e949b64c65412a503a7677dd3c04ba.jpg', '', '由"Daniel Wellington 旗舰店"直接销售和发货，并提供售后服务'),
(18, 'https://d2.soolife.cn/img/2ee2c496e513db699ac31317fbd8cba3.jpg\r\n', 'https://d1.soolife.cn/images/41a5f2a4ebc2498a730a80f56826868d.jpg', '时语一方夏季新品无袖衬衫S17SS027 ', 259, 'https://d2.soolife.cn/images/c8e949b64c65412a503a7677dd3c04ba.jpg', '', '由"Shiyu品牌旗舰店"直接销售和发货，并提供售后服务'),
(19, 'https://d1.soolife.cn/img/52f68ce7e8dee360ebe52388fe7bfb1d.jpg', 'https://d3.soolife.cn/images/4a6cdda030b1b891db9bca23d90ba3a5.jpg', 'POGO轻便透气飞织针织休闲鞋男款', 398, 'https://d2.soolife.cn/images/690dab8e9a4bbf42d222ff5e78fe1408.jpg', '', '由"POGO 旗舰店"直接销售和发货，并提供售后服务'),
(20, 'https://d2.soolife.cn/img/05a6f068a4c5fd4f35108b6c8e0c8a95.jpg', 'https://d1.soolife.cn/images/58042e97cba9c846460db2a343073903.jpg', 'NULALA 时尚尖头中空浅口平底单鞋 ', 338, 'https://d1.soolife.cn/images/bc5f81af300d51b4369d637a1f56f3f5.jpg', '', '由"NULALA 旗舰店"直接销售和发货，并提供售后服务'),
(21, 'https://d3.soolife.cn/img/0f03a86e33ec2b20da975fa03e9670b3.jpg', 'https://d2.soolife.cn/images/acf35afb1ce4f292455c1d4e5edcfe24.jpg', 'NULALA 时尚百搭金属漆皮方跟尖头乐福鞋 ', 398, 'https://d2.soolife.cn/images/bc5f81af300d51b4369d637a1f56f3f5.jpg', '', '由"NULALA 旗舰店"直接销售和发货，并提供售后服务'),
(22, 'https://d1.soolife.cn/img/05131d5982cad6516bd91a6bda34f3c6.jpg', 'https://d3.soolife.cn/images/7626fcde9c1e84a3ea8fdc0614e6442b.jpg', '卡布奇诺3（32G）C603', 1799, 'https://d2.soolife.cn/images/e9c41fbecec165508495eceadcc2d029.jpg', '', '由"卡布奇诺电子科技品牌店"直接销售和发货，并提供售后服务'),
(23, 'https://d1.soolife.cn/img/22063d07bbebccf6cc029dcaf1fdc92e.jpg', 'https://d1.soolife.cn/images/44dc690ebb7bbd83a1ddb4c01d11855b.jpg', '小冰棒-抹茶森林(绿) MQ001 ', 168, 'https://d1.soolife.cn/images/84dbaa357de96560fbf082ecec76eb57.jpg', '', '由"ARTIART品牌旗舰店"直接销售和发货，并提供售后服务'),
(24, 'https://d2.soolife.cn/img/d961dfbca5764ab41962541f376d80f5.jpg', 'https://d1.soolife.cn/images/ebcafd9ad005b77214ac311022c6d5cc.jpg', '朗康 数码恒温按摩足浴盆 LK-8100 ', 199, 'https://d3.soolife.cn/images/0e85aed361e2957e496465c04f1992d0.jpg', '', '由"朗康旗舰店"直接销售和发货，并提供售后服务'),
(25, 'https://d3.soolife.cn/img/3abb43b1c61dce1fd1caabfd06aba5e1.jpg', 'https://d2.soolife.cn/images/de50ec1ced700d3046e24c1c44cb704a.jpg', '科沃斯 地宝 金致 CEN730 扫地机 ', 2980, 'https://d3.soolife.cn/images/a08caa62e2114f7b3e50039cc890c771.jpg', '', '由"芮久家居旗舰店"直接销售和发货，并提供售后服务'),
(26, 'https://d2.soolife.cn/img/708eef895e9643352ef9423788438dc2.jpg', 'https://d2.soolife.cn/images/c5fecbe8599bf19aec6d2cac77d55ee5.jpg', '朗康 干湿两用无叶风扇加湿器LK-6802A', 159, 'https://d1.soolife.cn/images/0e85aed361e2957e496465c04f1992d0.jpg', '', '由"朗康旗舰店"直接销售和发货，并提供售后服务'),
(27, 'https://d2.soolife.cn/img/e515e9e56a4b8f2f7476f4d002328bf9.jpg', 'https://d3.soolife.cn/images/87b7b058b3627afef1de5f2e0cf96833.jpg', '迷你桌面音箱（活力版）-Mini Desktop Speaker(Youth edition) S1 ', 40, 'https://d1.soolife.cn/images/0e85aed361e2957e496465c04f1992d0.jpg', '', '由"风格派品牌旗舰店"直接销售和发货，并提供售后服务'),
(28, 'https://d3.soolife.cn/img/9d43fc904d0661d18afae34e619b36ac.jpg', 'https://d1.soolife.cn/images/6cff9ed7b5d3a3226ca1ff4fdd219a3e.jpg', 'Haier/海尔C1 D75W3 洗衣机 ', 7399, 'https://d2.soolife.cn/images/184647e6569ecba5504c0097f481f9d7.jpg', '', '由"海尔品牌店"直接销售和发货，并提供售后服务'),
(29, 'https://d3.soolife.cn/img/986f777b9b7d152a2a1f736082fe9fb9.jpg', 'https://d3.soolife.cn/images/ebc14ed6d7db20c619dc2a95cd004dc6.jpg', 'Forever New 芳新金装家庭洁净液原香型 946ml ', 299, 'https://d1.soolife.cn/images/33ff510e036592a743dc8731b7c12eeb.jpg', '', '由"贵范国际旗舰店"直接销售和发货，并提供售后服务'),
(30, 'https://d3.soolife.cn/img/184cdef6f8f32143367f7f30afe6b262.jpg', 'https://d2.soolife.cn/images/ef34398b384d9f07c72eca81e06e5889.jpg', 'SNP 爱神菲锁水保湿面膜（水獭） ', 88, 'https://d1.soolife.cn/images/33ff510e036592a743dc8731b7c12eeb.jpg', '', '由"SNP官方旗舰店"直接销售和发货，并提供售后服务'),
(31, 'https://d2.soolife.cn/img/f0c484b5de388db67e7391a814f4ed30.jpg', 'https://d2.soolife.cn/images/771819626eeef5888666bc5f86611b59.jpg', '日本KUMANO熊野油脂天然弱酸性无硅油护发素600ml ', 58, 'https://d2.soolife.cn/images/d46e7aeef7a4a4cbf290e895bc36cc59.jpg', '', '由"如飞优选"直接销售和发货，并提供售后服务'),
(32, 'https://d3.soolife.cn/img/e27d361fc2293dfc4875330a61915816.jpg', 'https://d3.soolife.cn/images/0c1fcfcce8c5401a1b53644e41c54467.jpg', '韩国 雪花秀 玉容 面膜 150ML撕拉式 去黑头 深层清洁 收缩 毛孔 紧致 ', 266, 'https://d2.soolife.cn/images/fe0a02b02548a2d2102988753f8d53fa.jpgc', '', '由"保税全球购旗舰店"直接销售和发货，并提供售后服务\r\n送至\r\n上海 静安区 \r\n'),
(33, 'https://d2.soolife.cn/img/c311c81cdd09350ae7580f1da3291540.jpg', 'https://d2.soolife.cn/images/497ef38c3560fcd6130233a71c16b318.jpg', '日本 SK-II 护肤精华露230ml（PITERA ', 1220, 'https://d2.soolife.cn/images/fe0a02b02548a2d2102988753f8d53fa.jpg', '', '由"保税全球购旗舰店"直接销售和发货，并提供售后服务'),
(34, 'https://d2.soolife.cn/img/2fb31425f4c66b4159f6ff03b824e931.jpg', 'https://d3.soolife.cn/images/894ceac2a66098df814ee3c5786748e9.jpg', '法国 欧树 NUXE蜂蜜 洁面 凝胶啫喱400ML洗面奶 温和舒缓 ', 149, 'https://d2.soolife.cn/images/fe0a02b02548a2d2102988753f8d53fa.jpg', '', '由"保税全球购旗舰店"直接销售和发货，并提供售后服务'),
(35, 'https://d3.soolife.cn/img/1f8c55221c86ae0ceedba6d6b4958307.jpg', 'https://d1.soolife.cn/images/61b57d8575c76327978487aaefa9163f.jpg', 'Dior迪奥烈艳蓝金唇膏 999#', 0, '', '', '由"买得值海外专卖店"直接销售和发货，并提供售后服务');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `solifeimg`
--
ALTER TABLE `solifeimg`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `solifeimg`
--
ALTER TABLE `solifeimg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
