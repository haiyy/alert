const Alert=function(opt){
   this.tit=opt.title;
   this.btnbox=opt.btnbox;
   this.init();
}
Alert.prototype={
    constructor:Alert,
    init:function(){
       var mark=document.createElement('div');
       mark.classList.add('mark');
       var alertbox=document.createElement('div');
       alertbox.classList.add('alertbox');
       mark.appendChild(alertbox);
       var h2=document.createElement('h2');
       h2.classList.add('h2');
       h2.innerHTML=this.tit;
       alertbox.appendChild(h2);
       for(let i=0; i<this.btnbox.length;i++){
          var button=document.createElement('button');
          button.classList.add('button'+i);
          alertbox.appendChild(button);
          button.innerHTML=this.btnbox[i];
       }
       document.body.appendChild(mark);
       var btn=alertbox.querySelectorAll('button');
       btn[0].onclick=function(){
         document.body.removeChild(mark);
       }
       btn[1].onclick=function(){
         document.body.removeChild(mark);
       }
    }
}