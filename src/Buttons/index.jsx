import { SectionInfo } from '../ButtonItems';
import calculatorIcon from '../images/icon-calculator.svg'
import karmaIcon from '../images/icon-karma.svg'
import supertvisorIcon from '../images/icon-supervisor.svg'
import teamBuildingIcon from '../images/icon-team-builder.svg'

export const Supervisor = () => {
    const h1 = "Supervisor"
    const p = "Monitors activity to identify project roadblocks"
    const icon = calculatorIcon

    return (
        <SectionInfo
            value={h1}
            value2={p}
            img={icon}
        />
    )
}

export const TeamBuilder = () => {
    const h1 = "Team Builder"
    const p = "Scans our talent network to create the optimal team for your project"
    const icon = teamBuildingIcon

    return (
        <SectionInfo
            value={h1}
            value2={p}
            img={icon}
        />
    )
}

export const Karma = () => {
    const h1 = "Karma"
    const p = "Regularly evaluates our talent to ensure quality"
    const icon = karmaIcon

    return (
        <SectionInfo
            value={h1}
            value2={p}
            img={icon}
        />
    )
}

export const Calculator = () => {
    const h1 = "Calculator"
    const p = "Uses data from past projects to provide better delivery estimates"
    const icon = supertvisorIcon

    return (
        <SectionInfo
            value={h1}
            value2={p}
            img={icon}
        />
    )
}
