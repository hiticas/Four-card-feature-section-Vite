import iconSupervisor from "../assets/icons/icon-supervisor.svg"
import iconTeamBuilder from "../assets/icons/icon-team-builder.svg"
import iconKarma from "../assets/icons/icon-karma.svg"
import iconCalculator from "../assets/icons/icon-calculator.svg"

const cardsData = [
  {
    id: 1,
    title: "Supervisor",
    subtitle: "Monitors activity to identify project roadblocks",
    icon: iconSupervisor,
    position: "left",
    color: "cyan",
  },
  {
    id: 2,
    title: "Team Builder",
    subtitle: "Scans our talent network to create the optimal team for your project",
    icon: iconTeamBuilder,
    position: "middle",
    color: "red",
  },
  {
    id: 3,
    title: "Karma",
    subtitle: "Regularly evaluates our talent to ensure quality",
    icon: iconKarma,
    position: "middle",
    color: "orange",
  },
  {
    id: 4,
    title: "Calculator",
    subtitle: "Uses data from past projects to provide better delivery estimates",
    icon: iconCalculator,
    position: "right",
    color: "blue",
  },
]

export default cardsData
