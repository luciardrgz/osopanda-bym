import { productDetailsButton } from "../consts/styles";

const FabricPrintSelector = ({
  toggleModal,
  productName,
  availableFabricPrints,
}: {
  toggleModal: any;
  productName: string;
  availableFabricPrints: any;
}) => {
  const isMoreThanThreePrints = availableFabricPrints.length > 3 ? true : false;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="flex flex-col justify-center items-center bg-white w-2/3 max-md:w-[90%] max-md:h-full p-8 rounded-md">
        <h2 className="text-xl font-bold mb-4">
          Elegí el estampado para tu {productName}
        </h2>
        <h3 className="text-sm mb-6">Clickealo para ver sus colores</h3>

        <div className="overflow-y-auto max-h-[calc(100vh-250px)]">
          <div
            className={`selector max-md:flex max-md:flex-col grid ${
              isMoreThanThreePrints ? "grid-cols-3" : "grid-cols-2"
            } gap-4 justify-center`}
          >
            {availableFabricPrints.map((print: any, idx: number) => (
              <div key={idx} className="relative">
                <input
                  type="radio"
                  id={`fabricPrint-${idx}`}
                  name="fabricPrint"
                  value={print.fabricPrintSlug}
                  className="hidden"
                />
                <label
                  htmlFor={`fabricPrint-${idx}`}
                  className="img-card block w-full h-full"
                >
                  <img
                    src={print.fabricPrintImg}
                    alt={print.fabricPrintName}
                    title={print.fabricPrintName}
                    className="w-full h-full object-cover rounded-md"
                  />
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10 space-x-4 w-full">
          <button
            onClick={toggleModal}
            className={`${productDetailsButton} p-1 w-1/2 normal-case`}
          >
            Dejar que lo elija el destino ;)
          </button>
          <button
            onClick={toggleModal}
            className={`${productDetailsButton} p-1 w-1/2 normal-case`}
          >
            ¡Listo!
          </button>
        </div>
      </div>
    </div>
  );
};

export default FabricPrintSelector;
