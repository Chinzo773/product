

export default function CategoryOption(props){
    const categ = props.category



    return (
        <option value={categ}>
            {categ}
        </option>
    )
}
