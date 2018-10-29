(function ($) {

    $(document).ready(function () {

        var rating = $("#rating"),
            stars = $("#rating .rating__icon"),
            radios = $(":radio[name='rating']");

        stars.hover(

            function () {

                var that = $(this);
                that.prevAll().addBack().addClass("rating__icon--hovered");

            },
            function () {

               var that = $(this);
               that.prevAll().addBack().removeClass("rating__icon--hovered");
            }
        );


        stars.on("click", function () {

            var that = $(this),
                index = that.index();

            that.siblings().removeClass("rating__icon--selected");
            that.prevAll().addBack().addClass("rating__icon--selected");

            radios.eq(index).prop("checked", true);

        });

    });

})(jQuery);
