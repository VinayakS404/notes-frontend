function Note() {
  return (
    <div className="w-screen h-screen bg-amber-50">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p>heading</p>
          <div className="flex">
          <p>00/00/000</p>
          <button className="w-10 h-10 bg-black text-white">edit</button></div>
        </div>
        <div>desc</div>
      </div>
    </div>
  );
}
export default Note;
