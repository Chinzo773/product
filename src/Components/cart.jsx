export default function Cart(props){
    const images = props.images[0]
    const title = props.title
    const price = props.price
    const description = props.description
    const id = props.id
    const category = props.category

    return (
        <div className="cart_style">
            <div>
                <img src={images} className="images"/>
            </div>
            <div>
                <p>{category}</p>
                <p>{id}</p>
                <p>{title}</p>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}
