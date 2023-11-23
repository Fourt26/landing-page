import logo from "../logo.svg";

function Cards(props) {
  return (
    <div className="card container-fluid" style={{ width: "18rem" }}>
      <img
        src={props.image || logo}
        className="card-img-top border border-subtle-dark"
        style={{ height: "150px" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text pb-2">{props.text}</p>
        <a href={props.url} className="btn btn-primary mt-2">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Cards;
