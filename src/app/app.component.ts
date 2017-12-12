import { Component, AfterViewInit } from '@angular/core'
import * as $ from 'jquery'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    title = 'app';
    ngAfterViewInit() {
       $(document).on("ready",function() {
         var menuState = 0;
         $(".btn-select").on("click",function() {
            if(menuState === 0) {
               $(".mini-menu-options").slideDown("slow");
               menuState = 1;
            } else {
               $(".mini-menu-options").slideUp("slow");
               menuState = 0;
            }
         });
         $(".mini-menu-options li").on("click", function() {
             var numHijos = $(this).children().length;
             if(numHijos < 2) {
                $(".mini-menu-options").hide("fast");
                var texto = $(this).text();
                $(".menu-select .menu-actual").text(texto);
             }
           menuState = 0;
         });
       });
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36251023-1']);
        _gaq.push(['_setDomainName', 'jqueryscript.net']);
        _gaq.push(['_trackPageview']);
        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    }
}
