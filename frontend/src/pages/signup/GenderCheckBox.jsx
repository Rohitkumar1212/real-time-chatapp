import { useState } from "react";
const GenderCheckbox = () => {
    const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);

  const handleMaleChange = () => {
    setMaleChecked(!maleChecked);
    setFemaleChecked(false);
  };

  const handleFemaleChange = () => {
    setFemaleChecked(!femaleChecked);
    setMaleChecked(false);
  };
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Male</span>
					<input type='checkbox' className='checkbox border-slate-900' checked={maleChecked}
            onChange={handleMaleChange}/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Female</span>
					<input type='checkbox' className='checkbox border-slate-900' checked={femaleChecked}
            onChange={handleFemaleChange} />
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;