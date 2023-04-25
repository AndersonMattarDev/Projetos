import './style.css';

type CardProps = {//criando tipagem com typescrit
    name: string;
    time: string;
}

type className = {
    name: string;
}


export function Card(props: CardProps){
    return(
        <div className ="card">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}