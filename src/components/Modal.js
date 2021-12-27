import ReactDom, { createPortal } from 'react-dom'
import './Modal.css'

export default function Modal({children, isSalesModal}) {

    return ReactDom.createPortal((
        <div className="modal-backdrop">
            <div className="modal" style={{
                border: "2px solid",
                borderColor: "crimson",
                textAlign: "center"
                }}>
                {children}
            </div>
        </div>
    ), document.body)
}
