import {
    zIndexGet,zIndexNext,
    modalBodyClassName,
    modalOverlayClassName,
    modalWindowClassName,
    zIndexPrev,
    openBodyCheckRegister,
} from "./ops";

function reorderActiveElement()
{
    const elsa = document.body.querySelectorAll('.'+modalOverlayClassName);
    if (elsa.length > 0) {
        for (let i = 0; i < elsa.length-1; i++) {
            elsa[i].classList.remove('active');           
        }
        elsa[elsa.length-1].classList.add('active');
    }
}

class Modal
{
    protected uid:string;
    protected divOverlay_:HTMLElement | null | undefined;
    protected divModal_:HTMLElement | null | undefined;
    protected zIndex:number;

    constructor(props:any)
    {
        this.divOverlay_=null;
        this.divModal_=null;
        this.zIndex=0;      
        this.uid='';
        this.createElements();         
    }

    protected createElements()
    {
        if(this.divModal_ || this.divOverlay_) return;

        zIndexNext();
        this.zIndex=zIndexGet();
        zIndexNext(); // for div modal
        this.divOverlay_=document.createElement('div');
        this.divOverlay_.className=modalOverlayClassName;
        this.divOverlay_.style.zIndex=this.zIndex.toString();        

        this.divModal_=document.createElement('div');
        this.divModal_.className=modalWindowClassName;
        this.divModal_.style.zIndex=(this.zIndex+1).toString();
        document.body.appendChild(this.divOverlay_);
        document.body.appendChild(this.divModal_);
    }

    protected openRegiter()
    {
        if(this.divOverlay_) this.divOverlay_.classList.add('open');
        if(this.divModal_) {
            this.divModal_.classList.add('open');            
        }
    }

    protected openUnRegister()
    {
        if(this.divModal_) this.divModal_.classList.remove('open');
        if(this.divOverlay_) this.divOverlay_.classList.remove('open');
    }

    getDivOverlay()
    {
        return this.divOverlay_;
    }

    getDivContent()
    {
        return this.divModal_;
    }

    open()
    {        
        this.openRegiter();
        openBodyCheckRegister();
        reorderActiveElement();
    }

    close()
    {
        this.openUnRegister();
        openBodyCheckRegister();
        reorderActiveElement();
    }

    destroy()
    {
        this.openUnRegister();
        openBodyCheckRegister();
        if(this.divModal_)
        {
            this.divModal_.parentNode?.removeChild(this.divModal_);
        }
        if(this.divOverlay_)
        {
            this.divOverlay_.parentNode?.removeChild(this.divOverlay_);
        }   
        reorderActiveElement();     
    }
}

export default Modal;