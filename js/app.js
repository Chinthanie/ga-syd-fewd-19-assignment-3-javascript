/*global document, $ */
(function () {
    'use strict';

    $(document).ready(function () {
        /* ----- Begin writing your JavaScript here ------*/

        /*Blog post 1*/
        $(".readmore1").click(function (e) {
            e.preventDefault();
            $("#show-this-on-click1").slideDown(400);
        });
        
        $(".readless1").click(function (e) {
            e.preventDefault();
            $("#show-this-on-click1").slideUp(400);
        });
        
        $(".readmore1").click(function () {
            $(".readless1").show();
        });
        
        $(".readmore1").click(function () {
            $(".readmore1").hide();
        });
        
        $(".readless1").click(function () {
            $(".readmore1").show();
        });
        
        $(".readless1").click(function () {
            $(".readless1").hide();
        });
        
        
        /*Blog post 2*/
        $(".readmore2").click(function (e) {
            e.preventDefault();
            $("#show-this-on-click2").slideDown(400);
        });
        
        $(".readless2").click(function (e) {
            e.preventDefault();
            $("#show-this-on-click2").slideUp(400);
        });
        
        $(".readmore2").click(function () {
            $(".readless2").show();
        });
        
        $(".readmore2").click(function () {
            $(".readmore2").hide();
        });
        
        $(".readless2").click(function () {
            $(".readmore2").show();
        });
        
        $(".readless2").click(function () {
            $(".readless2").hide();
        });
        
        /*Learn More and Less*/
        
        $(".learnmore").click(function (e) {
            e.preventDefault();
            $("#learnmoretext, .showless").show(200);
        });
        
        $(".learnmore").click(function () {
            $(".learnmore").hide();
        });
        
        $(".showless").click(function (e) {
            e.preventDefault();
            $(".learnmore").show();
        });
        
        $(".showless").click(function () {
            $("#learnmoretext, .showless").hide(200);
        });
        
        /* ----- Finish writing your JavaScript here -----*/
    });
}());