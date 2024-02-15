import React from 'react'

function ApplicationManagement() {
  return (
    <div className='h-full min-h-screen ' style={{background:"linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(86,97,100,1) 67%)"}}>
<div className='w-full flex justify-center pt-3'>
  <p className="text-3xl font-thin text-gray-900 dark:text-gray-600">Application Management</p>
</div>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-4">
   <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
   <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
   <tr>
       <th scope="col" className="px-2 py-2 bg-gray-50 dark:bg-gray-800">
           Student Details
       </th>
       <th scope="col" className="px-8 py-4 bg-gray-50 dark:bg-gray-800">
           Course
       </th>
       <th scope="col" className="px-2 py-2 bg-gray-50 dark:bg-gray-800">
           Applied Time
       </th>
      
       <th scope="col" className="px-1 py-2 bg-gray-50 dark:bg-gray-800">
   Reject
</th>
<th scope="col" className="px-1 py-2 bg-gray-50 dark:bg-gray-800">
   Accept
</th>


   </tr>
</thead>
     <tbody>
   <tr className="border-b border-gray-200 dark:border-gray-700">
       <td className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
           Apple MacBook Pro 17"
       </td>
       <td className="px-8 py-6 bg-gray-50 dark:bg-gray-800">
           Silver
       </td>
       <td className="px-2 py-2 bg-gray-50 dark:bg-gray-800">
           Laptop
       </td>
    
       <td className="px-1 py-2 bg-gray-50 dark:bg-gray-800">
       <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">Reject</button>
</td>
<td className="px-1 py-2 bg-gray-50 dark:bg-gray-800">
<button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">Accept</button>
</td>

   </tr>
   <tr className="border-b border-gray-200 dark:border-gray-700">
       <td className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
           Apple MacBook Pro 17"
       </td>
       <td className="px-8 py-6 bg-gray-50 dark:bg-gray-800">
           Silver
       </td>
       <td className="px-2 py-2 bg-gray-50 dark:bg-gray-800">
           Laptop
       </td>
   
       <td className="px-1 py-2 bg-gray-50 dark:bg-gray-800">
       <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">Reject</button>
</td>
<td className="px-1 py-2 bg-gray-50 dark:bg-gray-800">
<button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">Accept</button>
</td>
   </tr>
   <tr className="border-b border-gray-200 dark:border-gray-700">
       <td className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
           Apple MacBook Pro 17"
       </td>
       <td className="px-8 py-6 bg-gray-50 dark:bg-gray-800">
           Silver
       </td>
       <td className="px-2 py-2 bg-gray-50 dark:bg-gray-800">
           Laptop
       </td>
       <td className="px-1 py-2 bg-gray-50 dark:bg-gray-800">
       <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">Reject</button>
</td>
<td className="px-1 py-2 bg-gray-50 dark:bg-gray-800">
<button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">Accept</button>
</td>
   </tr>
</tbody>
   </table>
</div>

   </div>
  )
}

export default ApplicationManagement
