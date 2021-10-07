export default function Button({button, favoriteButton}){
    
        return (
    <button onClick={favoriteButton}>
        {button?"♥️":"♡"}
    </button>)
}