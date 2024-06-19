-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 19, 2024 at 07:20 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `javasummits`
--

-- --------------------------------------------------------

--
-- Table structure for table `artikel`
--

CREATE TABLE `artikel` (
  `id` int(11) NOT NULL,
  `id_kategori` int(11) NOT NULL,
  `judul_artikel` varchar(255) NOT NULL,
  `isi_artikel` text NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `imageList` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`imageList`)),
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `artikel`
--

INSERT INTO `artikel` (`id`, `id_kategori`, `judul_artikel`, `isi_artikel`, `image`, `imageList`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Menikmati Keindahan Alam Dengan Bertanggung Jawab Saat Mendaki Gunung', 'Mendaki gunung tidak hanya tentang mencapai puncak, tetapi juga tentang menikmati keindahan alam sekitar. Namun, sebagai pendaki yang bertanggung jawab, penting untuk menjaga kelestarian lingkungan dan ekosistem gunung. Hal ini termasuk membawa kembali semua sampah Anda, menghindari merusak vegetasi dan habitat hewan, serta mematuhi aturan dan regulasi yang berlaku di area pendakian. Dengan melakukan ini, Anda tidak hanya dapat menikmati keindahan alam, tetapi juga turut berkontribusi dalam pelestarian lingkungan untuk generasi mendatang.', '1718773031465.jpeg', NULL, 'http://localhost:3000/images/1718773031465.jpeg', '2024-06-19 04:53:33', '2024-06-19 04:57:11'),
(3, 1, 'Tips Pendakian Pemula', 'Untuk pendaki pemula, petualangan mendaki gunung bisa menjadi tantangan yang menakutkan, tetapi dengan beberapa tips praktis, Anda bisa mempersiapkan diri dengan baik dan mengatasi segala tantangan. Pilihlah gunung yang sesuai dengan tingkat keahlian Anda, persiapkan diri dengan baik dengan membawa perlengkapan yang tepat, pelajari jalur pendakian dengan cermat, dan bergabunglah dengan kelompok pendakian untuk mendapatkan dukungan dan bimbingan. Selain itu, pertahankan kecepatan yang konsisten, lindungi alam sekitar, dengarkan tubuh Anda, dan nikmati setiap momen dari petualangan Anda. Dengan mengikuti tips ini, Anda akan siap untuk memulai perjalanan mendaki gunung Anda dengan percaya diri dan kesenangan yang tinggi.', '1718773098023.jpg', NULL, 'http://localhost:3000/images/1718773098023.jpg', '2024-06-19 04:58:18', '2024-06-19 04:58:18'),
(4, 1, 'Memahami Bahaya Dan Cara Menghadapinya Saat Mendaki Gunung', 'Mendaki gunung memberikan pengalaman luar biasa, namun juga menyajikan berbagai bahaya yang harus dihadapi. Salah satu bahaya yang sering terjadi adalah cuaca ekstrem, mulai dari hujan deras hingga badai salju yang tidak terduga. Menghadapi bahaya tersebut, penting untuk selalu memantau perkembangan cuaca dan membawa perlengkapan yang sesuai. Selain itu, bahaya lainnya adalah tergelincir atau jatuh, terutama saat melintasi medan yang curam atau licin. Meningkatkan kewaspadaan, menggunakan peralatan pendakian yang tepat, dan mengikuti petunjuk jalur pendakian dapat membantu mengurangi risiko kecelakaan.', '1718773223315.png', NULL, 'http://localhost:3000/images/1718773223315.png', '2024-06-19 05:00:23', '2024-06-19 05:00:23'),
(5, 1, 'Mendaki Gunung Untuk Kesehatan Mental dan Emosional Anda', 'Selain memberikan tantangan fisik, mendaki gunung juga dapat memberikan manfaat yang signifikan bagi kesehatan mental dan emosional seseorang. Berada di alam terbuka dan menjauh dari keramaian kota dapat membantu mengurangi stres, meningkatkan suasana hati, dan memberikan perasaan kedamaian dan kebahagiaan. Selain itu, pencapaian setiap langkah mendaki memberikan rasa pencapaian yang membanggakan dan meningkatkan rasa percaya diri. Dengan demikian, mendaki gunung tidak hanya memperkaya fisik, tetapi juga memberikan manfaat yang besar bagi kesejahteraan secara keseluruhan.', '1718773323437.jpeg', NULL, 'http://localhost:3000/images/1718773323437.jpeg', '2024-06-19 05:02:03', '2024-06-19 05:02:03');

-- --------------------------------------------------------

--
-- Table structure for table `basecamp`
--

CREATE TABLE `basecamp` (
  `id` int(11) NOT NULL,
  `kode_id` varchar(255) NOT NULL,
  `kode_basecamp` varchar(255) NOT NULL,
  `nama_basecamp` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `jam_buka` time NOT NULL,
  `jam_tutup` time NOT NULL,
  `provinsi` varchar(255) NOT NULL,
  `rating` float NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `gunung_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `basecamp`
--

INSERT INTO `basecamp` (`id`, `kode_id`, `kode_basecamp`, `nama_basecamp`, `alamat`, `jam_buka`, `jam_tutup`, `provinsi`, `rating`, `image`, `url`, `gunung_id`, `createdAt`, `updatedAt`) VALUES
(1, '1', 'sumbing1', 'Garung', 'Garung, Wonosobo', '07:00:00', '23:00:41', 'Jawa Tengah', 5, '1718771395707.jpg', 'http://localhost:3000/images/1718771395707.jpg', 1, '2024-06-19 03:56:36', '2024-06-19 04:29:55'),
(2, '2', 'Butuh', 'Sumbing Via Butuh', 'Kaliangkrik, Temanggung', '07:00:00', '23:00:00', 'Jawa', 4.9, '1718771505463.jpg', 'http://localhost:3000/images/1718771505463.jpg', 1, '2024-06-19 03:56:56', '2024-06-19 04:31:45'),
(3, '3', 'Prau01', 'Prau Via Patak Banteng', 'Patak Banteng, Wonosobo', '07:00:00', '23:59:00', 'Jawa Tengah', 5, '1718771698588.jpg', 'http://localhost:3000/images/1718771698588.jpg', 2, '2024-06-19 04:34:58', '2024-06-19 04:36:57'),
(4, '4', 'Prau02', 'Prau Via Kalilembu', 'Kalilembu, Dieng', '07:00:00', '07:00:00', 'Jawa Tengah', 5, '1718771909914.png', 'http://localhost:3000/images/1718771909914.png', 2, '2024-06-19 04:38:29', '2024-06-19 04:38:29');

-- --------------------------------------------------------

--
-- Table structure for table `gunung`
--

CREATE TABLE `gunung` (
  `id` int(11) NOT NULL,
  `kode_gunung` varchar(255) NOT NULL,
  `nama_gunung` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `image` text DEFAULT NULL,
  `province` varchar(255) NOT NULL,
  `kota` varchar(255) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `maps` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gunung`
--

INSERT INTO `gunung` (`id`, `kode_gunung`, `nama_gunung`, `deskripsi`, `image`, `province`, `kota`, `url`, `maps`, `createdAt`, `updatedAt`) VALUES
(1, 'g1', 'Sumbing', 'Gunung Sumbing adalah salah satu gunung berapi aktif yang terletak di Provinsi Jawa Tengah, Indonesia. Dengan ketinggian mencapai sekitar 3.371 meter di atas permukaan laut, Gunung Sumbing adalah gunung tertinggi kedua di Jawa Tengah setelah Gunung Slamet. Gunung ini merupakan bagian dari rangkaian gunung berapi di Pulau Jawa dan memiliki keindahan alam yang memukau, menarik banyak pendaki dan wisatawan.', '1718769972862.jpeg', 'Jawa Tengah', 'Wonosobo', 'http://localhost:3000/images/1718769972862.jpeg', 'https://www.google.com/maps/place/Gn.+Sumbing/@-7.3849997,110.0622002,15z/data=!3m1!4b1!4m6!3m5!1s0x2e7a9c697b1bf411:0x7cb176b5c2587d2d!8m2!3d-7.385!4d110.0725!16s%2Fm%2F0270yfg?entry=ttu', '2024-06-19 03:52:18', '2024-06-19 04:06:12'),
(2, 'g2', 'Prau', 'Gunung Prau, terletak di Dataran Tinggi Dieng, Jawa Tengah, dengan ketinggian sekitar 2.565 meter di atas permukaan laut, merupakan destinasi pendakian yang mempesona dan favorit bagi para pencinta alam. Terletak di perbatasan Kabupaten Wonosobo dan Kabupaten Kendal, gunung ini mudah diakses melalui jalur populer seperti Desa Patak Banteng, Desa Dieng, dan Desa Kalilembu. Gunung Prau menawarkan panorama 360 derajat yang indah, mencakup gunung-gunung lain di Jawa Tengah seperti Gunung Sindoro, Gunung Sumbing, Gunung Merbabu, dan Gunung Merapi, terutama saat matahari terbit dan terbenam yang menciptakan pemandangan memukau. Selain itu, keindahan \"Bukit Teletubbies\" dengan lanskap bergelombang dan rerumputan hijau menambah pesona tersendiri. Vegetasi di Gunung Prau meliputi hutan montana dan subalpin dengan tumbuhan seperti pinus, cemara, edelweis, dan bunga liar, sementara fauna terdiri dari berbagai jenis burung, mamalia kecil, dan serangga. Pendakian di gunung ini cocok untuk pemula maupun yang berpengalaman dengan jalur yang tidak terlalu sulit dan durasi singkat. Di puncaknya, pendaki dapat mendirikan tenda dan menikmati pemandangan malam spektakuler dengan langit penuh bintang dan Milky Way. Gunung Prau adalah destinasi pendakian terbaik di Indonesia yang menawarkan keindahan alam, kemudahan aksesibilitas, dan pengalaman mendaki yang tak terlupakan, menarik hati pendaki dari berbagai penjuru.', '1718771239449.jpg', 'Jawa Tengah', 'Wonosobo', 'http://localhost:3000/images/1718771239449.jpg', 'https://www.google.com/maps/place/Gunung+Prau/@-7.192695,109.9021782,14z/data=!4m10!1m2!2m1!1sgunung+prau!3m6!1s0x2e700d2137d6aa11:0x899b0e25bc74ab01!8m2!3d-7.1971633!4d109.9321795!15sCgtndW51bmcgcHJhdVoNIgtndW51bmcgcHJhdZIBC2hpa2luZ19hcmVhmgEkQ2hkRFNVaE5', '2024-06-19 04:27:19', '2024-06-19 04:27:19'),
(3, 'g3', 'Sindoro', 'Gunung Sindoro, sebuah ikon alam yang megah, menara di antara rangkaian gunung yang menakjubkan di Jawa Tengah, Indonesia. Dengan ketinggian sekitar 3.136 meter di atas permukaan laut, gunung ini menawarkan pengalaman mendaki yang menarik bagi para pendaki dengan pemandangan alam yang memukau sepanjang perjalanan. Sindoro menawarkan rute pendakian yang beragam, mulai dari jalur yang relatif mudah hingga tantangan yang lebih berat, cocok bagi pendaki pemula hingga berpengalaman. Dari puncaknya, pendaki akan disuguhkan pemandangan spektakuler dari lereng gunung yang hijau subur, lembah yang terbentang luas, hingga gunung-gunung sekitarnya yang menjulang gagah. Keindahan alam yang memukau dan tantangan pendakian yang memacu adrenalin menjadikan Gunung Sindoro sebagai destinasi impian bagi para pecinta alam dan pendaki petualang.', '1718773943360.jpeg', 'Jawa Tengah', 'Wonosobo', 'http://localhost:3000/images/1718773943360.jpeg', 'https://www.google.com/maps/place/Gn.+Sindoro/@-7.3024994,109.9752337,14z/data=!3m1!4b1!4m6!3m5!1s0x2e70757555351a43:0x6e1fd0eaed14acb5!8m2!3d-7.3025!4d109.9958333!16s%2Fm%2F027b401?entry=ttu', '2024-06-19 05:12:23', '2024-06-19 05:12:23'),
(4, 'g4', 'Merbabu', 'Gunung Merbabu, salah satu gunung tertinggi di Pulau Jawa, menawarkan petualangan mendaki yang memikat dengan pemandangan alam yang menakjubkan dan jalur pendakian yang menantang. Dengan ketinggian mencapai sekitar 3.145 meter di atas permukaan laut, Merbabu menyuguhkan pengalaman mendaki yang beragam, mulai dari hutan tropis yang lebat hingga padang rumput yang luas di puncaknya. Jalur pendakian yang tersedia memberikan pilihan bagi pendaki dengan berbagai tingkat keahlian, sehingga cocok untuk pendaki pemula hingga yang berpengalaman. Dari puncaknya, pendaki akan disuguhi panorama yang menakjubkan, termasuk pemandangan Gunung Merapi yang megah di sebelah timur dan Gunung Lawu yang menjulang di sebelah timur daya. Keindahan alam yang memikat dan tantangan pendakian yang menantang menjadikan Gunung Merbabu sebagai salah satu destinasi favorit bagi para pecinta alam dan pendaki petualang di Indonesia.', '1718774284582.jpeg', 'Jawa Tengah', 'Boyolali', 'http://localhost:3000/images/1718774284582.jpeg', 'https://www.google.com/maps/place/Gn.+Merbabu/@-7.4549994,110.4194004,14z/data=!3m1!4b1!4m6!3m5!1s0x2e7a7b455e544767:0xf7af0c6e80ad2dde!8m2!3d-7.455!4d110.44!16zL20vMGc3cDU1?entry=ttu', '2024-06-19 05:18:04', '2024-06-19 05:18:04'),
(5, 'g5', 'Slamet', 'Gunung Slamet, sebuah keajaiban alam yang menjulang gagah di Provinsi Jawa Tengah, Indonesia, menawarkan petualangan mendaki yang mengesankan bagi para pecinta alam dan pendaki petualang. Dengan ketinggian mencapai sekitar 3.428 meter di atas permukaan laut, Gunung Slamet adalah salah satu gunung tertinggi di Pulau Jawa. Jalur pendakian yang beragam, mulai dari yang relatif mudah hingga yang menantang, memungkinkan para pendaki dengan berbagai tingkat keahlian untuk menaklukkan puncaknya. Dari puncak Gunung Slamet, pendaki disuguhi panorama spektakuler, termasuk pemandangan lembah yang hijau subur, dan gunung-gunung lainnya yang menjulang di sekitarnya. Keindahan alam yang memukau dan tantangan pendakian yang menggugah adrenalin menjadikan Gunung Slamet sebagai destinasi yang sangat dihargai dalam komunitas pendaki di Indonesia.', '1718774407929.jpeg', 'Jawa Tengah', 'Tegal', 'http://localhost:3000/images/1718774407929.jpeg', 'https://www.google.com/maps/place/Gn.+Slamet/@-7.2413883,109.1938448,14z/data=!3m1!4b1!4m6!3m5!1s0x2e6ff3184df71285:0x79839e3468a02f5b!8m2!3d-7.2413889!4d109.2144444!16s%2Fm%2F0277ynk?entry=ttu', '2024-06-19 05:20:07', '2024-06-19 05:20:07');

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `nama_kategori` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id`, `nama_kategori`, `createdAt`, `updatedAt`) VALUES
(1, 'Artikel', '2024-06-19 04:00:52', '2024-06-19 04:00:52'),
(2, 'Gunung', '2024-06-19 04:01:03', '2024-06-19 04:01:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artikel`
--
ALTER TABLE `artikel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kategori` (`id_kategori`);

--
-- Indexes for table `basecamp`
--
ALTER TABLE `basecamp`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gunung_id` (`gunung_id`);

--
-- Indexes for table `gunung`
--
ALTER TABLE `gunung`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artikel`
--
ALTER TABLE `artikel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `basecamp`
--
ALTER TABLE `basecamp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `gunung`
--
ALTER TABLE `gunung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `artikel`
--
ALTER TABLE `artikel`
  ADD CONSTRAINT `artikel_ibfk_1` FOREIGN KEY (`id_kategori`) REFERENCES `kategori` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `basecamp`
--
ALTER TABLE `basecamp`
  ADD CONSTRAINT `basecamp_ibfk_1` FOREIGN KEY (`gunung_id`) REFERENCES `gunung` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
