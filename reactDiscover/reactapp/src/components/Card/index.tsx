import './style.css';

export type CardProps = {//criando tipagem com typescrit
    name: string;
    time: string;
}



export function Card(props: CardProps){
    return(
        <div className ="card">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}