# Module 7 Labs

## Lab 1: Bitcoin Rate Component
- Using the following starter code, complete the **BitcoinRates** component to fetch and display the current price of Bitcoin in the selected currency.
- Use a **useEffect** hook with cleanup and appropriate dependencies.
```jsx
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
        </div>
    )
}
```
## Lab 2: Ultilise a custom hook
- Update your **BitcoinRates** component to use a custom hook for extracting the external data synchronization process
- **Extension**: Implement **useReducer** to handle the internal
state management of your custom hook

## Lab 3: Extedn Emoji Component
- Modify the **Emoji** component from _Module 6 Lab 3_ and create a context for storing the current emoji/mood
- Display the current emoji from the **BitcoinRates** component, and make sure it updates when clicking the ‘Change Mood’ button

## Lab 4: Bitcoin Rates App
- Create an app with 3 different pages: Home, Login and Bitcoin Rates
- Use existing components to add content to each page
- Include a navbar to navigate between pages
Used React Router for the routing and navigation between pages.

## Lab 5: Update Bitcoin Rates App with MUI
- Update your solution for _Lab 4_ to use MUI components for styling
- Use the **AppBar** for navigation and MUI form components
for any form inputs
- Extension: Include the **PostList** component and style using MUI cards and grids
- Extension: Try to create a custom theme using **createTheme**
