export default function Loading() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-6 animate-pulse">
        <div className="h-16 w-64 bg-gradient-to-r from-copper-200 to-terracotta-200 rounded-xl mx-auto"></div>
        <div className="h-8 w-full max-w-lg bg-basalt-200 rounded-lg mx-auto"></div>
      </div>
      
      <div className="card h-20 animate-pulse"></div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="card h-40 animate-pulse">
            <div className="h-full p-7 flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-copper-300 to-terracotta-300 rounded-xl"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-6 bg-basalt-300 rounded w-3/4"></div>
                  <div className="h-4 bg-basalt-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t-2 border-basalt-200">
                <div className="h-8 w-24 bg-copper-300 rounded-md"></div>
                <div className="h-5 w-28 bg-basalt-200 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

