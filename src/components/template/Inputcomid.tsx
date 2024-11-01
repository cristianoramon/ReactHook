import {  useId } from "react";
import Flex from "./Flex";

export default function Inputcomid(props:any) {
    const id = useId();
    return (
        <Flex center>
            <label  className="m-1" htmlFor={id}> {props.label} </label>
            <input  id={id} className=" m-2 text-gray-600 p-2 rounded-md"   type="text" />
        </Flex>
    );
}