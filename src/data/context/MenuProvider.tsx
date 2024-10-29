import React, { useState } from "react";

const ContextoMenu = React.createContext({});
export function MenuProvider(props: any) {
    const [menu, setMenu] = useState(false);
    return (
        <ContextoMenu.Provider value={{ menu, setMenu }}>
            {props.children}
        </ContextoMenu.Provider>
    )
}
export default ContextoMenu;