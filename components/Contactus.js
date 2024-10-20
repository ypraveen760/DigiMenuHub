const ContactUS = () => {
  return (
    <div className="font-bold text-xl  m-5 ">
      <h1>Contact US Page </h1>
      <form className="bg-orange-100 w-[310px] mx-auto my-10 inline-block border border-black rounded-md ">
        <input
          type="text"
          className="border m-4 border-black rounded-md "
          placeholder=" Name"
        ></input>
        <input
          type="text"
          className="border m-4 border-black rounded-md"
          placeholder=" Email ID"
        ></input>
        <input
          type="text"
          className="border m-4 border-black rounded-md"
          placeholder=" Message"
        ></input>
        <button
          className="bg-orange-400 text-cyan-50 px-3 mx-4 mb-4 border border-black rounded-md hover:text-black"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactUS;
