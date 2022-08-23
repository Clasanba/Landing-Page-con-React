import React from "react";

const Card = (props) => {
    return ( <>
        <div className="card-group card-1 text-center">
            <div className="card">
                <img src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">{props.text}</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
            </div>
        </div>
    </>
    );
};

export default Card;