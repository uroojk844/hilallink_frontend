const AddMail = () => {
  return (
    <div className="fixed inset-0 z-50 glass grid place-items-center">
      <div className="animate__animated animate__bounceIn p-4 bg-white rounded-md dark:bg-[hsl(200,6%,10%)] w-[min(400px,98%)]">
        <div className="text-lg font-bold mb-2">Add your email</div>
        <div className="text-xs">
          We will connect this email address to your HilalLink account to ensure
          easy recovery of your account in case of a password or phone number
          loss
        </div>
        <input
          type="text"
          className="dark:bg-[hsl(200,6%,10%)] border w-full py-2 px-3 rounded-md mt-3 text-sm"
          placeholder="Your email address here"
        />
        <button className="w-full bg-black text-xm py-2 rounded-md mt-3 text-sm">
          Conitnue
        </button>
        <div className="text-sm text-center font-bold mt-4">
          I&apos;ll do this later
        </div>
      </div>
    </div>
  );
}

export default AddMail