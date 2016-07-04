var express = require('express');
var app = express();
var path       = require('path');

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/build/template/index.html'));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});


// var P = new Promise(function(resolve,reject){
// 	var a = 0;
// 	var time = setInterval(function(){
// 		if(a == 10){
// 			resolve(a);
// 			clearInterval(time);
// 		}else{
// 			a++
// 		}
// 	},100)
// })

// var B = new Promise(function(resolve,reject){
// 	var a = 0;
// 	var time = setInterval(function(){
// 		if(a == 10){
// 			resolve(a);
// 			clearInterval(time);
// 		}else{
// 			a++
// 		}
// 	},100)
// })
// P.then(function(a){
// 	console.log(a,'这里是A的');
// 	return B
// }).then(function(a){
// 	console.log(a,'这里是B的');
// })
// 0.5秒后返回input+input的计算结果:
// 'use strict';

// function log(s) {
//     console.log(s)
// }

// // 0.5秒后返回input*input的计算结果:
// function multiply(input) {
//     return new Promise(function (resolve, reject) {
//         log('xxxxxx1')
//         log('calculating ' + input + ' x ' + input + '...');
//         setTimeout(resolve, 500, input * input);
//     });
// }

// // 0.5秒后返回input+input的计算结果:
// function add(input) {
//     return new Promise(function (resolve, reject) {
//         log('xxxxxx2')
//         log('calculating ' + input + ' + ' + input + '...');
//         setTimeout(resolve, 1000, input + input);
//     });
// }

// var p = new Promise(function (resolve, reject) {
//     log('start new Promise...');
//     resolve(123);
// });

// function asyncFn1() {
//     var promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log('asyncFn1 is done');
//             resolve('asyncFn1 value');
//         }, 2000);
//     });
//     return promise;
// }

// function asyncFn2() {
//     var promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log('asyncFn2 is done');
//             resolve(' asyncFn2 value');
//         }, 4000);
//     });
//     return promise;
// }

// function asyncFn3() {
//     var promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log('asyncFn3 is done');
//             resolve(' asyncFn3 value');
//         }, 1000);
//     });
//     return promise;
// }

// asyncFn1()
//     .then(function(){
//     	return asyncFn2
//     })
//     .then(function(){
//         return p.then(multiply)
//          .then(add)
//          .then(multiply)
//          .then(add)
//          .then(function (result) {
//             log('Got value: ' + result);
//         });
//     })
//     .then(asyncFn3)
//     .then(function(arg) {
//         console.log(arg);
//     });