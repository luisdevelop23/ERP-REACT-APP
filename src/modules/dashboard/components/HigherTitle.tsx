import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  loc: {
    tittle: string;
    locs: Array<{ name: string }>;
  };
}

const HigherTitle: React.FC<Props> = ({ loc }) => {
  return (
    <div className="pb-2">
      <h1 className="text-2xl text-gray-800 font-bold py-5">{loc.tittle}</h1>
      <div className="w-full flex items-center text-sm py-2 pl-1">
        {loc.locs.map((loc, index) => (
          <>
            <div className="flex items-center">
              <Icon
                icon={
                  loc.name == "Home" || loc.name == "Inicio" ? "iconamoon:home" : "mingcute:right-fill"
                }
                className="pt-1 text-gray-600 h-5 w-5 "
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-600">{loc.name}</h3>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default HigherTitle;
