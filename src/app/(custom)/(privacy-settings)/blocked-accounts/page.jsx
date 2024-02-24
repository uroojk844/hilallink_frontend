import React from 'react'

const BlockedAccounts = () => {
  return (
    <div className="small bg-white sm:rounded-md h-[calc(100dvh-64px)] overflow-scroll">
      <div className="font-bold border-b text-lg p-3">Blocked accounts</div>
      {"abcdefghijklmnopq".split("").map((item, index) => {
        return (
          <div className="p-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img src="/avtar.jpg" className="h-10 w-10 rounded-full" alt="" />
              <div>
                <div className="text-sm">Mohd Belal Naim</div>
                <div className="text-xs text-gray-500">@belalnaim9</div>
              </div>
            </div>

            <button className="bg-black text-white px-3 py-1 text-sm rounded-full">
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default BlockedAccounts