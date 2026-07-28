import { useEffect, useState } from "react";

function useFetch(url) {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        async function fetchData() {

            try {

                const response = await fetch(url);

                const result = await response.json();

                setData(result);

            }

            catch {

                setError("Unable to fetch employee data.");

            }

            finally {

                setLoading(false);

            }

        }

        fetchData();

    }, [url]);

    return {

        data,

        loading,

        error

    };

}

export default useFetch;