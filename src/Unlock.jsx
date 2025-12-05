import logIn from "./assets/images/logIn.png";

function Unlock() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-row justify-between items-center px-36 w-full">
        <div className="w-[442px] h-[433px] flex justify-center items-center">
          <img src={logIn} alt="" />
        </div>
        <div className="w-[661px] flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-[36px] font-semibold text-[#4D4D4D]">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="text-[#717171] text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
          </div>
          <button className="px-8 py-3.5 bg-[#4CAF4F] w-[151px] text-white font-medium rounded-sm">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}

export default Unlock;
