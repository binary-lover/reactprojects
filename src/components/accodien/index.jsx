import { useState } from "react";
import data from "./data";
import './styles.css';


export default function Accordion() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);


    function singleSelection(getCurId) {
        setSelected(getCurId === selected ? null : getCurId)
    }

    function multiSelection(getCurId) {
        let cpmultiple = [...multiple]
        const findIndexOfCurrId = cpmultiple.indexOf(getCurId);
        
        console.log(findIndexOfCurrId);
        if (findIndexOfCurrId === -1) cpmultiple.push(getCurId)
        else cpmultiple.splice(findIndexOfCurrId, 1);

        setMultiple(cpmultiple);
    }

    console.log(selected, multiple);
    return (<div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multiple Selection</button>
        <div className="accordion">
            {
                data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div onClick={
                            enableMultiSelection ?
                                () => multiSelection(dataItem.id) :
                                () => singleSelection(dataItem.id)
                        }
                            className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItem.id || (enableMultiSelection && multiple.indexOf(dataItem.id) !== -1)  ?
                                <div className="content">
                                    {dataItem.answer}
                                </div>
                                : null
                        }
                    </div>)
                    : <div>No data found</div>
            }
        </div>
    </div>);
}
