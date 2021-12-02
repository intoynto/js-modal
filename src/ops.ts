let localStartZIndex=9999;
let localZIndex=9999;
let localDivCount=0;
let localOpen=0;

function divCountNext(){ localDivCount++; }
function divCountPrev(){ localDivCount--;}

export function zIndexNext(){ localZIndex++; }
export function zIndexPrev() { localZIndex--;}
export function zIndexGet():number { return localZIndex; }

export const modalOverlayClassName="modalOverlay";
export const modalWindowClassName="modalContainer";
export const modalBodyClassName="modalEnabled";

export function hasClass(element:HTMLElement, className:string) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

export function openBodyCheckRegister()
{
    const elsa=document.querySelectorAll(`.${modalOverlayClassName}.open`);
    if(elsa.length>0)
    {
        document.body.classList.add(modalBodyClassName);
        return;
    }
    document.body.classList.remove(modalBodyClassName);
}