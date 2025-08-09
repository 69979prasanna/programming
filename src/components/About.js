import React from 'react'

export default function About() {
  return (
    <>
    <div className="container my-3" >
    <div className="accordion mx-2" id="accordionExample">
      <h1>About Us</h1>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body ">
       Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or minutes read.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Textutils is a free character count tool that provides instant character count and word count stastics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser compatible 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       This word counter software works in any browser such as chrome, blog, books, pdf document, essays, etc.
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
