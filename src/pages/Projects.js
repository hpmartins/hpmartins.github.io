import React from 'react';
import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <div style={{maxWidth : 'fit-content'}}>
            <h4>Projects and features:</h4>

            <ul>
                <li>pyXRO: X-Ray Optics - <Link to="">[go to]</Link> <Link to="https://github.com/hpmartins/pyxro">[repository]</Link></li>
                <ul>
                    <li>Calculates photoelectron emission intensities for layered samples in the presence of x-ray optical effects</li>
                    <li>Multilayer sample building and visualization</li>
                    <li>Reflectivity, electric field, and photoemission intensities as a function of incident angle and/or photon energy</li>
                    <li>Based on YXRO - Yang <i>et al.</i> <a href="https://doi.org/10.1063/1.4790171">[doi]</a></li>
                </ul>
                <li style={{marginTop:'12px'}}>pyDTD: Dynamical Theory of Diffraction - <Link to="">[go to]</Link> <Link to="https://github.com/hpmartins/pydtd">[repository]</Link></li>
                <ul>
                    <li>Same as pyXRO, but for single-crystals,</li>
                    <li>Easy input: CIF files</li>
                </ul>
            </ul>
        </div>
    )
};
