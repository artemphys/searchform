


    $.clickAge = function() {
        $(".lightclick").click(function () {
            $(".lightclick").css("border", "1px solid #00CED1");
            $(this).css("border", "1px solid #FF4500");
        });
        $(document).click(function (e) {
            if ($(e.target).closest('.lightclick').length === 0) {
                $(".lightclick").css("border", "1px solid #00CED1");
            }
        });
        /*$(e.target) выбирает элемент, на который мы попали кликом.closest() выбирает ближайший родительский элемент если мы попали в список. если не попали будет 0.
         если попали то найдется 1 родитель. ".closest()" выбирает ближайший родительский элемент удовлетворяющий селектору*/
    };
    $.clickAge();


    $.clickChild = function() {
        $('#child select').change( function () {
            if ($("#child select")[0].selectedIndex === 0) {
                $("#age1 select").css("display", "none");
                $("#age2 select").css("display", "none");
                $("#age3 select").css("display", "none");
                $("#age4 select").css("display", "none");
            }
            else if ($("#child select")[0].selectedIndex === 1) {
                $("#age1 select").css("display", "inline");
                $("#age2 select").css("display", "none");
                $("#age3 select").css("display", "none");
                $("#age4 select").css("display", "none");
            }
            else if ($("#child select")[0].selectedIndex === 2) {
                $("#age1 select").css("display", "inline");
                $("#age2 select").css("display", "inline");
                $("#age3 select").css("display", "none");
                $("#age4 select").css("display", "none");
            }
            else if ($("#child select")[0].selectedIndex === 3) {
                $("#age1 select").css("display", "inline");
                $("#age2 select").css("display", "inline");
                $("#age3 select").css("display", "inline");
                $("#age4 select").css("display", "none");
            }
            else if ($("#child select")[0].selectedIndex === 4) {
                $("#age1 select").css("display", "inline");
                $("#age2 select").css("display", "inline");
                $("#age3 select").css("display", "inline");
                $("#age4 select").css("display", "inline");
            }
        });
    };
    $.clickChild();

    function search(word) {
        $('#search_result').html('');
//если поле поиска не пустое, производим AJAX запрос к файлу rocid.json
//и выводим результат в слой search_result

        if (word != '') {
            $.get("rocid.json", word, onSuccess);
            function onSuccess(data) {
                $('#search_result').append('<ul>Города</ul>');
                for (var i = 0; i < data.length; i++) {
                    if (data[i].toLowerCase().indexOf(word.toLowerCase()) == 0) {
                        $('#search_result ul').append('<li>'+ data[i] + '</li>');
                    }
                }
                $('#search_result ul li').click(function() {
                        $('#search_field').val(this.innerHTML);
                    });
                $('#search_result').parents().click(function() {
                    $('#search_result').html('');
                });
                $('#search-clear').click(function() {
                    $('#search_result').html('');
                    $('#search_field').val('');
                });
            }
        }

//если поле поиска пустое, очищаем слой с результатами поиска
        else
            {
                $('#search_result').html('');
            }
         //console.log('hi!');
        }









