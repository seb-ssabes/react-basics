import avatar from "./user1.png"

export default function Header(props) {

    return (
        <header>
            <img src={avatar} />
            <p>{props.userName}</p>
        </header>
    )
}
