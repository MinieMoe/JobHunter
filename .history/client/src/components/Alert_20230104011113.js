import { useAppContext } from "../context/appContext"

const Alert = () => {
    const {} = useAppContext()
    return(
        <div className="alert alert-danger">alert goes hear</div>
    )
}

export default Alert