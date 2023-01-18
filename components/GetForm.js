const GetForm = ({survey, onSubmit }) => {
    function handleOnSubmit(e) {
      const { currentTarget } = e;
  
      const fields = Array.from(currentTarget.elements);
      const data = {};
  
      fields.forEach(field => {
        if ( !field.name ) return;
        data[field.name] = field.value;
      })
  
      if ( typeof onSubmit === 'function' ) {
        onSubmit({survey, data}, e)
      }
    }
  
    return (
     <form onSubmit={handleOnSubmit}>
        <p> {survey.question} </p>
        <textarea name="question"></textarea>
        <button>Submit</button>
      </form>
    )
  }
  
export default GetForm;

