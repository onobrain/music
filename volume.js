class Speed_Volume{
    constructor(){
        this.audio_file = document.getElementById("player");

        var speed = document.getElementById("speed")
        speed.value = 100
        speed.addEventListener("input",()=>{
            this.audio_file.playbackRate = speed.value /100;
        });

        var volume = document.getElementById("volume")
        this.audio_file.volume = 50/100;
        volume.vlaue = 1;
        volume.addEventListener("input",()=>{
            this.audio_file.volume = volume.value/100;
        })
    }
}
onload = new Speed_Volume();