//create component loading 
export default function Loading() {
    // loop for get 8 card elements
     let elements = [];
     for (let i = 0; i < 4; i++) {
         elements.push(<div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                             <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                 
                             </div>
                             
                             <div className="flex items-center mt-4">
                                 <div>
                                     <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                     <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mt-4"></div>
                                 </div>
                             </div>
                             <span className="sr-only">Loading...</span>
                     </div>)
     }
     return (   
           <>{elements}</>   
     )
 }