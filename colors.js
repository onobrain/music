class colors{
    constructor(){

        this.color1 = document.querySelector(".first")
        this.color1.addEventListener("click",()=>{
            this.selectColor("color1")
        })

        this.color2 = document.querySelector(".second")
        this.color2.addEventListener("click",()=>{
            this.selectColor("color2")
        })

        this.color3 = document.querySelector(".third")
        this.color3.addEventListener("click",()=>{
            this.selectColor("color3")
        })

        this.color4 = document.querySelector(".fourth")
        this.color4.addEventListener("click",()=>{
            this.selectColor("color4")
        })

    }

    selectColor(color){
        this.appContainer = document.querySelector("#container");
        this.header = document.querySelector(".show")
        this.buttonPev = document.querySelector("#back")
        this.buttonPlayStop = document.querySelector("#Play_Pause")
        this.buttonNext = document.querySelector("#next")
        this.volume = document.querySelector("#volume")
        this.speed = document.querySelector("#speed")

        if(color ==  "color1"){
            this.appContainer.style.background =  "linear-gradient(99deg,rgb(125 192 199), rgb(116 223 113))"
            this.header.style.background =        "rgba(76, 203, 158, 1)"
            this.buttonPev.style.background =     "rgba(76, 203, 158, 1)"
            this.buttonPlayStop.style.background ="rgba(76, 203, 158, 1)"
            this.buttonNext.style.background =    "rgba(76, 203, 158, 1)"
            this.volume.style.background =        "rgba(76, 203, 158, 1)"
            this.speed.style.background =        "rgba(76, 203, 158, 1)"
        }else if(color == "color2"){
            this.appContainer.style.background =  "rgba(202, 138, 154, 1)"
            this.header.style.background =        "rgba(202, 138, 154, 1)"
            this.buttonPev.style.background =     "rgba(202, 138, 154, 1)"
            this.buttonPlayStop.style.background ="rgba(202, 138, 154, 1)"
            this.buttonNext.style.background =    "rgba(202, 138, 154, 1)"
            this.volume.style.background =       "rgba(202, 138, 154, 1)"
            this.speed.style.background =        "rgba(202, 138, 154, 1)"

        }else if(color == "color3"){
            this.appContainer.style.background =  "rgb(87 132 122)"
            this.header.style.background =        "rgb(87 132 122)"
            this.buttonPev.style.background =     "rgb(87 132 122)"
            this.buttonPlayStop.style.background ="rgb(87 132 122)"
            this.buttonNext.style.background =    "rgb(87 132 122)"
            this.volume.style.background =        "rgb(87 132 122)"
            this.speed.style.background =         "rgb(87 132 122)"

        }else if(color == "color4"){
            this.appContainer.style.background =  "rgb(39 141 145)"
            this.header.style.background =        "rgb(39 141 145)"
            this.buttonPev.style.background =     "rgb(39 141 145)"
            this.buttonPlayStop.style.background ="rgb(39 141 145)"
            this.buttonNext.style.background =    "rgb(39 141 145)"
            this.volume.style.background =        "rgb(39 141 145)"
            this.speed.style.background =         "rgb(39 141 145)"

        }
    }
}
onload = new colors()