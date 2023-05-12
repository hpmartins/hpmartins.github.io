import React from 'react';
import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <div style={{maxWidth : 'fit-content'}}>
            <h4>Python</h4>
            <ul style={{marginBottom:'12px'}}>
                <li>pyXRO: X-Ray Optics - <Link to="">[open]</Link> <a href="https://github.com/hpmartins/pyxro" target="_blank" rel="noopener noreferrer">[src]</a></li>
                <ul>
                    <li>Multilayer sample building and visualization</li>
                    <li>Calculation of reflectivity, electric field and photoelectron emission intensities</li>
                    <li>Output as function of incident angle or photon energy</li>
                    <li>Includes total reflection at grazing incidence at core-level resonance effects</li>
                    <li>Built for analysis of standing-waves produced by reflection from synthetic multilayers</li>
                    <li>Based on YXRO - Yang <i>et al.</i> <a href="https://doi.org/10.1063/1.4790171">[doi]</a></li>
                    <li>SOON: Optimize sample parameters against experimental data</li>
                </ul>
                <li style={{marginTop:'12px'}}>pyDTD: Dynamical Theory of Diffraction - <Link to="">[open]</Link> <a href="https://github.com/hpmartins/pydtd" target="_blank" rel="noopener noreferrer">[src]</a></li>
                <ul>
                    <li>Same as pyXRO, but for single-crystals,</li>
                    <li>Easy input: CIF files</li>
                </ul>
            </ul>

            <h4>Soon (kind of todo list):</h4>
            <ul>
                <li>Convert their Dash interface to React</li>
                <li>Merge their apps into a separate main app</li>
                <li>Optimizer!</li>
            </ul>
        </div>
    )
};
