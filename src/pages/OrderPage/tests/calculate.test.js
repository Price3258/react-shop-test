import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Type from "../Type"

test('update total price when products change', async ()=> {
    render(<Type orderType="products" />);
    const productsTotal = screen.getByText('상품 총 가격:',{ exact:false });
    expect(productsTotal).toHaveTextContent("0");

    // add 1 America Product
    const americaInput = await screen.findByRoll("spinbutton", {
    name:"America"
    });
    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");
    expect(productsTotal).toHaveTextContent("1000");
})