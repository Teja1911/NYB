import { useState } from "react";
import useTheme from "../hooks/useTheme";
import WithAuth from "../hoc/WithAuth";

function Settings() {

    const {

        theme,

        toggleTheme

    } = useTheme();

    const [

        notifications,

        setNotifications

    ] = useState(true);

    const [

        emailAlerts,

        setEmailAlerts

    ] = useState(false);

    const [

        language,

        setLanguage

    ] = useState("English");

    return (

        <div className={`settings ${theme}`}>

            <h1>

                Application Settings

            </h1>

            <div className="setting-card">

                <h3>

                    Theme

                </h3>

                <button

                    type="button"

                    className="theme-btn"

                    onClick={toggleTheme}

                >

                    {

                        theme === "light"

                            ? "🌙 Switch to Dark"

                            : "☀ Switch to Light"

                    }

                </button>

            </div>

            <div className="setting-card">

                <h3>

                    Notifications

                </h3>

                <label>

                    <input

                        type="checkbox"

                        checked={notifications}

                        onChange={() =>

                            setNotifications(previous => !previous)

                        }

                    />

                    Enable Notifications

                </label>

            </div>

            <div className="setting-card">

                <h3>

                    Email Alerts

                </h3>

                <label>

                    <input

                        type="checkbox"

                        checked={emailAlerts}

                        onChange={() =>

                            setEmailAlerts(previous => !previous)

                        }

                    />

                    Receive Email Alerts

                </label>

            </div>

            <div className="setting-card">

                <h3>

                    Language

                </h3>

                <select

                    value={language}

                    onChange={(event) =>

                        setLanguage(event.target.value)

                    }

                >

                    <option value="English">

                        English

                    </option>

                    <option value="Telugu">

                        Telugu

                    </option>

                    <option value="Hindi">

                        Hindi

                    </option>

                </select>

            </div>

        </div>

    );

}

export default WithAuth(Settings);