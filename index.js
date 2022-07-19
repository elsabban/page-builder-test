// main class "blueprint"

// we will use this class as a parent which we will inherit duplicated props and methods


class Main {
    // private property
    #body
    constructor(name,secTitle) {
        // global props
        // section name
        this.name = name
        this.secTitle = secTitle
        this.elm1 = ''
        this.elm2 = ''
        this.#body = document.body
    }
    // global methods
    createFunc() {
        // here we append structure to dom
        this.#body.innerHTML += `<section class="${this.name}">
    <h1>${this.secTitle}</h1>
    ${this.elm1}
    ${this.elm2}
    </section>`
    }
}

class ImgSec extends Main {
    constructor(name,secTitle,imgSrc,text) {
       super(name,secTitle)
       this.imgSrc = imgSrc;
       this.text = text;
       this.elm2 = `<img src="${this.imgSrc}">`;
       this.elm1 = `<div>${this.text}</div>`;
    }
    
}

var counter = 0
class Slider extends Main {

    constructor(name,secTitle,imgArr,text) {
        super(name,secTitle);
        this.imgArr = imgArr;
        
        this.elm1 = `<div> ${text} </div>`
    }
    createSlider() {
        this.elm2 = `<div id='slider${counter}'></div>`
        this.createFunc()
       
        console.log(counter)
        this.imgArr.forEach(elm => {
           document.getElementById(`slider${counter}`).innerHTML += `<img src='${elm}'>`
        });
        counter++
    }
    
}

// var section1 = new Main('section1', `<div class="desc">div div div</div>`, `<img src="" class="img">`)
var section1 = new ImgSec('secImg', 'awsome section 1',`test.png`, `hello section 1`)
var section2 = new Slider('slider', 'awsome section 1',['test.png','test.png','test.png','test.png'], `hello slider`)

section1.createFunc()
section2.createSlider()


