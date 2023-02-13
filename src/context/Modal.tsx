import { createContext, FC, useState } from "react";

interface ModalContextProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  setIsOpen: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ModalContextProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
