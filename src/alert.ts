import ModalNative from "./Modal";

function toStr(val:String|Number|null|undefined) { return (val === null || val === undefined) ? "" : val.toString(); }

type IAlertPropsObj = {
    title: string
    message: string
    buttons: IAlertButton[]
}

function getArrayStringArgums(argums:any){
    let list=[];
    if(argums && typeof argums==="object"){
        for(let p in argums){
            if(argums.hasOwnProperty(p)){
                let val=argums[p];
                if(typeof val==="string") list.push(val);
            }
        }
    }
    return list;
}

function getArrayFuncArgums(argums:any){
    let list=[];
    if(argums && typeof argums==="object"){
        for(let p in argums){
            if(argums.hasOwnProperty(p)){
                let val=argums[p];
                if(typeof val==="function") list.push(val);
            }
        }
    }
    return list;
}

function alertFromObject(params:any){
    params=params||{};
    let title=toStr(params.title);
    let message=toStr(params.message);
    if(!params.buttons){
        params.buttons=[];
    }

    if(params.buttons.length<1){
        params.buttons.push({
            label:'OK',
        })
    }

    let cModal=document.createElement('div');
    let cWrap=document.createElement('div');
    let cTitle=document.createElement('div');
    let cMessage=document.createElement('div');
    let cActions=document.createElement('div');

    cModal.className='modalAlert';
    cWrap.className='wrap';
    cTitle.className='windowTitle';
    cMessage.className='windowContent';
    cActions.className='windowAction';

    cTitle.innerHTML=title;
    cMessage.innerHTML=message;

    const modObj = new ModalNative({});

    const hButton=function(label:string,clsN:string,index:number){
        let but=<HTMLButtonElement>document.createElement('button');
        but.innerHTML=label;
        but.className=toStr(clsN);
        but.addEventListener("click",function(){
            //console.log("close yout message");
            modObj.destroy();
            const func=params.buttons && Array.isArray(params.buttons) && params.buttons[index] && params.buttons[index].callback;
            if(func && typeof func==="function") func();
        });
        cActions.appendChild(but);
    };
    //each button
    for(let i=0; i<params.buttons.length; i++){
        hButton(params.buttons[i].label,params.buttons[i].className,i);
    }

    cModal.appendChild(cWrap);
    cWrap.appendChild(cTitle);
    cWrap.appendChild(cMessage);
    cWrap.appendChild(cActions);
    const div=modObj.getDivContent();
    if(div)
    {
        div.appendChild(cModal); 
    }
    return modObj;
}

function alertExplodeCalle(...args:any[])
{
    let listStr=getArrayStringArgums(args);
    if(listStr.length<1) return;

    let listFunc=getArrayFuncArgums(args);

    let title=listStr[0]||"";
    let message=listStr[1]||"";
    let buttonYes=toStr(listStr[2]);
    let buttonNo=toStr(listStr[3]);

    let funcYes=listFunc[0];
    let funcNo=listFunc[1];

    let buts:Array<any>=[];

    const pushLabel=(str?:string,cb?:any,classN?:string)=>{
        if(toStr(str).length<1) return;

        buts.push({
            label:str,
            callback:cb,
            className:classN
        });
    };

    if(buttonYes.length>0 && buttonNo.length>0){
        pushLabel(buttonYes,listFunc[0],'btn btn-primary');
        pushLabel(buttonNo,listFunc[1],'btn btn-danger');
    }
    else{
        let strb=buttonYes.length>0?buttonYes:buttonNo;
        let func=(funcYes && typeof funcYes==="function")?funcYes:funcNo;
        pushLabel(strb,func,'btn btn-primary');
    }

    return {
        title:title,
        message:message,
        buttons:buts
    }
}

function alertFromCalle(...args:any[])
{
    let props=alertExplodeCalle.apply(null,args);
    if(props)
    {
       return alertFromObject(props);
    }
}

