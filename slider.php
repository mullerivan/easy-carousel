<?php

function getSlider()
{
    $list = Array();

    foreach (scandir('assets/'.$_POST['folder'].'/') as $key => $file_die) {
        if ($file_die != '.' && $file_die != '..' && $file_die != '_resampled') {
            $list[] = $file_die;
        }
    }
    return json_encode($list);
}
echo getSlider();

