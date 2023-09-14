interface DeviceInt {
  device_id:string;
  name: string;
  key:string;
}

class Main implements EventListenerObject, GETResponseListener {

  api = new API();
  view = new ViewMainPage();
  devices:DeviceInt[];

  constructor(){
    
  }

  handleGETResponse(status:number, response:string):void {
    this.devices= JSON.parse(response);
    this.view.showDevices(this.devices,this);
  }

  main():void {
      this.api.requestGET("http://localhost:9291/device",this);
      document.getElementById("boton").addEventListener("click",this);

  }

  handleEvent(evt:Event):void{
	  
    let target = <HTMLElement>evt.target;
            
    if (target.id=="boton") {
      this.api.requestGET("http://localhost:9291/device",this);
      console.log("handling boton");
    }
   
  }
}

window.onload = function(){
    let main:Main = new Main();
    main.main()
};
