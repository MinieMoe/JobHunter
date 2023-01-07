const FormRow = ({}) =>{
    return (
        <label htmlFor="name" className="form-label">
                    name
                </label>
                <input 
                    type="text" 
                    value ={values.name} 
                    name="name" 
                    id="name"
                    onChange={handleChange}
                    className ="form-input"
                />
    );
}