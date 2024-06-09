import { SquareChevronRight } from 'lucide-react';

const Forms = ({ setSearchInputs, searchInputs }) => {
  let obj;


  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchInputs(obj)
  }

  const handleDateInput = (e) => {
    const date = e.target.valueAsDate;
    obj = {
      year: date.getUTCFullYear(),
      month: date.getUTCMonth() + 1,
      day: date.getUTCDate(),
    };
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  return (
    <div className="text-white noto-sans-sogdian-regular pt-2">
      <form className="flex flex-row" onSubmit={handleSubmit}>
        <label className='pr-1'>
          <h2>choose a date</h2>
        </label>
        <input className="text-black" type="date" min="1970-01-01" max={getCurrentDate()} onChange={handleDateInput} />
        <button><SquareChevronRight /></button>
      </form>
    </div>
  );
};

export default Forms;
