import { createContext, useEffect, useState } from "react";

export const InventoryContext = createContext();

export const InventoryContextProvider = (props) => {
	const [inventory, setInventory] = useState([]);

	useEffect(() => {
		fetch(
			"https://api.airtable.com/v0/appXStaMbfaTVgA80/Products?api_key=keyIoKNUjCUZDPlZS"
		)
			.then((response) => response.json())
			.then((data) => {
				setInventory(
					data.records.map((product) => ({
						name: product.fields.Names,
						brand: product.fields.Brand,
						id: product.fields.ProductID,
						price: product.fields.Price,
						image: product.fields.Image[0].thumbnails.large.url,
						description: product.fields.Description,
						type: product.fields.Type,
						//database only includes featured property on some products and it is always equal to true
						featured: product.fields?.Featured || false,
					}))
				);
			});
	}, []);
	
	return <InventoryContext.Provider value={inventory} {...props} />;
};

