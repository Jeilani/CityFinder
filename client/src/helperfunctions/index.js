import ApartmentIcon from "../images/ApartmentIcon.png"
import AttractionIcon from "../images/AttractionsIcon.png"
import OutdoorsIcon from "../images/OutdoorsIcon.png"
import ParkIcon from "../images/ParkIcon.svg"
import ClubIcon from "../images/ClubIcon.png"

export const generateId = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 15);
  }

export const determineWhichIcon = string => {
  switch (string) {
    case "Apartment":
      return ApartmentIcon
    case "Tourist Attractions":
      return AttractionIcon
    case "Outdoor":
      return OutdoorsIcon
    case "Parks":
      return ParkIcon
    case "Nightlife":
      return ClubIcon
    default:
      return null
  }
}

export const convertLng = num => {
  if (num > 180){
    let newNum = num - 180
    return -180 + newNum
  } else return num
}