function focusChild(modObj:any){
    if(!modObj) return;
    const div=modObj.getDivContent();
    if(!div) return;
    let el=div.getElementsByTagName('button');
    if(el){
        el=el.length>0?el[0]:el;
        if(el) el.focus();
    }
}

type IAlertButton = {
    label:string
    callback?:(e:Event)=>void
    className?:string
}

type IAlertCb = (e:Event)=>void;

//const IAlerPropsFunc=(title:string,message:string,f?:string|IAlertCb,...args:any[]);

function goAlert(...args:any[])
{
    if (args.length<1) return;
    const satu=args[0];
    let modObj: ModalNative | undefined | any;
    if(typeof satu==="object") modObj=alertFromObject(satu);
    else modObj=alertFromCalle.apply(null,args); 
    return modObj;
}


function Alert(title:string,message:string,p?:string|IAlertCb,...args:any[]):void;
function Alert(props:IAlertPropsObj):void;
function Alert(...args:any):void
{
    let modObj: ModalNative | undefined | any;
    modObj=goAlert.apply(null,args) ;
   if(modObj){
        setTimeout(function(){
            modObj.open();
            focusChild(modObj);
        },10);
    }
}


function AlertWarn(title:string,message:string,p:string|IAlertCb,...args:any[]):void;
function AlertWarn(props:IAlertPropsObj):void;
function AlertWarn(...args:any[])
{
   let modObj: ModalNative | undefined | any;
   modObj=goAlert.apply(null,args);
   if(modObj)
   {
       modObj.getDivContent().classList.add('warning');
       setTimeout(function(){
            modObj.open();
            focusChild(modObj);
       },10);
    }
}


function AlertError(title:string,message:string,p:string|IAlertCb,...args:any[]):void;
function AlertError(props:IAlertPropsObj):void;
function AlertError(...args:any[])
{
   let modObj: ModalNative | undefined | any;
   modObj=goAlert.apply(null,args) ;
   if(modObj)
   {
       modObj.getDivContent().classList.add('error');
       setTimeout(function(){
            modObj.open();
            focusChild(modObj);
       },10);
    }
}


function AlertExclam(title:string,message:string,p:string|IAlertCb,...args:any[]):void;
function AlertExclam(props:IAlertPropsObj):void;
function AlertExclam(...args:any[])
{
    let modObj: ModalNative | undefined | any;
    if(args.length<1) return;
    let props=args[0];
    if(typeof props!=='object')
    {
        //get explode calle
        props=alertExplodeCalle.apply(null,args);
    }
    if(typeof props!=='object') return;

    if(!props.message){
        props.message='';
    }

    let str:string='<div style="display:flex; gap:2rem;">';
    str+=`<div style="display:flex; align-items:start; justify-items:center"><svg stroke="#B91C1C" fill="#B91C1C" stroke-width="0" viewBox="0 0 16 16" width="1em" height="1em" style="width:48px; height:auto; margin:0 auto;">`;
    str +=`<path fill-rule="evenodd" clip-rule="evendodd" d="M7.938 2.016a.146.146 0 00-.054.057L1.027 13.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 00.066-.017.163.163 0 00.055-.06.176.176 0 00-.003-.183L8.12 2.073a.146.146 0 00-.054-.057A.13.13 0 008.002 2a.13.13 0 00-.064.016zm1.044-.45a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"></path>`;
    str+=`<path d="M7.002 12a1 1 0 112 0 1 1 0 01-2 0zM7.1 5.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 5.995z"></path>`;
    str+=`</svg></div>`;
    str+='<div>'+props.message+"</div>";
    str+="</div>";
    
    props.message=str;
    modObj=alertFromObject(props);
    if(modObj)
    {
        setTimeout(function () {
            modObj.open();
            focusChild(modObj);
        }, 10);        
    }
}

export {Alert,AlertWarn,AlertError,AlertExclam}