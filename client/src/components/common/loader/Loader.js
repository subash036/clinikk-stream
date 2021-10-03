import "./loader.scss"
export default function Loader() {
    return (<div className="loader">
        <div className="table-container">
            <div className="table-cell">
                <div className="lds-ripple"><div></div><div></div></div>
            </div>
        </div>
    </div>)
}