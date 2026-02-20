# lab2-progra

KATERINNE ALEJANDRA MENDEZ GARCIA - SMSS001824
------------------------------------------------------------------------------------------------------
| Tipo de Selector       | Elemento Afectado | Descripción de la tarea                              |
|------------------------|-------------------|------------------------------------------------------|
| getElementById         | #btn-click        | Muestra mensaje cuando se hace click en el botón     |
| getElementById         | #btn-dblclick     | Detecta y muestra cuando se hace doble click         |
| querySelector          | #hover-area       | Cambia el texto cuando el mouse entra y sale del área|
| querySelector          | #keydown-input    | Muestra qué tecla se presiona en tiempo real         |
| getElementById         | #focus-input      | Indica cuando el input está seleccionado             |
| getElementById         | #blur-input       | Muestra mensaje cuando se sale del input             |
| querySelector          | #demo-form        | Evita que el formulario se envíe y muestra los datos |
| querySelector          | #change-select    | Muestra la opción seleccionada del menú desplegable  |
| getElementsByClassName | .evento-boton     | Cuenta y aplica estilos a todos los botones de evento|
| querySelectorAll       | .evento-item      | Muestra alerta con el nombre del evento al hacer click|
| getElementsByTagName   | input             | Cuenta todos los campos de texto de la página         |
| querySelectorAll       | .tarjeta          | Aplica efecto de resaltado a las tarjetas             |
--------------------------------------------------------------------------------------------------------

¿Cuál es la ventaja de utilizar getElementById frente al QuerySelector?
La principal ventaja de getElementById es que es más rápido y eficiente porque está especialmente diseñado para buscar elementos por su ID. Los navegadores tienen un índice especial de IDs que hace la búsqueda inmediata.

También tiene una sintaxis más simple: solo necesitas escribir el nombre del ID, mientras que con querySelector debes usar el símbolo #. Además, el código es más fácil de leer y entender.

¿En qué situación es preferible usar querySelectorAll en lugar de querySelector? Explique qué tipo de dato devuelve cada uno.
querySelectorAll se usa cuando necesitas seleccionar TODOS los elementos que coinciden con un selector, como todos los botones de una página. querySelector solo selecciona el PRIMER elemento que encuentra.
