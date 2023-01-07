const FormRow = ({type, name, value, handleChange, labelText }) =>{
    return (
        <div class="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>
            <input 
                type={type}
                value ={values.name} 
                name="name" 
                onChange={handleChange}
                className ="form-input"
            />
        </div>
    );
}