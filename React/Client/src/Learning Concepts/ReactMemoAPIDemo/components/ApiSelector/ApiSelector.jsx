// src/components/ApiSelector/ApiSelector.jsx

import { API_CLIENT } from "../../constants";
import "./ApiSelector.css";

function ApiSelector({
  apiClient,
  setApiClient,
}) {
  return (
    <div className="api-selector">

      <h3>Select API Client</h3>

      <label>
        <input
          type="radio"
          name="apiClient"
          value={API_CLIENT.AXIOS}
          checked={apiClient === API_CLIENT.AXIOS}
          onChange={(e) =>
            setApiClient(e.target.value)
          }
        />

        Axios
      </label>

      <label>
        <input
          type="radio"
          name="apiClient"
          value={API_CLIENT.FETCH}
          checked={apiClient === API_CLIENT.FETCH}
          onChange={(e) =>
            setApiClient(e.target.value)
          }
        />

        Fetch
      </label>

    </div>
  );
}

export default ApiSelector;