import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingView from "./ticket/BookingView";
jest.mock("react-router-dom");

test("checcking Add booking button",async()=>{
    render(<BookingView />);
    await waitFor(()=>{
        const linkElement = screen.getByTestId("Addbookingbtn")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Booking id Attribute",async()=>{
    render(<BookingView />);
    await waitFor(()=>{
        const linkElement = screen.getByRole("bookingidtest")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Depature Attribute",async()=>{
    render(<BookingView />);
    await waitFor(()=>{
        const linkElement = screen.getByRole("departuretest")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Destination Attribute",async()=>{
    render(<BookingView />);
    await waitFor(()=>{
        const linkElement = screen.getByRole("destinationtest")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Bus Id Attribute",async()=>{
    render(<BookingView />);
    await waitFor(()=>{
        const linkElement = screen.getByRole("busidtest")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking User Id Attribute",async()=>{
    render(<BookingView />);
    await waitFor(()=>{
        const linkElement = screen.getByRole("useridtest")
        expect(linkElement).toBeInTheDocument();

    })
})
