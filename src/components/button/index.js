function AlertButton({message, children}){
    return(
        <button className="btn btn-primary" onClick={() => alert(message)}>{children}</button>
    );
}

export default AlertButton;