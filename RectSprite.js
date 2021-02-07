class RectSprite{
    constructor(x,y,width,height,color){
        this.sprite=createSprite(x,y,width,height);
        this.sprite.shapeColor=color;        
    }

    display(box){
        this.sprite.display();

        if(this.sprite.isTouching(box)){
            box.bounceOff(this.sprite);
            if(this.sprite.shapeColor=="magenta"){
                music.stop();
                music.play();
                box.shapeColor="magenta"
            }
            else if(this.sprite.shapeColor=="blue"){
                music.stop();
                box.shapeColor="blue";
            }
            else if(this.sprite.shapeColor=="orange"){
                music.stop()
                box.velocityX=0;
                box.velocityY=0;
               
                box.shapeColor="orange";
                
                
            }
            else if(this.sprite.shapeColor=="green"){
                box.shapeColor="green";
            }
        }
    }
}