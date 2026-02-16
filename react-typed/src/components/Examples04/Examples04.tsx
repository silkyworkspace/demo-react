import { ReactTyped } from "react-typed";
import { Input } from "antd";

export default function Examples04() {
    return (
        <div>
            <ReactTyped
                parseRef={(ref) => ref.current.input}
                attr="placeholder"
                strings={["Add a name here"]}
                typeSpeed={40} >
                <Input />
            </ReactTyped>
        </div>
    )
}
