import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
 			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
 					<span className='label-text text-red-100'>Male</span>
 					<input type='checkbox' className='checkbox border-stone-400' />
 				</label>
 			</div>
 			<div className='form-control'>
 				<label className={`label gap-2 cursor-pointer`}>
 					<span className='label-text text-red-100'>Female</span>
 					<input type='checkbox' className='checkbox border-stone-400' />
 				</label>
 			</div>
 		</div>
  )
}

export default GenderCheckbox