/**
 * Created by Freed on 2017/5/6.
 */
// 引入模块
var gulp = require('gulp');
var uglify = require('gulp-uglify');
// 创建任务
gulp.task('script',function () {
    gulp.src('./gulp/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./gulp/dist'))
});