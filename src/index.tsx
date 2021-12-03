import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";
import {Alert,AlertError,AlertExclam,AlertWarn} from "./alert";
import {LoadingOverlay} from "./loadingOverlay";

function focusFirstChild(div:HTMLElement)
{
    const io=false;
    if(!io) return;
    let qInput='input:not([type="hidden"]):not([style*="display:none"])';
    let qButton='button:not([type="hidden"]):not([style*="display:none"])';
    let elsa=div.querySelector(qInput);
    if(elsa)
    {        
        (elsa as any).focus();
        return;
    }
    elsa=div.querySelector(qButton);
    if(elsa){
        (elsa as any).focus();
    }
}

interface IModalProps {
    component:any
    props:any
}

function modal(props:IModalProps)
{    
    if(!props.component) return;

    let m=new Modal({});
    const div:HTMLElement=m.getDivContent() as HTMLElement;   
    if(!div) return;

    div.classList.add('modalOverlayForm');

    const onClose=function(e:React.MouseEvent){
        if(e) e.preventDefault();
        const po:any=props.props || {} as any;
        if(po && po.onClose && typeof po.onClose==="function")
        {
            try {
                po.onClose();
            }
            catch(error)
            {

            }
        }
        ReactDOM.unmountComponentAtNode(div);
        m.destroy();
    }        
    const Comp:any=props.component as any;
    ReactDOM.render(
        <Comp 
            {...props.props}
            onClose={onClose}
        />
        ,div,function()
        {
            m.open();
            focusFirstChild(div);
        }
    );
}

export {modal,Alert,AlertError,AlertWarn,AlertExclam,LoadingOverlay}