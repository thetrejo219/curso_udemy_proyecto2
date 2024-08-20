import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps={
    order:OrderItem[],
    removeItem:(id:MenuItem['id'])=>void
}
export default function OrderContents({order,removeItem}:OrderContentsProps) {
  return (
    <div className="">
        <h2 className="font-black text-4xl">Consumo</h2>
        <div className="space-y-3 mt-10">
            {order.map(item=>(
                    <div key={item.id} className="flex last-of-type:border-b items-center justify-between border-t py-5 border-gray-200">
                        <div>
                            <p className="text-lg">
                                {item.name}-{formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Cantidad:{item.quantity}-{formatCurrency(item.price*item.quantity)}
                            </p>
                        </div>
                        <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                        onClick={()=>removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
