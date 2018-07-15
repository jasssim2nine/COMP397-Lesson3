/// <reference path = "_references.ts"/>

// IIFE - Immediately Invoked Function Expression

(function(){
     

    //Game variables

    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:objects.Label;
    let clickMeButton: objects.Button;
    let assetManager : createjs.LoadQueue;
    let assetManifest: any[];
    let currentScene : number;

    assetManifest = [
        {id: "clickMeButton", src:"./Assets/images/click_here_button.png"}
        ];
        //preloads assets
    function Init():void{
        console.log("Initialization Started");
        assetManager = new createjs.LoadQueue();//creates the asset manager object
        assetManager.installPlugin(createjs.Sound);//asset manager can also load sounds
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete",Start, this);
            
    }

    function Start():void{
        console.log("Starting Application....");

        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // turn this on for buttons
        createjs.Ticker.framerate = 60; //60 FPS
        createjs.Ticker.on("tick", Update);
        objects.Game.currentScene = config.Scene.START;
        Main();
        
    }
    
    function Update():void
    {
        //if the scene that is playing returns another scene 
        //then call main again
       
        stage.update();
    }
    


   

    
    function Main():void{
        switch(objects.Game.currentScene){
            case config.Scene.START:
            //remove all current objects
            //instantiate a new scene object
            //add the new scene object to stage
            break;
            case config.Scene.PLAY:
            //game play
            break;
            case config.Scene.OVER:
            //game over scene
            break;
        }


    }

    window.onload = Init;

})();