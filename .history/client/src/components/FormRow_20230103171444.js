const FormRow = ({type, name, value, id, }) =>{
    return (
        <div class="form-row">
            <label htmlFor="name" className="form-label">
                name
            </label>
            <input 
                type="text" 
                value ={values.name} 
                name="name" 
                onChange={handleChange}
                className ="form-input"
            />
        </div>
    );
}