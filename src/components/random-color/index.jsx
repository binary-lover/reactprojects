import { useState } from 'react';
import './styles.css'

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#b6fcd0");

    function createRandomColor() {
        if (typeOfColor == "hex") {
            let str = "#";
            for (let int = 0; int < 6; int++) {
                let num = Math.floor(Math.random() * 16)
                str += num.toString(16);
            }
            setColor(str);
        }
        else if (typeOfColor == "rgb") {
            let R = Math.floor(Math.random() * 256)
            let G = Math.floor(Math.random() * 256)
            let B = Math.floor(Math.random() * 256)
            let str = `rgb(${R},${G},${B})`
            setColor(str);
        }
    }

    return (
        <div style={
            {   
                height: "50vh",
                backgroundColor: color,
            }
        }>
            <div className="buttons">
                <button onClick={() => {setTypeOfColor("hex");setColor("#ffffff")}}>Generate Hex color</button>

                <button onClick={() => {setTypeOfColor("rgb"); setColor("rgb(255,255,255)")}}>Generate RGB color</button>

                <button onClick={createRandomColor}>Generate Random Color</button>
                {
                    typeOfColor !== null ? <h1>Color: {typeOfColor.toUpperCase()}</h1> : null

                }
                {
                    color !== null ? <h2>{color}</h2> : null
                }
            </div>
        </div>
    );
};