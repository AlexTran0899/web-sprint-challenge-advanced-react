import React from "react";
import { render,screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText("Checkout Form")
    expect(header).toBeInTheDocument
    
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const firstName = screen.getByLabelText(/first name:/i)
    userEvent.type(firstName, "Alex")
    const lastName = screen.getByLabelText(/last name:/i)
    userEvent.type(lastName, "Tran")
    const address = screen.getByLabelText(/address:/i)
    userEvent.type(address, "123 street")
    const city = screen.getByLabelText(/city:/i)
    userEvent.type(city, "Tampa")
    const state = screen.getByLabelText(/state:/i)
    userEvent.type(state, "FL")
    const zip = screen.getByLabelText(/zip:/i)
    userEvent.type(zip, "33614")
    const btn = screen.getByRole('button')
    userEvent.click(btn)

    const display = screen.getByTestId('successMessage')
    expect(display)


});
