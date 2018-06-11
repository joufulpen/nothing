var gulp = require('gulp');
var sass = require('gulp-sass');
var refresh = require('gulp-refresh');

gulp.task('sass', function () {
  return gulp.src('../../sass/login.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../../css/'));
});
 

//var browserSync = require('browser-sync');
//gulp.task('myserver', () => {
//  // 开启服务器
//  browserSync({
//      server: '../../css/',
//      // 代理服务器
//      //proxy:'http://localhost:10086',
//      // 端口
//      port: 10087,
//      files: ['.../../sass/login.scss']
//  });
//
//  // 监听sass文件修改
//  gulp.watch('.../../sass/login.scss', ['sass']);
//
//});

gulp.task('default',['sass']);