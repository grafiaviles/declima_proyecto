--
-- Table structure for table `testimonials`
--

CREATE TABLE IF NOT EXISTS `testimonials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `job` varchar(100) NOT NULL,
  `rating` int(11) NOT NULL DEFAULT '5',
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `name`, `image`, `job`, `rating`, `content`) VALUES
(1, 'Jack S. Baker', 'testimonials/images/jack.jpg', 'Design Engineer', 5, 'It is great working as promised and deserve it 5. Also the support was top quality immediate and with in hours. Great work !'),
(2, 'Natalia Stepanova', 'testimonials/images/natalia.jpg', 'Director', 4, 'This theme isn''t just amazingly well done but it''s customer support is outstanding. They answered to all my questions in no more than a day!'),
(3, 'Agnes A. Bell', 'testimonials/images/agnes.jpg', 'Assistant Project Manager', 4, 'This is one of the best WordPress themes I have used. All aspects are exactly what experienced designers and developers crave from a theme.'),
(4, 'Steven Forest', 'testimonials/images/steven.jpg', 'Lead Analyst', 5, 'This is a superb plugin with so many options - I was able to get the exact setup I needed first time! Thanks, you rock!');