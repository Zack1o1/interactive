document.querySelector('.video-bg').addEventListener('mouseenter', function() {
    document.querySelector('.video').style.transform = 'scale(1.5)';
});
document.querySelector('.video-bg').addEventListener('mouseleave', function() {
    document.querySelector('.video').style.transform = 'scale(1)';
});
document.querySelector('.click').addEventListener('mouseenter', function() {
    document.querySelector('.video').style.transform = 'scale(2)';
});
document.querySelector('.click').addEventListener('mouseleave', function() {
    document.querySelector('.video').style.transform = 'scale(1.5)';
});

const cursor = document.querySelector('.cursor')
const container = document.querySelector('.video-bg')

container.addEventListener('mousemove', (event)=>{
    container.style.cursor = 'none'
    const rect = container.getBoundingClientRect(); 
    const cursorX = event.clientX - rect.left; 
    const cursorY = event.clientY - rect.top;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    // console.log(rect)
})