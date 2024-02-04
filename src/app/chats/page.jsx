import { BsArrowLeft } from "react-icons/bs";

const Chats = () => {
  return (
    <section className="bg-white rounded-md small">
      <div className="text-lg font-bold p-3 flex items-center gap-3"><BsArrowLeft className="cursor-pointer"/> Messages</div>
      <section>
        {"abcdefg".split("").map((item) => {
          return (
            <div className="hover:bg-gray-200 cursor-pointer flex items-center gap-3 p-3 border-t ">
              <img
                className="h-12 w-12 rounded-full object-contain"
                src="https://freepngimg.com/thumb/google/66726-customer-account-google-service-button-search-logo.png"
                alt=""
              />
              <div>
                <div className="text-sm">Mohd Belal Naim</div>
                <div className="text-xs mt-1 text-gray-500">
                  This is a message
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Chats;
