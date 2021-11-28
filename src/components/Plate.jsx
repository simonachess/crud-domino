import Half from "./Half"

function Plate({ left, right }) {
    return (
        <div className="plate">
            <div className="left-half">
                <Half dots={left} />
            </div>
            <div className="right-half">
                <Half dots={right} />
            </div>
        </div>
    )
}

export default Plate