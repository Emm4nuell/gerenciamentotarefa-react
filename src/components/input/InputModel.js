import "./InputModel.modules.css"

export function InputModel({type, onChanger, name, value, required, placeholder, htmlFor}){
    return(
        <div className="div_input">
            <input type={type} onChange={onChanger} name={name} value={value} placeholder={placeholder} required={required}/>
            <label htmlFor={htmlFor}>{htmlFor}</label>
        </div>
    )
}

export function ButtonModel({name, type, onClick, className}){
    return(
            <button className={className} onClick={onClick} type={type}>{name}</button>
    )
}

export function ButtonLink({href, name, className}){
    return(
        <a className={className} href={href} >{name}</a>
    )
}