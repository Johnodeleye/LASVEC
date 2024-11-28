const Skeleton = () => {
    return (
        <div className="flex flex-col gap-5 px-14">
          <div className="w-64 h-4 rounded-sm md:w-96 bg-slate-600 animate-pulse"></div>
          <div className="w-16 h-4 rounded-sm bg-slate-600 animate-pulse"></div>
          <div className="w-64 h-4 rounded-sm md:w-96 bg-slate-600 animate-pulse"></div>
          <div className="w-64 h-4 rounded-sm md:w-96 bg-slate-600 animate-pulse"></div>
          <div className="w-64 h-4 rounded-sm md:w-96 bg-slate-600 animate-pulse"></div>
          <div className="w-24 h-4 rounded-sm bg-slate-600 animate-pulse"></div>
        </div>
    )
}

export default Skeleton