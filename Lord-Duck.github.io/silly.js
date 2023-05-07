let speed = 20;
let scale = 0.17; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;
let logoColor;

let dvds = []; // array of DVDs

(function main(){
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    
    // create an array of images
    let images = [];
    for(let i=1; i<=6; i++){
        let img = new Image();
        img.src = `./sillyCats/cat${i}.jpg`;
        images.push(img);
    }
    
    // create the DVDs with random positions and speeds
    for(let i=0; i<images.length; i++){
        let dvd = {
            x: Math.random() * (canvas.width - images[i].width*scale),
            y: Math.random() * (canvas.height - images[i].height*scale),
            xspeed: (Math.random() < 0.5 ? -1 : 1) * (5 + Math.random()*10),
            yspeed: (Math.random() < 0.5 ? -1 : 1) * (5 + Math.random()*10),
            img: images[i]
        };
        dvds.push(dvd);
    }

    //Draw the "tv screen"
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    update();
})();

function update() {
    setTimeout(() => {
        //Draw the canvas background
        ctx.fillStyle = '#4b4f55';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // loop through the DVDs and draw them
        for(let i=0; i<dvds.length; i++){
            let dvd = dvds[i];
            ctx.fillStyle = logoColor;
            ctx.fillRect(dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
            ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
            //Move the logo
            dvd.x += dvd.xspeed;
            dvd.y += dvd.yspeed;
            //Check for collision 
            checkHitBox(dvd);
        }

        update();   
    }, speed)
}

//Check for border collision
function checkHitBox(dvd){
    if(dvd.x+dvd.img.width*scale >= canvas.width || dvd.x <= 0){
        dvd.xspeed *= -1;
    }
        
    if(dvd.y+dvd.img.height*scale >= canvas.height || dvd.y <= 0){
        dvd.yspeed *= -1;
    }    
}

