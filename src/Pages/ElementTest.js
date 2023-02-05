import {useEffect, useState} from "react";


function ElementTest() {


    return (
        <div>
            <h1>Eléments test</h1>
            <div className="button green">
                <div className="logo add"></div>
                <div className="texte">Confirmer</div>
            </div>

            <br/>

            <div className="button green">
                <div className="logo modify"></div>
                <div className="texte">bonjour tout le monde</div>
            </div>

            <div className="button red">
                <div className="logo delete"></div>
                <div className="texte">Supprimer</div>
            </div>

        </div>


    )

}

export default ElementTest