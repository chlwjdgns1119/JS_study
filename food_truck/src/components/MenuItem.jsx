const MenuItem = ({ items }) => {

    const keys = Object.keys(items);

    const data = keys.map((key) => 
        (<li key={key}><a href={items[key]}>{key}</a></li>)
    )

    return(
        data
    );
};

export default MenuItem;