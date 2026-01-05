import Mission2_Counter from "./practices/Mission2_Counter";
import Mission3_List from "./practices/Mission3_List"

export default function App() {
    return (
        <div>
            <h1>My React Practice Room</h1>
            <hr />
            {/* 자바의 new Mission2_Counter().render() 같은 느낌 입니다 */}
            <Mission3_List />
        </div>
    )
}