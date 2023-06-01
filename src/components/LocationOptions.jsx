import { useEffect, useState } from "react";

function LocationOptions() {
    const [locations, setLocation] = useState(false);
    useEffect(() => {
        document.querySelector(".dropdown-label").addEventListener("click", () => {
        if(!locations) {
            setLocation(true)
        } else {
            setLocation(false)
        }
        })
        document.querySelectorAll(".top-container h3").forEach((ul) => {
            ul.addEventListener("click", () => {
              ul.classList.toggle("active")
            })
        })
    })
    return (
        <div className={`top-container ${locations ? "active" : ""}`}>
              <div>
                  <h3>Example</h3>
                  <ul>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                  </ul>
              </div>
              <div>
                  <h3>Example</h3>
                  <ul>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                  </ul>
              </div>
              <div>
                  <h3>Example</h3>
                  <ul>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                  </ul>
              </div>
              <div>
                  <h3>Example</h3>
                  <ul>
                    <li>Example</li>
                  </ul>
              </div>
        </div>
    )
}

export default LocationOptions;