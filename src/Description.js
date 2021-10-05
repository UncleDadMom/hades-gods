function GodDescription({featuredGod}){
    return (
        <div>
            <h2>{featuredGod.name}</h2>
            <h3>{featuredGod.title}</h3>
            <img src={featuredGod.image}/>
            {featuredGod.description}
            <button>♥️</button>
        </div>
    )
}
export default GodDescription