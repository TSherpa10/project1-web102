const Card = (props) => {
    return (
        <div className="cardDiv">
            <img src="" alt="" />
            <h2>{props.name}</h2>
            <h3>{props.pos}</h3>
        </div>
    );
};

export default Card;