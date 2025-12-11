let port, writer;

// Arduino connect
document.getElementById('connectBtn').addEventListener('click', async () => {
    try {
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 9600 });
        writer = port.writable.getWriter();
        alert('Connected to Arduino!');
    } catch (err) {
        alert('Failed to connect: ' + err);
    }
});

// Buttons press logic
function setupButton(btn) {
    btn.addEventListener('mousedown', async () => {
        btn.classList.add('pressed');
        if (writer && btn.dataset.command)
            await writer.write(new TextEncoder().encode(btn.dataset.command + '\n'));
    });
    btn.addEventListener('mouseup', () => btn.classList.remove('pressed'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('pressed'));
}

document.querySelectorAll('.square-btn, .dir-btn').forEach(setupButton);

// Sliders
const modeSlider = document.getElementById('modeSlider');
const leftRight = document.getElementById('leftRight');
const forwardBackward = document.getElementById('forwardBackward');

[modeSlider, leftRight, forwardBackward].forEach(slider => {
    slider.addEventListener('input', async () => {
        if (writer) await writer.write(new TextEncoder().encode(slider.id + ':' + slider.value + '\n'));
    });
});
