const Loadingpage = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-50 flex items-center justify-center bg-black/50 bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-8 shadow-2xl flex flex-col items-center justify-center max-w-sm mx-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-blue-500 mb-4"></div>
        <h2 className="text-center text-gray-800 text-xl font-semibold mb-2">
          Cargando...
        </h2>
        <p className="text-center text-gray-600 text-sm">
          Esto puede tardar un momento.
        </p>
      </div>
    </div>
  );
};

export default Loadingpage;
