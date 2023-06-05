import React,{useState} from 'react'

import {Box,Text,Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,} from '@chakra-ui/react';
import Faqs from './faq.json'

export default function Faq({index, setIndex}) {

  const [ques, setQues] = useState();
  const [one, setOne] = useState();
  const [ans, setAns] = useState();
  const [two, setTwo] = useState()

  function Question(e) {
    setOne(e.target.value)
    
  }
  function addQuestion() {
    setQues(one)
  }


  return (
    <>
    <div class="input-group mt-3">
        <input type="text" class="form-control" placeholder="Question" onChange={Question}/>
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addQuestion}>Add</button>
      </div>
      <div class="input-group mt-3">
        <input type="text" class="form-control" placeholder="Answer" onChange={(e) => setTwo(e.target.value)} />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => setAns(two)}>Add</button>
      </div>
    <div className='faqSection'>
      <Accordion allowToggle index={index}>
          {Faqs.map(post => (
            <AccordionItem>
              <AccordionButton
                onClick = {() => setIndex(post.id - 1)}
              >
              <Box flex='1' textAlign='left'>
                <Text fontWeight='semibold'>{ post.id !== 6 ? post.question : ques}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>{ post.id !== 6 ? post.ans : ans}</AccordionPanel>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
    </>
  )
}
