import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrecyinfo'
import { InputBox } from './Components/InputBox'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convetedAmount, setconvetedAmount] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const convert = () => {
    setconvetedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setconvetedAmount(amount)
    setAmount(convetedAmount)
  }

  return (
   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
   style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}>
    
    <div className='w-full '>
      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-slur-sm bg-white/30'>
        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}>
          <div className='w-full mb-1'>
            <InputBox 
             label="from"
             amount={amount}
             currencyOptions={options}
             onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency="usd"
            />
          </div>
          <div className='relative w-full h-0.5'>
            <button 
            onClick={swap}
            className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
            >Swap</button>
          </div>
          <div className='w-full mb-1'>
            <InputBox 
             label="to"
             currencyOptions={options}
             amount={convetedAmount}
             onCurrencyChange={(currency) => setTo(currency)}
             amountDisabled
             selectedCurrency={to}
            />
          </div>
          <button type={submit} className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase} to {to.toUpperCase}</button>
        </form>
      </div>
    </div>

   </div>
  )
}

export default App
