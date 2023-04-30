import React from 'react';
import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <div style={{maxWidth : 'fit-content'}}>
            <h4>Projects and features:</h4>
            <ul style={{marginBottom:'12px'}}>
                <li>pyXRO: X-Ray Optics - <Link to="">[open]</Link> <a href="https://github.com/hpmartins/pyxro" target="_blank" rel="noopener noreferrer">[src]</a></li>
                <ul>
                    <li>Calculates photoelectron emission intensities for layered samples in the presence of x-ray optical effects</li>
                    <li>Multilayer sample building and visualization</li>
                    <li>Reflectivity, electric field, and photoemission intensities as a function of incident angle and/or photon energy</li>
                    <li>Based on YXRO - Yang <i>et al.</i> <a href="https://doi.org/10.1063/1.4790171">[doi]</a></li>
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
