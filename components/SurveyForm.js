const SurveyForm = ({ onSubmit }) => {
    function handleOnSubmit(e) {
      console.log("CALLED")
      const { currentTarget } = e;
  
      const fields = Array.from(currentTarget.elements);
      const data = {};
  
      fields.forEach(field => {
        if ( !field.name ) return;
        data[field.name] = field.value;
      })
  
      if ( typeof onSubmit === 'function' ) {
        onSubmit(data, e)
      }
    }
  
    return (
      <form onSubmit={handleOnSubmit}>
        <textarea name="question"></textarea>
        <textarea name="budget"></textarea>
        <textarea name="cpr"></textarea>
        <button>Create Survey</button>
      </form>
    )
  }
  
  export default SurveyForm;