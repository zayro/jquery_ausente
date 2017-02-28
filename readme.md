# jquery-ausente

utilidad para detectar cliente inactivo

## Usage example

    setInterval(function() {
        console.log('espera time: ' + $.espera());
    }, 2000);

    $.espera(30, function() {
        console.log('are you there?');
    });

    $.espera(60, function() {
        console.log('going ausente :)');
        $.ausente('autolejos');
    });

    $.espera(0, function() {
        if ($.islejos()) {
            console.log('back from ausente');
            $.ausente();
        }
    });



## Functions

### $.espera()
Regresa espera tiempo en segundos

### $.espera(n)
Regresa Devoluciones de llamada registradas para segundos especificados

### $.espera(n, function)
Registrar una devolución de llamada para que se ejecute cuando se producen N segundos segundos

### $.ausente(message)
Mark the client as ausente

### $.ausente()
Mark the client as not ausente

### $.lejos()
Regresar si el cliente está ausente o no


## License

Released under the MIT license
http://www.opensource.org/licenses/mit-license.php
