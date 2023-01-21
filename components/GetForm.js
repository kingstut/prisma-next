const GetForm = ({question, onSubmit} ) => {
    function handleOnSubmit(e) {
      const { currentTarget } = e;
  
      const fields = Array.from(currentTarget.elements);
      const data = {};
  
      fields.forEach(field => {
        if ( !field.name ) return;
        data[field.name] = field.value;
      })
  
      if ( typeof onSubmit === 'function' ) {
        onSubmit({question, data}, e)
      }
    }
    //console.log("GET FORM SURVEYS", question)
    return (
     <form onSubmit={handleOnSubmit}>
        <p> {question.question} </p>
        <textarea name="answer"></textarea>
        <button>Submit</button>
      </form>
    )
  }
  
export default GetForm;

