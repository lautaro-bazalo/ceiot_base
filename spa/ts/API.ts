interface GETResponseListener {
  handleGETResponse(status:number, response:string): void;
}

class API{

  requestGET(url:string, listener: GETResponseListener):void {
    let xhr:XMLHttpRequest = new XMLHttpRequest();
    xhr.setRequestHeader("Access-Control-Allow-Origin","*")
    xhr.onreadystatechange = function() {
      if(xhr.readyState == XMLHttpRequest.DONE) {
        if(xhr.status == 200) {
          listener.handleGETResponse(xhr.status,xhr.responseText);
        } else {
          listener.handleGETResponse(xhr.status,null);
        }
      }
    };
    xhr.open('GET', url, true);
    xhr.send(null);
  }
}
