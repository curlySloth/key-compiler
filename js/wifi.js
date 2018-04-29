(function() {
  'use strict';
  var wifiNameInput = document.querySelector('[data-wifi-name]');
  var wifiPasswordInput = document.querySelector('[data-wifi-password]') ;
  var wifiSaveBtn = document.querySelector('[data-wifi-save-btn]');
  var wifiTable = document.querySelector('[data-wifi-table]');
  var wifiTypeInputs = document.querySelectorAll('[name="wifi-type"]');
  var wifiAlertBox = document.querySelector('.wifi-alert');


  function saveWifi(){
    if(wifiNameInput.value && wifiPasswordInput.value){
      //if both name and password got value
      var type = wifiTypeInputs[0].checked ?'WEP': wifiTypeInputs[1].checked?'WPA': 'WPA2' ;
      wifiTable.innerHTML += "<tr><td>"+wifiNameInput.value+"</td><td>"+wifiPasswordInput.value+"</td><td>"+type+"</td></tr>";
      wifiNameInput.value=null;
      wifiPasswordInput.value=null;
      wifiAlertBox.className = "";
      wifiAlertBox.innerText = "";
    }else{
      // if name Or password are empty
      wifiAlertBox.className = "invalid";
      wifiAlertBox.innerText = "wifi name or password missing";
    }
  }


  wifiSaveBtn.addEventListener('click',saveWifi);

  wifiNameInput.addEventListener('keydown',function(e){

  if(e.keyCode == 13){
    wifiSaveBtn.click();
  }
  });

  wifiPasswordInput.addEventListener('keydown',function(e){

  if(e.keyCode == 13){
    wifiSaveBtn.click();
  }
  });


  for(var i = 0; i < wifiTypeInputs.length;i++){
    wifiTypeInputs[i].addEventListener('keydown',function(e){
      if(e.keyCode == 13){
        wifiSaveBtn.click();
      }
    });
  }
  
}());
