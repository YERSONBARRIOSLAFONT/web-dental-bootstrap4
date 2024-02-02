$(function () {


    /*-----------------------------------------------------------
    1. FUNCIONES PARA EL MENU PRINCIPAL
    -------------------------------------------------------------*/

    /*  Inserta y quita la clase ".icono-cerrar" al boton del menú*/
    $('#menu-navegacion .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    /*Al hacer click en un enlace del menú principal */
    $('#menu-navegacion .navbar-nav a').click(function () {

        /* 1) Quita la clase ".icono-cerrar" */
        $('.boton-menu').removeClass('icono-cerrar');

        /*2) Contraemos el menu */
        $('#menu-navegacion .navbar-collapse').collapse('hide');

    });

    /*-----------------------------------------------------------
    2. INICIANDO SWIPER
    -------------------------------------------------------------*/
    var swiper = new Swiper('#animacion', {

        /*Botones de navegación */
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',

        },
        /*Botones de paginación */
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
            clickable: true,
        },
        /*Slides se reproducen automaticamente*/
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        speed: 1200,
        effect: 'fade',
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        }

    });

    /*-----------------------------------------------------------
3. INICIANDO VENOBOX
-------------------------------------------------------------*/
    $('.venobox').venobox({
    });


    /*-----------------------------------------------------------
4. INICIANDO JQUERY.COUNTERUP
-------------------------------------------------------------*/

    $('.counter').counterUp();

    /*-----------------------------------------------------------
5. INICIANDO DATEPICKER
-------------------------------------------------------------*/
    $('.datepicker').pickadate({
        monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthsShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        today: 'Hoy',
        clear: 'Borrar',
        close: 'Cerrar',
        labelMonthNext: 'Siguiente mes',
        labelMonthPrev: 'Mes anterior',
        labelMonthSelect: 'Selecciona el mes',
        labelYearSelect: 'Selecciona el año',

        firstDay: 1,
        format: 'ddd, dd !de mmmm !de yyyy',
        formatSubmit: 'yyyy/mm/dd',
        selectYears: 2,
        selectMonths: true
    });
    /*-----------------------------------------------------------
5. INICIANDO DATEPICKER
-------------------------------------------------------------*/
    $('.timepicker').pickatime({
        clear: 'Borrar',
        format: 'hh:i A',
        interval: 15,
        min: true,
        //min: [8, 00],
        max: [20, 00]
    });
    /*-----------------------------------------------------------
6. INICIANDO PARSLEY
-------------------------------------------------------------*/
    $('#mi-formulario').parsley({
        errorClass: 'is-invalid',
        successClass: 'is-valid',
        errorsWrapper: '<ul class="list-unstyled text-danger mb-0 pt-2 small"></ul>',
        errorTemplate: '<li></li>',
        trigger:'change',
        triggerAfterFailure:'change'
    });
        /*-----------------------------------------------------------
7. INICIANDO STICKIT.JS
-------------------------------------------------------------*/
    $('#menu-navegacion').stickit({
        className:'menu-fijo',
    });
        /*-----------------------------------------------------------
8. INICIANDO PAGE-SCROLL-TO-ID
-------------------------------------------------------------*/
    $('#menu-principal a').mPageScroll2id({
        offset: 50,
        highlightClass: 'active'
    });
})