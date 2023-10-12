import React from 'react';
import "./descriptonWidgets.css";
import {FaArrowDown} from "react-icons/fa";
const DescriptionWidgets = () => {
    return (
        <div className='section section_descriptionWidgets'>

            {/*начало item*/}
            <div className='card'>
                <div className='description_card_item'>
                    <FaArrowDown/>
                    <small>min</small>
                </div>
                <h2>18 °C</h2>
            </div>
            {/*конец*/}
            <div className='card'>
                <div className='description_card_item'>
                    <FaArrowDown/>
                    <small>min</small>
                </div>
                <h2>18 °C</h2>
            </div>
            <div className='card'>
                <div className='description_card_item'>
                    <FaArrowDown/>
                    <small>min</small>
                </div>
                <h2>18 °C</h2>
            </div>
        </div>
    );
};

export default DescriptionWidgets;