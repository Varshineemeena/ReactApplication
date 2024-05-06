import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import BusView from "./ticket/BusView";
jest.mock("react-router-dom");

test("checcking Add bus button",async()=>{
    render(<BusView />);
    await waitFor(()=>{
        const linkElement = screen.getByTestId("addbusbtn")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Bus id Attribute",async()=>{
    render(<BusView />);
    await waitFor(()=>{
        const linkElement = screen.getByRole("busidtest")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking BusName Attribute",async()=>{
    render(<BusView />);
    await waitFor(()=>{
        const linkElement = screen.getByRole("busnametest")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Bus Type Attribute",async()=>{
    render(<BusView />);
    await waitFor(()=>{
        const linkElement = screen.getByRole("bustypetest")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Bus Seat Type Attribute",async()=>{
    render(<BusView />);
    await waitFor(()=>{
        const linkElement = screen.getByRole("seattypetest")
        expect(linkElement).toBeInTheDocument();

    })
})
