function Modal({ toggle, children }) {
    return <div className="modalWrapper"><button onClick={() => toggle()}>{children}</button>

    </div>
}

export default Modal
