import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserView from "./ticket/UserView";
jest.mock("react-router-dom");

test("checcking Add booking button",async()=>{
    render(<UserView />);
    await waitFor(()=>{
        const linkElement = screen.getByTestId("adduserbtn")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Booking id Attribute",async()=>{
    render(<UserView />);
    await waitFor(()=>{
        const linkElement = screen.getByRole("useridbtn")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Depature Attribute",async()=>{
    render(<UserView />);
    await waitFor(()=>{
        const linkElement = screen.getByRole("usernamebtn")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Destination Attribute",async()=>{
    render(<UserView />);
    await waitFor(()=>{
        const linkElement = screen.getByRole("citybtn")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Bus Id Attribute",async()=>{
    render(<UserView />);
    await waitFor(()=>{
        const linkElement = screen.getByRole("phnbtn")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking User Id Attribute",async()=>{
    render(<UserView />);
    await waitFor(()=>{
        const linkElement =screen.getByRole("useridbtn")
        expect(linkElement).toBeInTheDocument();

    })
})
