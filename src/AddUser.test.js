import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddUser from "./ticket/AddUser";
jest.mock("react-router-dom");


test("checcking Add User Button",async()=>{
    render(<AddUser/>);
    await waitFor(()=>{
        const linkElement = screen.getByRole("adduserbtn")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Departure Attribute",async()=>{
        render(<AddUser/>);
        await waitFor(()=>{
            const linkElement = screen.getByRole("usernametest")
            expect(linkElement).toBeInTheDocument();
    
        })
    })
    test("checcking Destination Attribute",async()=>{
        render(<AddUser/>);
        await waitFor(()=>{
            const linkElement = screen.getByRole("citytest")
            expect(linkElement).toBeInTheDocument();
    
        })
    })
    test("checcking BusId Attribute",async()=>{
        render(<AddUser/>);
        await waitFor(()=>{
            const linkElement = screen.getByRole("Phonetest")
            expect(linkElement).toBeInTheDocument();
    
        })
    })
    test("checcking UserId Attribute",async()=>{
        render(<AddUser/>);
        await waitFor(()=>{
            const linkElement = screen.getByRole("emailtest")
            expect(linkElement).toBeInTheDocument();
    
        })
    })
    test("checcking Add Button ",async()=>{
        render(<AddUser/>);
        await waitFor(()=>{
            const linkElement = screen.getByRole("addbtn")
            expect(linkElement).toBeInTheDocument();
    
        })
    })
    test("checcking Cancel Button ",async()=>{
        render(<AddUser/>);
        await waitFor(()=>{
            const linkElement = screen.getByTestId("cancelbtn")
            expect(linkElement).toBeInTheDocument();
    
        })
    })

    