
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Slices/counterSlice'

const Parent = () => {
  const data = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div className="flex gap-10 justify-center items-center min-h-screen">
            <button onClick={() => dispatch(decrement())} className="button w-[250px] p-4 bg-[#42a3e0] rounded-2xl font-bold text-[#e0dcd7] text-6xl 
            text-center transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110
           hover:bg-indigo-600 hover:text-[#FF8F00] duration-300 cursor-pointer">Remove</button>
           <h1 className="text-6xl font-extrabold">{data}</h1>
            <button   onClick={() => dispatch(increment())} className="button w-[250px] p-4 bg-[#42a3e0] rounded-2xl font-bold text-[#e0dcd7] text-6xl 
            text-center transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110
           hover:bg-indigo-600 hover:text-[#FF8F00] duration-300 cursor-pointer">Add</button>
       </div>
    </>
  )
}

export default Parent