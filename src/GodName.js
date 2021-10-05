function GodName({god, describedGod}){
    return (
        <li onClick={()=>describedGod(god)}>
            {god.name}
        </li>

    )
}
export default GodName