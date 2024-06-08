const Forms = () => {
  return (
    <div>
      <div className="bg-red-500">Forms</div>
      <form>
        <label>
          <h2>choose a date</h2>
        </label>
        <input type="date" min="1970-01-01" />
      </form>
    </div>
  );
};

export default Forms;
