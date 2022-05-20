<?php

define('ZIKDIR', 'D:\audio');

$peeps_data = [];

$dirs = scandir(ZIKDIR);
foreach ($dirs as $dir) {
	if ($dir != '.' && $dir != '..') {
		$artist = $dir;
		$dirs2 = scandir(ZIKDIR.'/'.$dir);
		foreach ($dirs2 as $dir2) {
			if ($dir2 != '.' && $dir2 != '..') {
				$album = $dir2;!
				$files = scandir(ZIKDIR.'/'.$dir.'/'.$dir2);
				foreach ($files as $file) {
					if ($file != '.' && $file != '..' && (strpos($file, '.mp3')!== false || strpos($file, '.flac')!== false)) {
                        $title = preg_replace("/\([^)]+\)/","",$file);
						$title = substr($title, 0, strripos( $title,'.'));
						$title = trim(substr($title, 3));
						$song = [
							'song_artist' => $artist,
							'song_album' => $album,
							'song_title' => $title,
							'song_url' => $dir.'/'.$dir2.'/'.$file,
							'avatar' => $dir.'/'.$dir2.'/cover.jpg'
							];
						$peeps_data[] = $song;
					}
				}
			}
		}

	}
}
$str = 'let peeps_data = ';
$str .= json_encode($peeps_data,  JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
$str .= '.map(value=>({value,sort:Math.random()})).sort((a,b)=>a.sort-b.sort).map(({value})=>value)';
$str .= '

export default peeps_data;';
file_put_contents(__DIR__.'/assets/js/components/GooPlayer/data.js', $str);