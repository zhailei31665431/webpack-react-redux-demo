'use strict';
var gulp = require('gulp');
var del = require('del');//引入删除文件
var browserSync = require('browser-sync');//引入浏览器模块
var reload = browserSync.reload;
var sass = require('gulp-ruby-sass');
var webpack = require('gulp-webpack');

// var $ = require('gulp-load-plugins')();

// gulp.task('styles:sass', function () {
//     var sass = require('gulp-ruby-sass');
//     var concat = require('gulp-concat');
//     sass(['less/*.scss'])
//         .on('error', console.error.bind(console))
//         .pipe(gulp.dest('less/order'))
//         .pipe($.size({title:'less/order'}));
//     sass(['less/*.scss'])
//         .on('error', console.error.bind(console))
//         .pipe(concat('joywok-mobile.css'))
//         .pipe(gulp.dest('dist/css'))
//         .pipe($.size({title:'all.css'}));
// });

// gulp.task('styles', ['styles:sass']);

// gulp.task('webpackAll',function(){
//   return gulp.src('src/scripts/index.js')
//     .pipe(webpack({
//       output: {
//         filename: '[name].output.js'
//       },
//       module: {
//         loaders: [
//           {
//             test: /\.js$/,
//             loader: 'babel-loader'
//           },{
//             test: /\.less$/,
//             loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
//           }
//         ]
//       },  
//     }))
//     .pipe(gulp.dest('build/scripts'));
// })

var paths = {
    sassSrcPath: ['src/less/*.scss'],
    sassDestPath: ['build/styles'],
    sassImportsPath: ['src/less']
};
gulp.task('styles:sass',function(){
    
    var concat = require('gulp-concat');
    return sass(paths["sassSrcPath"],{
                style: 'expanded',
                precision: 10,
                loadPath: ['src/less']
                })
            .on('error', console.error.bind(console))
            .pipe(concat('joywok-mobile.css'))
            .pipe(gulp.dest('build/styles'))
})

gulp.task('watch:scss',function(){
    gulp.watch(['src/less/index.scss'],['styles:sass']);
    gulp.watch(['src/less/all/*.scss'],['styles:sass']);
})


gulp.task('serve',function(){
    browserSync({
        notify: false,
        server: {
            baseDir: ['./build','.'],
            routes:{
                "/bower_components":"bower_components",
                "/dist":"dist"
            }
        }
    });
    gulp.watch(['template/*.html'],['styles:sass']);
    gulp.watch(['less/*.scss'],['styles:sass']);
});

gulp.task('default', ['serve']);
