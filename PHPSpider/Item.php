<?php
	class Item{
		var $url;
		var $category;
		function __construct($url,$category){
			$this->url 		= $this->checkURL($url);
			$this->category = $category;
		}
		function checkURL($url){
			if (stristr($url,"http://news.cqu.edu.cn/newsv2/")) {
				return $url;
			}else{
				return "http://news.cqu.edu.cn/newsv2/".$url;
			}
		}
		function getURL(){
			return $this->url;
		}
		function getCategory(){
			return $this->category;
		}
		function __tostring(){
			return "URL:".$this->url." 类别:".$this->category;
		}
	}
?>