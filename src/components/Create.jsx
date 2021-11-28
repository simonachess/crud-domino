import Plate from "./Plate";

function Create() {
    return (
        <div className="domino__create">
            <div className="domino__create_domino">
                <Plate left={3} right={4} />
            </div>
            <div className="domino__create_selects">
                <select>
                    <options value="0">0</options>
                    <options value="1">1</options>
                    <options value="2">2</options>
                    <options value="3">3</options>
                    <options value="4">4</options>
                    <options value="5">5</options>
                    <options value="6">6</options>
                </select>
                <select>
                    <options value="0">0</options>
                    <options value="1">1</options>
                    <options value="2">2</options>
                    <options value="3">3</options>
                    <options value="4">4</options>
                    <options value="5">5</options>
                    <options value="6">6</options>
                </select>
            </div>
        </div>
    );
}

export default Create;