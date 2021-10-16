import React from 'react'
import ServicesSubTemplate from './ServicesSubTemplate'

function ServicesPredictiveModeling() {
    function cardify(h3, p) {
        return <>
            <h3>{h3}</h3>
            <p>{p}</p>
        </>
    }

    return (
        <ServicesSubTemplate
            bannerh1="Predictive Modeling"
            bannerp="AI and machine learning can be used to analyze and generate critical business insights."
            card1={cardify("Manufacturing", "When will current machinery malfunction?")}
            card2={cardify("Recycling", "How many plastic bottles are on this conveyor?")}
            card3={cardify("Travel", "When are travel disruptions most likely?")}
            card4={cardify("Utilities", "When is power failure on the grid most likely to occur?")}
            card5={cardify("Fraud", "What percentage of e-commerce transactions likely to be fraudulent?")}
            card6={cardify("Healthcare", "What is the probability of patient drop-off during clinical trials?")}
            card7={cardify("Aviation", "When and where are passenger peaks most likely to occur?")}
            card8={cardify("Human Resources", "How can we automate initial candidate selection?")}
            bottomh2={"What is the value of Edammo-Driven Predictive Analytics?"}
            bottomp1={"A key function to AI enablement is predictive analytics. The base goal of AI application is to drive actionable insights for enhanced operational performance. Most importantly, predictive analytics enables technology by determining critical machinery failures, operational disruptions, revenue losses, and capture new opportunities."}
            bottomp2={"Transform, drive and accelerate a digital transformation for your business  with Edammo enabled-AI."}
        />
    )
}

export default ServicesPredictiveModeling