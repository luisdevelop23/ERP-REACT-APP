import { useState } from "react";

type InventoryMovement = {
  movement_type: string;
  quantity: number;
  reference: string;
  description: string;
  movement_date: string;
  product_id: string; // Producto seleccionado
};

type InventoryMovementResponse = {
  id_inventory_movement: string;
  movement_type: string;
  quantity: number;
  reference: string;
  description: string;
  movement_date: string;
  created_date: string;
};

const Inventory = () => {
  const [form, setForm] = useState<InventoryMovement>({
    movement_type: "Compra", // Default value
    quantity: 0,
    reference: "",
    description: "",
    movement_date: "",
    product_id: "", // Recibe el ID del producto
  });

  const [movements, setMovements] = useState<InventoryMovementResponse[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí deberías enviar el formulario a tu API para registrar el movimiento
    // console.log("Movimiento registrado:", form);

    // Agregar el movimiento al estado (simula la adición de un movimiento en la interfaz)
    setMovements([
      ...movements,
      {
        ...form,
        id_inventory_movement: Math.random().toString(36).substr(2, 9), // Simulación de ID
        created_date: new Date().toISOString(),
      },
    ]);

    // Resetear el formulario
    setForm({
      movement_type: "Compra",
      quantity: 0,
      reference: "",
      description: "",
      movement_date: "",
      product_id: productId,
    });
  };

  return (
    <main className="w-full  p-6 bg-white rounded-xl shadow-lg max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Registrar movimiento de inventario</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Tipo de movimiento */}
          <select
            name="movement_type"
            value={form.movement_type}
            onChange={handleChange}
            className="input-field"
          >
            <option value="Compra">Compra</option>
            <option value="Venta">Venta</option>
            <option value="Ajuste">Ajuste</option>
            <option value="Retiro">Retiro</option>
          </select>

          {/* Cantidad */}
          <input
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="Cantidad"
            type="number"
            className="input-field"
          />

          {/* Referencia */}
          <input
            name="reference"
            value={form.reference}
            onChange={handleChange}
            placeholder="Referencia"
            className="input-field"
          />

          {/* Descripción */}
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Descripción"
            className="input-field w-full"
            rows={3}
          />

          {/* Fecha de movimiento */}
          <input
            name="movement_date"
            value={form.movement_date}
            onChange={handleChange}
            type="date"
            className="input-field"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Registrar movimiento
          </button>
        </div>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">Movimientos recientes</h3>
        <table className="min-w-full mt-4 table-auto">
          <thead className="border-b-2 border-gray-400">
            <tr className="text-xs sm:text-sm font-semibold text-gray-600">
              <th className="px-4 py-3 text-left">Tipo</th>
              <th className="px-4 py-3 text-left">Cantidad</th>
              <th className="px-4 py-3 text-left">Referencia</th>
              <th className="px-4 py-3 text-left">Fecha</th>
              <th className="px-4 py-3 text-left">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {movements.map((movement) => (
              <tr key={movement.id_inventory_movement} className="border-b border-gray-300">
                <td className="px-4 py-3 text-sm">{movement.movement_type}</td>
                <td className="px-4 py-3 text-sm">{movement.quantity}</td>
                <td className="px-4 py-3 text-sm">{movement.reference}</td>
                <td className="px-4 py-3 text-sm">{new Date(movement.movement_date).toLocaleDateString()}</td>
                <td className="px-4 py-3 text-sm">{movement.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Inventory;
