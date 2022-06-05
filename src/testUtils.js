// import { render } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import InventoryContextProvider from "./context/Inventory";

// //https://testing-library.com/docs/react-testing-library/setup/#custom-render
// const AllTheProviders = ({ children }) => {
// 	return (
// 		<InventoryContextProvider>
// 			<MemoryRouter>{children}</MemoryRouter>
// 		</InventoryContextProvider>
// 	);
// };

// const customRender = (ui, options) =>
// 	render(ui, { wrapper: AllTheProviders, ...options });

// // re-export RTL
// export * from "@testing-library/react";

// // override render method
// export { customRender as render };
