import useWindowSize from "../hooks/useWindowSize";

function ScreenSize() {

    const width = useWindowSize();

    return (

        <div className="card">

            <h2>Screen Information</h2>

            <h3>{width}px</h3>

            <p>

                {

                    width > 768

                        ? "Desktop View"

                        : "Mobile View"

                }

            </p>

        </div>

    );

}

export default ScreenSize;