function AddNewNote() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen">
      <div className="flex items-center justify-center gap-10 ">
        <div className="">
          <p>heading</p>
          <input type="text" placeholder="enter something" className="border" />
        </div>
        <div className="">
          <p>content</p>
          <input type="text" placeholder="enter something" className="border" />
        </div>
        <div className="">
          <p>tags</p>
          <input type="text" placeholder="enter something" className="border" />
        </div>
      </div> 
      <button className="bg-black text-white font-medium active:bg-black/80 px-8 py-2 rounded-2xl">Upload</button>
    </div>
  );
}
export default AddNewNote;
