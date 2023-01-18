const GetFormList = ({surveys, onSubmit}) => {
  
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