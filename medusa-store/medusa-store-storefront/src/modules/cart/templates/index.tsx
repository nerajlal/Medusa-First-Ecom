import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"
import { StoreHeader } from "@modules/raleys/components/StoreHeader"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  return (
    <div className="raleys-font">
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-6" data-testid="cart-container">
          <h1 className="text-4xl font-black text-gray-900 mb-10 tracking-tight">Your Grocery Bag</h1>
          
          {cart?.items?.length ? (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
              <div className="flex flex-col gap-y-10">
                {!customer && (
                  <div className="bg-[#e8f5e9]/50 p-6 rounded-2xl border border-[#e8f5e9]">
                    <SignInPrompt />
                  </div>
                )}
                <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm">
                   <ItemsTemplate cart={cart} />
                </div>
              </div>
              <div className="relative">
                <div className="flex flex-col gap-y-8 sticky top-28">
                  {cart && cart.region && (
                    <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                       <Summary cart={cart as any} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-[2rem] p-16 text-center border border-dashed border-gray-200">
              <EmptyCartMessage />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default CartTemplate
