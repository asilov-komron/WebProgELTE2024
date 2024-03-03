function setBackgroundColor() {
    const hue = document.getElementById('hue').value;
    const saturation = document.getElementById('saturation').value;
    const lightness = document.getElementById('lightness').value;

    const hslString = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    document.body.style.backgroundColor = hslString;
    document.getElementById('hslString').value = hslString;
  }