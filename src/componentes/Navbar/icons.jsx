import React from "react";
import { Link } from "react-router-dom";

function Icons() {
    return (
        <Link to="/CalendarioSemanal">
            <img
                style={{ width: '25px', height: '25px', marginRight: "10px", marginLeft: "30px"}}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_Szq9-HwPlm_vlpEc_2M5UtCxIRwJTCBfg&usqp=CAU"
                alt=""
            />
        </Link>
    );
}

export default Icons;

