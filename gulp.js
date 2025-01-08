import gulp from 'gulp';
import zip from 'gulp-zip';
import tar from 'gulp-tar';
import gzip from 'gulp-gzip';

const paths = {
    files: './dist/**/*',
    debugArchive: './archives/debug.zip',
    productionArchive: './archives/production.tar.gz',
};

export const createDebugArchive = () => {
    return gulp.src(paths.files)
        .pipe(zip('debug.zip'))
        .pipe(gulp.dest('./archives'));
};

export const createProductionArchive = () => {
    return gulp.src(paths.files)
        .pipe(tar('production.tar'))
        .pipe(gzip())
        .pipe(gulp.dest('./archives'));
};

export default gulp.series(createDebugArchive, createProductionArchive);
