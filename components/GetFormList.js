import GetForm from "./GetForm"

const GetFormList = ({surveys, onSubmit}) => {
    //console.log("GET FORM LIST SURVEYS", surveys)
    return (
        <ul>
          {surveys.map(survey => {
            return (
              <li>
                <GetForm
                  question = {survey}
                  onSubmit = {onSubmit}
                />
              </li>
            )
          })}
        </ul>
    )
  }
  
  export default GetFormList;