import { createContext, useContext, useState, useCallback } from "react";

const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCheckout = useCallback(() => {
    setIsCheckoutOpen(true);
  }, []);

  const closeCheckout = useCallback(() => {
    setIsCheckoutOpen(false);
  }, []);

  return (
    <UIContext.Provider
      value={{
        isCheckoutOpen,
        openCheckout,
        closeCheckout,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const ctx = useContext(UIContext);
  if (!ctx) {
    throw new Error("useUI must be used inside UIProvider");
  }
  return ctx;
};
