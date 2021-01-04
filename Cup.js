class Cup{
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 300, 300);
        this.x = x;
        this.y = y;
        this.image = loadImage("cup.jpg");
        World.add(world,this.body);

    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop();
    }
}