import React, { useState, useEffect } from 'react';
import axios from 'axios'

interface Item {
    id: string,
    name: string,
    price: string,
}

const Items = () => {
	const [itemsList, setItemsList] = useState<Item[]>([]);

    const fetchItems = async () => {
        const res = await axios.get('https://7anji61n29.execute-api.eu-west-2.amazonaws.com/items')
        // console.log(res.data.Items);
        setItemsList(res.data.Items)
    }

	useEffect(() => {
		
		fetchItems();
	}, []);

	return (
		<>
			{console.log(itemsList)}
			<div>Items Component</div>
            {itemsList.length > 0 ? itemsList.map((item) => <p key={item.id}>{item.name}</p>): 'Loading...'}
		</>
	);
};

export default Items;
