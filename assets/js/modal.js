function Modal({ toggle, children }) {
    return <div className="content-modal flex f-align-center f-justify-center" onClick={() => toggle()}>
        <div className="modalWrapper">
            <span className="text-right block">
                <i onClick={() => toggle()} className="icon-close inline-block pointer">
                </i>
            </span>
            <div className="modal-container">

                {children}
            </div>
        </div>
        {/* <button onClick={() => toggle()}></button> */}
    </div>
}

export default Modal
