var gulp=require('gulp');
var jade=require('gulp-jade');

gulp.task("default",["watch"],function(){
	gulp.src("./view/*.jade")
	.pipe(jade())
	.pipe(gulp.dest('desk/'))
})


gulp.task("watch",function(){
	gulp.watch("./view/*.jade",["default"])
})