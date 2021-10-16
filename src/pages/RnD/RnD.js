import React from 'react'
import "./RnD.css";
import img_rndblue from "./res/rndblue.webp";
import img_rndpink from "./res/rndpink.webp";

function RnD() {
    return (
        <div className="rnd">

            {/**BANNER */}
            <div className="rndBanner">
                <h1>Research &amp; Development</h1>
            </div>

            {/**MID */}
            <div className="rndMid">
                <p className="rndMid_topText">
                    Our long-term research goals have grown and developed since Edammo<br/>began in 2018. Creating new and innovative technology is at the<br/>core of Edammo's goal of transforming data into<br/>powerful marketplace solutions.
                </p>
                <div className="rndMid_papers">
                    <div className="rndMid_col">
                        <div className="rndMid_colContent">
                            <div className="rndMid_gist">
                                <img src={img_rndblue} alt="timeseries"/>
                                <h3>A novel ELM ensemble for time series prediction</h3>
                                <p>This paper presents a novel methodology for time series prediction. It is based on Extreme Learning Machines and an adaptive ensemble techniques. It is tested successfully on the CIF 2016 competition datasets which are composed of 72 time series in total. Among those, 48 time series are artificial with each having 108 training data points and 12 testing points. So for each artificial time series, there are 120 values, which is more than that of the rest 24 real time series.</p>
                            </div>
                            <div className="rndMid_readPaper">Read Paper</div>
                        </div>
                    </div>
                    <div className="rndMid_col">
                        <div className="rndMid_colContent">
                            <div className="rndMid_gist">
                                <img src={img_rndpink} alt="timeseries"/>
                                <h3>ELM-SOM+: A continuous mapping for visualization</h3>
                                <p>This paper presents a novel dimensionality reduction technique based on ELM and SOM: ELM-SOM+. This technique preserves the intrinsic quality of Self-Organizing Map (SOM): it is nonlinear and suitable for big data. It also brings continuity to the projection using two Extreme Learning Machine (ELM) models, the first one to perform the dimensionality reduction and the second one to perform the reconstruction. ELM-SOM+ is tested successfully on nine diverse datasets. Regarding reconstruction error, the new methodology shows considerable improvement over SOM and brings continuity.</p>
                            </div>
                            <div className="rndMid_readPaper">Read Paper</div>
                        </div>
                    </div>
                </div>
            </div>

            {/**BOTTOM */}
            <div className="rndBottom">
                <div className="rndBottom_col">
                    <div className="rndBottom_text">
                        <h3>Feature Bagging and Extreme Learning Machines: Machine Learning with Severe Memory Constraints</h3>
                        <p>With the onset of easy access to supercomputers with high amounts of memory available, machine learning algorithms have continued to increase the resources necessary to perform their data analysis. This paper aims to show development in the other direction, by showing that through the use of a combination of feature bagging and ensembles of Extreme Learning Machines (ELMs) it is possible to leverage machine learning, without loss of accuracy, on devices where Flash memory is very scarce, and Random-access memory (RAM) is even scarcer, such as on embedded systems. This novel strategy is called Feature Bagged Extreme Learning Machines (FB-ELMs).</p>
                    </div>
                </div>
                <div className="rndBottom_col">
                    <div className="rndBottom_video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/knxJybDcX38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="rndBottom_readPaper">Read Paper</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RnD
