import React from "react";

const Card = (props) => {
    return ( <>
        <div class="card-group card-1 container text-center">
            <div class="card">
                <img src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">{props.text}</p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-primary">Find Out More!</a>
                    </div>
            </div>
        </div>
    </>
    );
};

export default Card;