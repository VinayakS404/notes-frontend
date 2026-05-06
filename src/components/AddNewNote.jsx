function AddNewNote() {
  return (
    <div className="flex items-center justify-center gap-10 h-screen">
      <div className="">
        <p>heading</p>
        <input type="text" placeholder="enter something" className="border" />
      </div>      <div className="">
        <p>content</p>
        <input type="text" placeholder="enter something" className="border" />
      </div>      <div className="">
        <p>tags</p>
        <input type="text" placeholder="enter something" className="border" />
      </div>
    </div>
  );
}
export default AddNewNote;
