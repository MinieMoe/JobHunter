import { useAppContext } from "../context/appContext"

const Alert = () => {
    const {alertType, alertText} = useAppContext()
    return(
        <div className="alert alert-${">alert goes hear</div>
    )
}

export default Alert