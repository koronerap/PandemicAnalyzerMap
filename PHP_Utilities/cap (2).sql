-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1:3306
-- Üretim Zamanı: 02 May 2023, 20:22:31
-- Sunucu sürümü: 5.7.31
-- PHP Sürümü: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `cap`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `data_news`
--

DROP TABLE IF EXISTS `data_news`;
CREATE TABLE IF NOT EXISTS `data_news` (
  `NEWS_ID` int(11) NOT NULL AUTO_INCREMENT,
  `NEWS_TITLE` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `NEWS_CONTENT` varchar(10000) COLLATE utf8_turkish_ci NOT NULL,
  `NEWS_AUTHOR` varchar(10000) COLLATE utf8_turkish_ci NOT NULL,
  `NEWS_DATE` date NOT NULL,
  PRIMARY KEY (`NEWS_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `data_news`
--

INSERT INTO `data_news` (`NEWS_ID`, `NEWS_TITLE`, `NEWS_CONTENT`, `NEWS_AUTHOR`, `NEWS_DATE`) VALUES
(1, 'Son dakika haberi.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim id lorem id congue. Duis id posuere arcu, ac interdum ex. Duis sed risus consequat, venenatis nisl non, lacinia lectus. Etiam pulvinar facilisis ex, ut ultrices dolor egestas eget. Integer rutrum quam sed nunc rhoncus rutrum. Suspendisse ligula nunc, aliquet vel dictum at, egestas vitae nisl. Nullam at consectetur turpis.', 'Erdem', '2023-04-30'),
(2, 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', 'Proin at orci tristique, pretium orci vitae, posuere elit. Nam sapien mauris, blandit vel ligula id, posuere mollis massa. Integer commodo fermentum purus, a lacinia libero molestie eget. Mauris nisl tellus, ultricies vel lectus tincidunt, rhoncus interdum velit. Ut vulputate, metus eget interdum dictum, nulla ipsum molestie velit, nec vehicula elit velit sit amet dolor. Pellentesque consequat eleifend lectus ut egestas. Donec consectetur euismod arcu, tempus ultricies dui posuere ac. In est quam, auctor ac sollicitudin eu, mollis elementum arcu.', 'Ahmet', '2023-04-24');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `data_town`
--

DROP TABLE IF EXISTS `data_town`;
CREATE TABLE IF NOT EXISTS `data_town` (
  `TOWN_ID` int(11) NOT NULL AUTO_INCREMENT,
  `TOWN_CITYID` int(11) NOT NULL,
  `TOWN_NAME` varchar(255) CHARACTER SET utf8 COLLATE utf8_turkish_ci NOT NULL,
  `TOWN_MALE_PERSON_COUNT` int(11) NOT NULL,
  `TOWN_FEMALE_PERSON_COUNT` int(11) NOT NULL,
  `TOWN_VACCINATED_PERSON_AMOUNT` int(11) NOT NULL,
  `TOWN_TWO_DOSE_VACCINATED_PERSON_AMOUNT` int(11) NOT NULL,
  `TOWN_CASE_AMOUNT` int(11) NOT NULL,
  `TOWN_VACCINATED_CASE_AMOUNT` int(11) NOT NULL,
  `TOWN_LATITUDE` float(10,8) NOT NULL,
  `TOWN_LONGITUDE` float(10,8) NOT NULL,
  `TOWN_ADDRESS` varchar(255) CHARACTER SET utf8 COLLATE utf8_turkish_ci NOT NULL,
  PRIMARY KEY (`TOWN_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8;

--
-- Tablo döküm verisi `data_town`
--

INSERT INTO `data_town` (`TOWN_ID`, `TOWN_CITYID`, `TOWN_NAME`, `TOWN_MALE_PERSON_COUNT`, `TOWN_FEMALE_PERSON_COUNT`, `TOWN_VACCINATED_PERSON_AMOUNT`, `TOWN_TWO_DOSE_VACCINATED_PERSON_AMOUNT`, `TOWN_CASE_AMOUNT`, `TOWN_VACCINATED_CASE_AMOUNT`, `TOWN_LATITUDE`, `TOWN_LONGITUDE`, `TOWN_ADDRESS`) VALUES
(1, 34, 'Beyoglu', 120356, 118574, 191200, 180450, 1250, 250, 41.03083420, 28.97527885, 'Beyoglu, Istanbul'),
(2, 34, 'Kadikoy', 110256, 112874, 185600, 175300, 1150, 230, 40.99349976, 29.02799988, 'Kadikoy, Istanbul'),
(3, 34, 'Uskudar', 98000, 102874, 170000, 161000, 1000, 200, 41.02472305, 29.01777840, 'Uskudar, Istanbul'),
(4, 34, 'Sisli', 82000, 78500, 145000, 137000, 750, 150, 41.06111145, 28.98555565, 'Sisli, Istanbul'),
(5, 34, 'Besiktas', 72000, 74500, 130000, 123000, 700, 140, 41.04277802, 29.00749969, 'Besiktas, Istanbul'),
(6, 34, 'Pendik', 127000, 131000, 215000, 204000, 1350, 270, 40.87627792, 29.23305511, 'Pendik, Istanbul'),
(7, 34, 'Sariyer', 92000, 94500, 160000, 152000, 900, 180, 41.16694260, 29.05444336, 'Sariyer, Istanbul'),
(8, 34, 'Esenyurt', 170000, 173000, 290000, 275000, 1900, 380, 41.02555466, 28.67722130, 'Esenyurt, Istanbul'),
(9, 34, 'Bakirkoy', 98000, 102500, 174000, 165000, 1000, 200, 40.98055649, 28.87416649, 'Bakirkoy, Istanbul'),
(10, 34, 'Bagcilar', 145000, 148000, 250000, 237000, 1600, 320, 41.03444290, 28.85805511, 'Bagcilar, Istanbul'),
(11, 34, 'Avcilar', 103000, 106000, 175000, 166000, 1100, 220, 40.98027802, 28.71833229, 'Avcilar, Istanbul'),
(12, 34, 'Zeytinburnu', 67000, 69000, 125000, 118000, 800, 160, 40.99444580, 28.90111160, 'Zeytinburnu, Istanbul'),
(13, 34, 'Gungoren', 53000, 55000, 96000, 91000, 600, 120, 41.02055740, 28.88249969, 'Gungoren, Istanbul'),
(14, 34, 'Atasehir', 120000, 125000, 210000, 199000, 1300, 260, 40.98472214, 29.10694313, 'Atasehir, Istanbul'),
(15, 34, 'Maltepe', 111000, 115000, 195000, 185000, 1200, 240, 40.93694305, 29.13249969, 'Maltepe, Istanbul'),
(16, 34, 'Sancaktepe', 99000, 102000, 165000, 157000, 1050, 210, 40.99638748, 29.23638916, 'Sancaktepe, Istanbul'),
(17, 34, 'Kucukcekmece', 125000, 130000, 220000, 209000, 1400, 280, 40.99583435, 28.77305603, 'Kucukcekmece, Istanbul'),
(18, 34, 'Kartal', 96000, 99000, 160000, 152000, 1000, 200, 40.88805771, 29.18916702, 'Kartal, Istanbul'),
(19, 34, 'Gaziosmanpasa', 114000, 117000, 200000, 190000, 1300, 260, 41.05722046, 28.91583252, 'Gaziosmanpasa, Istanbul'),
(20, 34, 'Eyup', 84000, 87000, 150000, 142000, 950, 190, 41.04611206, 28.93638992, 'Eyup, Istanbul'),
(21, 34, 'Fatih', 130000, 135000, 230000, 218000, 1500, 300, 41.02083206, 28.94916725, 'Fatih, Istanbul'),
(22, 34, 'Umraniye', 108000, 111000, 185000, 176000, 1200, 240, 41.02249908, 29.09083366, 'Umraniye, Istanbul'),
(23, 34, 'Basaksehir', 117000, 120000, 210000, 200000, 1350, 270, 41.09722137, 28.80694389, 'Basaksehir, Istanbul'),
(24, 34, 'Bayrampasa', 48000, 50000, 86000, 82000, 550, 110, 41.03499985, 28.91222191, 'Bayrampasa, Istanbul'),
(25, 34, 'Sultanbeyli', 94000, 98000, 162000, 154000, 1050, 210, 40.96805573, 29.25888824, 'Sultanbeyli, Istanbul'),
(26, 34, 'Beylikduzu', 102000, 105000, 180000, 171000, 1100, 220, 41.00166702, 28.64194489, 'Beylikduzu, Istanbul'),
(27, 34, 'Arnavutkoy', 66000, 68000, 120000, 114000, 800, 160, 41.18472290, 28.74055672, 'Arnavutkoy, Istanbul'),
(28, 34, 'Tuzla', 86000, 89000, 150000, 143000, 950, 190, 40.81666565, 29.30138969, 'Tuzla, Istanbul'),
(29, 34, 'Esenler', 95000, 98000, 160000, 152000, 1000, 200, 41.03333282, 28.89027786, 'Esenler, Istanbul'),
(30, 34, 'Silivri', 78000, 81000, 140000, 133000, 900, 180, 41.07333374, 28.24638939, 'Silivri, Istanbul'),
(31, 34, 'Cekmekoy', 83000, 86000, 145000, 138000, 930, 186, 41.04027939, 29.17499924, 'Cekmekoy, Istanbul'),
(32, 34, 'Sile', 37000, 39000, 67000, 64000, 420, 84, 41.17416763, 29.61277771, 'Sile, Istanbul'),
(33, 34, 'Catalca', 42000, 44000, 74000, 70000, 480, 96, 41.14389038, 28.46194458, 'Catalca, Istanbul'),
(34, 34, 'Adalar', 8000, 8200, 14000, 13300, 90, 18, 40.87694550, 29.12972260, 'Adalar, Istanbul');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `plfr_user`
--

DROP TABLE IF EXISTS `plfr_user`;
CREATE TABLE IF NOT EXISTS `plfr_user` (
  `USER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `USER_NAME` varchar(255) CHARACTER SET utf8 COLLATE utf8_turkish_ci NOT NULL,
  `USER_PW` varchar(255) CHARACTER SET utf8 COLLATE utf8_turkish_ci NOT NULL,
  `USER_ROLE` int(11) NOT NULL,
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Tablo döküm verisi `plfr_user`
--

INSERT INTO `plfr_user` (`USER_ID`, `USER_NAME`, `USER_PW`, `USER_ROLE`) VALUES
(1, 'erdem', 'f0754046811de60c6dfbd1cf26c0422e', 1),
(2, 'ahmet', 'cdb5efc9c72196c1bd8b7a594b46b44f', 1),
(3, 'user', 'ee11cbb19052e40b07aac0ca060c23ee', 0),
(4, 'erdem_test', '212ad5963d5938eae13f143cbaa6cf7b', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
