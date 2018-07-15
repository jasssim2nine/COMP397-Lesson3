module scenes {
    export class StartScene extends objects.Scene{
        // Private Instance Variables
            private _welcomeLabel : objects.Label;
            private _startButton : objects.Button;

        // Public Properties


        //Constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager)
            this.Start();
        }


        //Private Methods
            private _startButtonClick():void{
                
                objects.Game.currentScene = config.Scene.PLAY;
            }

        //Public Methods

        //Initialize game variables and objects
        public Start():void{
            this._welcomeLabel = new objects.Label("Welcome","60px","consolas","#000000",320,340,true);
            this._startButton = new objects.Button(this.assetManager,"startButton",320,300);

        }

        public Update(): number{
            
            return objects.Game.currentScene;

        }
        public Main():void{
        this.addChild(this._welcomeLabel);//add welcome label to the scene
        this.addChild(this._startButton);

        this._startButton.on("click",this._startButtonClick);
        }


    }
}