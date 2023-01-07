import { useAppContext } from "../context/appContext"

const Alert = () => {
    const {alertType, alertText} = useAppContext()
    return(
        <div className="alert alert-danger">alert goes hear</div>
    )
}

export default Alert