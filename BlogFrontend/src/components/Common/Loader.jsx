const Loader = ({ width = "full", height = "[200px]", spacing = "" }) => {
  return (
    <div
      className={`
          ${spacing} mx-auto
          w-${width} h-${height}
          bg-gradient-to-r from-[#cee3e7] via-white to-[#cee3e7]
          animate-gradient-move bg-[length:200%_200%] `}
    />
  );
};

export default Loader;
