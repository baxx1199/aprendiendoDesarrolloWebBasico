$(document).ready(function () {
    let btnEf= $('#btnEff');
    /*  
        SYNTAXIS
        $(selector).accion() 

        $--> INDICADOR DE JQUERY
        (Selector) --> selecciona objeto, Dom con que trabajar
        .action() -->accion a realizar sobre el objeto
    */

        /* Selectors */

        /* $('article#segundo>p').hide(); */

        /*
        --------------Effects --------------
        https://api.jquery.com/category/effects/ */

    btnEf.on( "click",function (params) {
            $('#box3').slideToggle(3000);
        })

        /* =====================================
                        access to the DOM
                .parent()  Gets the parent container of the selected item 
                .parents() Gets all the parents container of the selected item
                .children() Get all the children containers of the selected item
                    |    
                    ->  .children('filter') can use a filter option for a specific item
                
                .find() Perform a multi-level search to find match
                .siblings() Gets all siblings items 
                .next() -- .prev() Gets the netx/previous item of the selected item

                $('#box1').parent().css({
                    background: '#1a2a50'
                });
         
                $('div#cont').children('#box2').css({
                    transform: 'rotate(45deg)'
                });
         
                $('div#box4').siblings().css({
                    background: '#a4d682'
                });
         
                $('div#box2').prev().css({
                    background: 'white',
                    color: '#191919'
                });
                
                $('div#box3').next().css({
                    transform: 'rotate(120deg)',
                    background: 'yellow'
                });
                $('div#box5').prevAll("div#box3").css({
                    borderRadius: '50%',
                    background: '#57102a'
         
                });
        */


        /* =====================================
                        filters for elements
                .first()  Gets the first item
                .last() Gets the last item
                .eq(param) Gets a specific item    
                .filter(param) gets all matching items
                .not() gets all items except
                
                $('.caja').filter(".cjp").css({
                    borderRadius: '10%',
                    background: '#d3A19e'
         
                });
        */



                /* ================================
                        Eventos

                        $(item).on('typeOfEvent', funcion or callback);
                 */

         btnEf.on('mouseenter',function () {
            $('div.cjp').css({
                background: 'red'
            })
            console.log('si funciona lo juro')
         })    
         
         btnEf.on('mouseleave',function () {
            $('div.cjp').css({
                background: '#1d1e46'
            })
            console.log('si funciona lo juro')
         })
         $('#btnEl').on('click',function () {
            btnEf.off('click')
            console.log('soy mas fuerte')
         })

         /*  The reserved word THIS, serves to   know the  specific item */


         /* $('.caja').on('click',function () {
            $(this).css({
                background: 'green'
            })
         }) */

         
/* Animations
         #('selector').animate({params},delay,callback);
*/
         $('button#btnup').on('click',function () {
            $('div#boxB').animate({
                marginTop: '-=20px',
                transform: 'scale(1.1,1.1) rotate(45deg)'
            },300)
         })

         $('button#btndown').on('click',function () {
            $('div#boxB').animate({
                marginTop: '+=20px',
                transform: 'rotate(-90deg)'
            },300)
         })
         $('button#btnleft').on('click',function () {
            $('div#boxB').animate({
                marginLeft: '-=20px',
                transform: 'rotate(-45deg)'
            },300)
         })
         $('button#btnright').on('click',function () {
            $('div#boxB').animate({
                marginLeft: '+=20px',
                transform: 'rotate(45deg)'
            },300)
         })


         /* Stop animations
            .stop()
         */
         $('button#btniniciar').on('click',function () {
             $('div#box4').animate({
                 width: '500px'
              }, 5000)
            
         })
         $('button#btnparar').on('click',function () {

            //Can use two parameters, clean stack of animations, and go to the final of animation, these params are booleans
            $('div#box4').stop()
            //$('div#box4').stop(true/false, true/false);
        })
        $('h2#autoria').on('mouseenter', function () {
            $(this).animate({

                fontSize:'36px'
            })
        })
        $('h2#autoria').on('mouseleave', function () {
            $(this).animate({

                fontSize:'22px'
            })
        })

        /* Manipulando el Dom Con jQuery
        
            .text() Manipulates only text
            .html() Can manipulate the tags html and your content
            .attr() You can modify the attributes of an element, 
                    this method receives two parameters, the first 
                    refers to the attribute, and the second the value 
                    can also pass an object with several attributes 


        */

        /* $('footer').html('<h1>Hola desde Jquery</h1>')
 */
        $('h3#ttFooter').attr({
            'class': 'ttfoot2',
            'id': 'nuevoID'
        })

        /* Added items to DOM 
            .append('item') insert the new element at the end
            .prepend('item') insert the new element at the start
            .before('item') insert the new element before the element reference
            .after('item) insert the new element after the element reference
        */
        let padre = $('div#cont');
        let contadorCajas=1;
        function crearNuevaCaja() {
            let nuevac=$('<div></div>').attr('class','caja').text('nuevo '+ contadorCajas+'.')
            contadorCajas++;
            return nuevac; 
        }

        $('#btnprincipio').on('click',function(){
            let item=crearNuevaCaja();
            padre.append(item);
        });
        
        $('#btnAlFinal').on('click',function(){
            let item=crearNuevaCaja();
            padre.prepend(item);
        });
        
        $('#btnAntes').on('click',function(){
            let item=crearNuevaCaja();
            padre.before(item);
        });
        
        $('#btnDespues').on('click',function(){
            let item=crearNuevaCaja();
            padre.after(item);
        });
        /* delete items from DOM 

            .remove() delete the item and yours childs
            .childre(params).remove() remove the children item 
            .empty() delete all childrens 
        */
       

       $('button#btnall').on('click',function () {
            padre.remove();
            console.log('todo se a perdido');
       });

       $('button#btnCall').on('click',function () {
            padre.children().remove();
            console.log('los hijos se perdieron');
        });

        $('button#btnc2').on('click',function () {
            padre.children('div#box2').remove();
            console.log('el segundo se a perdido');
       });

       $('button#btnCall2').on('click',function () {
            padre.empty();
            console.log('todos los hijos se han perdido pero con empty');
        });


        /* Added or remove properties/classes css with jquery
            .addClass('clasName);
            .removeClass('className');
            .toggleClass('className'); 
            .css({ 
                property: 'Value',
                property: 'Value'
            })
        */

            $('div.caja').on('click',function () {
                $(this).toggleClass('cajaClicada');
            })

        /* tips jquery

            .width() gets width content
            .innerWidth() gets the width content + padding
            .outerWidth() gets the width content + padding + border 
                          This method can receive a Boolean value 
                          if true will measure also the margin 
        
            Changing width for height gets the measures of height the item
         */
})