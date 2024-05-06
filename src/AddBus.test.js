import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddBus from "./ticket/AddBus";
jest.mock("react-router-dom");


test("checcking Add User Button",async()=>{
    render(<AddBus/>);
    await waitFor(()=>{
        const linkElement = screen.getByRole("addbusbtn")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Departure Attribute",async()=>{
        render(<AddBus/>);
        await waitFor(()=>{
            const linkElement = screen.getByRole("busnametest")
            expect(linkElement).toBeInTheDocument();
    
        })
    })
    test("checcking Destination Attribute",async()=>{
        render(<AddBus/>);
        await waitFor(()=>{
            const linkElement = screen.getByRole("bustypetest")
            expect(linkElement).toBeInTheDocument();
    
        })
    })
    test("checcking BusId Attribute",async()=>{
        render(<AddBus/>);
        await waitFor(()=>{
            const linkElement = screen.getByRole("seattypetest")
            expect(linkElement).toBeInTheDocument();
    
        })
    })
    
    test("checcking Add Button ",async()=>{
        render(<AddBus/>);
        await waitFor(()=>{
            const linkElement = screen.getByRole("addbtn")
            expect(linkElement).toBeInTheDocument();
    
        })
    })
    test("checcking Cancel Button ",async()=>{
        render(<AddBus/>);
        await waitFor(()=>{
            const linkElement = screen.getByTestId("cancelbtn")
            expect(linkElement).toBeInTheDocument();
    
        })
    })

    