import { useContext } from "react";
import { AppContext } from "./AppContext";
import Parent from "./Parent";

function HomeContent() {
    const { user } = useContext(AppContext);
    return (
        <div
            style={{
                marginTop: "20px"
            }}
        >
            <h2>Props Drilling Example</h2>
            <Parent user={user} />
        </div>
    )
}

export default HomeContent