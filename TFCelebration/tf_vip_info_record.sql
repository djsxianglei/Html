/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : weixin

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2015-12-21 20:31:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tf_vip_info_record
-- ----------------------------
DROP TABLE IF EXISTS `tf_vip_info_record`;
CREATE TABLE `tf_vip_info_record` (
  `id` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `companyName` varchar(200) DEFAULT NULL,
  `joinNum` varchar(200) DEFAULT NULL,
  `linkMan` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `phone` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tf_vip_info_record
-- ----------------------------
