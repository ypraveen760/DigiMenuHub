const { render, screen } = require("@testing-library/react");
import ResturantCard from "../RestaurantCard";
import MOCK_DATA from "../Mocks/ResCardMock.json";
import "@testing-library/jest-dom";

it("Should render ResturantCard component with prop data", () => {
  render(<ResturantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});
