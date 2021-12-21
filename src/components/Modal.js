import React from "react";
import Card from './Card'

function Modal(props){


    function HideModal(e){

        let target = e.target
        if(target.id === 'modal'){
            
            props.onHideModal()}

    }

    return(
        <div id="modal" onClick={HideModal} className={props.show? "modal" : "modal hide"}>
            <Card className="cardModal">
                {props.children}
            </Card>

        </div>
    )
}

export default Modal