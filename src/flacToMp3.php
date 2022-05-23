<?php
define('ZIKDIR', 'C:\Users\abc\www\node\juke-box-saugrenue\dist\assets\audio');

$peeps_data = [];

$dirs = scandir(ZIKDIR);
foreach ($dirs as $dir) {
    if ($dir != '.' && $dir != '..') {
        $dirs2 = scandir(ZIKDIR . '/' . $dir);
        foreach ($dirs2 as $dir2) {
            if ($dir2 != '.' && $dir2 != '..') {
                $files = scandir(ZIKDIR . '/' . $dir . '/' . $dir2);
                foreach ($files as $file) {
                    if ($file != '.' && $file != '..' && (strpos($file, '.flac') !== false)) {
                        $path = ZIKDIR . DIRECTORY_SEPARATOR . $dir . DIRECTORY_SEPARATOR . $dir2.DIRECTORY_SEPARATOR;
                        $title = substr($file, 0, strripos($file, '.'));
                        $mp3file = $title.".mp3";
                        $cmd = 'ffmpeg -i "'.$path.$file.'" -ab 320k -map_metadata 0 "'.$path.$mp3file.'"';
                        exec($cmd);
                    }
                }
            }
        }
    }
}