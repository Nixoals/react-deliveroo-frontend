const RestaurantTitle = (props) => {
	const { name, description, picture } = props.data;
	return (
		<>
			<section className="restaurant-title">
				<div className="restaurant-info">
					<h1>{name}</h1>
					<p>{description}</p>
				</div>
				<div className="restaurant-picture">
					<img src={picture} alt="restaurant "></img>
				</div>
			</section>
		</>
	);
};

export default RestaurantTitle;
