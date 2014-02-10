<?php

function getSlider()
{
    $list = Array();
    $dir =   $_POST['silverstripe']? 'assets/'.$_POST['folder'].'/' : .$_POST['folder'].'/' ;

    foreach (scandir($dir) as $key => $file_die) {
        if ($file_die != '.' && $file_die != '..' && $file_die != '_resampled') {
            $list[] = $file_die;
        }
    }
    return json_encode($list);
}
echo getSlider();

