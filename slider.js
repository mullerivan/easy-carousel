var data = new FormData();
var link = 'http://www.cactusnelson.org.nz';
var interval = 2000; //The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
var folder = 'test';

data.append("folder", folder);
jQuery.ajax(
    {
        url: 'slider.php',
        dataType: "text",
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        success: function(data){
            var array_data;
            var img_folder = "assets/"+folder+"/_resampled/SetWidth400-";
            array_data = data.split(',');
            var first = true;
            //INSERT HTML FOR CARUSEL
            jQuery('.slider').append(
                '<div id="myCarousel" class="carousel slide" data-ride="carousel">' +
                    '<ol class="carousel-indicators">' +
                        '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>' +
                        '<li data-target="#myCarousel" data-slide-to="1" class=""></li>' +
                        '<li data-target="#myCarousel" data-slide-to="2" class=""></li>' +
                    '</ol>' +
                    '<div class="carousel-inner">    </div>' +
                    '<a class="left carousel-control" href="#myCarousel" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>' +
                    '<a class="right carousel-control" href="#myCarousel" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>' +
                '</div>'
            )
            //INSERT IMAGES TO CARUSEL
                jQuery.each(array_data,function(key,name){
            //replace especial characters
                name = name.replace('[','')
                name  =name.replace(']','')
                name= name.replace('"','')
                name= name.replace('"','')
                if (first){
                    $( ".carousel-inner" ).append( '<div class="item active"><a href="'+link+'"><img data-src="" alt="First slide" src='+img_folder+name+'></a></div>');
                }
                else{
                    $( ".carousel-inner" ).append( '<div class="item"><a href="'+link+'"><img data-src="" alt="First slide" src='+img_folder+name+'></a></div>');
                }
                first = false
            })


            $('.carousel').carousel({
                interval: interval
            })

        }
})

