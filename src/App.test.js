// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import App from "./App";
// import InventoryContextProvider from "./context/Inventory";

// describe("site navigation via navbar", () => {
// 	test("to keyboard catalogue and then to homepage", () => {
// 		render(
// 			<InventoryContextProvider>
// 				<App />
// 			</InventoryContextProvider>
// 		);

// 		const keyboards = screen.getByRole("link", { name: /keyboard/i });
// 		userEvent.click(keyboards);

// 		const keyboardHeader = screen.getByRole("heading", { name: /keyboards/i });
// 		expect(keyboardHeader).toBeInTheDocument();

// 		const homepage = screen.getByRole("link", { name: /keyup/i });
// 		userEvent.click(homepage);

// 		const homepageHeader = screen.getByRole("heading", { name: /homepage/i });
// 		expect(homepageHeader).toBeInTheDocument();
// 	});

// 	test("to switches catalogue and then keyboard catalogue", () => {
// 		render(
// 			<InventoryContextProvider>
// 				<App />
// 			</InventoryContextProvider>
// 		);

// 		const switches = screen.getByRole("link", { name: /switches/i });
// 		userEvent.click(switches);

// 		const switchesHeader = screen.getByRole("heading", { name: /switches/i });
// 		expect(switchesHeader).toBeInTheDocument();

// 		const keyboards = screen.getByRole("link", { name: /keyboard/i });
// 		userEvent.click(keyboards);

// 		const keyboardHeader = screen.getByRole("heading", { name: /keyboards/i });
// 		expect(keyboardHeader).toBeInTheDocument();
// 	});

// 	test("to accessories catalogue and then to switches", () => {
// 		render(
// 			<InventoryContextProvider>
// 				<App />
// 			</InventoryContextProvider>
// 		);

// 		const accessories = screen.getByRole("link", { name: /accessories/i });
// 		userEvent.click(accessories);

// 		const accessoriesHeader = screen.getByRole("heading", {
// 			name: /accessories/i,
// 		});
// 		expect(accessoriesHeader).toBeInTheDocument();

// 		const switches = screen.getByRole("link", { name: /switches/i });
// 		userEvent.click(switches);

// 		const switchesHeader = screen.getByRole("heading", { name: /switches/i });
// 		expect(switchesHeader).toBeInTheDocument();
// 	});
// });
