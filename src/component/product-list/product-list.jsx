export const ProductList = () => {
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ];

    //now we wana convert array of object to array of li..we will use map here.

    const listItems = products.map((products)=>{    // array of LI's.
        return (<li key={products.id}>{products.title}</li>);        //yanha bhi jsx return ho rha ha...
    })                                                       //key is for uniquness.. (key prop).

    return (
        <ul>{listItems}</ul>
        
    )


}