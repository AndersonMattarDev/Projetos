import styles from './Textarea.module.css'

function Textarea({type, text, name, placeholder, onChange, value}) {
    return( 
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}:</label>
        <textarea 
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder} 
        onChange={onChange}
        value={value} 
        />
    </div>
    )
}

export default Textarea;