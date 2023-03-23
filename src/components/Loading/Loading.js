import "./Loading.scss"
import Taiji from "../../assets/images/taiji2.svg"
import Quotes from "../../assets/quotes.json"

const Loading = () => {
    // console.log(Quotes.length)
    const rnd = Math.floor(Math.random() * (Quotes.length))
    // console.log(Quotes[rnd])
    return (
        <div className="loading-page">
            <img src={Taiji} />
            <h1>{Quotes[rnd]['Content']}</h1>
            <h2>---{Quotes[rnd]['Author']}</h2>
        </div>
    )
}

export default Loading;