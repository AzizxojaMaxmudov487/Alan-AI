import React, { useEffect, useRef, useState } from 'react'
import './Main/faq.css'
import alanBtn from "@alan-ai/alan-sdk-web";
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Main/Header'
import Faq from './Main/Faq'

export default function App() {

  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null)

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: 'f2e77a1918a1674446751c07a7ff91922e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'gotoFaq') {
            setIndex(commandData.faqId - 1)
          }
        }
      });
    }
  }, []);


  return (
    <>
      <Header />
      <div className='alan-btn'></div>
      <ChakraProvider>
          <Faq index={index} setIndex={setIndex}/>
      </ChakraProvider>
    </>
  )
}
