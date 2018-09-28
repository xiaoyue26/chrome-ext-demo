'use strict';
let app;// 全局变量
//let ip='127.0.0.1';
$(function () {// main函数
    init_app();
    $('#submit-btn').click(function () {
        alert('click submit')
    });
    $('#clear-btn').click(function () {
        alert('click clear')
    });

});

function init_app() {
    app = new Vue({
        el: '#demo'
        , data: {

        }
        , delimiters:
            ['[[', ']]']
    });
}


function getDate() {
    let date = new Date();
    date.setDate(date.getDate() - 7);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }

    return year + month + day;
}
