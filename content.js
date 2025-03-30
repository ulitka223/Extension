function createGifOverlay(gifSrc, position, size) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.zIndex = '10000';

    switch (position) {
        case 'top-left':
            overlay.style.top = '0';
            overlay.style.left = '0';
            break;
        case 'top-right':
            overlay.style.top = '0';
            overlay.style.right = '0';
            break;
        case 'bottom-left':
            overlay.style.bottom = '0';
            overlay.style.left = '0';
            break;
        case 'bottom-right':
            overlay.style.bottom = '0';
            overlay.style.right = '0';
            break;
        case 'center':
        default:
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.transform = 'translate(-50%, -50%)'; // Center alignment
            break;
    }

    overlay.style.width = size.width || 'auto';
    overlay.style.height = size.height || 'auto';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';

    const gif = document.createElement('img');
    gif.src = chrome.runtime.getURL(gifSrc);
    gif.style.maxWidth = '100%';
    gif.style.maxHeight = '100%';

    overlay.appendChild(gif);

    document.body.appendChild(overlay);
}

createGifOverlay('your-gif.gif', 'bottom-right', { width: '40%', height: '40%' });

createGifOverlay('text.gif', 'center', { width: '120%', height: '%' });
