class Form{
    constructor(){
        this.input= createInput("").attribute("placeholder","enter your name >_<")
        this.playButton=createButton("play")
        this.titleImg=createImg("title.png","game title")
        this.greeting=createElement("h2")
    }
    setElementsPosition() {
        this.titleImg.position(120, 100);
        this.input.position(width / 2 - 110, height / 2 - 80);
        this.playButton.position(width / 2 - 90, height / 2 - 20);
        this.greeting.position(width / 2 - 300, height / 2 - 100);
      }

      setElementsStyle() {
        this.titleImg.class("gameTitle");
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
      }
      hide() {
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
      }
      display(){
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
      }
      handleMousePressed() {
        this.playButton.mousePressed(() => {//anoy. arrow function
          this.input.hide();
          this.playButton.hide();
          var message = `
          Hello ${this.input.value()}
          </br>wait for another player to join...`;
          this.greeting.html(message);
          playerCount += 1
          player.name = this.input.value()
          player.index = playerCount;
          player.addPlayer();
          player.updateCount(playerCount);
          player.getDistance();
        });
      }

}
