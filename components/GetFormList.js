const GetFormList = ({surveys, onSubmit}) => {
  
    return (
        <ul className={styles.posts}>
          {surveys.map(survey => {
            return (
              <li key={id}>
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