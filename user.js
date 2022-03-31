// ==UserScript==
// @name         ArxivMirror
// @namespace    https://github.com/yzs981130/ArxivMirror
// @homepage     https://github.com/yzs981130/ArxivMirror
// @version      0.0.1
// @author       yzs981130
// @description  Arxiv mirror for personal use
// @include      https://arxiv.org/abs/*
// @run-at       document-start
// @license      MIT
// ==/UserScript==

window.onload=function() {
  'use strict';
  let mirror = 'arxiv.yezhisheng.me';
  var ele = $(".full-text ul li a")[0];
	ele.href = ele.href.replace(/arxiv.org/g, mirror)+'.pdf';
}
