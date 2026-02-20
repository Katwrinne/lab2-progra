// Diferentes selectores de JavaScript

// 1. getElementById - Eventos de click
const btnClick = document.getElementById('btn-click');
const clickResultado = document.getElementById('click-resultado');

btnClick.addEventListener('click', function() {
    clickResultado.textContent = ' Click detectado (' + new Date().toLocaleTimeString() + ')';
    clickResultado.style.color = '#FFC212';
    btnClick.classList.add('click-active');
    setTimeout(() => {
        btnClick.classList.remove('click-active');
    }, 200);
});

// 2. getElementById - Evento doble click
const btnDblClick = document.getElementById('btn-dblclick');
const dblClickResultado = document.getElementById('dblclick-resultado');

btnDblClick.addEventListener('dblclick', function() {
    dblClickResultado.textContent = 'Doble click detectado';
    dblClickResultado.style.color = '#FFC212';
    this.style.background = '#F9B0C3';
    setTimeout(() => {
        this.style.background = '#7766C6';
    }, 300);
});

// 3. querySelector - Evento hover (mouseenter/mouseleave)
const hoverArea = document.querySelector('#hover-area');
const hoverResultado = document.getElementById('hover-resultado');

hoverArea.addEventListener('mouseenter', function() {
    this.textContent = 'Mouse dentro';
    hoverResultado.textContent = 'detectado';
    hoverResultado.style.color = '#FFC212';
    this.classList.add('hover-active');
});

hoverArea.addEventListener('mouseleave', function() {
    this.textContent = 'pasar el cursor aqui';
    hoverResultado.textContent = 'sin detectar ';
    hoverResultado.style.color = '#7766C6';
    this.classList.remove('hover-active');
});

// 4. querySelector - Evento keydown
const keydownInput = document.querySelector('#keydown-input');
const keydownResultado = document.getElementById('keydown-resultado');

keydownInput.addEventListener('keydown', function(event) {
    keydownResultado.textContent = `Tecla presionada: "${event.key}"`;
    keydownResultado.style.color = '#FFC212';
});

// 5. getElementById - Evento focus
const focusInput = document.getElementById('focus-input');
const focusResultado = document.getElementById('focus-resultado');

focusInput.addEventListener('focus', function() {
    focusResultado.textContent = 'Input enfocado';
    focusResultado.style.color = '#FFC212';
    this.classList.add('focus-active');
});

// 6. getElementById - Evento blur
const blurInput = document.getElementById('blur-input');
const blurResultado = document.getElementById('blur-resultado');

blurInput.addEventListener('blur', function() {
    blurResultado.textContent = 'desenfocado' + this.value + '"';
    blurResultado.style.color = '#7766C6';
    this.classList.remove('focus-active');
});

// 7. querySelector - Evento submit
const demoForm = document.querySelector('#demo-form');
const submitResultado = document.getElementById('submit-resultado');

demoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir recarga de página
    const inputValue = this.querySelector('#form-input').value;
    submitResultado.textContent = inputValue 
        ? `Formulario enviado: "${inputValue}"` 
        : 'Formulario enviado (vacío)';
    submitResultado.style.color = '#FFC212';
});

// 8. querySelector - Evento change
const changeSelect = document.querySelector('#change-select');
const changeResultado = document.getElementById('change-resultado');

changeSelect.addEventListener('change', function() {
    const valor = this.value;
    changeResultado.textContent = valor 
        ? `Valor cambiado a: "${this.options[this.selectedIndex].text}"` 
        : 'Selección removida';
    changeResultado.style.color = '#FFC212';
});

// 9. getElementsByClassName - Para mostrar uso de múltiples selectores
const eventoBotones = document.getElementsByClassName('evento-boton');
console.log('Total de botones de evento:', eventoBotones.length);

// 10. querySelectorAll - Para animar las tarjetas de calendario
const eventosCalendario = document.querySelectorAll('.evento-item');
eventosCalendario.forEach((evento, index) => {
    evento.addEventListener('click', function() {
        const titulo = this.querySelector('h3').textContent;
        alert(`¡Evento seleccionado: ${titulo}!`);
    });
});

// 11. getElementsByTagName - Ejemplo adicional
const todosLosInputs = document.getElementsByTagName('input');
console.log('Total de inputs:', todosLosInputs.length);

// 12. Cambiar color de fondo con botón adicional
const body = document.body;
let colorIndex = 0;
const colores = ['#E0DFFD', '#F9B0C3', '#FFC212', '#FFFFFF'];

// Función para cambiar color (si quieres agregar un botón)
function cambiarColorFondo() {
    colorIndex = (colorIndex + 1) % colores.length;
    body.style.backgroundColor = colores[colorIndex];
}

// Efecto en el título principal
const titulo = document.getElementById('titulo-principal');
titulo.addEventListener('mouseover', function() {
    this.style.color = '#FFC212';
});

titulo.addEventListener('mouseout', function() {
    this.style.color = '#FFFFFF';
});
