const grid2 = ({ src, height }) => {
  return (
    <div
      className={`relative w-[25vw] ${height} bg-[#A01326] p-2 rounded-2xl overflow-hidden`}
    >
      <div
        className="w-full h-full bg-center bg-cover rounded-2xl"
        style={{
          backgroundImage: `url('${src}')`,
        }}
      ></div>
    </div>
  );
};
export default grid2;
