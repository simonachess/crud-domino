import Plate from "./Plate";

function Bag({ plates }) {


    return (
        <div className="domino__bag">
            {
                plates.map((p, i) => {
                    return (
                        <Plate key={i} plates={p} />
                    )
                })
            }
        </div>
    )
}

export default Bag;