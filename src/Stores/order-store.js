import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useOrderStore = create(
  persist(
    (set, get) => ({
      // tableOrder:{1:[{},{},{}],2:[{},{},{}]}
      tableOrder: {},
      netOrder: {},
      currentTable: 1,
      setCurrentTable: (input) => set({ currentTable: input }),
      resetCurrTableOrder : () => set((state)=>({...state, tableOrder : {...state.tableOrder,[state.currentTable]:[] }, netOrder : {...state.netOrder,[state.currentTable]:0}})),
      addTableOrder: (order) => {
        set((state) => {
          const newTableOrder = { ...state.tableOrder };

          // Ensure the current table exists in tableOrder
          if (!newTableOrder[state.currentTable]) {
            newTableOrder[state.currentTable] = [];
          }

          // Check if duplicate order
          const isOrderDuplicate = newTableOrder[state.currentTable].find(item=>item.recipeId === order.recipeId)
          // Add amount key to input
          console.log("order duplicate", isOrderDuplicate)
          let newOrder
          if(!isOrderDuplicate){
           newOrder = { ...order, amount: 1 };
           newTableOrder[state.currentTable].push(newOrder);

          }
          else {
            newOrder = { ...isOrderDuplicate, amount: isOrderDuplicate.amount + 1 };
            const index = newTableOrder[state.currentTable].indexOf(isOrderDuplicate)
            newTableOrder[state.currentTable][index] = newOrder
          }
          
          return {
            ...state,
            tableOrder: newTableOrder,
          };
        });
        set((state) => {
          const newNetOrder = { ...state.netOrder };
          if (!newNetOrder[state.currentTable]) {
            newNetOrder[state.currentTable] = 0;
          }
          newNetOrder[state.currentTable] += order.price;
          return {
            ...state,
            netOrder: newNetOrder,
          };
        });
      },
      removeTableOrder: (inputIndex) => {
        set((state) => {
          const newTableOrder = { ...state.tableOrder };
          const removeOrder = newTableOrder[state.currentTable].filter(
            (el, index) => {
              return index === inputIndex;
            }
          );
          console.log(removeOrder)
          const totalCost = removeOrder[0]["amount"]*removeOrder[0]["price"]
          const newNetOrder = { ...state.netOrder };
          newNetOrder[state.currentTable] -= totalCost;
          return {
            ...state,
            netOrder: newNetOrder,
          };
        });
        set((state) => {
          const newTableOrder = { ...state.tableOrder };
          const remainOrder = newTableOrder[state.currentTable].filter(
            (el, index) => {
              console.log(index !== inputIndex);
              return index !== inputIndex;
            }
          );
          return {
            ...state,
            tableOrder: {
              ...newTableOrder,
              [state.currentTable]: remainOrder,
            },
          };
        });
       
      },
      removeMenu: async (id) => {
        try {
          const resp = await axios.delete(`http://localhost:8000/recipe/${id}`);
          return resp;
        } catch (error) {
          console.log(error);
        }
      },
      toggleHide: async (id) => {
        try {
          const resp = await axios.patch(`http://localhost:8000/recipe/${id}`);
          return resp;
        } catch (error) {
          console.log(error);
        }
      },
    }),
    {
      name: "orders-store",
      storage: createJSONStorage(() => localStorage), // able to keep is session storage instead of local storage
    }
  )
);

export default useOrderStore;
