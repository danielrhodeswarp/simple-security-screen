///
/// My Home Move Ltd ("MHM") CONFIDENTIAL
/// Unpublished Copyright (c) 2000-2018 My Home Move Ltd, All Rights Reserved.
///
/// NOTICE:  All information contained herein is, and remains the property of MHM. The intellectual and technical concepts contained
/// herein are proprietary to MHM and may be covered by U.K. and Foreign Patents, patents in process, and are protected by trade secret or copyright law.
/// Dissemination of this information or reproduction of this material is strictly forbidden unless prior written permission is obtained
/// from MHM.  Access to the source code contained herein is hereby forbidden to anyone except current MHM employees, managers or contractors who have executed 
/// Confidentiality and Non-disclosure agreements explicitly covering such access.
///
/// The copyright notice above does not evidence any actual or intended publication or disclosure of this source code, which includes  
/// information that is confidential and/or proprietary, and is a trade secret, of MHM.  ANY REPRODUCTION, MODIFICATION, DISTRIBUTION, PUBLIC PERFORMANCE, 
/// OR PUBLIC DISPLAY OF OR THROUGH USE OF THIS SOURCE CODE WITHOUT THE EXPRESS WRITTEN CONSENT OF COMPANY IS STRICTLY PROHIBITED, AND IN VIOLATION OF APPLICABLE 
/// LAWS AND INTERNATIONAL TREATIES.  THE RECEIPT OR POSSESSION OF THIS SOURCE CODE AND/OR RELATED INFORMATION DOES NOT CONVEY OR IMPLY ANY RIGHTS  
/// TO REPRODUCE, DISCLOSE OR DISTRIBUTE ITS CONTENTS, OR TO MANUFACTURE, USE, OR SELL ANYTHING THAT IT  MAY DESCRIBE, IN WHOLE OR IN PART.                
///


function showLogoImage(hideImage, showImage) {
    $("#" + hideImage).hide();
    $("#" + showImage).show();
}

function preloadImages() {


    //$('clearfix.img, conveyancer-info-button.img, propertyPhoto.img, header img').
    

    //$(function () { 
    //var images = $("img").wrap("<div><img src='../Content/images/ajax-loader.gif' style='background:white; padding:40px;'  >");
    
    //images.each(function (index, image) {
        
    //    ///image.addEventListener("load", function () { alert('load'); });
        
    //    $(image).load (function () {
    //        var parentDiv = $(this).parent().parent();
    //        var preloader = $(this).parent();
    //        var image = $(this);

    //        var clonedImage = $(this).clone();
    //        preloader.remove();

    //        //parentDiv.prepend(clonedImage);
    //        clonedImage.insertBefore(parentDiv);
    //        clonedImage.show();
    //        parentDiv.remove();
    //        //image.remove();

    //        //   parentDiv.insertBefore(image);


    //    });
        
    //});
    //});
}

/*

function preloadImages() {
    //var images = $('img').wrap("<div><img src='http://2coders.ru/wp-content/uploads/2010/09/jquery-preloader1.gif' style='background:white; padding:40px;'  >");
    var images = $('img').wrap("<div style='background:white; border:1px solid black; text-align:center;'><img  class='imagePreloader' src='../Content/images/ajax-loader.gif' /> </div>");
    //:not(.imagePreloader)
    
    images.each(function (index, img) {
        setTimeout(function () {
            var image = $(img);
            var parentDiv = image.parent().parent();
            var preloader = image.parent();

            var heght = image[0].naturalHeight;
            var width = image[0].naturalWidth;

           // if (heght == 0) heght = 100;
          //  if (width == 0) width = 100;

            console.log(image);
            
            parentDiv.width(width);
            parentDiv.height(heght);
            return;
           // preloader.css("margin-top", (heght / 2).toString() + "px")
            
            image.on("load", function () {
                var clonedImage = $(this).clone();

                clonedImage.insertBefore(parentDiv);
                clonedImage.show();
                parentDiv.remove();

            });


        }, 100);
    }
    );
}
*/

//    preloadImages();
