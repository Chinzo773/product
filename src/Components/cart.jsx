export default function Cart(props){
    const images = props.images
    const title = props.title
    const price = props.price
    const description = props.description

    return (
        <div className="cart_style">
            <div>
                <img src={images} style={{width:'300px'}}/>
            </div>
            <div>
                <p>{title}</p>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}