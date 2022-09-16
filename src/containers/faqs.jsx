import  { Accordion, OptForm }  from "../components";


import faqsData from "../fixtures/faqs.json"

function FAQsContainer(){
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map(item => {
        const {id, header, body} = item
        return (
          <Accordion.Item key={id}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>{body}</Accordion.Body>
          </Accordion.Item>
        )
      })}      
      <OptForm>
        <OptForm.Input placeholder="Email address"/>
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Text>Ready to watch? Enter you email to create or restart your membership.</OptForm.Text>
      </OptForm>
    </Accordion>
  )
}

export default FAQsContainer