import Singup from '@/Modules/Pages/Auth/Singup'


const singin = () => {
  return (
    
    <div className= 'w-screen h-screen flex  flex-col items-center justify-center'>
        {/* <Singup/> */}
        <div className="flex flex-col w-[50%] gap-5 font-bold">

    <h1 className='text-center text-3xl p-2 '>Sing Up</h1>
    <input placeholder='Name' className=' bg-gray-100 shadow-md rounded-full p-5 outline-none border-none' type="text" />
    <input placeholder='Email' className='bg-gray-100 shadow-md rounded-full p-5 outline-none border-none' type="email" />
    <input placeholder='Password' className='bg-gray-100 shadow-md rounded-full p-5 outline-none border-none' type="password" />
    <button className='bg-slate-600 rounded-full p-5 text-white'>SingUp</button>
   
        </div>
   </div>
   
  )
}

export default singin
