const GetForm = ({question, onSubmit }) => {
    function handleOnSubmit(e) {
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
        <p> {question} </p>
        <textarea name="question"></textarea>
        <button>Submit</button>
      </form>
    )
  }
  
  export default GetForm;