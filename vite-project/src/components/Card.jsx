const Card = (props) => {
    return (
        <div className="cardDiv">
            <img className="cardDivImg" src={props.img} alt="" />
            <h2>{props.name}</h2>
            <h3>{props.info}</h3>
            <a href={props.link}><button>Find out more</button></a>
        </div>
    );
};

export default Card;