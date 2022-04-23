import React from "react";

function Main({ data }) {
  return (
		<div className="MainContainer">
			{
				(data.map((item, index) => (
					<div key ={index} className="card">
						<img className="card_img" src={item.picture.large} alt={item.name.first} />
						<div className="card_info">
							<div className="card_title">{item.name.first} {item.name.last}</div>
							<p className="title">{item.cell}</p>
							<p>{item.email}</p>
						</div>
					</div>
				)))
			}
		</div> 
	)
}

export default Main;
