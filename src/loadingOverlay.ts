import { zIndexGet, zIndexNext } from "./ops";

let localIdOverlay=0;
export const overlayLoadingClass="loadingContainer";

function toStr(val:string | number | null | undefined) { return (val === null || val === undefined) ? "" : val.toString(); }

function svgIng(element:HTMLElement,wh:number=50,fillColor:string='#007BFF'){
    let widthHeight=wh || 50;
    let viewBox="0 0 "+widthHeight+" "+widthHeight;
    let fill = fillColor ||'#007BFF';
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="` + widthHeight + `" height="` + widthHeight +`" viewBox="`+viewBox+`">
                <path fill="`+fill+`" d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z">
                    <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.5s" repeatCount="indefinite" />
                </path>
               svg>`;
    element.innerHTML=svg;
}

function elementsCreate(this:any)
{
    localIdOverlay++;  
    const id=localIdOverlay;
    this.div_=document.createElement('div');
    this.div_.id=overlayLoadingClass+id;
    this.div_.className=overlayLoadingClass;
    this.wrapper_=document.createElement("div");
    this.wrapper_.className='wrapper';
    this.image_=document.createElement('div');
    this.image_.className='image';
    svgIng(this.image_);

    this.wrapper_.appendChild(this.image_);
    this.div_.appendChild(this.wrapper_);

    document.body.appendChild(this.div_);
}

interface ILOvProps 
{
    clickClose?:boolean
    text?:string
    onClick?:(e:MouseEvent)=>void
}

const defaultOps:ILOvProps={
    clickClose:true,
    text:'Loading,..'
};

class LoadingOverlay<P extends ILOvProps> 
{
    protected _ops:ILOvProps;
    protected div_:HTMLElement | undefined;
    protected wrapper_:HTMLElement | undefined;
    protected image_:HTMLElement | undefined
    protected text_:HTMLElement | undefined;
    protected zIndex:number;

    constructor(props:P)
    {
        this._ops={...defaultOps,...props};
        this.applyText=this.applyText.bind(this);
        this.divClicked=this.divClicked.bind(this); 
        zIndexNext();
        this.zIndex=zIndexGet();       
    }

    divClicked(e?:MouseEvent){        
        if(e) {
            e.preventDefault();            
        }
        if(typeof this._ops.onClick==="function")
        {
            try
            {
                this._ops.onClick(e as MouseEvent);
            }
            catch(error)
            {

            }
        }
        let clickClose=true;
        if(this._ops.clickClose!==undefined)
        {
            clickClose=this._ops.clickClose;
        }

        if(clickClose)
        {
            this.close();
            this.destroy();            
        }
    }


    applyText()
    {
        if(!this.div_) return;

        let text=toStr(this._ops.text);
        if(text.length>0)
        {
            if(!this.text_)
            {
                this.text_=document.createElement('div');  
                this.wrapper_?.appendChild(this.text_);
            }
            this.text_.className='text';
            this.text_.innerHTML=text;
        }
        else {
            if(this.text_)
            {
                this.text_.parentNode?.removeChild(this.text_);
                this.text_=undefined;
            }
        }
    }

    open()
    {
        if(!this.div_)
        {
            elementsCreate.call(this);
            if(this.div_)
            {
                (this.div_ as HTMLElement).addEventListener("click",this.divClicked); 
            }
        }

        if(this.div_) 
        {
            this.applyText();
            this.div_.classList.add('open');
            this.div_.style.zIndex=this.zIndex.toString();
        }
    }

    close()
    {
        if(!this.div_) return;
        this.div_.classList.remove('open');
        this.div_.style.zIndex="";
    }

    setText(text:string)
    {
        this._ops.text=text;
        this.applyText();
    }

    destroy()
    {
        if(this.text_)
        {
            this.text_.parentNode?.removeChild(this.text_);
            this.text_=undefined;
        }
        if(this.image_){
            this.image_.parentNode?.removeChild(this.image_);
            this.image_=undefined;
        }
        if(this.wrapper_)
        {
            this.wrapper_.parentNode?.removeChild(this.wrapper_);
            this.wrapper_=undefined;
        }
        if(this.div_)
        {            `                                                                                                               `
            this.div_.parentNode?.removeChild(this.div_);
            this.div_=undefined;
        }
    }
}

export {LoadingOverlay}