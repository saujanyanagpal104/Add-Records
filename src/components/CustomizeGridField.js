import React, {useState} from 'react';
import {isDuplicateAvailable} from '../helpers/checkDuplicateObject';

const CustomizeGridField = ({text, dataTag, index, gridTabs, setGridTabs}) => {
    const [selectedField, setSelectedField] = useState(false);

    const handleClick = (e) => {
        const isDuplicate = isDuplicateAvailable(gridTabs, 'text', e.target.textContent);
        if(gridTabs.length < 5 && isDuplicate === false) {
            setSelectedField(!selectedField);
            setGridTabs([...gridTabs, {text: e.target.textContent, dataTag: e.target.dataset.tag, default: true}])
        } else {
            gridTabs.splice(index, 1);
            setGridTabs(gridTabs);
            setSelectedField(false);
        }

    }

    return (
        <span data-tag={dataTag} className={`customize-grid-field ${selectedField ? 'selected-field' : ''}`} onClick={handleClick}>{text}</span>
    )
}

export default CustomizeGridField;