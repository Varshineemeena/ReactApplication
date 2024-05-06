import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddBooking from "./ticket/AddBooking";
jest.mock("react-router-dom");


test("checcking Add Booking Button", async () => {
    render(<AddBooking />);
    await waitFor(() => {
        const linkElement = screen.getByRole("bookingbtn")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Departure Attribute", async () => {
    render(<AddBooking />);
    await waitFor(() => {
        const linkElement = screen.getByRole("depttest")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Destination Attribute", async () => {
    render(<AddBooking />);
    await waitFor(() => {
        const linkElement = screen.getByRole("destinationtest")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking BusId Attribute", async () => {
    render(<AddBooking />);
    await waitFor(() => {
        const linkElement = screen.getByRole("busidtest")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking UserId Attribute", async () => {
    render(<AddBooking />);
    await waitFor(() => {
        const linkElement = screen.getByRole("useridtest")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Add Button ", async () => {
    render(<AddBooking />);
    await waitFor(() => {
        const linkElement = screen.getByTestId("addbtn")
        expect(linkElement).toBeInTheDocument();

    })
})
test("checcking Cancel Button ", async () => {
    render(<AddBooking />);
    await waitFor(() => {
        const linkElement = screen.getByTestId("cancelbtn")
        expect(linkElement).toBeInTheDocument();

    })
})

