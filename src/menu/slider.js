class Slider{
    constructor() {
        this.slider = document.createElement('div');
        this.slider.className = 'slider';
    }

    addImage() {
        const image = document.createElement('div');
        image.className = 'images';
        this.slider.appendChild(image);
    }
    getSlider() {
        return this.slider;
    }
}

let sliderObj = new Slider();
for (let i = 0; i < 4; i++){
    sliderObj.addImage();
}

let slider = sliderObj.getSlider();

export { slider };